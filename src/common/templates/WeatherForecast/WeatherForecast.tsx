import { useGeolocation } from "@/common/hooks/useGeolocation";
import { Forecast, ForecastService } from "@/common/services/ForecastService";
import { useEffect, useState } from "react";
import { WeatherDayCard } from "../WeatherDayCard/WeatherDayCard";

export interface WeatherForecastProps {
    forecast: Forecast | null
}

export const WeatherForecast = ({forecast}: WeatherForecastProps) => {
    return (
        <div className="flex justify-center">
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