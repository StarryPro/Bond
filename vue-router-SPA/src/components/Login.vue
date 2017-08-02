<template lang="pug">
  #app.container
    .field
      p.control.has-icons-left.has-icons-right
        input.input(type='email', placeholder='이메일을 입력해주세요:)')
        span.icon.is-small.is-left
          i.fa.fa-envelope
        span.icon.is-small.is-right
          i.fa.fa-check
    .field
      p.control.has-icons-left
        input.input(type='password', placeholder='비밀번호를 입력해주세요:)')
        span.icon.is-small.is-left
          i.fa.fa-lock
    .field
      p.control
        button.button.is-primary 로그인하기
      p.control
        button.button.is-link 비밀번호를 잊으셨나요?
        button.button.is-link 처음이신가요? 회원가입

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