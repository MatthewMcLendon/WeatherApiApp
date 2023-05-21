import { getWeather } from "../weather/weatherDataProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".search-form-container");
let searchValue = "";

const searchFormComponent = () => {
  eventHub.addEventListener("click", (clickEvent) => {
    console.log("before if check");
    if (clickEvent.target.id === "search-form-submit") {
      console.log("on click for search form");
      searchValue = document.querySelector("#search-field-zip").value;
      const message = new CustomEvent("searchFormSubmitted", {
        detail: {
          selectedZip: searchValue,
        },
      });
      eventHub.dispatchEvent(message);
      clickEvent.preventDefault();
    }
  });

  const render = () => {
    contentTarget.innerHTML = `
        <form class="search-form">
            <input id="search-field-zip" type="number" placeholder="What Zip?" isRequired>
            <button id="search-form-submit">Search</button>
        </form>`;
  };

  render();
};

export default searchFormComponent;
