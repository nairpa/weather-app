import { ICountries } from "@/common/services/GeocodingService"
import styles from "./SearchItem.module.css";
import { MouseEvent } from "react";

interface SearchInputProps {
    country: ICountries,
    handleClick: (event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>, country: ICountries) => void,
}

export const SearchItem = ({country, handleClick}: SearchInputProps) => {
    return (
        <li className={styles.listItem} onClick={(e) => handleClick(e, country)}>
            <span className={styles.container}>
                <span>{country.name}, {country.country}</span><span className={styles.icon}>chevron_right</span>
            </span>
        </li>
    )
}