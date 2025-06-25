const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.post("/api/order", async (req, res) => {
  const { nama, produk, jumlah, alamat, nomor_wa } = req.body;
  const nomorFormatted = nomor_wa.replace(/^0/, "+62");
  const pesan = `Halo ${nama}, pesanan Kamu untuk ${produk} sebanyak ${jumlah} porsi sedang diproses.\nAlamat: ${alamat}\nKami akan segera menghubungi Kamu. Terima kasih! 🍜`;
  const kirim = await fetch("https://api.fonnte.com/send", {
    method: "POST",
    headers: {
      Authorization: "maicVd5z1anmPzSGKYj8",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ target: nomorFormatted, message: pesan }),
  });
  const result = await kirim.json();
  res.json({ message: "Pesanan berhasil dikirim! Silakan cek WhatsApp Anda." });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server aktif di http:localhost:${PORT}`));
