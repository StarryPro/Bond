<template lang="pug">
nav.gnb
  ul
    li
      router-link(to='/', exact='', active-class='current-page') Home
    li
      router-link(to='/Login', active-class='current-page') Login
    li
      router-link(to='/SignUp', active-class='current-page') SignUp
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="sass" scoped>
  html
    font-size: 100%
    background: #fff
  body
    margin: 0
</style>