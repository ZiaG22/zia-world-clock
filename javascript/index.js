function updateTime(){

//Tokyo
let tokyoDateElement = document.querySelector("#tokyo .date")
let tokyoTimeElement = document.querySelector("#tokyo .time")

//let tokyoTime = moment().tz("Asia/Tokyo");
 tokyoDateElement.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
 tokyoTimeElement.innerHTML = moment()
   .tz("Asia/Tokyo")
   .format("h:mm:ss [<small>]A[</small>]");

//New York
let newyorkDateElement = document.querySelector("#new-york .date");
let newyorkTimeElement = document.querySelector("#new-york .time");

newyorkDateElement.innerHTML = moment()
  .tz("America/New_York")
  .format("MMMM Do YYYY");
newyorkTimeElement.innerHTML = moment()
  .tz("America/New_York")
  .format("h:mm:ss [<small>]A[</small>]");}

  function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElecment = document.querySelector("#cities");
    citiesElecment.innerHTML = `
    <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM  Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A")}</small></div>
    </div>`;
  }

updateTime();

setInterval(updateTime,1000);

let citiesSelectElement = document.querySelector("#city")
citiesSelectElement.addEventListener("change",updateCity)
