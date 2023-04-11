export const WeatherImage = (weather: number) => {
    const getImage = () => {
        switch(weather) {
          /** 
           * Clear
           */
          case 0:
            return "/images/Clear.png"
          /**
           * Mainly clear
           */
          case 1:
          case 2:
          case 3:
            return "/images/LightCloud.png"
          /**
           * Fog
           */
          case 45:
          case 48:
            return "/images/HeavyCloud.png"
          /**
           * Drizzle
           */
          case 51:
          case 53:
          case 55:
            return "/images/LightRain.png"
          /**
           * Freezing Drizzel
           */
          case 56:
          case 57:
            return "/images/Sleet.png"
          /**
           * Rain
           */
          case 61:
          case 63:
          case 65:
            return "/images/HeavyRain.png"
          /**
           * Freezing rain
           */
          case 66:
          case 67:
            return "/images/Sleet.png"
          /**
           * Snow fall
           */
          case 71:
          case 73:
          case 75:
            return "/images/Snow.png"
          /**
           * Snow grains
           */
          case 77:
            return "/images/Hail.png"
          /**
           * Rain showers
           */
          case 80:
          case 81:
          case 82:
            return "/images/Shower.png"
          /**
           * Snow showers
           */
          case 85:
          case 86:
            return "/images/Snow.png"
          /**
           * Thunderstorm
           */
          case 95:
            return "/images/Thunderstorm.png"
          /**
           * Thunderstorm with hail
           */
          case 96:
          case 99:
            return "/images/Thunderstorm.png"
        }
      }

  return getImage()
}