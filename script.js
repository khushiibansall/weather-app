const apiKey="445e5cb58af248af7741c7981bdc3d4f";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox= document.querySelector(".search input");
        const searchBtn= document.querySelector(".search button");
        const weatherIcon= document.querySelector("weather-icon");
            
        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data= await response.json();
            console.log(data);

            document.querySelector(".city").innerHTML= data.name;
            document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
            document.querySelector(".wind").innerHTML= data.wind.speed + " km/hr";

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src= "clouds.png";
            }

        }
            searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })
        checkWeather(city);