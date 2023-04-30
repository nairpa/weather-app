import { useContext, useEffect } from "react";
import { HightlightsCard } from "../HighlightsCard/HightlightsCard";
import styles from "./TodayHighlights.module.css";
import { Heading } from "@/common/components/Heading/Heading";
import { ForecastContext, ForecastContextType } from "@/common/context/ForecastContext";

export const TodaysHightlights = () => {
    const { forecast } = useContext(ForecastContext) as ForecastContextType;
    useEffect(() => {
        getHighlights()
    }, [forecast])
    
    const getHighlights = () => {
        const variables = ['cloudcover_low', 'windspeed_10m', 'precipitation_probability', 'visibility'];
        variables.forEach(variable => forecast?.hourly?.[variable].sort((a: any, b: any) => b - a))
    }

    return (
        <>
            <Heading text={"Today's Hightlights"} />
            <div className={styles.container}>
                <HightlightsCard title={'Cloud cover'} value={forecast?.hourly?.['cloudcover_low'][0]} unit={forecast?.hourly_units?.['cloudcover_low']} icon={'cloudy'}/>
                <HightlightsCard title={'Precipitation'} value={forecast?.hourly?.['precipitation_probability'][0]}  unit={forecast?.hourly_units?.['precipitation_probability']} icon={'water_drop'} />
                <HightlightsCard title={'Windspeed'} value={forecast?.hourly?.['windspeed_10m'][0]} unit={forecast?.hourly_units?.['windspeed_10m']} icon={'air'} />
                <HightlightsCard title={'Visibility'} value={forecast?.hourly?.['visibility'][0]} unit={forecast?.hourly_units?.['visibility']} icon={'visibility'} />
            </div>
        </> 
    )
}