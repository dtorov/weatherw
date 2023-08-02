<template>
      <h1>MainView</h1>
      <WeatherData />
      <GithubIcon size="1x"></GithubIcon>
</template>

<script>
import { GithubIcon } from 'vue-feather-icons'
import WeatherData from '@/components/WeatherData'

export default {
  name: 'MainView',
  components: {
    WeatherData,
    GithubIcon
  },
  computed: {
  },
  methods: {
    initData () {
      // this.fetchWeatherData(this.$store.state.defaultSearch)
    }
  },
  created () {
    this.initData()
  }
}

</script>
