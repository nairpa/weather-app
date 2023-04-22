import { Card, CardFooter, CardImage, CardTitle } from "@/common/components/Card/Card"
import { Text } from "@/common/components/Text/Text"
import { WeatherImage } from "@/common/components/WeatherImage/WeatherImage";

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

    return (
    <Card>
        <div className='width flex col'>
          <CardTitle title={getDate()} />
          <CardImage image={WeatherImage(weather)} />
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