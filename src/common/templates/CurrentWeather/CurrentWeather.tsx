import { ButtonComponent } from "@/common/components/Button/Button"
import { IconButton } from "@/common/components/IconButton/IconButton"
import styles from "./CurrentWeather.module.css";
import { CurrentWeather } from "@/common/services/ForecastService";
import { useEffect, useState } from "react";
import { WeatherImage } from "@/common/components/WeatherImage/WeatherImage";
import { TextInput } from "@/common/components/TextInput/TextInput";
import { GeocodingService, ICountries } from "@/common/services/GeocodingService";
import { SearchItem } from "@/common/components/SearchItems/SearchItem";

export interface CurrentWeatherProps {
    forecast: CurrentWeather,
    unit: string,
    setLocation: any,
}

export const CurrentWeatherComponent = ({forecast, setLocation, unit}: CurrentWeatherProps) => {
    const [ open, setOpen ] = useState(false);
    const [ countries, setCountries ] = useState<ICountries[]>([]);
    const [ search, setSearch ] = useState<string>('');

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec' ];
    
    useEffect(() => {

    }, [countries])

    const getDate = () => {
        const today = new Date(Date.now());
        const { day, month, date } = { day: today.getDay(), month: today.getMonth(), date: today.getDate() };
        return `${days[day]}. ${date} ${months[month]}`
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

    const handleSearchForecast = () => {

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
                <div>
                    <ul className={styles.list}>
                        { countries.map(country => {
                            return (
                                <SearchItem country={country} key={country.id} />
                            )
                        })}
                    </ul>
                </div>
            </aside>
        
            <aside className={styles.aside}>
                <div className={styles.head}>
                    <ButtonComponent label="Search for places" onClick={() => handleClick()}/>
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
                    <div className={styles.location}>
                        <span className={styles.fontIcon}>location_on</span>
                        <span> Current </span>
                    </div>
                </div>
            </aside>
        </>
    )
}