import { WeatherDayCard } from "../WeatherDayCard/WeatherDayCard";
import styles from "./WeatherForecast.module.css";
import { useContext } from "react";
import { ForecastContext, ForecastContextType } from "@/common/context/ForecastContext";

export const WeatherForecast = () => {
    const { forecast } = useContext(ForecastContext) as ForecastContextType;
    
    return (
        <div className={`${styles.container} flex justify-center`}>
            { forecast?.daily?.temperature_2m_max?.map((max: any, i: number) => {
                if(i) {
                    return(
                        <WeatherDayCard 
                            key={i}
                            max={max} 
                            min={forecast.daily.temperature_2m_min[i]} 
                            weekday={forecast.daily.time[i]} 
                            weather={forecast.daily.weathercode[i]}
                            units={forecast.daily_units.temperature_2m_max}
                        />
                    )
                } else {
                    return;
                }
            })}
        </div>
    )
}