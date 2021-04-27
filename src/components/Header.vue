<template>
  <div class="header">
    <div class="container">
      <!-- <div class="logo" /> -->
      <img src="../assets/image/logo.png" class="logo" />
      <div class="navigation">
        <div class="burger" @click="showNavigation()">
          <img src="../assets/image/mobile/burger.png" alt />
        </div>
        <div class="navigationContent showOpInPc" ref="navigationContent">
          <ul class="nav">
            <li
              v-for="(item, index) in $t('lang.menu')"
              :key="index"
              :index="index"
              :route="item.path"
              :class="
                index === 3 ? 'languange' : index === active ? 'active' : ''
              "
              @click.stop="changeLanguage(item, index)"
            >{{ item.name }}</li>
          </ul>
          <ul class="info" v-if="isLogin">
            <li @click.stop="showOperation" class="userName showInPc">
              <p v-text="$t('lang.welcome')"></p>
              <p v-text="name"></p>
            </li>
            <li
              @click.stop="showOperation"
              :class="
                isShowOperation
                  ? 'userName showInMobile userNameOPeration'
                  : 'userName showInMobile'
              "
            >
              <p>
                {{ $t("lang.welcome") }}
                <span v-text="name"></span>
              </p>
            </li>
            <div v-show="isShowOperation" class="userInfo">
              <li @click="sectionClick">
                <span v-text="$t('lang.homeMenu1')"></span>
              </li>
              <li @click="toModifyPas">
                <span v-text="$t('lang.modifyPas')"></span>
              </li>
              <li @click="logOut">
                <span v-text="$t('lang.logout')"></span>
              </li>
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
      "setTipMessage",
      "setLocale"
    ]),
    changeLanguage(item, index) {
      const path = item.path;
      const bodyWidth = document.body.clientWidth;
      if (index === 3) {
        const local = this.$i18n.locale === "zh-CN" ? "en-US" : "zh-CN";
        this.$i18n.locale === "zh-CN"
          ? (this.$i18n.locale = "en-US")
          : (this.$i18n.locale = "zh-CN");
        localStorage.setItem("local", local);
        this.setLocale(local);
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
      const el = document.querySelector(".navigationContent");
      el.classList.toggle('showOpInMobile')
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
    sectionClick() {
      const bodyWidth = document.body.clientWidth;
      this.showOperation();
      if (this.isLogin) {
        this.$router.push("/list");
        if (bodyWidth <= 750) {
          this.$refs.navigationContent.style.display = "none";
        }
      } else {
        this.$nextTick(() => {
          const app = document.getElementById("app");
          this.setLoginMaskHeight(app.offsetHeight);
        });
        this.setShowLogin(true);
        sessionStorage.setItem("toList", "toList");
        window.scrollTo(0, 0);
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
.logo {
  // color: #e67016;
  // font-size: 56px;
  // font-family: Noto Sans S Chinese;
  // font-weight: bold;
  // line-height: 82px;
  height: 32px;
}
.burger {
  display: none;
}
.showInMobile {
  display: none !important;
}
.header {
  height: 82px;
  background: #fff;
  width: 100%;
  min-width: 1200px;
  position: fixed;
  z-index: 3;
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
        font-size: 20px;
        color: #787878;
        line-height: 1.5;
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
      top: 80px;
      right: 0;
      z-index: 99;
      li {
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        min-width: 103px;
        width: auto;
        padding: 0 5px;
        text-align: center;
        background: #f8f8f8;
        position: relative;
        span {
          line-height: 40px;
          font-size: 20px;
          white-space: nowrap;
          color: #787878;
        }
        &::after {
          position: absolute;
          content: "";
          width: 100%;
          // height: 6px;
          border-bottom: 6px solid #707070;
          transform: scaleY(0.05);
          bottom: 0;
          left: 0;
        }
        &:last-child {
          &::after {
            display: none;
          }
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
  margin-left: 50px;
  .navigationContent {
    z-index: 99;
    display: flex;
    justify-content: space-between;
    &.showOpInPc {
      // display: flex;
    }
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
      line-height: 80px;
      font-size: 20px;
      color: #787878;
      // padding: 0 16px;
      width: 120px;
      text-align: center;

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
  .logo {
    // font-size: 76px;
    // line-height: 129px;
    height: 50px;
  }
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
      // padding: 40px 30px;
      height: 130px;
    }
    h4 {
      font-size: 28px;
    }
  }
  .burger {
    display: block;
    text-align: right;
    img {
      width: 72px;
      height: 44px;
    }
  }
  .navigation {
    margin-left: 38px;
    .navigationContent {
      display: none;
      width: 100%;
      position: absolute;
      left: 0;
      padding: 0 40px;
      top: 130px;
      &.showOpInMobile {
        display: block;
      }
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
        background: #ececec;
        height: 80px;
        font-size: 43px;
        line-height: 80px;
        // border-bottom: 1px dashed #666;
      }
    }
  }
  .header .info {
    float: none;
    .userInfo {
      width: 100%;
      top: 0.8rem;
      li {
        width: 100%;
        background: #fff;
        height: 0.8rem;
        font-size: 0.4rem;
        line-height: 0.8rem;
        // border: 1px solid #787878;
        border: none;
        position: relative;
        background: #fff;
        color: #787878;
        span {
          font-size: 0.4rem;
          line-height: 0.8rem;
          white-space: nowrap;
          color: #787878;
        }
        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          // z-index: -1;
          width: 200%;
          height: 200%;
          border: 1px solid #787878;
          -webkit-transform-origin: left top;
          transform-origin: left top;
          -webkit-transform: scale(0.5, 0.5);
          transform: scaleY(0.5, 0.5);
          // border-radius: 10px;
        }
        &:first-child {
          margin-bottom: 0;
          &::after {
            border-bottom: none;
          }
        }
        &:last-child {
          &::after {
            display: block;
          }
        }
      }
    }
    .userName {
      &.userNameOPeration {
        // background: #e67016;
        p {
          // color: #fff;
        }
      }
      p {
        line-height: 80px;
        font-size: 0.44rem;
        span {
          font-size: 0.44rem;
          position: relative;
          &:after {
            content: "";
            display: block;
            border: 16px solid transparent;
            border-top: 24px solid #787878;
            position: absolute;
            bottom: -10px;
            right: -40px;
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
