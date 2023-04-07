import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label: string;
}

export const ButtonComponent = ({label, ...props}: ButtonProps) => {
    return (
        <button className={styles.button}>{label}</button>
    )
}