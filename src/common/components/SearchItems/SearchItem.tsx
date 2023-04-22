import { ICountries } from "@/common/services/GeocodingService"
import styles from "./SearchItem.module.css";

interface SearchInputProps {
    country: ICountries,
}

export const SearchItem = ({country}: SearchInputProps) => {
    return (
        <li className={styles.listItem}>
            <span className={styles.container}>
                <span>{country.name}, {country.country}</span><span className={styles.icon}>chevron_right</span>
            </span>
        </li>
    )
}