<template lang="pug">
  #app.container
    h1.is-size-4.has-text-centered.title 
      | 로그인
    .field
      p.control
        router-link(to='/Login', active-class='current-page')
          button.button.is-primary.column.is-2.is-offset-5
            | 이메일로 로그인하기
    .field
      p.control
        button.button.is-primary.column.is-2.is-offset-5
          | 페이스북으로 로그인하기
    .field
      .control
        label.checkbox.column.is-2.is-offset-5
          input(type='checkbox')
          |       로그인 상태유지
      .control
        a(href='#/SignUp').column.is-2.is-offset-5
          |       처음이신가요? 회원가입

      
        
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="sass" scoped>
.title
  margin: 20px 0
  
</style>
