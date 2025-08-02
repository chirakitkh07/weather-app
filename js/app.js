
import { fetchWeather } from "./weather.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("search-form");
    const input = document.getElementById("city-input");
    const weatherContainer = document.getElementById("weather-info-container");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const city = input.value.trim();
        if (!city) return;

        weatherContainer.innerHTML = "<p>กำลังโหลดข้อมูล...</p>";

        try {
            const weather = await fetchWeather(city);
            weatherContainer.innerHTML = `
                <h2>${weather.city}, ${weather.country}</h2>
                <img src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="${weather.description}">
                <p class="temp">${weather.temperature.toFixed(1)}°C</p>
                <p>${weather.description}</p>
            `;
        } catch (error) {
            weatherContainer.innerHTML = `<p class="error">${error.message}</p>`;
        }
    });
});
