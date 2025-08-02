// js/weather.js
import { API_KEY } from "./config.js";

export async function fetchWeather(city) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=th`;

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("ไม่พบข้อมูลเมืองนี้");
        }

        const data = await response.json();

        return {
            city: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
        };
    } catch (error) {
        throw error;
    }
}
