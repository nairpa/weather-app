import { ButtonComponent } from "@/common/components/Button/Button"
import { IconButton } from "@/common/components/IconButton/IconButton"
import styles from "./CurrentWeather.module.css";
import { CurrentWeather } from "@/common/services/ForecastService";
import { useEffect } from "react";
import { WeatherImage } from "@/common/components/WeatherImage/WeatherImage";

export interface CurrentWeatherProps {
    forecast: CurrentWeather,
    unit: string,
}

export const CurrentWeatherComponent = ({forecast, unit}: CurrentWeatherProps) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec' ];

    useEffect(() => {
        console.log(forecast)
    }, [])

    const getDate = () => {
        const today = new Date(Date.now());
        const { day, month, date } = { day: today.getDay(), month: today.getMonth(), date: today.getDate() };
        return `${days[day]}. ${date} ${months[month]}`
    }

    return (
        <aside className={styles.aside}>
            <div className={styles.head}>
                <ButtonComponent label="Search for places" />
                <IconButton icon="my_location" />
            </div>

            <div className={styles.bgImg}>
                <div className={styles.imgContainer}>
                    <img src={WeatherImage(forecast?.weathercode)} alt="weather-img" width={'100%'}/>
                </div>
            </div>

            <div className={styles.temperatureContainer}>
                <span className={styles.temperature}>{forecast?.temperature}</span>
                <span className={styles.unit}>{unit === 'celsius' ? '°C' : '°F'}</span>
            </div>

            <div className={styles.footer}>
                <span className="font">Today · { getDate() }</span>
            </div>
        </aside>
    )
}