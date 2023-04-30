import { ButtonComponent } from "@/common/components/Button/Button"
import { IconButton } from "@/common/components/IconButton/IconButton"
import styles from "./CurrentWeather.module.css";
import { ForecastService } from "@/common/services/ForecastService";
import { useContext, useEffect, useState } from "react";
import { WeatherImage } from "@/common/components/WeatherImage/WeatherImage";
import { TextInput } from "@/common/components/TextInput/TextInput";
import { GeocodingService, Countries } from "@/common/services/GeocodingService";
import { SearchItem } from "@/common/components/SearchItems/SearchItem";
import { ForecastContext, ForecastContextType } from "@/common/context/ForecastContext";
import { DAYS, MONTHS } from "@/common/constants/date.contants";
import { useGeolocation } from "@/common/hooks/useGeolocation";

export const CurrentWeatherComponent = () => {
    const { forecast, setForecast, unit, location, setLocation } = useContext(ForecastContext) as ForecastContextType;
    const [ open, setOpen ] = useState(false);
    const [ countries, setCountries ] = useState<Countries[]>([]);
    const [ search, setSearch ] = useState<string>('');
    const { latitude, longitude} = useGeolocation();

    useEffect(() => {

    }, [countries])

    const getDate = () => {
        const today = new Date(Date.now());
        const { day, month, date } = { day: today.getDay(), month: today.getMonth(), date: today.getDate() };
        return `${DAYS[day]}. ${date} ${MONTHS[month]}`
    }

    const handleClick = () => {
        setOpen(!open);
    }

    const handleChange = (event: any) => {
       setSearch(event.target.value)
    }
    
    const handleSearch = () => {
        getGeocoding()
    }

    const handleCurrentLocation = () => {
        setLocation({
            latitude,
            longitude,
            city: 'Current'
        })

        getForecast(latitude, longitude)
    }

    const handleSearchForecast = (event: any, country: Countries) => {
        const { latitude, longitude, name } = country;
        setLocation({
            ...location,
            latitude,
            longitude,
            city: name,
            country: country.country
        })
        getForecast(latitude, longitude);
    }

    const getForecast = async(latitude: number, longitude: number) => {
        try {
            const res = await ForecastService.getForecast({
                latitude: latitude,
                longitude: longitude,
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

    const getGeocoding = async() => {
        try {
            const res = await GeocodingService.getGeocoding({
                name: search
            })
  
            setCountries(res.data.results)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <>
            <aside className={`${styles.aside} ${open ? styles['show'] : styles['hidden']}`}>
                <div className={styles.closeBtn}>
                    <IconButton icon="close" onClick={() => handleClick()} color={'secondary'}/>
                </div>
                <div className={styles.searchInput}>
                    <TextInput icon={"search"} label={"search location"} onChange={(e) => handleChange(e)} value={search} />
                    <ButtonComponent size="lg" label={"search"} color="accent" onClick={() => handleSearch()}/>
                </div>
                <div className={styles.searchList}>
                    <ul className={styles.list}>
                        { countries?.map(country => {
                            return (
                                <SearchItem country={country} key={country.id} handleClick={handleSearchForecast} />
                            )
                        })}
                    </ul>
                </div>
            </aside>
        
            <aside className={styles.aside}>
                <div className={styles.head}>
                    <ButtonComponent label="Search for places" onClick={() => handleClick()}/>
                    <IconButton icon="my_location" onClick={() => handleCurrentLocation()} />
                </div>

                <div className={styles.bgImg}>
                    <div className={styles.imgContainer}>
                        <img src={WeatherImage(forecast?.current_weather?.weathercode)} alt="weather-img" width={'100%'}/>
                    </div>
                </div>

                <div className={styles.temperatureContainer}>
                    <span className={styles.temperature}>{forecast?.current_weather?.temperature}</span>
                    <span className={styles.unit}>{unit === 'celsius' ? '°C' : '°F'}</span>
                </div>

                <div className={styles.footer}>
                    <span className="font">Today · { getDate() }</span>
                    <div className={styles.location}>
                        <span className={styles.fontIcon}>location_on</span>
                        <span> { `${location?.city} ${location?.country ?? ''}` } </span>
                    </div>
                </div>
            </aside>
        </>
    )
}