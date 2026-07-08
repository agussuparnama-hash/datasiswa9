async function cariData() {
    const nisnInput = document.getElementById('nisn').value;
    const tglInput = document.getElementById('tgl_lahir').value;

    // Ganti URL di bawah dengan URL API dari Sheety
    const apiUrl = 'URL_API_DARI_SHEETY_ANDA';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Cari data yang cocok
        // Sesuaikan 'dataSiswa' dengan nama tab di sheet Anda
        const siswa = data.dataSiswa.find(item => item.nisn == nisnInput && item.tanggalLahir == tglInput);

        const hasilDiv = document.getElementById('hasil');
        hasilDiv.style.display = 'block';

        if (siswa) {
            hasilDiv.innerHTML = `
                <h3>Data Ditemukan:</h3>
                <p>Nama: ${siswa.nama}</p>
                <a href="LINK_GOOGLE_FORM_ANDA" target="_blank" style="color:red">Lapor jika ada kesalahan</a>
            `;
        } else {
            hasilDiv.innerHTML = "<p>Data tidak ditemukan. Silakan cek kembali.</p>";
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Gagal mengambil data.');
    }
}