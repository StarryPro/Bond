<template lang="pug">
  #app.container
    h1.is-size-4.has-text-centered.title 비밀번호 찾기
    .box.column.is-half.is-offset-one-quarter
      .field
        p.control.column.is-half.is-offset-one-quarter
          input.input(type='email', placeholder='이메일을 입력해주세요:)')
      .field
        p.control.column.is-2.is-offset-5
          router-link(to='/#', active-class='current-page')
            button.button.is-primary 보내기
      .field
        p.control.column.is-half.is-offset-one-quarter
          a(href='#').is-link.column 비밀번호가 생각나셨나요? 로그인
          a(href='/#/SignUp').is-link.column 처음이신가요? 회원가입
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="sass" scoped>
  .title
    margin: 20px 0
  .field
    margin-bottom: 0
</style>