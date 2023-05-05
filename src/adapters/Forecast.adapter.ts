import { EndpointForecast, Forecast } from "../models/Forecast.model";

export const createForecastAdapter = (forecast: EndpointForecast) => {
    const adaptedForecast: Forecast = {
        dailyUnits: forecast.daily_units,
        dailyWeather: forecast.daily,
        hourlyUnits: forecast.hourly_units,
        hourlyWeather: forecast.hourly,
        latitude: forecast.latitude,
        longitude: forecast.longitude,
        currentWeather: forecast.current_weather,
    }

    return adaptedForecast;
}