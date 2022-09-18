// function angka(number) {
//   if (number % 2 === 0) {
//     console.log("Genap");
//   } else if (number % 2 === 1) {
//     console.log("Ganjil");
//   } else {
//     console.log("Invalid Data");
//   }
// }

// angka(2);
// angka(3);
// angka("zzz");

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
