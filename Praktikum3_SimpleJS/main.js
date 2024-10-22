// Tombol untuk mengubah warna halaman secara acak
// =====================================================================================
const ubhWarnaHalaman = document.getElementById('ubahHalaman');
ubhWarnaHalaman.addEventListener('click', function() { // menggunakan function anonymous dengan parameter even click
    document.body.style.backgroundColor = getRandomColor();// menambahkan warna random
});

// =====================================================================================
// Fungsi di bawah untuk menghasilkan warna acak
// =====================================================================================
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// =====================================================================================
// Slider untuk mengubah ukuran font
// =====================================================================================
const fontSizeSlider = document.getElementById('fontSizeSlider');
const textContent = document.getElementById('textContent');
fontSizeSlider.addEventListener('input', function() {
    textContent.style.fontSize = fontSizeSlider.value + 'px';
});

// =====================================================================================
// Tombol untuk mengubah tema gelap/terang
// =====================================================================================
const warnaGelapTerang = document.getElementById('warnaGelapTerang');
warnaGelapTerang.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode'); // toggle tersebut ketika belom ada class yang bernama dark-mode maka dia akan membuat class, tetapi jika sudah ada dia akan menghapus. jadi bisa di gunakan untuk memanggi class seperti mematikan lampu dan menyalakan lampu
});

// =====================================================================================
// Dropdown untuk memilih jenis font
// =====================================================================================
const pilihFont = document.getElementById('pilihFont'); // getElementById di gunakan untuk mengambil id yang bernama pilihFont pada element html
pilihFont.addEventListener('change', function() {
    textContent.style.fontFamily = pilihFont.value;
});
