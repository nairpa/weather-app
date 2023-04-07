import { Card, CardFooter, CardTitle } from "@/common/components/Card/Card"
import styles from "./HightlightsCard.module.css";
import { FabIcon } from "@/common/components/FabIcon/FabIcon";
import { Text } from "@/common/components/Text/Text";

export const HightlightsCard = () => {
    return (
        <Card>
            <div className={styles.cardContent}>
                <CardTitle title="Wind status" />
                <div>
                    <span className={`${styles.bold} ${styles.fontLarge}`}>7</span>
                    <span className={styles.font}>mph</span>
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