function cariData() {
    const nisn = document.getElementById('nisn').value;
    const tgl = document.getElementById('tgl').value;
    const hasil = document.getElementById('hasil');
    
    const siswa = daftarSiswa.find(s => s.nisn === nisn && s.tgl === tgl);
    hasil.style.display = 'block';

    if (siswa) {
        hasil.innerHTML = `
            <h3>Data Ditemukan</h3>
            <div class="row"><div class="label">Nama</div><div>: ${siswa.nama}</div></div>
            <div class="row"><div class="label">JK</div><div>: ${siswa.jk}</div></div>
            <div class="row"><div class="label">TTL</div><div>: ${siswa.ttl}</div></div>
            <div class="row"><div class="label">NIK</div><div>: ${siswa.nik}</div></div>
            <div class="row"><div class="label">Agama</div><div>: ${siswa.agama}</div></div>
            <div class="row"><div class="label">Alamat</div><div>: ${siswa.alamat}</div></div>
            <div class="row"><div class="label">Ayah</div><div>: ${siswa.ayah} (NIK: ${siswa.ayahNik})</div></div>
            <div class="row"><div class="label">Ibu</div><div>: ${siswa.ibu} (NIK: ${siswa.ibuNik})</div></div>
            <hr>
            <h3>Respon Data</h3>
            <form action="LINK_GOOGLE_FORM_ANDA" target="_blank">
                <input type="hidden" name="entry.NISN" value="${siswa.nisn}">
                <select name="status" required><option value="Benar">Data Benar</option><option value="Salah">Data Salah</option></select>
                <textarea name="alasan" placeholder="Alasan jika data salah..."></textarea>
                <button type="submit">Kirim Respon</button>
            </form>`;
    } else {
        hasil.innerHTML = "<p style='color:red;'>Data tidak ditemukan.</p>";
    }
}
