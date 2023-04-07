import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./TextInput.module.css";

export interface TextInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string,
    icon?: string
}

export const TextInput = ({ label, icon, ...props }: TextInputProps) => {
    return (
        <div className={styles.input}>
            <span className={styles.icon}>{icon}</span>
            <input {...props} placeholder={label} />
        </div>
        
    )
}