<template>
  <div id="app">
    <Header :isLogin="isLogin" :active="activeNavigation" :userName="userName"></Header>
    <Login v-show="showLogin" />
    <router-view />
  </div>
</template>
<script>
// import Loading from './components/Loading.vue'
import Header from "./components/Header.vue";
import Login from "./components/Login";
import "./scss/resource.scss";
    import {mapGetters, mapActions} from 'vuex';
export default {
  name: "app",
  data() {
    return {
      isLogin: false,
      userName: "",
      activeNavigation: 0
    };
  },
  components: {
    // Loading,
    Header,
    Login
  },
  async created() {
    const path = this.$route.path.substr(1);
    const hideHeaderList = [
      "login",
      "register",
      "forgetPassword",
      "forgetPayPassword"
    ];
    if (hideHeaderList.indexOf(path) > -1) {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  },
  methods: {
      ...mapActions([
       'setShowLogin'
      ]),
    // handleShowMask() {
    //   this.showMask = !this.showMask;
    // },
    // hideMask() {
    //   this.showMask = false;
    // }
  },
  computed:{
      ...mapGetters([
        'showLogin'
      ]),
  },
  watch: {
    $route() {
      // const path = this.$route.path.substr(1);
      // if (path.indexOf("userInfo") > -1) {
      //   this.activeNavigation = "userInfo";
      // } else if (path.indexOf("finance") > -1) {
      //   this.activeNavigation = "finance";
      // } else if (path.indexOf("task") > -1) {
      //   this.activeNavigation = "task";
      // } else {
      //   this.activeNavigation = "";
      // }
      // const hideHeaderList = [
      //   "login",
      //   "register",
      //   "forgetPassword",
      //   "forgetPayPassword"
      // ];
      // if (hideHeaderList.indexOf(path) > -1) {
      //   this.showHeader = false;
      // } else {
      //   this.showHeader = true;
      // }
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
