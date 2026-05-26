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

