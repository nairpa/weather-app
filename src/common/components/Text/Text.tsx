import styles from "./Text.module.css";

export interface TextProps {
    text: string,
    className?: string,
}
export const Text = ({ text, className, ...props}:TextProps) => {
    return (
        <h3 className={`${styles.font} ${className}`}>{text}</h3>
    )
}