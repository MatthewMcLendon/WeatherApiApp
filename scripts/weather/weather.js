export const weatherComponent = (weather) => {
  const icon = `${weather.weather.map((element) => `${element.icon}`)}`;
  return `
    <section class="weather-card">
        <div class="weather-header">
            <div class="weather-date">${new Date(weather.dt_text).toDateString(
              "en-us"
            )}</div>
            <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">
        </div>

        <div class="weather-content">
            <div class="weather-temp">Temp: ${weather.main.temp}°F</div>
            <div class="weather-condition">${weather.weather
              .map((element) => `${element.description}`)
              .join("")}
            </div>  
        </div>
    </section>
  `;
};
