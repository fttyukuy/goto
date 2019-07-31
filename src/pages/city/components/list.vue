<template>
  <div class='list' ref='wrapper'>
    <div>
      <div class="area">
        <div class="area-title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="item">{{this.city}}</div>
        </div>
      </div>
      <div class="area">
        <div class="area-title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="item"
            v-for="item of hotCitys"
            :key='item.id'
            @click='handleCityClick(item.name)'
          >
            {{item.name}}
          </div>
        </div>
      </div>
      <div class="area" v-for='(item, key) of citys' :key='key' :ref='key'>
        <div class="area-title border-topbottom">{{key}}</div>
        <div class="city-list">
          <div class="city-name border-bottom"
            v-for='info of item'
            :key='info.id'
            @click='handleCityClick(info.name)'
          >
            {{info.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    citys: Object,
    hotCitys: Array,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleCityClick (value) {
      this.changeCity(value)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
  },
  watch: {
    letter () {
      if (this.letter) {
        let ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    bottom: 0
    left: 0
    right: 0
    .area-title
      line-height: .6rem
      background: #ccc
      padding-left: .2rem
    .button-list
      overflow: hidden
      padding-right: .6rem
      .item
        float: left
        width: 27%
        text-align: center
        border: .02rem solid #ccc
        border-radius: .06rem
        margin: .1rem 0 .1rem .33rem
        padding: .1rem 0
    .city-name
      line-height: .76rem
      padding-left: .2rem
</style>
