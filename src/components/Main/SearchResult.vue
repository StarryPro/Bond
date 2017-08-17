<template lang="pug">
div
  div
    .nav-bg
      nav.navbar.container
        .navbar-brand
          router-link.navbar-item(
            to="/MainPage" 
            exact='' 
            active-class='current-page')
            picture
              img.is-hidden-mobile(src='../../assets/logo-01.svg', alt='큰본드', width=112, height=28)
              img.is-hidden-desktop.is-hidden-tablet(src='../../assets/logo-02.svg', alt='작은본드')
          .navbar-burger.burger(data-target="navMenuburger" @click="openMobileMyMenu")
            figure
              img.image.is-30x30.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image', width=30, height=30)
        .search.column
          .field.has-addons
            .control.has-icons-left.is-expanded
              label.label.is-hidden(for="search")
              input.input(
                id="search" 
                type='text' 
                placeholder='그룹이나 게시글을 검색해보세요' 
                @input="inputSearch" 
                :value = "search")
              span.span.icon.is-small.is-left
                i.fa.fa-search
            .control
              button.button.btn-search(type="button" @click="fetch") Search

        #navMenuburger.navbar-menu
          .navbar-end
            .navbar-item.has-dropdown.is-hoverable.is-right
              a.navbar-link
                figure
                  img.image.is-30x30.user-img(src='http://bulma.io/images/placeholders/96x96.png', alt='Image')
              .navbar-dropdown
                a.navbar-item(@click="openMySetting")
                  | 내 정보
                router-link.navbar-item(to="/MyWriteFeed")
                  | 내 글 보기
                router-link.navbar-item(to="/MyGroupFeed")
                  | 새 글 보기
                hr.dropdownhr
                a.navbar-item(@click="signOut")
                  | 로그 아웃
      hr.navhr.is-hidden-mobile
      my-setting(close_message="close lightbox" ref='my_setting')
      mobile-my-menu(close_message="close lightbox" ref='mobile_my_menu')
    .container
      .columns
        .column.is-10.is-offset-1
          .box.fetched-data
            article.media.fetched-data-item(v-for = "group in group_list")
              a(href)  
                .media-left
                  figure.image.is-64x64
                    img(:src='group.profile_img', alt='Image')
                .media-content
                  .content
                    p
                      strong {{group.name}}
                      br
                      |           {{group.description}}
                    div
                      span.icon.is-small.member
                        i.fa.fa-users(aria-hidden='true')
                      small    {{group.num_of_members}}
                      span.icon.is-small.leader
                        i.fa.fa-user-circle-o(aria-hidden='true')
                      small    {{group.owner.nickname}}
    .columns
      .column
        nav.pagination.is-centered
          a.pagination-previous Previous
          a.pagination-next Next page
          ul.pagination-list
            li
              a.pagination-link 1
            li
              span.pagination-ellipsis …
            li
              a.pagination-link 45
            li
              a.pagination-link.is-current 46
            li
              a.pagination-link 47
            li
              span.pagination-ellipsis …
            li
              a.pagination-link 86
  main-footer

</template>

<script>
import MainFooter from '../Header-Footer/MainFooter';
import MySetting from '../Main/MySetting';
import MobileMyMenu from '../Header-Footer/MobileMyMenu';
export default {
  name: 'app',
  components: {
    MySetting,
    MobileMyMenu,
    MainFooter,
  },
  data(){
    return{
      search:'',
      group_list: [],
      query: this.$route.query
    }
  },
  watch: {
    '$route'(to, from){
      this.query = to.query
    }
  },
  methods: {
    signOut(){
      this.$http.post('http://bond.ap-northeast-2.elasticbeanstalk.com/api/member/logout/')
      //  { headers: {'Authorization' : `Token ${user_token}`}})
      .then(response => {
        let token = response.data.token;
        if ( window.localStorage.getItem('token') ) {
          window.localStorage.removeItem('token', token);
        }
        this.$router.push( {path: "/"} );
        alert("성공적으로 로그아웃 하셨습니다.")
        // console.log(response);
        // console.log('성공');
      })
      .catch(error => {
        console.log(error.response);
      })
    },
    openMySetting() {
      this.$refs.my_setting.visible = true;
    },
    openMobileMyMenu() {
      this.$refs.mobile_my_menu.visible = true;
    },
    fetch(){
      // bus.$on('call-child', (payload)=>{
      //   this.payload = payload;
      //   })
      let search = this.search.trim();
      window.localStorage.setItem('searchKeyword',search)
      let searchkeyword = window.localStorage.getItem('searchKeyword');
      this.$http.get('http://bond.ap-northeast-2.elasticbeanstalk.com/api/'+'group/?search='+`${searchkeyword}`)
                .then(response => {
                  this.group_list = response.data.results;
                  
                  console.log('searchKeyword:',searchkeyword);
                  // let data = response.data;
                  // let name = data.name;
                  // let description = data.description;
                  // let profile_img = data.profile_img;
                  // console.log(this.group_list)
                  // this.$router.push('/SearchResult')
                  console.log('response:',response);
                  console.log('search:',search);
                  this.$router.push({ path: '/SearchResult/group/', query: { search: `${search}` }});
                  console.log('search:',search);
                })
                .catch(error => console.error(error.message))
    },
    inputSearch(event){
      this.search = event.target.value;
    }
  }
}

</script>

<style lang="sass" >
@import "~bulma"
@import "~style"

body
  background: #eee

.navbar-burger.burger
  padding-top: 8px
  padding-left: 10px
.navhr
  margin: 0 5px 30px 5px
  // margin: 0
.dropdownhr
  margin: 5px

.nav-fixed
  position: fixed
.nav-bg
  background: #fff
.btn-search
  color: $primary
.leader
  margin-left: 8px
</style>
