// CEK APAKAH SUDAH LOGIN
function cekLogin(){
    if(localStorage.getItem('loginStatus') !== 'aktif'){
        if(!window.location.href.includes('login.html') && !window.location.href.includes('daftar.html')){
            window.location.href = 'login.html';
        }
    }
}

// KELUAR / LOGOUT
function keluarAkun(){
    localStorage.removeItem('loginStatus');
    alert('👋 Berhasil Keluar!');
    window.location.href = 'login.html';
}

// AMBIL SALDO PENGGUNA
function ambilSaldo(){
    return localStorage.getItem('saldo') || 0;
}

// UBAH / UPDATE SALDO SETELAH BERMAIN
function ubahSaldo(nilaiBaru){
    localStorage.setItem('saldo', nilaiBaru);
    if(document.getElementById('saldo')){
        document.getElementById('saldo').innerText = parseInt(nilaiBaru).toLocaleString('id-ID');
    }
}

// SIMPAN RIWAYAT TRANSAKSI
function simpanRiwayat(jenis, nilai, metode){
    let riwayat = JSON.parse(localStorage.getItem('riwayatTransaksi') || '[]');
    riwayat.unshift({
        jenis: jenis,
        nilai: nilai,
        metode: metode,
        waktu: new Date().toLocaleString('id-ID')
    });
    localStorage.setItem('riwayatTransaksi', JSON.stringify(riwayat));
}

// === SISTEM LIVE CHAT ===
function ambilPesanChat(){
    return JSON.parse(localStorage.getItem('liveChat') || '[]');
}

function kirimPesanChat(isiPesan){
    const namaPengirim = localStorage.getItem('nama') || 'Tamu';
    const waktu = new Date().toLocaleString('id-ID');
    
    const pesanBaru = {
        nama: namaPengirim,
        isi: isiPesan,
        jam: waktu
    };

    const daftarPesan = ambilPesanChat();
    daftarPesan.push(pesanBaru);

    // Batasi cuma 50 pesan terakhir biar tidak penuh
    if(daftarPesan.length > 50) daftarPesan.shift();

    localStorage.setItem('liveChat', JSON.stringify(daftarPesan));
}

// === SISTEM ADMIN / PEMILIK ===
// Data Admin (UBAH SENDIRI SESUAI KEBUTUHAN)
const DATA_ADMIN = {
    username: "admin_allhoki",
    password: "Hoki2026!",
    nama: "👑 ADMIN PEMILIK"
};

// Cek apakah yang login adalah Admin
function cekAdmin() {
    return localStorage.getItem("adminLogin") === "OK";
}

// Fungsi Login Admin
function loginAdmin(user, pass) {
    if(user === DATA_ADMIN.username && pass === DATA_ADMIN.password) {
        localStorage.setItem("adminLogin", "OK");
        localStorage.setItem("nama", DATA_ADMIN.nama);
        return true;
    }
    return false;
}

// Keluar dari akun Admin
function keluarAdmin() {
    localStorage.removeItem("adminLogin");
    localStorage.removeItem("nama");
    window.location.href = "index.html";
}

// Lindungi halaman khusus Admin
function perlindunganAdmin() {
    if(!cekAdmin()) {
        alert("❌ AKSES DITOLAK! Hanya Admin yang boleh masuk sini!");
        window.location.href = "index.html";
    }
}
<script>
function scrollToProvider() {
    document.querySelector('.provider-section').scrollIntoView({
        behavior: 'smooth'
    });
}
</script>
