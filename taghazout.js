 
  async function getWeather() {
    const apiKey = "b8b57ed6301d03452f8ee1cb956d625d";
    const city = "Taghazout";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°C`;
      document.getElementById("desc").innerText = data.weather[0].description;
      document.getElementById("wind").innerHTML = `<i class="fa-solid fa-wind"></i> Wind: ${data.wind.speed} km/h`;
      document.getElementById("humidity").innerHTML = `<i class="fa-solid fa-droplet"></i> Humidity: ${data.main.humidity}%`;

     
      const iconCode = data.weather[0].icon;
      const iconUrl = `${iconCode}`;
      document.getElementById("weather-icon").innerHTML = `<img src="${iconUrl}" alt="weather icon">`;

    } catch (error) {
      
      document.getElementById("desc").innerText = "Error loading weather ❌";
    }

  }
  getWeather();
  
  const menu = document.getElementById('mobile-menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
});
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});



