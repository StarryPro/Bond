<template lang="pug">
  #app
    div
      background
      //- Home
      //- main-page
      router-view
      //- app-nav
      //- joint-group
      //- feed

    //- main-footer

</template>

<script>
import Home from './components/Home/Home';
import Navigation from './components/Navigation';
import MainHeader from './components/Header-Footer/MainHeader';
import MainPage from './components/Main/MainPage';
import JointGroup from './components/Group/JointGroup';
import Feed from './components/Feed/Feed';
import MyGroup from './components/Main/MyGroup';
import MainFooter from './components/Header-Footer/MainFooter';
import Background from './components/Background';

export default {
  name: 'app',
  components: {
    Home,
    appNav: Navigation,
    MainHeader,
    MainPage,
    JointGroup,
    Feed,
    MyGroup,
    MainFooter,
    Background
  },
  data () {
    return {
      }
    }
  }
</script>
