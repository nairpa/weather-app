import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label: string;
    color?: 'primary' | 'accent';
    size?: 'md' | 'lg';
}

export const ButtonComponent = ({label, size='md', color='primary', ...props}: ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[size]} ${styles[color]}`}>{label}</button>
    )
}