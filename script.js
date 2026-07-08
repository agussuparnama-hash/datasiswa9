async function cariData() {
    const hasilDiv = document.getElementById('hasil');
    hasilDiv.style.display = 'block';
    hasilDiv.innerHTML = "Sedang mengambil data...";

    const url = 'https://api.sheety.co/e6dbe63e67008054a54adaf0c7a93a7d/dataKls920271/daftarPesertaDidik (2)';
    
    try {
        const response = await fetch(url);
        const json = await response.json();
        
        // --- PROSES DETEKTIF ---
        console.log("Struktur JSON dari Sheety:", json);
        
        // Sheety biasanya menaruh data di key dengan nama sheet-nya
        // Mari kita ambil key pertama dari object json
        const namaKey = Object.keys(json)[0]; 
        const data = json[namaKey];
        
        console.log("Nama Sheet/Key:", namaKey);
        console.log("Baris data pertama:", data[0]);

        hasilDiv.innerHTML = `
            <p><strong>Berhasil terhubung!</strong></p>
            <p>Nama Sheet yang terbaca: <b>${namaKey}</b></p>
            <p>Contoh data baris pertama (NISN): <b>${data[0].NISN}</b></p>
            <p><em>Cek Console (F12) untuk detail lengkap.</em></p>
        `;
    } catch (error) {
        hasilDiv.innerHTML = "Error: " + error.message;
    }
}
