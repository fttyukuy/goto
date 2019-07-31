<template>
  <div>
    <!-- <div class="detail-header" v-show='showHeader' :style='opacity'>
      <router-link class='header-back' to='/'>
       <span class="iconfont">&#xe682;</span>
      </router-link>
      <p class="header-title">景点详情</p>
    </div> -->
    <div class="detail-header" v-show='showHeader' :style='opacity'>
      <c-header ><slot>景点详情</slot></c-header>
    </div>
    <router-link
      tag= 'div'
      class="detail-back"
      to='/'
      v-show='!showHeader'
    >
      <span class="iconfont back-icon">&#xe682;</span>
    </router-link>
  </div>
</template>

<script>
import CHeader from 'common/header/header'
export default {
  name: 'DetailHeader',
  components: {
    CHeader
  },
  data () {
    return {
      showHeader: false,
      opacity: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60 && top <= 140) {
        this.opacity.opacity = (top - 60) / 80
        this.showHeader = true
      } else if (top > 140) {
        this.showHeader = true
      } else {
        this.showHeader = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang='stylus' scoped>
@import '~style/varibles.styl'
  .detail-header
    z-index: 3
    width: 100%
    position: fixed
    top: 0
    left: 0
  .detail-back
    z-index: 3
    width: 1rem
    height: 1rem
    border-radius: 50%
    position: absolute
    top: .3rem
    left: .3rem
    background: rgba(0, 0, 0, .5)
    text-align: center
    line-height: 1rem
    color: #fff
    .back-icon
      font-size: .4rem
</style>
