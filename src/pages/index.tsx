import { IconButton } from '@/common/components/IconButton/IconButton'
import { useGeolocation } from '@/common/hooks/useGeolocation'
import { Forecast, ForecastService } from '@/common/services/ForecastService'
import { CurrentWeatherComponent } from '@/common/templates/CurrentWeather/CurrentWeather'
import { Header } from '@/common/templates/Header/Header'
import { TodaysHightlights } from '@/common/templates/TodaysHighlights/TodaysHightlights'
import { WeatherForecast } from '@/common/templates/WeatherForecast/WeatherForecast'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const { latitude, longitude } = useGeolocation();
  const [ unit, setUnit] = useState<'celsius' | 'fahrenheit'>('celsius');
  const [ forecast, setForecast ] = useState<Forecast | null>(null);
  const [ location, setLocation] = useState<any>();

  useEffect(() => {
    if(latitude && longitude) {
      setLocation({
        latitude: latitude,
        longitude: longitude,
      })

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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CurrentWeatherComponent forecast={forecast?.current_weather} setLocation={setLocation} unit={unit}/>
      <div className="w-full">
        <Header />
        <main className='main'>
          <section className="section-a">
            <WeatherForecast forecast={forecast} />
            <TodaysHightlights hightlights={forecast}/>
          </section>
        </main>
      </div>
    </>
  )
}
