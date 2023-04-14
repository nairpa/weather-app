import styles from './Card.module.css';
import { Text } from "../Text/Text";

export interface CardProps {
    title?: string,
    image?: string,
    children?: React.ReactNode
}

export const CardTitle = ({ title="Card title", ...props}: CardProps) => {
    return (
        <Text text={title} />
    )
}

export const CardImage = ({ image='', ...props}: CardProps) => {
    return (
        <div className={styles.centerImg}>
            <img src={image} width={100} />
        </div>
    )
}

export const CardFooter = ({children, ...props}: CardProps) => {
    return (
        <div>
            { children }
        </div>
    )
}

export const Card = ({ children, ...props}: CardProps) => {
    return(
        <div className={styles.cardContainer}>
           { children }
        </div>
    )
}