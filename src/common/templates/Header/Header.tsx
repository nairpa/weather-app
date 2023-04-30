import { IconButton } from "@/common/components/IconButton/IconButton";
import styles from "./Header.module.css";
import { useContext } from "react";
import { ForecastContext, ForecastContextType } from "@/common/context/ForecastContext";
import { ForecastService } from "@/common/services/ForecastService";

export const Header = () => {
    const { unit, setUnit, location, setForecast } = useContext(ForecastContext) as ForecastContextType;

    const handleClick = (unit: 'celsius' | 'fahrenheit') => {
        setUnit(unit);
        getForecast(unit);
    }

    const getForecast = async(unit: 'celsius' | 'fahrenheit') => {
        try {
            const res = await ForecastService.getForecast({
                latitude: location?.latitude,
                longitude: location?.longitude,
                current_weather: true,
                forecast_days: '6',
                timezone: 'GMT',
                daily: ['temperature_2m_max', 'temperature_2m_min', 'weathercode'],
                temperature_unit: unit,
                hourly: ['cloudcover_low', 'windspeed_10m', 'precipitation_probability', 'visibility']
            })
  
            setForecast(res.data)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <header className={`${styles.header}`}>
            <IconButton name={'°C'} selected={unit === 'celsius'} onClick={() => handleClick('celsius')}/>
            <IconButton name={'°F'} selected={unit === 'fahrenheit'} onClick={() => handleClick('fahrenheit')} />
        </header>
    )
}