export interface EndpointForecast {
    latitude: number,
    longitude: number,
    elevation: number,
    generationtime_ms: number,
    timezone: string,
    daily: any,
    current_weather: any,
    daily_units: any,
    hourly_units: any,
    hourly: any
}

export interface Forecast {
    latitude: number,
    longitude: number,
    currentWeather: any,
    hourlyWeather: any
    hourlyUnits: any,
    dailyWeather: any,
    dailyUnits: any,
}