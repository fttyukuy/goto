<template>
  <div class='header'>
    <router-link class='header-back' to='/'>
       <span class="iconfont">&#xe682;</span>
    </router-link>
    <!-- <p class="header-title">{{content}}</p> -->
    <p class="header-title"><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: 'CHeader'
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
  .header
    width: 100%
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    position: relative
    .header-title
      width: 100%
      text-align: center
      font-size: .36rem
      color: #fff
    .header-back
      position: absolute
      left: .1rem
      color: #fff
      .iconfont
        font-size: .5rem
</style>
