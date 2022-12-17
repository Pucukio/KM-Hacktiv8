AOS.init();

let obj = {
  key: "5b0fd9b6f4abbe5b87b37b997f57e5c4",
  // GET API TO JSON
  fetch_weather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.key)
      .then((response) => response.json())
      .then((data) => this.show_weather(data));
    // .then((data) => console.log(data));
  },
  // JSON TO DISPLAY
  show_weather: function (data) {
    let { name } = data;
    let { description } = data.weather[0];
    let { temp } = data.main;
    let { speed } = data.wind;
    document.querySelector("#city").innerText = name;
    document.querySelector("#description").innerText = description;
    document.querySelector("#temperature").innerText = temp + " " + "°C";
    document.querySelector("#windspeed").innerText = speed + " " + "m/s";
  },
  submit_weather: function () {
    this.fetch_weather(document.querySelector("#inputWilayah").value);
  },
};

document.querySelector("#submit").addEventListener("click", function () {
  if (document.querySelector("#inputWilayah").value == "") {
    alert("Masukkan input terlebih dahulu!");
  } else {
    obj.submit_weather();
  }
});
