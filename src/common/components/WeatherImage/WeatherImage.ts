export const WeatherImage = (weather: number) => {
    const getImage = () => {
        switch(weather) {
          /** 
           * Clear
           */
          case 0:
            return "public/images/Clear.png"
          /**
           * Mainly clear
           */
          case 1:
          case 2:
          case 3:
            return "public/images/LightCloud.png"
          /**
           * Fog
           */
          case 45:
          case 48:
            return "public/images/HeavyCloud.png"
          /**
           * Drizzle
           */
          case 51:
          case 53:
          case 55:
            return "public/images/LightRain.png"
          /**
           * Freezing Drizzel
           */
          case 56:
          case 57:
            return "public/images/Sleet.png"
          /**
           * Rain
           */
          case 61:
          case 63:
          case 65:
            return "public/images/HeavyRain.png"
          /**
           * Freezing rain
           */
          case 66:
          case 67:
            return "public/images/Sleet.png"
          /**
           * Snow fall
           */
          case 71:
          case 73:
          case 75:
            return "public/images/Snow.png"
          /**
           * Snow grains
           */
          case 77:
            return "public/images/Hail.png"
          /**
           * Rain showers
           */
          case 80:
          case 81:
          case 82:
            return "public/images/Shower.png"
          /**
           * Snow showers
           */
          case 85:
          case 86:
            return "public/images/Snow.png"
          /**
           * Thunderstorm
           */
          case 95:
            return "public/images/Thunderstorm.png"
          /**
           * Thunderstorm with hail
           */
          case 96:
          case 99:
            return "public/images/Thunderstorm.png"
        }
      }

  return getImage()
}