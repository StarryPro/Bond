<template lang="pug">
  #app.container
    h1.is-size-4.has-text-centered.title 이메일로 로그인
    .box.column.is-half.is-offset-one-quarter
      .field.column.is-half.is-offset-one-quarter
        label.label
        .control
          input.input(type='text', placeholder='닉네임을 설정해주세요.')
        p.help.is-dark 해당 닉네임은 사용가능합니다.
      .field.column.is-half.is-offset-one-quarter
        label.label 
        .control.has-icons-left.has-icons-right
          input.input.is-primary(type='text', placeholder='이름을 입력해주세요.')
          span.icon.is-small.is-left
            i.fa.fa-user
          span.icon.is-small.is-right
            i.fa.fa-check
      .field.column.is-half.is-offset-one-quarter
        label.label 
        .control.has-icons-left.has-icons-right
          input.input.is-primary(type='text', placeholder='사용하실 이메일을 입력해주세요.', value='hus6178@')
          span.icon.is-small.is-left
            i.fa.fa-envelope
          span.icon.is-small.is-right
            i.fa.fa-warning
      .field.is-grouped.is-grouped-centered
        .control
          router-link(to='#/Login', active-class='current-page')
            button.button.is-primary 가입하기
        .control
          router-link(to='/#', active-class='current-page')
            button.button.is-link.is-right Cancel
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
  margin-top: 0
  margin-bottom: 0
  padding-bottom: 0
  .is-grouped
  margin-top: 20px
</style>
