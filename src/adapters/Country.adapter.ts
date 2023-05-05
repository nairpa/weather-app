import { Country, EndpointCountry } from "../models/Country.model";

export const createCountryAdapter = (country: EndpointCountry) => {
    const adaptedCountry: Country = {
        name: country.name,
        country: country.country,
        id: country.id,
        latitude: country.latitude,
        longitude: country.longitude
    }

    return adaptedCountry;
}