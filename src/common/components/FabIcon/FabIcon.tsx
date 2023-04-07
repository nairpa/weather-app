import styles from "./FabIcon.module.css";

export interface FabIconProps {
    icon: string;
}

export const FabIcon = ({icon}: FabIconProps) => {
    return (
        <div className={styles.iconContainer}>
            <span className={styles.font}>
                {icon}
            </span>
        </div>
        
    )
}