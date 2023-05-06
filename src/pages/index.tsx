import { ForecastContext } from '@/common/context/ForecastContext'
import { useGeolocation } from '@/common/hooks/useGeolocation'
import { Forecast, ForecastService } from '@/common/services/ForecastService'
import { Location } from '@/common/services/GeocodingService'
import { CurrentWeatherComponent } from '@/common/templates/CurrentWeather/CurrentWeather'
import { Header } from '@/common/templates/Header/Header'
import { TodaysHightlights } from '@/common/templates/TodaysHighlights/TodaysHightlights'
import { WeatherForecast } from '@/common/templates/WeatherForecast/WeatherForecast'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const { latitude, longitude } = useGeolocation();
  const [ forecast, setForecast ] = useState<Forecast>({} as Forecast);
  const [ unit, setUnit ] = useState<'celsius' | 'fahrenheit'>('celsius');
  const [ location, setLocation] = useState<Location | null>({
    latitude,
    longitude,
    city: 'Current'
  });

  useEffect(() => {
    if(latitude && longitude) {
      getForecast()
    }
  }, [latitude, longitude])

  const getForecast = async() => {
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

  return (
    <>
      <Head>
        <title>Weatherapp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ForecastContext.Provider value={{ forecast, setForecast, unit, setUnit, location, setLocation}}>
        <div className='aside'>
          <CurrentWeatherComponent />
        </div>
        <div className="w-full">
          <Header />
          <main className='main'>
            <div className='current-w'>
              <CurrentWeatherComponent />
            </div>
            <section className="section-a">
              <WeatherForecast />
              <TodaysHightlights />
            </section>
          </main>
        </div>
      </ForecastContext.Provider>
    </>
  )
}
