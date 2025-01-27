document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('absen-form');
    const tabelAbsen = document.getElementById('tabel-absen');

    let nomor = 1; // Nomor urut

    // Tambahkan event listener untuk form
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Ambil nilai input
        const nama = document.getElementById('nama').value;
        const nim = document.getElementById('nim').value;

        // Waktu saat ini
        const waktu = new Date().toLocaleString();

        // Tambahkan data ke tabel
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${nomor}</td>
            <td>${nama}</td>
            <td>${nim}</td>
            <td>${waktu}</td>
        `;
        tabelAbsen.appendChild(row);

        // Tambahkan nomor urut
        nomor++;

        // Reset form
        form.reset();
    });
});
