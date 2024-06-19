function changeBackgroundColor() {
    const colors = ['#ffcccb', '#ffb6c1', '#e75480', '#ff69b4', '#ff1493'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

document.addEventListener('DOMContentLoaded', function() {
    changeBackgroundColor(); // Memanggil fungsi untuk mengubah warna latar belakang saat dokumen dimuat
});

const audioElement = document.querySelector('audio');

audioElement.addEventListener('play', function() {
    alert('Audio sedang dimainkan!');
});

function goToSecondPage() {
    const confirmMsg = "Apakah Anda yakin ingin pindah ke halaman kedua?";
    if (confirm(confirmMsg)) {
        window.location.href = 'index2.html'; // Ganti dengan nama file halaman kedua Anda
    }
}

function validateForm(event) {
    event.preventDefault(); // Menghentikan pengiriman formulir secara default

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || date.trim() === '' || message.trim() === '') {
        alert('Harap isi semua kolom formulir.');
        return false; // Mengembalikan false untuk mencegah pengiriman formulir
    }

    // Simulasikan pengiriman formulir ke server (Anda perlu mengaktifkan ini di environment yang sesuai)
    // Pada contoh ini, kita akan menampilkan pesan konfirmasi
    document.getElementById('confirmation-msg').style.display = 'block';
    setTimeout(function() {
        document.getElementById('confirmation-msg').style.display = 'none';
        document.getElementById('form').reset(); // Opsional: reset formulir setelah berhasil dikirim
    }, 3000); // Mengatur agar pesan konfirmasi hilang setelah 3 detik
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);
});



