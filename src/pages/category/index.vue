<template>
  <c-header><span>{{title}}</span></c-header>
</template>

<script>
import CHeader from 'common/header/header'
export default {
  name: 'Category',
  components: {
    CHeader
  },
  data () {
    return {
      title: ''
    }
  },
  mounted () {
    this.title = this.$route.query.title
  }
}
</script>

<style>
</style>
