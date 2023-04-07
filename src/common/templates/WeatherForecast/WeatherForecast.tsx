import { useGeolocation } from "@/common/hooks/useGeolocation";
import { Forecast, ForecastService } from "@/common/services/ForecastService";
import { useEffect, useState } from "react";
import { WeatherDayCard } from "../WeatherDayCard/WeatherDayCard";

export const WeatherForecast = () => {
    const { latitude, longitude } = useGeolocation();
    const [ forecast, setForecast ] = useState<Forecast | null>(null);

    useEffect(() => {
        getForecast()
    }, [latitude, longitude])

    const getForecast = async() => {
        try {
            const res = await ForecastService.getForecast({
                latitude,
                longitude,
                current_weather: true,
                forecast_days: '6',
                timezone: 'GMT',
                daily: ['temperature_2m_max', 'temperature_2m_min', 'weathercode']
            })

            setForecast(res.data)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <div className="flex">
            { forecast?.daily.temperature_2m_max.map((max: any, i: number) => {
                if(i) {
                    return(
                        <WeatherDayCard 
                            max={max} 
                            min={forecast.daily.temperature_2m_min[i]} 
                            weekday={forecast.daily.time[i]} 
                            weather={forecast.daily.weathercode[i]}
                            units={forecast.daily_units.temperature_2m_max}
                        />
                    )
                } else {
                    return <></>
                }
            })}
        </div>
    )
}