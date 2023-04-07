import { Card, CardFooter, CardImage, CardTitle } from "@/common/components/Card/Card"
import { Text } from "@/common/components/Text/Text"

export interface WeatherDayCardProps {
  max: number,
  min: number,
  weekday: string,
  weather: number,
  units: string
}

export const WeatherDayCard = ({max, min, weekday, weather, units}: WeatherDayCardProps) => {
    const days = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const months = [ 'Jan', 'Feb', 'Apr', 'Mar', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec' ];
  
    const getDate = () => {
      const day = new Date(weekday).getDay();
      const month = new Date(weekday).getMonth();
      const date = new Date(weekday).getDate();

      return `${days[day]}. ${date + 1} ${months[month]}`
    }

    const getImage = () => {
      switch(weather) {
        /** 
         * Clear
         */
        case 0:
          return "/images/Clear.png"
        /**
         * Mainly clear
         */
        case 1:
        case 2:
        case 3:
          return "/images/LightCloud.png"
        /**
         * Fog
         */
        case 45:
        case 48:
          return "/images/HeavyCloud.png"
        /**
         * Drizzle
         */
        case 51:
        case 53:
        case 55:
          return "/images/LightRain.png"
        /**
         * Freezing Drizzel
         */
        case 56:
        case 57:
          return "/images/Sleet.png"
        /**
         * Rain
         */
        case 61:
        case 63:
        case 65:
          return "/images/HeavyRain.png"
        /**
         * Freezing rain
         */
        case 66:
        case 67:
          return "/images/Sleet.png"
        /**
         * Snow fall
         */
        case 71:
        case 73:
        case 75:
          return "/images/Snow.png"
        /**
         * Snow grains
         */
        case 77:
          return "/images/Hail.png"
        /**
         * Rain showers
         */
        case 80:
        case 81:
        case 82:
          return "/images/Shower.png"
        /**
         * Snow showers
         */
        case 85:
        case 86:
          return "/images/Snow.png"
        /**
         * Thunderstorm
         */
        case 95:
          return "/images/Thunderstorm.png"
        /**
         * Thunderstorm with hail
         */
        case 96:
        case 99:
          return "/images/Thunderstorm.png"
      }
    }

    return (
    <Card>
        <div className='width flex col'>
          <CardTitle title={getDate()} />
          <CardImage image={getImage()} />
        </div>
        <CardFooter>
          <div className="flex">
            <Text text={`${max} ${units}`} />
            <Text text={`${min} ${units}`} className='text-light'/>
          </div>
        </CardFooter>
      </Card>
    )
}