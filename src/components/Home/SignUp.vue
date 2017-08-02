<template lang="pug">
  #app.container
    h1 회원가입
    .field
    label.label 닉네임
    .control
        input.input(type='text', placeholder='닉네임을 설정해주세요.')
    p.help.is-success 해당 닉네임은 사용가능합니다.
    .field
    label.label 이름
    .control.has-icons-left.has-icons-right
        input.input.is-success(type='text', placeholder='이름을 적어주세요.', value='bulma')
        span.icon.is-small.is-left
        i.fa.fa-user
        span.icon.is-small.is-right
        i.fa.fa-check
    .field
    label.label Email
    .control.has-icons-left.has-icons-right
        input.input.is-danger(type='text', placeholder='이메일을 적어주세요.', value='hello@')
        span.icon.is-small.is-left
        i.fa.fa-envelope
        span.icon.is-small.is-right
        i.fa.fa-warning
    p.help.is-danger 해당 이메일은 사용가능하지 않습니다.
    .control
        label.checkbox
        input(type='checkbox')
        |        전체동의(선택 항목 포함)
        input(type='checkbox')
        |        이용약관(필수)
        a(href='#') 보기
        input(type='checkbox')
        |        개인정보 수집 및 이용에 대한 안내(필수)
        a(href='#') 보기
        input(type='checkbox')
        |        
        a(href='#') 이벤트, 서비스 안내 수신(선택)
        
    .field.is-grouped
    .control
        button.button.is-primary 가입하기
    .control
        button.button.is-link 이미 회원인가요? 로그인


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
