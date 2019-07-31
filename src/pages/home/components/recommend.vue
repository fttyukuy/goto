<template>
  <div class='recommend'>
    <div class="title">热销推荐</div>
    <ul class="recommend-wrapper">
      <router-link
        tag = 'li'
        class="recommend-item border-bottom"
        v-for='item of recommendList'
        :key='item.id'
        :to="'/detail/' + item.id "
      >
        <img :src="item.imgUrl" class='item-img'>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class='item-button'>查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: {
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
  .recommend-item
    width: 100%;
    height: 1.9rem
    display: flex
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: 0.1rem
    .item-info
      flex: 1
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
