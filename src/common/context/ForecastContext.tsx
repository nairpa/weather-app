import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { Forecast } from "../services/ForecastService";
import { Location } from "../services/GeocodingService";

export type ForecastContextType = {
    forecast: Forecast | null;
    setForecast: Dispatch<SetStateAction<Forecast>>;
    unit: 'celsius' | 'fahrenheit',
    setUnit: Dispatch<SetStateAction<'celsius' | 'fahrenheit'>>,
    location: Location | null,
    setLocation: Dispatch<SetStateAction<Location | null>>
}

export const ForecastContext = createContext<ForecastContextType | null>(null);

const ForecastProvider = ({children}: React.PropsWithChildren) => {
    const [ forecast, setForecast ] = useState<Forecast>({} as Forecast);
    const [ unit, setUnit ] = useState<'celsius' | 'fahrenheit'>('celsius');
    const [ location, setLocation ] = useState<Location | null>(null);

    return(
        <ForecastContext.Provider value={{ forecast, setForecast, unit, setUnit, location, setLocation }}>
            { children }
        </ForecastContext.Provider>
    )
}

export default ForecastProvider;