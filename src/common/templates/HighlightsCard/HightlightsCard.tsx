import { Card, CardFooter, CardTitle } from "@/common/components/Card/Card"
import styles from "./HightlightsCard.module.css";
import { FabIcon, FabIconProps } from "@/common/components/FabIcon/FabIcon";

interface HighlightsCardProps {
    title: string,
    value: any,
    unit: any,
    icon: 'air' | 'cloudy' | 'visibility' | 'water_drop'
}

export const HightlightsCard = ({ title, value, unit, icon }:HighlightsCardProps) => {
    return (
        <Card>
            <div className={styles.cardContent}>
                <CardTitle title={title} />
                <div>
                    <span className={`${styles.bold} ${styles.fontLarge}`}>{value}</span>
                    <span className={styles.font}>{unit}</span>
                </div>
                <CardFooter>
                    <div className="flex">
                        <FabIcon icon={icon}/>
                    </div>
                </CardFooter>
            </div>
        </Card>
    )
}