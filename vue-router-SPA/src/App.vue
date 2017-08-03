<template lang="pug">
  #app.container
    .is-size-1.has-text-centered Bond
    hr
    router-view
    app-nav
</template>

<script>
import Navigation from './components/Navigation';
export default {
  name: 'app',
  components: {
    appNav: Navigation
  },
  data () {
    return {
      }
    }
  }
</script>

<style lang="sass">
@import "~bulma"
html
    font-size: 100%
    background: #eee
body
    margin: 0
hr
    margin: 0
    height: 2px
    background: #4a4a4a

</style>
