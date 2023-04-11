import { IconButton } from "@/common/components/IconButton/IconButton";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={`${styles.header}`}>
            <IconButton name={'°C'} />
            <IconButton name={'°F'} />
        </header>
    )
}