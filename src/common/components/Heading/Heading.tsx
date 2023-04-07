import styles from "./Heading.module.css";

export interface HeadingProps {
    text: string,
    className?: string,
}
export const Heading = ({ text, className, ...props}:HeadingProps) => {
    return (
        <h3 className={`${styles.font} ${className}`}>{text}</h3>
    )
}