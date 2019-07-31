<template>
  <div class='weekend'>
    <div class="title">周末去哪儿</div>
    <ul class="weekend-wrapper">
      <li class="weekend-item border-bottom"
          v-for='item of weekendList'
          :key='item.id'>
        <img :src="item.imgUrl" class='item-img'>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl'
  .title
    width: 100%
    line-height: 0.8rem
    padding-left: .2rem
    margin-top: .2rem
    background: #ccc
  .weekend-item
    width: 100%;
    // height: 1.9rem
    .item-img
      width: 100%
    .item-info
      padding: 0.1rem
      min-width: 0
      .item-title
        line-height: .6rem
        font-size: .3rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        margin-top: .3rem
        padding: 0  .1rem
        background: #ff9300
        border-radius: .03rem
        color: #fff
</style>
