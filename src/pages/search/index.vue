<template>
  <div>
    <c-header ><span>搜索</span></c-header>
    <search-input/>
    <h2 class="search-info">开发中~~~</h2>
  </div>
</template>

<script>
import CHeader from 'common/header/header'
import SearchInput from './components/search'
export default {
  name: 'Search',
  components: {
    CHeader,
    SearchInput
  }
}
</script>

<style lang="stylus" scoped>
  .search-info
    line-height: 3;
    text-align: center;
    color: #777;
</style>
