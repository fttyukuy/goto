<template>
  <div class='header'>
    <!-- <div class="header-left">
      <span class="iconfont">&#xe682;</span>
      </div> -->
    <router-link class="header-middle" to='/search'>
      <span class="iconfont">&#xe6a2;</span>
      输入城市/景点/游玩主题
    </router-link>
    <router-link class="header-right" to='/city'>
      {{this.city}}
      <span class="iconfont">&#xe614;</span>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang='stylus' scoped>
  @import '~style/varibles.styl'
  .header
    display: flex
    align-items: center
    width: 100%
    height: $headerHeight
    background: $bgColor
    // .header-left
    //   width: .64rem
    //   text-align: center
    //   color: #fff
    //   .iconfont
    //     font-size: 0.5rem
    .header-middle
      flex: 1
      background: #fff
      border-radius: 0.1rem
      height: 0.62rem
      margin: 0 0.1rem
      line-height: 0.62rem
      color: #ccc
      padding-left: .2rem
    .header-right
      min-width: 1.24rem
      padding: 0 .1rem
      text-align: center
      color: #fff
      .iconfont
        margin-left: -.08rem
</style>
