<template>
  <div id="app">
    <Header
      :isLogin="isLogin"
      :active="activeNavigation"
      :userName="userName"
      :isShowOperation="isShowOperation"
      @toggleOperation="changeOperationStatus"
    ></Header>
    <Login v-show="showLogin" />
    <router-view />
    <Foot v-show="showFoot" :showFootContent="showFootContent" />
    <TipMessage v-show="tipMessage" />
  </div>
</template>
<script>
// import Loading from './components/Loading.vue'
import Header from "./components/Header.vue";
import Login from "./components/Login";
import Foot from "./components/Footer";
import TipMessage from "./components/CommonTip";
import "./scss/resource.scss";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "app",
  data() {
    return {
      isLogin: false,
      userName: "",
      activeNavigation: -1,
      showFoot: true,
      isShowOperation: false,
      showFootContent: true
    };
  },
  components: {
    // Loading,
    Header,
    Login,
    Foot,
    TipMessage
  },
  async created() {
    const path = this.$route.path.substr(1);
    if (path.indexOf("modifyPas") > -1) {
      this.showFoot = false;
      this.isShowOperation = false;
    }
    if (path.indexOf("contract") > -1) {
      this.showFootContent = false;
    }
  },
  methods: {
    ...mapActions(["setShowLogin"]),
    // handleShowMask() {
    //   this.showMask = !this.showMask;
    // },
    // hideMask() {
    //   this.showMask = false;
    // }
    changeOperationStatus() {
      this.isShowOperation
        ? (this.isShowOperation = false)
        : (this.isShowOperation = true);
    }
  },
  computed: {
    ...mapGetters(["showLogin", "tipMessage"])
  },
  watch: {
    $route() {
      const path = this.$route.path.substr(1);
      if (path.indexOf("index") > -1 || !path) {
        this.activeNavigation = 0;
      } else if (
        path.indexOf("introduce") > -1 ||
        path.indexOf("internet") > -1
      ) {
        this.activeNavigation = 1;
      } else if (path.indexOf("service") > -1) {
        this.activeNavigation = 2;
      } else if (path.indexOf("contract") > -1) {
        this.activeNavigation = 4;
      } else {
        this.activeNavigation = -1;
      }

      if (path.indexOf("modifyPas") > -1 || path.indexOf("forgetPas") > -1) {
        this.showFoot = false;
        this.isShowOperation = false;
      } else if (path.indexOf("detail") > -1 || path.indexOf("list") > -1) {
        this.showFoot = false;
      } else {
        this.showFoot = true;
      }
      if (path.indexOf("contract") > -1) {
        this.showFootContent = false;
      } else {
        this.showFootContent = true;
      }
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
.BMap_cpyCtrl {
  display: none;
}
.anchorBL {
  display: none;
}
.BMap_bubble_title {
  font-size: 16px;
}
.BMap_bubble_content {
  font-size: 16px;
}
</style>
