<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <img src="../assets/image/logo-1.png" alt />
      </div>
      <div class="navigation">
        <div class="burger" @click="showNavigation()">
          <img src="../assets/image/mobile/burger.png" alt />
        </div>
        <div class="navigationContent" ref="navigationContent">
          <ul class="nav">
            <li
              v-for="(item,index) in $t('lang.menu')"
              :key="index"
              :index="index"
              :route="item.path"
              :class="index===3?'languange':index===active?'active':''"
              @click="changeLanguage(item,index)"
            >{{ item.name }}</li>
          </ul>
          <ul class="info" v-if=" isLogin">
            <li @click="showOperation" class="userName showInPc">
              <p v-text="$t('lang.welcome')"></p>
              <p v-text="name"></p>
            </li>
            <li @click="showOperation" class="userName showInMobile">
              <p>
                {{$t('lang.welcome')}}
                <span v-text="name"></span>
              </p>
            </li>
            <div v-show="isShowOperation" class="userInfo">
              <li @click="toModifyPas">修改密码</li>
              <li @click="logOut"  v-text="$t('lang.logout')"></li>
            </div>
          </ul>
          <ul class="info login" v-if="!isLogin">
            <li @click="showLoginMask" v-text="$t('lang.login')"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
    active: Number,
    isShowOperation: Boolean
  },
  computed: {
    isLogin() {
      const remeber = localStorage.getItem("rember");
      const tokenData = remeber
        ? localStorage.getItem("userInfo")
        : sessionStorage.getItem("userInfo");
      return tokenData || this.isLoginProps;
    },
    name() {
      const remeber = localStorage.getItem("rember");
      const tokenData = remeber
        ? localStorage.getItem("userInfo")
        : sessionStorage.getItem("userInfo");
      return tokenData ? JSON.parse(tokenData).customerName : this.userName;
    }
  },
  methods: {
    ...mapActions([
      "setShowLogin",
      "setLoginMaskHeight",
      "setIsLogin",
      "setTipMessage"
    ]),
    changeLanguage(item, index) {
      const path = item.path;
      const bodyWidth = document.body.clientWidth;
      if (index === 3) {
        const local =   this.$i18n.locale === "zh-CN"?"en-US":'zh-CN';
        this.$i18n.locale === "zh-CN"
          ? (this.$i18n.locale = "en-US")
          : (this.$i18n.locale = "zh-CN");
          localStorage.setItem('local',local);
      } else {
        if (path) {
          if (path === "/") {
            this.$router.push(path);
            if (bodyWidth <= 750) {
              this.$refs.navigationContent.style.display = "none";
            }
          }
          if (!(location.href.indexOf(path) > -1)) {
            this.$router.push(path);
            if (bodyWidth <= 750) {
              this.$refs.navigationContent.style.display = "none";
            }
          }
        }
      }
    },
    showNavigation() {
      if (this.$refs.navigationContent.style.display === "block") {
        this.$refs.navigationContent.style.display = "none";
      } else {
        this.$refs.navigationContent.style.display = "block";
      }
    },
    showOperation() {
      this.$emit("toggleOperation");
    },
    showLoginMask() {
      this.$nextTick(() => {
        const app = document.getElementById("app");
        this.setLoginMaskHeight(app.offsetHeight);
      });
      this.setShowLogin(true);
    },
    toModifyPas() {
      const bodyWidth = document.body.clientWidth;
      this.$router.push("/modifyPas");
      if (bodyWidth <= 750) {
        this.$refs.navigationContent.style.display = "none";
      }
    },
    async logOut() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      const result = await this.$API.request(this.$API.logout, "POST");
      this.loading = false;
      const path = this.$route.path.substr(1);
      if (result && result.success) {
        localStorage.removeItem("userInfo");
        sessionStorage.removeItem("userInfo");
        this.setIsLogin(true);
        if (
          path.indexOf("list") > -1 ||
          path.indexOf("detail") > -1 ||
          path.indexOf("modifyPas") > -1
        ) {
          this.$router.push("/indexPage");
        }
        setTimeout(() => {
          location.reload();
        }, 30);
      } else {
        this.setTipMessage(result.msg);
        setTimeout(() => {
          localStorage.removeItem("userInfo");
          sessionStorage.removeItem("userInfo");
          if (
            path.indexOf("list") > -1 ||
            path.indexOf("detail") > -1 ||
            path.indexOf("modifyPas") > -1
          ) {
            this.$router.push("/indexPage");
          }
          setTimeout(() => {
            location.reload();
          }, 30);
        }, 2000);
      }
    }
  }
};
</script>
<style scoped lang="scss">
.logo img {
  width: 430px;
  margin-top: 8px;
}
.burger {
  display: none;
}
.showInMobile {
  display: none !important;
}
.header {
  height: 74px;
  background: #fff;
  width: 100%;
  min-width: 1200px;
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h4 {
    font-size: 28px;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    float: right;
    position: relative;
    .userName {
      padding: 0;
      min-width: 103px;
      padding-right: 17px;
      p {
        font-size: 22px;
        color: #787878;
        line-height: 1.2;
      }
      &:after {
        content: "";
        display: block;
        border: 8px solid transparent;
        border-top: 12px solid #787878;
        position: absolute;
        bottom: 3px;
        right: 0;
      }
    }

    .userInfo {
      position: absolute;
      top: 72px;
      right: 0;
      z-index: 99;
      li {
        line-height: 32px;
        font-size: 18px;
        width: 103px;
        text-align: center;
        background: #fff;
        padding: 0;
        &:first-child {
          margin-bottom: 2px;
        }
      }
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
  flex: 1;
  margin-left: 65px;
  .navigationContent {
    z-index: 99;
    display: flex;
    justify-content: space-between;
  }
  ul {
    display: flex;
    // width: 600px;
    justify-content: space-between;
    &.nav {
      float: left;
    }
    li {
      cursor: pointer;
      line-height: 72px;
      font-size: 22px;
      color: #787878;
      padding: 0 16px;

      // &.active,
      // &:hover {
      //   background: #ff8a00;
      //   color: #fff;
      // }
    }
  }
}
.nav li:hover,
.nav li.active {
  background: #e67016;
  color: #fff;
}
.clear:after {
  display: block;
  content: "";
  width: 0;
  height: 0;
  clear: both;
}
@media screen and (max-width: 750px) {
  .logo img {
    width: 548px;
    height: 71px;
    margin-top: 0;
  }
  .showInPc {
    display: none !important;
  }
  .showInMobile {
    display: block !important;
  }
  .header {
    min-width: auto;
    display: block;
    height: auto;
    .container {
      width: 100%;
      padding: 20px 32px;
    }
    h4 {
      font-size: 28px;
    }
  }
  .burger {
    display: block;
    img {
      width: 98px;
      height: 71px;
    }
  }
  .navigation {
    margin-left: 38px;
    .navigationContent {
      display: none;
      width: 100%;
      position: absolute;
      left: 0;
      padding: 0 32px;
      top: 118px;
    }
    ul {
      display: block;
      width: 100%;
      float: none;
      &.nav {
        float: none;
      }
      li {
        width: 100%;
        background: #e4e4e4;
        height: 94px;
        font-size: 30px;
        line-height: 94px;
        border-bottom: 1px dashed #666;
      }
    }
  }
  .header .info {
    float: none;
    .userInfo {
      width: 100%;
      top: 0.94rem;
      li {
        width: 100%;
        background: #e4e4e4;
        height: 0.94rem;
        font-size: 0.3rem;
        line-height: 0.94rem;
        &:first-child {
          margin-bottom: 0;
        }
      }
    }
    .userName {
      p {
        line-height: 94px;
        font-size: 0.3rem;
        span {
          font-size: 0.3rem;
          position: relative;
          &:after {
            content: "";
            display: block;
            border: 8px solid transparent;
            border-top: 12px solid #787878;
            position: absolute;
            bottom: 3px;
            right: 0;
          }
        }
      }
      &:after {
        width: 0;
        height: 0;
        content: "";
        display: none;
      }
    }
  }
}
</style>
