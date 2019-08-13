<template>
  <div>
    <c-header><span>城市选择</span></c-header>
    <city-search :citys='citys'/>
    <city-list
      :citys='citys'
      :hotCitys ="hotCitys"
      :letter='letter'
    />
    <city-alphabet :citys='citys' @change='handleLetter'/>
  </div>
</template>

<script>
import axios from 'axios'
import CHeader from 'common/header/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
export default {
  name: 'City',
  components: {
    CHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      citys: {},
      hotCitys: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('goto/dist/api/city.json')
        .then(this.handleCityInfo)
    },
    handleCityInfo (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.citys = data.cities
        this.hotCitys = data.hotCities
      }
    },
    handleLetter (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
