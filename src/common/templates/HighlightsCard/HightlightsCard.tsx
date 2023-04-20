import { Card, CardFooter, CardTitle } from "@/common/components/Card/Card"
import styles from "./HightlightsCard.module.css";
import { FabIcon } from "@/common/components/FabIcon/FabIcon";
import { Text } from "@/common/components/Text/Text";

interface HighlightsCardProps {
    title: string,
    value: any,
    unit: any,
}

export const HightlightsCard = ({ title, value, unit }:HighlightsCardProps) => {
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
                        <FabIcon icon={'air'}/>
                        <Text text={"wsw"} />
                    </div>
                </CardFooter>
            </div>
        </Card>
    )
}