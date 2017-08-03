<template lang="pug">
  #app.container
    .title.has-text-centered
      img(src="./assets/logo-01.svg")
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
@import "~style"
html
    font-size: 100%
    background: url("https://unsplash.it/900/420?image=1068") no-repeat
    background-size: cover
body
    margin: 0
.title
  margin-top: 20px
</style>
