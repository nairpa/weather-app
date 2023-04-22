import { useEffect } from "react";
import { HightlightsCard } from "../HighlightsCard/HightlightsCard";
import styles from "./TodayHighlights.module.css";
import { Heading } from "@/common/components/Heading/Heading";

interface TodaysHightlightsProps {
    hightlights: any;
}

export const TodaysHightlights = ({ hightlights, ...props }: TodaysHightlightsProps) => {
    useEffect(() => {
        getHighlights()
    }, [hightlights])
    
    const getHighlights = () => {
        const variables = ['cloudcover_low', 'windspeed_10m', 'precipitation_probability', 'visibility'];
        variables.forEach(variable => hightlights?.hourly[variable].sort((a: any, b: any) => b - a))
    }

    return (
        <>
            <Heading text={"Today's Hightlights"} />
            <div className={styles.container}>
                <HightlightsCard title={'Cloud cover'} value={hightlights?.hourly['cloudcover_low'][0]} unit={hightlights?.hourly_units['cloudcover_low']} icon={'cloudy'}/>
                <HightlightsCard title={'Precipitation'} value={hightlights?.hourly['precipitation_probability'][0]}  unit={hightlights?.hourly_units['precipitation_probability']} icon={'water_drop'} />
                <HightlightsCard title={'Windspeed'} value={hightlights?.hourly['windspeed_10m'][0]} unit={hightlights?.hourly_units['windspeed_10m']} icon={'air'} />
                <HightlightsCard title={'Visibility'} value={hightlights?.hourly['visibility'][0]} unit={hightlights?.hourly_units['visibility']} icon={'visibility'} />
            </div>
        </> 
    )
}