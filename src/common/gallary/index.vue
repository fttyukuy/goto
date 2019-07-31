<template>
  <div class='gallary' @click='handleCloseGallary'>
    <div class="gallary-wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key='index'>
          <img :src="item" class='gallary-img'>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleCloseGallary () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallary-wrapper >>> .swiper-container
    overflow: inherit
  .gallary
    z-index: 4
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: #000
    .gallary-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>
