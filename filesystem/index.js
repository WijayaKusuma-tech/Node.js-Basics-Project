const fs = require('fs');
const path = require('path'); // 1. Impor module path

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('gagal membaca berkas');
        return;
    }
    console.log(data);
};

// 2. Gunakan path.resolve() untuk membuat path yang absolut dan benar
const filePath = path.resolve(__dirname, 'notes.txt'); 

fs.readFile(filePath, 'UTF-8', fileReadCallback);