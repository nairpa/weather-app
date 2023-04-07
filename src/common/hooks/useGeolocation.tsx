import { useEffect, useState } from "react"

export const useGeolocation = () => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setLatitude(pos.coords.latitude);
            setLongitude(pos.coords.longitude);
        })
    })

    return { latitude, longitude }
}