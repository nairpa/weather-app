import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { Forecast } from "../services/ForecastService";

export type ForecastContextType = {
    forecast: Forecast | null;
    setForecast: Dispatch<SetStateAction<Forecast>>;
    unit: 'celsius' | 'fahrenheit',
    setUnit: Dispatch<SetStateAction<'celsius' | 'fahrenheit'>>
}

export const ForecastContext = createContext<ForecastContextType | null>(null);

const ForecastProvider = ({children}: React.PropsWithChildren) => {
    const [ forecast, setForecast ] = useState<Forecast>({} as Forecast);
    const [ unit, setUnit ] = useState<'celsius' | 'fahrenheit'>('celsius');

    return(
        <ForecastContext.Provider value={{ forecast, setForecast, unit, setUnit }}>
            { children }
        </ForecastContext.Provider>
    )
}

export default ForecastProvider;