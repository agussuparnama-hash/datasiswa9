async function cariData() {
    const nisn = document.getElementById('nisn').value;
    const tgl = document.getElementById('tgl_lahir').value;
    
    const url = 'https://api.sheety.co/e6dbe63e67008054a54adaf0c7a93a7d/dataKls920271/daftarPesertaDidik (2)';
    
    const response = await fetch(url);
    const json = await response.json();
    
    // DEBUG: Lihat isi data di Console browser (F12)
    console.log("Data dari Sheety:", json); 
    
    // Cek apakah key-nya benar
    const namaKey = Object.keys(json)[0]; 
    console.log("Nama Key yang ditemukan:", namaKey);
    
    const data = json[namaKey];
    const siswa = data.find(item => String(item.NISN) == nisn);
    
    console.log("Siswa yang dicari:", siswa);
}
