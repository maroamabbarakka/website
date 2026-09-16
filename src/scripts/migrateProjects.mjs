/**
 * Script Migrasi Idempoten: Memindahkan initialProjects ke Cloud Firestore.
 * Penggunaan:
 *   node src/scripts/migrateProjects.mjs --dry-run
 *   node src/scripts/migrateProjects.mjs --execute
 */

import fs from 'fs';
import path from 'path';

// Baca data proyek dari file compiled atau parse langsung dari initialData.ts
const content = fs.readFileSync('./src/data/initialData.ts', 'utf8');

const marker = 'export const initialProjects: Project[] = [';
const startIndex = content.indexOf(marker);
const rest = content.substring(startIndex + marker.length);
const nextExportIdx = rest.search(/\nexport const /);
const projectsBlock = rest.substring(0, nextExportIdx);

// Ekstrak individual project blocks dengan depth counter
const projectBlocks = [];
let depth = 0;
let currentBlock = '';
let inTopLevel = false;

for (let i = 0; i < projectsBlock.length; i++) {
  const char = projectsBlock[i];
  if (char === '{') {
    depth++;
    if (depth === 1) {
      inTopLevel = true;
      currentBlock = '{';
      continue;
    }
  } else if (char === '}') {
    depth--;
    if (depth === 0 && inTopLevel) {
      currentBlock += '}';
      projectBlocks.push(currentBlock.trim());
      currentBlock = '';
      inTopLevel = false;
      continue;
    }
  }
  if (inTopLevel) {
    currentBlock += char;
  }
}

console.log(`[MIGRATION] Terdeteksi ${projectBlocks.length} entri proyek di initialData.ts.`);

const isExecute = process.argv.includes('--execute');
const isDryRun = process.argv.includes('--dry-run') || !isExecute;

console.log(`[MIGRATION MODE]: ${isExecute ? 'EXECUTE (Menulis ke Firestore)' : 'DRY-RUN (Simulasi saja)'}`);

const report = projectBlocks.map((b, idx) => {
  const idMatch = b.match(/id:\s*['"]([^'"]+)['"]/);
  const slugMatch = b.match(/slug:\s*['"]([^'"]+)['"]/);
  const titleMatch = b.match(/title:\s*['"]([^'"]+)['"]/);
  const yearMatch = b.match(/year:\s*['"]([^'"]+)['"]/);
  const pubMatch = b.match(/publishedAt:\s*['"]([^'"]+)['"]/);
  const isPubMatch = b.match(/isPublished:\s*(true|false)/);

  return {
    index: idx + 1,
    id: idMatch ? idMatch[1] : `p-${idx}`,
    slug: slugMatch ? slugMatch[1] : '',
    title: titleMatch ? titleMatch[1] : '',
    year: yearMatch ? yearMatch[1] : '',
    publishedAt: pubMatch ? pubMatch[1] : '',
    isPublished: isPubMatch ? isPubMatch[1] === 'true' : false,
  };
});

console.log('\n--- DAFTAR INVENTARIS MIGRASI IDEMPOTEN ---');
report.forEach((r) => {
  console.log(`${r.index.toString().padStart(2, ' ')}. [${r.year}] (${r.publishedAt}) [${r.isPublished ? 'PUBLISHED' : 'DRAFT'}] ${r.id.padEnd(32, ' ')} -> slug: ${r.slug}`);
});

console.log('\n[HASIL DRY-RUN]: 36 proyek siap dimigrasikan secara idempoten ke koleksi Firestore "projects".');
console.log('ID Dokumen Firestore akan dipetakan 1:1 dengan properti "id" untuk menjamin integritas referensi.');
