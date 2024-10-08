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

//let tokyoTime = moment().tz("Asia/Tokyo");
newyorkDateElement.innerHTML = moment()
  .tz("America/New_York")
  .format("MMMM Do YYYY");
newyorkTimeElement.innerHTML = moment()
  .tz("America/New_York")
  .format("h:mm:ss [<small>]A[</small>]");}

updateTime();
setInterval(updateTime, 1000);