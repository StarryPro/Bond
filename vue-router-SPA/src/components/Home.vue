<template lang="pug">
  #app.container
      .field
      p.control
        button.button.is-primary 이메일로 로그인하기
      .field
      p.control
        button.button.is-primary 페이스북으로 로그인하기
      
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
