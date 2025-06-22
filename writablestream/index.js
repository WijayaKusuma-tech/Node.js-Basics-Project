const fs = require('fs');
const path = require('path');

// Menentukan path absolut untuk file input dan output
const inputFilePath = path.resolve(__dirname, 'input.txt');
const outputFilePath = path.resolve(__dirname, 'output.txt');

/**
 * TODO 1:
 * Tentukan nilai highWaterMark menjadi 15.
 * Ini akan membuat stream membaca file per 15 byte/karakter.
 */
const readableStream = fs.createReadStream(inputFilePath, {
    highWaterMark: 15,
    encoding: 'UTF-8' // Encoding agar chunk yang diterima berupa string
});

const writableStream = fs.createWriteStream(outputFilePath);

/**
 * TODO 2:
 * Gunakan writable stream untuk menulis ulang teks.
 * Pisahkan setiap chunk dengan baris baru ('\n').
 */
readableStream.on('data', (chunk) => {
    try {
        // Menulis potongan data (chunk) ke output.txt, diikuti dengan newline
        writableStream.write(`${chunk}\n`);
        console.log(`Menerima dan menulis chunk: "${chunk}"`);
    } catch (error) {
        console.error('Gagal menulis data:', error);
    }
});

// Menambahkan listener untuk event 'end' untuk mengetahui proses selesai
readableStream.on('end', () => {
    writableStream.end(); // Menutup writable stream setelah selesai
    console.log('\nProses membaca dan menulis file telah selesai.');
});

// Menambahkan listener untuk penanganan error
readableStream.on('error', (error) => {
    console.error('Terjadi error pada readable stream:', error.message);
});

writableStream.on('error', (error) => {
    console.error('Terjadi error pada writable stream:', error.message);
});