/* Pesan Barang*/
const usernameSocialMedia = document.querySelector("#usernameSocialMedia");
const menuOption = document.querySelector("#menuOption");
const buttonInputList = document.querySelector("#buttonInputList");

let globalArray = [];
buttonInputList.addEventListener("click", function () {
  const myObject = {
    inputUsername: usernameSocialMedia.value,
    menu: menuOption.value,
  };
  globalArray.push(myObject);
  localStorage.setItem("user", JSON.stringify(globalArray));
});

function getLocalStorage() {
  if (globalArray.length >= 1) {
    const myObject = localStorage.getItem("user");
    const parsedArr = JSON.parse(myObject);
    let number = 1;
    const table = parsedArr
      .map((value) => {
        return `<tr>
      <th scope="row" id="number">${number++}</th>
      <td id="username">${value.inputUsername}</td>
      <td id="listMenu">${value.menu}</td>
      </tr>`;
      })
      .join("");
    const tableBody = document.querySelector("#tableBody");
    tableBody.innerHTML = table;
  } else {
    document.querySelector("#tableBody").innerHTML = "";
  }
}

buttonPesanSekarang.addEventListener("click", function () {
  if (document.querySelector("#tableBody").innerHTML == "") {
    alert("PESANAN TIDAK ADA");
  } else {
    alert("Pesanan sedang dikirim!", localStorage.clear());
    globalArray = [];
    document.querySelector("#tableBody").innerHTML = "";
    console.log(document.querySelector("#tableBody").innerHTML);
  }
});
