/* Pesan Barang*/
const usernameSocialMedia = document.querySelector("#usernameSocialMedia");
const menuOption = document.querySelector("#menuOption");
const buttonInputList = document.querySelector("#buttonInputList");

// /*List Barang*/
// const username = document.querySelector("#username");
// const listMenu = document.querySelector("#listMenu");

const globalArray = [];
buttonInputList.addEventListener("click", function () {
  const myObject = {
    inputUsername: usernameSocialMedia.value,
    menu: menuOption.value,
  };
  globalArray.push(myObject);
  localStorage.setItem("user", JSON.stringify(globalArray));
});

function getLocalStorage() {
  // const nama = JSON.parse(localStorage.getItem("user"));
  // nama.array.forEach((element) => {
  //   document.getElementById("username").innerText = nama;
  // });
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const item = JSON.parse(localStorage.getItem("user"));
    document.getElementById("username").innerText = item;
  }
}
