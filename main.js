let inp = document.querySelector("input");
let form = document.querySelector("form");

// const images = ["https://i.pinimg.com/236x/8f/20/30/8f2030245aa0c71a86bc47362f5ef79c.jpg"];
// const randomIndex = Math.floor(Math.random() * images.length);
// const imageUrl = `url(${images[randomIndex]})`;

// document.getElementById("background").style.backgroundImage = imageUrl;

form.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
            `${inp.value}` +
            "&units=metric&appid=" +
            "8fd1085577ddb8756193e34536b4a02b"+
            "&lang={Az}");
        let value = await response.json();
        let res = await result(value);

    } catch (error) {
        console.log("error");
    }
});



 function result(value){
    let humidity = value.main.humidity;
    let weatherO = value.weather;
    let weatherMain = value.weather[0].main;
    let windO = value.wind;
    
    let body = document.querySelector('body');

    let tbl = `
        <tr>
            <th>Temp</th>
            <th>Weather</th>
            <th>Wind Speed</th>
            <th>Location</th>
        </tr>
        <tr>
            <td>${value.main.temp}°C</td>
            <td>${value.weather[0].main}</td>
            <td>${value.wind.speed}</td>
            <td>${value.name}</td>
        </tr>`;

        let createTbl = document.createElement("table");
        createTbl.innerHTML = tbl;
        body.append(createTbl);
        
}


