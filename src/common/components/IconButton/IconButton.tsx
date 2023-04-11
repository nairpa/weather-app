import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import styles from "./IconButton.module.css";

export interface IconButtonProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon?: string;
    name?: string
}

export const IconButton = ({icon, name, ...props}: IconButtonProps) => {
    return (
        <button className={styles.iconContainer} {...props}>
            <span className={styles.font}>
                {icon}
            </span>
            <span className={styles.bold}>{name}</span>
        </button>
    )
}