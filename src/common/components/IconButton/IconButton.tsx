import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import styles from "./IconButton.module.css";

export interface IconButtonProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon?: string;
    name?: string;
    color?: 'primary' | 'secondary';
    selected?: boolean;
}

export const IconButton = ({icon, name, color='primary', selected, ...props}: IconButtonProps) => {
    return (
        <button className={`${styles.iconContainer} ${styles[color]} ${selected ? styles.selected : ''}`} {...props}>
            <span className={styles.font}>
                {icon}
            </span>
            <span className={styles.bold}>{name}</span>
        </button>
    )
}