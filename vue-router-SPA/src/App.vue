<template lang="pug">
  #app.container
    h1 한번해보자
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

</style>
