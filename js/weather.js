const API_KEY = "fa801e0c5864062540a68af9e96c4c35";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json()) //바이너리 json으로 바꿔줌
    .then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText =  `${data.weather[0].main} / ${data.main.temp}`;
    })
}

function onGeoError(){
    //
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);