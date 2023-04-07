import { Card, CardFooter, CardImage, CardTitle } from "@/common/components/Card/Card"
import { Text } from "@/common/components/Text/Text"

export const WeatherDayCard = () => {
    return (
    <Card>
        <div className='width flex col'>
          <CardTitle title='Tomorrow'/>
          <CardImage image="/images/Hail.png" />
        </div>
        <CardFooter>
          <div className="flex">
            <Text text={"16°"} />
            <Text text={"10°"} className='text-light'/>
          </div>
        </CardFooter>
      </Card>
    )
}