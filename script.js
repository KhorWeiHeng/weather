 let api = "https://api.openweathermap.org/data/2.5/weather";
 let apiKey = "68db53bf2a1c8c37d0a8cffba839d5b6";

 let temperatureElement = document.getElementById("temperature");
 let statusElement = document.getElementById("status");
 let locationElement = document.getElementById("location");

  locationElement.innerHTML = "Processing your location...";

function getWeather(){
console.log('hi world uwu')
  
  function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

      let openWeatherMap = api +
     "?lat=" + latitude +
     "&lon=" + longitude +
     "&appid=" + apiKey;
     fetch(openWeatherMap)
      .then(response => response.json())
      .then(data => {
    	console.log(data);
	
      let celsius = data.main.temp - 273;

      statusElement.innerHTML = data.weather[0].main; // eg. Clouds, Rain, Sunny, Clear

      temperatureElement.innerHTML = celsius.toFixed(2) + "° C"; // eg. 24.69° C

      locationElement.innerHTML = data.name + " (" + latitude + "°N, " + longitude + "°E)"; 

      let url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
})
     // do something  
    }

    function error(e) {
   locationElement.innerHTML = "Location Services Unavailable";
 }
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert('Geolocation is not supported by your browser');
    }
}

function switchbackgroundcolor(){
document.body.style.backgroundColor= generateRandomColor();}

var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//generates a random color -> #56eec7

function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}
document.body.style.backgroundColor = generateRandomColor() // -> #e1ac94



 


  
  
	