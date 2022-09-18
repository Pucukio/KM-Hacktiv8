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
console.log(biodata);

console.log("Lulusan: " + biodata.lulusan);

biodata.hobi.forEach((element) => {
  console.log("Hobi: " + element);
});

console.log(Object.keys(biodata));
console.log(Object.values(biodata));

for (const property in biodata) {
  console.log(`${property}: ${biodata[property]}`);
}

for (let key in biodata) {
  if (biodata.hasOwnProperty(key)) {
    console.log(key + ">>" + biodata[key]);
  }
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

// function angka(number) {
//   if (number % 2 === 0) {
//     console.log("Genap");
//   } else if (number % 2 === 1) {
//     console.log("Ganjil");
//   } else {
//     console.log("Invalid Data");
//   }
// }

function angka(number) {
  if (number % 2 === 0) {
    return "Genap";
  } else if (number % 2 === 1) {
    return "Ganjil";
  } else {
    return "Invalid Data";
  }
}

console.log(angka(2));
console.log(angka(3));
console.log(angka("zzz"));
