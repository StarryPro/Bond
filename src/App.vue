<template lang="pug">
  #app
    div
      background
      router-view
</template>

<script>
import Home from './components/Home/Home';
import MainHeader from './components/Header-Footer/MainHeader';
import MainFooter from './components/Header-Footer/MainFooter';
import Background from './components/Background';
import MainPage from './components/Main/MainPage';
import JointGroup from './components/Group/JointGroup';
import Feed from './components/Feed/Feed';
import MyGroup from './components/Main/MyGroup';
export default {
  name: 'app',
  components: {
    Home,
    MainHeader,
    MainFooter,
    Background,
    // appNav: Navigation,
    MainPage,
    JointGroup,
    Feed,
    MyGroup,
  }
}
</script>
