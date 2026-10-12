/**
 * Reusable Number-System Conversion Engine
 * Supports Decimal (10), Binary (2), Octal (8), and Hexadecimal (16).
 * Uses BigInt for arbitrary-precision integers without JavaScript Number float precision loss.
 */

export type NumberBase = 2 | 8 | 10 | 16;

export interface BaseOption {
  value: NumberBase;
  label: string;
  name: string;
  prefix: string;
  patternDescription: string;
  allowedCharsDescription: string;
}

export const BASE_OPTIONS: BaseOption[] = [
  {
    value: 2,
    label: "BIN",
    name: "Binary (Base 2)",
    prefix: "0b",
    patternDescription: "Digits 0 and 1 only",
    allowedCharsDescription: "0-1",
  },
  {
    value: 8,
    label: "OCT",
    name: "Octal (Base 8)",
    prefix: "0o",
    patternDescription: "Digits 0 through 7",
    allowedCharsDescription: "0-7",
  },
  {
    value: 10,
    label: "DEC",
    name: "Decimal (Base 10)",
    prefix: "",
    patternDescription: "Digits 0 through 9",
    allowedCharsDescription: "0-9",
  },
  {
    value: 16,
    label: "HEX",
    name: "Hexadecimal (Base 16)",
    prefix: "0x",
    patternDescription: "Digits 0-9 and letters A-F (case-insensitive)",
    allowedCharsDescription: "0-9, A-F",
  },
];

export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
  cleanedValue: string;
  isNegative: boolean;
}

export interface ConversionResult {
  success: boolean;
  fromBase: NumberBase;
  toBase: NumberBase;
  inputValue: string;
  outputValue: string;
  formattedOutput: string;
  bigIntValue?: bigint;
  errorMessage?: string;
  bitLength?: number;
  byteGroups?: string;
  decimalEquivalent?: string;
}

/**
 * Validates whether the given raw string is legal for the specified base.
 * Ignores optional leading signs (+/-) and standard base prefixes (0b, 0o, 0x).
 * Allows space separators between groups for user convenience.
 */
export function validateInput(rawInput: string, base: NumberBase): ValidationResult {
  const trimmed = rawInput.trim();

  if (trimmed === "") {
    return {
      isValid: true,
      cleanedValue: "",
      isNegative: false,
    };
  }

  // Detect sign
  let sign = "";
  let body = trimmed;
  if (body.startsWith("-")) {
    sign = "-";
    body = body.slice(1).trim();
  } else if (body.startsWith("+")) {
    body = body.slice(1).trim();
  }

  // Remove common prefix if user typed it
  if (base === 2 && (body.startsWith("0b") || body.startsWith("0B"))) {
    body = body.slice(2);
  } else if (base === 8 && (body.startsWith("0o") || body.startsWith("0O"))) {
    body = body.slice(2);
  } else if (base === 16 && (body.startsWith("0x") || body.startsWith("0X"))) {
    body = body.slice(2);
  }

  // Remove internal spaces/underscores for parsing
  const cleanBody = body.replace(/[\s_]/g, "");

  if (cleanBody === "") {
    return {
      isValid: false,
      errorMessage: `Value is missing after prefix/sign.`,
      cleanedValue: "",
      isNegative: sign === "-",
    };
  }

  // Check character legality per base
  const charRegex: Record<NumberBase, RegExp> = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^[0-9]+$/,
    16: /^[0-9a-fA-F]+$/,
  };

  const regex = charRegex[base];
  if (!regex.test(cleanBody)) {
    // Pinpoint the first invalid character
    let invalidChar = "";
    for (const char of cleanBody) {
      if (!regex.test(char)) {
        invalidChar = char;
        break;
      }
    }
    const option = BASE_OPTIONS.find((b) => b.value === base);
    return {
      isValid: false,
      errorMessage: `Invalid character '${invalidChar}' for ${option?.name || `base ${base}`}. Allowed: ${option?.allowedCharsDescription}`,
      cleanedValue: cleanBody,
      isNegative: sign === "-",
    };
  }

  return {
    isValid: true,
    cleanedValue: cleanBody,
    isNegative: sign === "-",
  };
}

/**
 * Parses cleaned input into a BigInt safely.
 */
export function parseToBigInt(cleanBody: string, base: NumberBase): bigint {
  if (cleanBody === "" || cleanBody === "0") {
    return BigInt(0);
  }

  // Fast-path prefixes for BigInt native parsing
  if (base === 10) {
    return BigInt(cleanBody);
  }
  if (base === 16) {
    return BigInt(`0x${cleanBody}`);
  }
  if (base === 2) {
    return BigInt(`0b${cleanBody}`);
  }
  if (base === 8) {
    return BigInt(`0o${cleanBody}`);
  }

  // Fallback radix iteration
  let result = BigInt(0);
  const baseBig = BigInt(base);
  for (let i = 0; i < cleanBody.length; i++) {
    const char = cleanBody[i].toLowerCase();
    const digit = "0123456789abcdef".indexOf(char);
    result = result * baseBig + BigInt(digit);
  }
  return result;
}

