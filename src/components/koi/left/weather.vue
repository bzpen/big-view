<template>
  <div>
    天气
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    mounted(){
      this.getWeather()
    },
    methods:{
      // 实时天气获取
      getWeather(){
        axios.get("https://restapi.amap.com/v3/weather/weatherInfo",{
          params: {
            city:110101,
            key:"166fa393397af6ff8738539d6adaccf5"
          }
        }).then(res => {
          console.log(res);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
