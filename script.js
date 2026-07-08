async function cariData() {
    const nisn = document.getElementById('nisn').value;
    const tgl = document.getElementById('tgl_lahir').value;
    const hasilDiv = document.getElementById('hasil');
    
    if (nisn.length !== 10) { alert("NISN harus 10 digit!"); return; }

    const url = 'https://api.sheety.co/e6dbe63e67008054a54adaf0c7a93a7d/dataKls920271/daftarPesertaDidik (2)';
    
    try {
        const response = await fetch(url);
        const json = await response.json();
        
        // Mengakses data (sesuaikan nama kunci dengan hasil console.log Anda)
        const data = json['daftarPesertaDidik (2)']; 
        const siswa = data.find(item => String(item.NISN) === nisn && item['Tanggal Lahir'] === tgl);

        hasilDiv.style.display = 'block';
        if (siswa) {
            hasilDiv.innerHTML = `
                <div class="data-row"><div class="label-row">Nama</div><div>: ${siswa.Nama}</div></div>
                <div class="data-row"><div class="label-row">NIPD</div><div>: ${siswa.NIPD}</div></div>
                <div class="data-row"><div class="label-row">Agama</div><div>: ${siswa.Agama}</div></div>
                <a href="LINK_GOOGLE_FORM" class="btn-lapor" target="_blank">Laporkan Jika Data Salah</a>
            `;
        } else {
            hasilDiv.innerHTML = "Data tidak ditemukan.";
        }
    } catch (error) {
        hasilDiv.innerHTML = "Gagal memuat data.";
    }
}
