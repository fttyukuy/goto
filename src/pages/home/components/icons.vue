<template>
  <div class='icons'>
    <swiper :options="swiperOption">
      <swiper-slide v-for='(page, index) of pages' :key='index'>
        <router-link
          class='icons-item'
          v-for='item of page'
          :key='item.id'
          :to="{name: 'Category', query: {title: item.desc}}"
        >
          <img :src="item.imgUrl" class='icons-img'>
          <span class='icons-desc'>{{item.desc}}</span>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  props: {
    iconList: {
      type: Array
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
@import '~style/mixins.styl'
  .icons >>> .swiper-slide
    width: 100%
    height: 3.7rem
    display: flex
    flex-wrap: wrap
  .icons
    width: 100%
    height: 3.7rem
    margin-top: .2rem
    .icons-item
      width: 25%;
      height: 1.85rem
      text-align: center
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      .icons-img
        width: 60%
      .icons-desc
        display: inline-block
        width: 100%
        text-align: center
        color: $fontSizeColor
        line-height: 2
        ellipsis()
</style>
