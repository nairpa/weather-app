import { useEffect } from "react";
import { HightlightsCard } from "../HighlightsCard/HightlightsCard";

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
            <HightlightsCard title={'Cloud cover'} value={hightlights.hourly['cloudcover_low'][0]} unit={hightlights?.hourly_units['cloudcover_low']}/>
            <HightlightsCard title={'Precipitation'} value={hightlights.hourly['precipitation_probability'][0]}  unit={hightlights?.hourly_units['precipitation_probability']} />
            <HightlightsCard title={'Windspeed'} value={hightlights.hourly['windspeed_10m'][0]} unit={hightlights?.hourly_units['windspeed_10m']}/>
            <HightlightsCard title={'Visibility'} value={hightlights.hourly['visibility'][0]} unit={hightlights?.hourly_units['visibility']} />
        </> 
    )
}