import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import styles from "./IconButton.module.css";

export interface IconButtonProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon?: string;
    name?: string;
    color?: 'primary' | 'secondary';
}

export const IconButton = ({icon, name, color='primary', ...props}: IconButtonProps) => {
    return (
        <button className={`${styles.iconContainer} ${styles[color]}`} {...props}>
            <span className={styles.font}>
                {icon}
            </span>
            <span className={styles.bold}>{name}</span>
        </button>
    )
}