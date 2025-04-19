#!/usr/bin/env node
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execa } from 'execa';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetDir = process.argv[2] || 'react-vite-ts-fsd';
const srcDir = path.join(__dirname, 'template');

await fs.copy(srcDir, targetDir);

try {
    console.log('📦 Устанавливаем зависимости...');
    await execa('npm', ['install'], { cwd: targetDir, stdio: 'inherit' });
    console.log('✅ Зависимости установлены!');
} catch (err) {
    console.error('❌ Ошибка установки зависимостей:', err);
}

console.log(`✅ Проект скопирован в папку ${targetDir}`);
