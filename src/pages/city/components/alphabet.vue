<template>
  <div class='alphabet'>
    <ul class="list">
      <li class="item"
        v-for='(item, index) of letters'
        :key='index'
        :ref='item'
        @touchstart.prevent = 'handleTouchStart'
        @touchmove = 'handleTouchMove'
        @touchend = 'handleTouchEnd'
        @click = 'handleClick'
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    citys: Object
  },
  data () {
    return {
      touchStatus: false,
      ATop: 0,
      timer: null
    }
  },
  updated () {
    this.ATop = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.citys) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          console.log(this.ATop)
          let curTop = e.touches[0].clientY
          let index = Math.floor((curTop - this.ATop) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 10)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
   .list
    position: absolute
    right: 0
    top: 0
    width: .6rem
    height: 100%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    .item
      line-height: .4rem
      color: $bgColor
</style>