/**
 * Formats output with optional grouping (e.g. 4-bit nibbles for binary, 2-hex-digit bytes).
 */
export function formatWithGrouping(value: string, base: NumberBase): string {
  if (!value || value === "0") return value;

  const isNeg = value.startsWith("-");
  const core = isNeg ? value.slice(1) : value;

  let grouped = core;
  if (base === 2) {
    // Group by 4 bits from right to left
    const chunks: string[] = [];
    for (let i = core.length; i > 0; i -= 4) {
      chunks.unshift(core.slice(Math.max(0, i - 4), i));
    }
    grouped = chunks.join(" ");
  } else if (base === 16) {
    // Group by 2 or 4 chars
    const chunks: string[] = [];
    for (let i = core.length; i > 0; i -= 4) {
      chunks.unshift(core.slice(Math.max(0, i - 4), i));
    }
    grouped = chunks.join(" ");
  } else if (base === 10 && core.length > 3) {
    // Group thousands
    const chunks: string[] = [];
    for (let i = core.length; i > 0; i -= 3) {
      chunks.unshift(core.slice(Math.max(0, i - 3), i));
    }
    grouped = chunks.join(",");
  }

  return isNeg ? `-${grouped}` : grouped;
}

/**
 * Primary conversion function.
 */
export function convertNumber(
  rawInput: string,
  fromBase: NumberBase,
  toBase: NumberBase
): ConversionResult {
  const trimmed = rawInput.trim();

  if (trimmed === "") {
    return {
      success: true,
      fromBase,
      toBase,
      inputValue: "",
      outputValue: "",
      formattedOutput: "",
    };
  }

  const validation = validateInput(trimmed, fromBase);
  if (!validation.isValid) {
    return {
      success: false,
      fromBase,
      toBase,
      inputValue: rawInput,
      outputValue: "",
      formattedOutput: "",
      errorMessage: validation.errorMessage,
    };
  }

  try {
    const rawBigInt = parseToBigInt(validation.cleanedValue, fromBase);
    const finalBigInt = validation.isNegative ? -rawBigInt : rawBigInt;

    // Convert to target base
    let convertedStr = "";
    if (finalBigInt === BigInt(0)) {
      convertedStr = "0";
    } else {
      const absValue = validation.isNegative ? -finalBigInt : finalBigInt;
      convertedStr = absValue.toString(toBase);
      if (toBase === 16) {
        convertedStr = convertedStr.toUpperCase();
      }
      if (validation.isNegative) {
        convertedStr = `-${convertedStr}`;
      }
    }

    const formatted = formatWithGrouping(convertedStr, toBase);

    // Architectural analysis
    const absVal = validation.isNegative ? -finalBigInt : finalBigInt;
    const binaryRep = absVal.toString(2);
    const bitLen = absVal === BigInt(0) ? 1 : binaryRep.length;
    const byteGroups = formatWithGrouping(binaryRep, 2);

    return {
      success: true,
      fromBase,
      toBase,
      inputValue: rawInput,
      outputValue: convertedStr,
      formattedOutput: formatted,
      bigIntValue: finalBigInt,
      bitLength: bitLen,
      byteGroups,
      decimalEquivalent: finalBigInt.toString(10),
    };
  } catch (err: unknown) {
    return {
      success: false,
      fromBase,
      toBase,
      inputValue: rawInput,
      outputValue: "",
      formattedOutput: "",
      errorMessage: err instanceof Error ? err.message : "Numerical conversion failed",
    };
  }
}

/**
 * Quick preset examples for learners and students of Computer Organization & Architecture.
 */
export interface ConversionPreset {
  label: string;
  description: string;
  base: NumberBase;
  value: string;
}

export const CONVERSION_PRESETS: ConversionPreset[] = [
  {
    label: "Byte Max (255)",
    description: "Maximum 8-bit unsigned integer (0xFF)",
    base: 10,
    value: "255",
  },
  {
    label: "1 KiB (1024)",
    description: "Binary power of 2 (2^10)",
    base: 10,
    value: "1024",
  },
  {
    label: "Hex 0xCAFE",
    description: "Common debug signature in architecture",
    base: 16,
    value: "CAFE",
  },
  {
    label: "Binary 10101010",
    description: "Alternating bit pattern (0xAA / 170)",
    base: 2,
    value: "10101010",
  },
  {
    label: "Unix Perm (755)",
    description: "Octal permissions in POSIX systems",
    base: 8,
    value: "755",
  },
  {
    label: "32-bit Max",
    description: "2^32 - 1 (4,294,967,295)",
    base: 10,
    value: "4294967295",
  },
];
