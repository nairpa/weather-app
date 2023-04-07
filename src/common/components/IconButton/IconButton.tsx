import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import styles from "./IconButton.module.css";

export interface IconButtonProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: string;
}

export const IconButton = ({icon, ...props}: IconButtonProps) => {
    return (
        <button className={styles.iconContainer} {...props}>
            <span className={styles.font}>
                {icon}
            </span>
        </button>
    )
}