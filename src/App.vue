<template>
    <div id="app">
      <router-view></router-view>
      <FootGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script type="text/ecmascript-6">
  import FootGuide from './components/FootGuide/FootGuide'
    export default {
      components: {
        FootGuide
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width: 100%
</style>
