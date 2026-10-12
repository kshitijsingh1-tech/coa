/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

function createSimplePdf(title, subtitle, contentLines) {
  const streamLines = [
    'BT',
    '/F1 18 Tf',
    '50 770 Td',
    `(${title}) Tj`,
    '/F1 11 Tf',
    '0 -24 Td',
    `(${subtitle}) Tj`,
    '/F1 10 Tf',
    '0 -24 Td'
  ];
  
  for (const line of contentLines) {
    const escaped = line.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    streamLines.push(`(${escaped}) Tj`);
    streamLines.push('0 -16 Td');
  }
  streamLines.push('ET');

  const streamContent = streamLines.join('\n');
  const streamLength = Buffer.byteLength(streamContent);

  const objects = [];
  objects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj');
  objects.push('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj');
  objects.push('3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj');
  objects.push('4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj');
  objects.push(`5 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream\nendobj`);

  let pdf = '%PDF-1.4\n';
  const offsets = [];
  for (const obj of objects) {
    offsets.push(pdf.length);
    pdf += obj + '\n';
  }

  const startxref = pdf.length;
  pdf += 'xref\n0 6\n0000000000 65535 f \n';
  for (const offset of offsets) {
    pdf += offset.toString().padStart(10, '0') + ' 00000 n \n';
  }
  pdf += `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF`;
  return Buffer.from(pdf, 'utf-8');
}

const resumePdf = createSimplePdf(
  'Kshitij - Computer Science Engineering Student',
  'Roll No: 22CSE042 | B.Tech CSE | Specialization: Computer Architecture & Systems',
  [
    '--------------------------------------------------------------------------------',
    'ACADEMIC PROFILE',
    'Degree: B.Tech in Computer Science and Engineering (2022 - 2026)',
    'Cumulative GPA: 8.8 / 10.0',
    'Key Coursework: Computer Organization and Architecture, Operating Systems, DSA, Networks',
    '--------------------------------------------------------------------------------',
    'TECHNICAL SKILLS',
    'Languages: C, C++, TypeScript, JavaScript, Python, SQL',
    'Systems and Architecture: ALU Design, Radix Number Systems, Memory Hierarchy, RISC-V',
    'Web and Frameworks: Next.js App Router, React 19, Tailwind CSS, Node.js',
    'Developer Tools: Git, GitHub, Linux Shell, Docker, Vercel',
    '--------------------------------------------------------------------------------',
    'NOTABLE PROJECTS',
    '1. Positional Number-System and Radix Transformer (Arbitrary-precision BigInt Engine)',
    '2. 4-Bit ALU Circuit and Microarchitecture Logic Simulator',
    '3. High-Performance Cache and Memory Hierarchy Visualizer',
    '--------------------------------------------------------------------------------',
    'CERTIFICATIONS AND HONORS',
    '- Academic Excellence Distinction in Computer Organization and Architecture',
    '- 2nd Runner Up - University Systems and Infrastructure Hackathon',
    '- Certified Systems Programmer (C and POSIX Systems)'
  ]
);

const assignmentPdf = createSimplePdf(
  'CSE-301: Computer Organization and Architecture (COA)',
  'Assignment 1 - Number Systems, Positional Representations and Arithmetic Logic',
  [
    '--------------------------------------------------------------------------------',
    'STUDENT DETAILS',
    'Student Name: Kshitij',
    'Roll Number: 22CSE042',
    'Semester: VI | Department of Computer Science and Engineering',
    'Submission Status: Complete and Verified',
    '--------------------------------------------------------------------------------',
    'ASSIGNMENT CONTENTS AND PROBLEMS SOLVED',
    'Section A: Positional Radix Transformations (Bases 2, 8, 10, 16)',
    '- Direct algorithmic radix conversion using division-remainder and multiplication-radix.',
    '- Fast octal-hexadecimal mapping via binary intermediate groupings.',
    '--------------------------------------------------------------------------------',
    'Section B: Signed Integer Representations',
    '- Mathematical derivation of 2s complement representation.',
    '- Arithmetic addition/subtraction and detection of overflow via Carry-In XOR Carry-Out.',
    '--------------------------------------------------------------------------------',
    'Section C: IEEE-754 Floating-Point Standard',
    '- Analysis of 32-bit single-precision format (Sign: 1 bit, Exponent: 8 bits, Mantissa: 23 bits).',
    '- Denormalized numbers, machine epsilon, and rounding precision loss.',
    '--------------------------------------------------------------------------------',
    'Section D: Arithmetic Logic Unit (ALU) Implementation Notes',
    '- Propagation delay comparison between Ripple-Carry and Carry-Lookahead adders.'
  ]
);

fs.mkdirSync(path.join(__dirname, '../public/documents'), { recursive: true });
fs.writeFileSync(path.join(__dirname, '../public/documents/resume.pdf'), resumePdf);
fs.writeFileSync(path.join(__dirname, '../public/documents/assignment-1.pdf'), assignmentPdf);
console.log('PDF documents generated successfully!');
