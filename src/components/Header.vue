<template>
  <div class="header container">
   <div><img src="../assets/image/logo.png" alt=""></div>
    <div class="navigation">
      <div class="burger" @click="showNavigation()">burger</div>
      <div class="navigationContent clear" ref="navigationContent">
        <ul class="nav">
          <li
            v-for="(item,index) in $t('lang.menu')"
            :key="index"
            :index="index"
            :route="item.path"
            :class="index===3?'languange':index===active?'active':''"
            @click="changeLanguage(index)"
          >{{ item.name }}</li>
        </ul>
        <ul class="info" v-if="isLogin">
          <div class="userName">
            <p v-text="name"></p>
          </div>
          <div class="logout" @click="logOut">退出</div>
        </ul>
        <ul class="info login" v-if="!isLogin">
          <li @click="showLoginMask">登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapActions} from 'vuex';
export default {
  name: "Header",
  data() {
    return {
      loading: false,
      isShowNavigation: true
    };
  },
  props: {
    isLoginProps: Boolean,
    userName: String,
    active: Number
  },
  computed: {
    isLogin() {
      return localStorage.getItem("userInfo") || this.isLoginProps;
    },
    name() {
      return localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo")).userName
        : this.userName;
    }
  },
  methods: {
      ...mapActions([
       'setShowLogin'
      ]),
    changeLanguage(index) {
      console.log(index);
    },
    showNavigation() {
      if (this.$refs.navigationContent.style.display === "block") {
        this.$refs.navigationContent.style.display = "none";
      } else {
        this.$refs.navigationContent.style.display = "block";
      }
    },
    showLoginMask(){
      this.setShowLogin(true);
    },
    async logOut() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      const result = await this.$API.request(this.$API.logout, "POST");
      this.loading = false;
      if (result && result.success) {
        localStorage.removeItem("userInfo");
        this.$router.push("/login");
      } else {
        this.$message.info(result.msg);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: 1200px;
}
.burger {
  display: none;
}
.header {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    font-size: 28px;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    float: right;
    .userName {
      margin-right: 10px;
      p {
        font-size: 14px;
        color: #333;
      }
    }
    .logout {
      width: 80px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background: #4882f0;
      color: #fff;
      font-size: 14px;
      border-radius: 15px;
      cursor: pointer;
    }
    &.login {
      div {
        width: 72px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        float: left;
        cursor: pointer;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        margin-top: 22px;
        a {
          font-size: 14px;
          color: #fff;
          width: 100%;
          height: 100%;
          display: block;
        }
        i {
          display: block;
          width: 14px;
          height: 14px;
          line-height: 30px;
          float: left;
          margin-top: 8px;
          margin-left: 12px;
          margin-right: -8px;
        }
      }
      .elielogin {
        background: #ff8a00;
        margin-left: 16px;
        margin-right: 8px;
        i {
          // background: url(../assets/images/elieicon.png) no-repeat 0 0;
        }
      }
      .eliesign {
        background: #21afff;
        i {
          // background: url(../assets/images/elieicon.png) no-repeat -81px 0;
        }
      }
    }
  }
}

.navigation {
  .navigationContent{
    width: 800px;
  }
  ul {
    display: flex;
    width: 600px;
    justify-content: space-between;
    &.nav{
      float: left;
    }
    li {
      cursor: pointer;
      flex: 1;
      line-height: 60px;

      &.active,&:hover {
        background: #ff8a00;
        color: #fff;
      }
    }
  }
}
.clear:after{
  display: block;
  content:'';
  width:0;
  height:0;
  clear: both;
}
@media screen and (max-width: 750px) {
  .container {
    width: 100%;
  }
  .header {
    margin-top: 10px;
    display: block;
    h4 {
      font-size: 28px;
    }
  }
  .burger {
    display: block;
  }
  .navigation {
    .navigationContent {
      display: none;
      width: 100%;
    }
    ul {
      display: block;
      width: 100%;
      float: none;
      &.nav{
        float: none;
      }
      li {
        width: 100%;
      }
    }
  }
    .header .info{
      float: none;
    }
}
</style>
