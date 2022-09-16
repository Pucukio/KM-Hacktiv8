// function change_name() {
//   const nama = document.getElementById("nama").value;
// }

// function change_profile() {
//   // const role = document.getElementById("role").value;
//   // const availability = document.getElementById("availability").value;
//   // const usia = document.getElementById("usia").value;
//   // const lokasi = document.getElementById("lokasi").value;
//   // const year_experience = document.getElementById("year_experience").value;
//   // const email = document.getElementById("email").value;

//   document.getElementById("namaLengkap").innerHTML = change_name();
// }

const buttonSubmit = document.querySelector("#submit");
const nama = document.querySelector("#nama");
const namaInput = document.querySelector("#namaInput");
const role = document.querySelector("#role");
const roleInput = document.querySelector("#roleInput");
const availability = document.querySelector("#availability");
const availabilityInput = document.querySelector("#availabilityInput");
const usia = document.querySelector("#usia");
const usiaInput = document.querySelector("#usiaInput");
const lokasi = document.querySelector("#lokasi");
const lokasiInput = document.querySelector("#lokasiInput");
const yearExperience = document.querySelector("#yearExperience");
const yearExperienceInput = document.querySelector("#yearExperienceInput");
const email = document.querySelector("#email");
const emailInput = document.querySelector("#emailInput");

buttonSubmit.addEventListener("click", function () {
  if (
    (namaInput.value === "" && roleInput.value === "" && availabilityInput.value === "" && usiaInput.value === "" && lokasiInput.value === "" && yearExperienceInput.value === "" && emailInput.value === "") ||
    roleInput.value === "" ||
    availabilityInput.value === "" ||
    usiaInput.value === "" ||
    lokasiInput.value === "" ||
    yearExperienceInput.value === "" ||
    emailInput.value === ""
  ) {
    alert("Isikan Data Dengan benar!");
  } else {
    nama.textContent = namaInput.value;
    role.textContent = roleInput.value;
    availability.textContent = availabilityInput.value;
    usia.textContent = usiaInput.value;
    lokasi.textContent = lokasiInput.value;
    yearExperience.textContent = yearExperienceInput.value;
    email.textContent = emailInput.value;
  }
});
