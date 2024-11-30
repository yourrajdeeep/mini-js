const key = "d436505cbb624b72b0155808242405"

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`)
    var data = await response.json();


    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = `${Math.round(data.current.temp_c)} <i class="ri-celsius-line"></i>`;
    document.querySelector(".wind").innerHTML = `<i class="ri-windy-line"></i> ${data.current.wind_kph}  km/h`;
    document.querySelector(".h").innerHTML = "Humidity";
    document.querySelector(".w").innerHTML = "Wind-Speed";

    
    if (data.current.humidity <= 33) {
        document.querySelector(".humidity").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm0-80q100 0 170-68.5T720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180Z"/></svg> ${data.current.humidity}%`;
    } else if (data.current.humidity <= 66) {
        document.querySelector(".humidity").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100ZM240-416h480q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416Z"/></svg>${data.current.humidity}%`;
    } else {
        document.querySelector(".humidity").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"/></svg>${data.current.humidity}%`;
    }

    
    if (data.current.condition.text.includes("Mist")) {
        document.querySelector(".weather-icon").setAttribute("src", 
            data.current.is_day !== 1 ? "assets/mist.png" : "assets/haze.png"
        );
    } else if (data.current.condition.text.includes("Sunny") || data.current.condition.text.includes("Clear")) {
        document.querySelector(".weather-icon").setAttribute("src", "assets/sunny.png");
    } else if (data.current.condition.text.includes("Overcast") || data.current.condition.text.includes("Cloudy")) {
        document.querySelector(".weather-icon").setAttribute("src", "assets/overcast.png");
    } else {
        document.querySelector(".weather-icon").setAttribute("src", "assets/overcast.png");
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});