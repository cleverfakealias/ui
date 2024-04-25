<template>
  <div class="weather-widget">
    <h2>Weather in {{ weather.name }}</h2>
    <p>{{ weather.main.temp }}°C</p>
    <p>{{ weather.weather[0].description }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      weather: null,
    }
  },
  async created() {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${process.env.NUXT_ENV_OPEN_WEATHER_API_KEY}`
    )
    this.weather = response.data
  },
}
</script>
