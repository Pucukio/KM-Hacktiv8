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
  const myObject = localStorage.getItem("user");
  const parsedArr = JSON.parse(myObject);
  for (const element of parsedArr) {
    document.getElementById("username").innerText = `${element.inputUsername}`;
    document.getElementById("listMenu").innerText = `${element.menu}`;
  }
  // const table = parsedArr
  //   .map((value) => {
  //     return `<tr>
  //     <th scope="row" id="number"></th>
  //   <td id="username">${value.inputUsername}</td>
  //   <td id="listMenu">${value.menu}</td>
  //   </tr>`;
  //   })
  //   .join("");
  // const tableBody = document.querySelector("#tableBody");
  // tableBody.innerHTML = table;
}
