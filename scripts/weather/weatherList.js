import { getWeather, useWeather } from "./weatherDataProvider.js";
import { weatherComponent } from "./weather.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".weather");

const weatherListComponent = () => {
  eventHub.addEventListener("searchFormSubmitted", (event) => {
    console.log("going to get the weather");
    getWeather(event.detail.selectedZip).then(() => {
      const weather = useWeather();
      render(weather);
    });
  });

  const render = (element) => {
    contentTarget.innerHTML = `
            <section class="weather-box">
                <p class="weather-title">5 Day Forecast</p>
                <div class="weather-cards">
                    ${element
                      .map((currentElement) => {
                        const [prefix, time] = currentElement.dt_txt.split(" ");
                        if (time === "12:00:00") {
                          return weatherComponent(currentElement);
                        }
                      })
                      .join("")}
                </div>
            </section>
        `;
  };
};

export default weatherListComponent;
