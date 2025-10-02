    async function  greatWeather() {
            try{
                const appid = "b8b57ed6301d03452f8ee1cb956d625d" ;
                const url =  `https://api.openweathermap.org/data/2.5/weather?q=Taghazout&appid=${appid}&units=metric`;
        
            const response = await fetch(url);
            const data = await response.json();
              document.getElementById("weather").innerText =
          `Temp: ${data.main.temp}°C | ${data.weather[0].description}`;
           }
          catch(error){
          console.log(error);
          }
          
        }
