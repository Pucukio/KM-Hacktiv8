// Excercises 1
let buah = ["Apel", "Mangga", "Jambu", "Pisang", "Nanas"];

console.log(buah);

buah.push("Anggur");

console.log(buah);

buah.splice(1, 1, "Alpukat");

console.log(buah);

buah.pop();

console.log(buah);

console.log("===================================");

// Excercises 2
const biodata = {
  nama_depan: "Fulan",
  nama_belakang: "Asli",
  hobi: ["Mabar Koding"],
  angka_fav: 1337,
  memakai_kacamata: true,
};

console.log(biodata);

console.log("Nama Lengkap: " + biodata.nama_depan + " " + biodata.nama_belakang);

biodata.angka_fav = 8;

console.log("Angka Favorit: " + biodata.angka_fav);

biodata.hobi.push("Coding");

console.log("Hobi Terbaru: " + biodata.hobi.toString());

biodata.lulusan = "Hacktiv8";

console.log("Lulusan: " + biodata.lulusan);

biodata.hobi.forEach((element) => {
  console.log("Hobi: " + element);
});

console.log(Object.keys(biodata));
console.log(Object.values(biodata));

for (const property in biodata) {
  console.log(`${property}: ${biodata[property]}`);
}
console.log("===================================");
// Exercises 3

function tanggal() {
  console.log("Mencetak Tanggal Sekarang: " + new Date());
}
tanggal();

function tanggal1(tanggal) {
  console.log("Memberikan Tanggal Sekarang: " + tanggal);
}
tanggal1(new Date());

console.log("===================================");
// Exercises 4

function angka(number) {
  if (number % 2 === 0) {
    console.log("Genap");
  } else if (number % 2 === 1) {
    console.log("Ganjil");
  } else {
    console.log("Invalid Data");
  }
}

angka("zzz");
