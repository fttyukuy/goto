<template>
  <div>
    <div class="list-item"
      v-for='(item, index) in list'
      :key='index'
    >
      <div class="list-title border-bottom">
        <span class="title-icon"></span>
        {{item.title}}
      </div>
      <div v-if='item.children' class='list-children'>
        <detail-list :list='item.children'></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .list-item
    width: 100%
    .list-title
      position: relative
      padding-left: .6rem
      line-height: .8rem
      font-size: .3rem
      .title-icon
        display: inline-block
        position: absolute
        width: .36rem
        height: .36rem
        top: .26rem
        left: .2rem
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right: .1rem
        background-size: .4rem 3rem
    .list-children
      padding-left: .3rem
</style>
