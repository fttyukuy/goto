<template>
  <div>
    <home-header/>
    <home-swiper :swiperList='swiperList'/>
    <home-icons :iconList='iconList'/>
    <home-recommend :recommendList='recommendList'/>
    <home-weekend :weekendList='weekendList'/>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then((res) => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
          }
        })
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.getInfo()
      this.lastCity = this.city
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>

</style>
