import { axiosInstance } from "../utils/AxiosInstance";

type ForecastParams = {
    latitude: any,
    longitude: any,
    current_weather?: any,
    hourly?: string,
    temperature_unit?: 'celsius' | 'fahrenheit',
    windspeed_unit?: 'kmh' | 'mph',
    forecast_days?: string,
    timezone?: 'GMT',
    daily?: any,
}

export interface Forecast {
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

export interface CurrentWeather {
    time: string,
    temperature: number,
    weathercode: number,
    windspeed: number,
    winddirection: number
}

export const ForecastService = {
    getForecast: async (queryParams: any)  => {
        const params = new URLSearchParams(queryParams).toString();
        let url = 'forecast';

        if(queryParams?.latitude && queryParams.longitude) {
            url = `${url}?${params}`
        }

        return axiosInstance.get(url)
    }
}