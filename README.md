# Node.js Basics Project

Repositori ini berisi kumpulan kode latihan yang dirancang untuk mempelajari dan memahami konsep-konsep fundamental dalam ekosistem Node.js. Setiap folder di dalam proyek ini berfokus pada satu topik spesifik.

## 🚀 Konsep yang Dipelajari
Berikut adalah rincian dari setiap modul latihan yang ada di dalam repositori ini:

📁 events
Mempelajari konsep event-driven architecture di Node.js. Folder ini berisi contoh penggunaan EventEmitter untuk membuat, mendaftarkan (listen), dan membangkitkan (emit) event kustom.

📁 filesystem
Berisi contoh cara berinteraksi dengan file sistem di komputer menggunakan modul fs. Ini mencakup operasi dasar seperti membaca file secara asynchronous (fs.readFile) dan menulis file (fs.writeFile).

📁 modularization
Mendemonstrasikan cara memecah kode menjadi beberapa file (modul) agar lebih terstruktur dan dapat digunakan kembali. Topik utama di sini adalah penggunaan module.exports untuk mengekspor nilai dan require() untuk mengimpornya.

📁 node-package-manager
Latihan yang berkaitan dengan NPM (Node Package Manager). Mencakup cara menginisialisasi proyek (npm init), menginstal paket eksternal (npm install), dan memahami struktur dari package.json.

📁 process-object
Menjelajahi objek global process yang menyediakan informasi dan kontrol atas proses Node.js yang sedang berjalan. Contoh di dalamnya mencakup cara mengakses argumen baris perintah (process.argv), environment variables (process.env), dan penggunaan memori (process.memoryUsage).

📁 readablestream
Mempelajari konsep Readable Stream untuk membaca data (seperti dari file besar) secara efisien dalam potongan-potongan kecil (chunks). Ini sangat penting untuk aplikasi yang menangani data dalam jumlah besar tanpa membebani memori. Contoh utama menggunakan fs.createReadStream().

📁 writablestream
Mempelajari konsep Writable Stream untuk menulis data secara bertahap ke sebuah tujuan (seperti file). Ini adalah pasangan dari Readable Stream dan berguna untuk proses penulisan data yang efisien. Contoh utama menggunakan fs.createWriteStream().



## 🛠️ Cara Menggunakan Repositori Ini

Setiap folder di dalam proyek ini dapat dianggap sebagai mini-proyek yang mandiri. Untuk menjalankan salah satu contoh:

Clone repositori ini ke komputer lokal Anda

```sh
git clone https://github.com/WijayaKusuma-tech/Node.js-Basics-Project.git
```

Instal dependensi

```sh
npm install
```

Masuk ke folder latihan yang ingin Anda coba. 
Contoh:

```sh
cd filesystem
```

Jalankan file JavaScript utama di dalam folder tersebut.
```sh
node index.js
```



# 🟢 Node.js

Teknologi yang Digunakan
Proyek ini dibangun sepenuhnya di atas ekosistem Node.js dan memanfaatkan beberapa konsep serta modul inti yang fundamental untuk pengembangan aplikasi sisi server (backend).

Node.js
Node.js adalah lingkungan eksekusi (runtime environment) untuk JavaScript yang memungkinkan kita menjalankan kode JavaScript di luar browser. Ini adalah teknologi utama yang menjadi dasar dari keseluruhan proyek. Karakteristik utama yang dimanfaatkan dalam proyek ini adalah sifatnya yang non-blocking dan event-driven, yang membuatnya sangat efisien untuk operasi I/O (Input/Output) seperti manipulasi file.

Berikut adalah rincian teknologi dan konsep spesifik dari ekosistem Node.js yang digunakan dalam setiap latihan:

1. NPM (Node Package Manager)
NPM adalah manajer paket standar untuk Node.js. Dalam proyek ini, NPM digunakan untuk:

Inisialisasi Proyek: Membuat file package.json melalui perintah npm init. File ini berfungsi sebagai "kartu identitas" proyek, mencatat semua metadata dan dependensi.
Manajemen Dependensi: Menginstal paket pihak ketiga (seperti lodash) dari registri NPM menggunakan perintah npm install. Semua dependensi akan tercatat di package.json dan filenya disimpan di dalam folder node_modules.
2. Modul Inti (Core Modules)
Proyek ini sangat bergantung pada modul-modul inti yang sudah disediakan oleh Node.js tanpa perlu instalasi tambahan.

fs (File System): Modul yang paling sering digunakan dalam latihan ini untuk semua operasi yang berkaitan dengan file. Ini mencakup membaca file secara asinkron (fs.readFile) dan mengelola data dalam aliran (streams) dengan fs.createReadStream dan fs.createWriteStream.
path: Modul yang sangat penting untuk menangani dan mengubah path file secara konsisten di berbagai sistem operasi. Fungsi seperti path.resolve() dan variabel global __dirname digunakan untuk memastikan path file selalu benar dan menghindari error ENOENT.
events: Modul yang menjadi dasar dari arsitektur event-driven di Node.js. Latihan ini menggunakan kelas EventEmitter untuk membuat, mendaftarkan, dan membangkitkan event kustom, yang merupakan konsep kunci di balik cara kerja stream dan server HTTP.
3. JavaScript Modern (ES6+)
Node.js mendukung sintaks JavaScript modern (juga dikenal sebagai ECMAScript 6 dan yang lebih baru). Proyek ini memanfaatkan fitur-fitur tersebut untuk kode yang lebih bersih dan mudah dibaca, seperti:

const dan let: Untuk deklarasi variabel dengan scope yang lebih dapat diprediksi.
Arrow Functions (=>): Untuk menulis fungsi dengan sintaks yang lebih ringkas.
Classes: Untuk membuat blueprint objek, seperti yang terlihat pada contoh Tiger dan Wolf.
4. Konsep Asynchronous
Ini bukan teknologi, melainkan paradigma pemrograman yang menjadi jantung Node.js. Sebagian besar operasi I/O (seperti membaca file) bersifat asinkron agar tidak memblokir eksekusi program. Dalam proyek ini, konsep asinkron diterapkan melalui:

Callback Functions: Pola di mana sebuah fungsi dijalankan hanya setelah tugas lain selesai (contoh: pada fs.readFile).
Streams: Cara yang lebih canggih dan efisien untuk menangani data asinkron, terutama untuk data berukuran besar.
5. Streams
Streams adalah salah satu konsep fundamental yang dipelajari dalam proyek ini. Ini adalah teknik untuk memproses data (membaca atau menulis) secara bertahap dalam potongan-potongan kecil (chunks) daripada memuat semuanya sekaligus ke dalam memori.

ReadableStream: Digunakan untuk membaca data dari sebuah sumber (misalnya file).
WritableStream: Digunakan untuk menulis data ke sebuah tujuan (misalnya file).

## 👷‍♂️Devloper
**Wijaya Kusuma**
