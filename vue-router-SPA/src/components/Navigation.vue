<template lang="pug">
nav.gnb
  ul
    li
      router-link(to='/', exact='', active-class='current-page') home
    li
      router-link(to='/Login', active-class='current-page') login
    li
      router-link(to='/SignUp', active-class='current-page') signup
    li
      router-link(to='/Password', active-class='current-page') password
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="sass" scoped>

</style>