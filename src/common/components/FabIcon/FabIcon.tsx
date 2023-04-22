import styles from "./FabIcon.module.css";

export interface FabIconProps {
    icon: 'air' | 'cloudy' | 'visibility' | 'water_drop';
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