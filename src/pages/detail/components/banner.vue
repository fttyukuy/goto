<template>
  <div>
    <div class='banner' @click='handleShowGallary'>
      <img class='banner-img' :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-num"><span class="iconfont">&#xe612;</span>{{gallaryImgs.length}}</div>
      </div>
    </div>
    <fade-animate>
      <common-gallary v-show="showGallary" :imgs ='gallaryImgs' @close='handleCloseGallary'/>
    </fade-animate>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary'
import FadeAnimate from 'common/animation/fade'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimate
  },
  methods: {
    handleShowGallary () {
      this.showGallary = true
    },
    handleCloseGallary () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      bottom: 0
      left: 0
      right: 0
      padding: 0 .2rem
      display: flex
      align-items: center
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex: 1
        height: .6rem
        line-height: .6rem
        font-size: .32rem
      .banner-num
        height: .4rem
        line-height: .4rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .5)
        .iconfont
          margin-right: .1rem
</style>
