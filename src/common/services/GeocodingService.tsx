import { axiosInstanceGeocoding } from "../utils/AxiosInstance";

export interface ICountries {
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    elevation: number,
    feature_code: string,
    country_code: string,
    country: string,
}

export const GeocodingService = {
    getGeocoding: async (queryParams: any)  => {
        const params = new URLSearchParams(queryParams).toString();
        let url = 'search'; 

        if(queryParams?.name) {
            url = `${url}?${params}`
        }

        return axiosInstanceGeocoding.get(url)
    }
}