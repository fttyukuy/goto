<template>
    <div>
      <div class='search'>
        <input v-model='keyword' type="text" placeholder='请输入城市名或拼音' class='search-input'>
      </div>
      <div class="search-content" v-show='keyword' ref='search'>
      <ul>
        <li class='search-item border-bottom'
          v-for='(item, index) of list'
          :key='index'
          @click='handleCityClick(item)'
        >
          {{item}}
        </li>
        <li class='search-item' v-show='hasList'>未找到要匹配的城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      timer: null,
      list: []
    }
  },
  methods: {
    handleCityClick (value) {
      this.changeCity(value)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    hasList () {
      return !this.list.length
    }
  },
  props: {
    citys: Object
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.citys) {
          this.citys[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value.name)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .64rem
      border-radius: .1rem
      text-align: center
      color: #666
      padding: 0 .1rem
  .search-content
    overflow: hidden
    position: absolute
    z-index: 1
    top: 1.58rem
    bottom: 0
    left: 0
    right: 0
    background: #eee
    .search-item
      line-height: .6rem
      padding-left: .1rem
      background: #fff
      color: #666
</style>
