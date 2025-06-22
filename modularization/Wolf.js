class Wolf {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
  }

  howl() {
    console.log('wouuuuww!');
  }
}


//TODO 2 : Ekspor class Wolf agar dapat digunakan pada berkas JavaScript lain.
module.exports = Wolf;