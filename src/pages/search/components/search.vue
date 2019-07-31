<template>
    <div>
      <div class='search'>
        <input type="text" placeholder='请输入城市/景点/主题' class='search-input'>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput'
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .64rem
      border-radius: .1rem
      text-align: center
      color: #666
      padding: 0 .1rem
</style>
