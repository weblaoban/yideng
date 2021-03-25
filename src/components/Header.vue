<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <img src="../assets/image/logo-1.png" alt />
      </div>
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
          <ul class="info" v-if=" !isLogin">
            <li @click="showOperation" class="userName">
              <!-- <p v-text="name">欢迎in，11111111111111</p> -->
              <p>欢迎in，11111111111111</p>
            </li>
            <div v-show="isShowOperation" class="userInfo">
              <li>修改密码</li>
              <li @click="logOut">退出</li>
            </div>
          </ul>
          <ul class="info login" v-if="isLogin">
            <li @click="showLoginMask">登录</li>
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
      isShowNavigation: true,
      isShowOperation: false
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
    ...mapActions(["setShowLogin"]),
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
    showOperation() {
      this.isShowOperation
        ? (this.isShowOperation = false)
        : (this.isShowOperation = true);
    },
    showLoginMask() {
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
<style scoped lang="scss">
.logo img {
  width: 430px;
  margin-top: 8px;
}
.burger {
  display: none;
}
.header {
  height: 74px;
  background: #fff;
  width: 100%;
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
      p {
        font-size: 14px;
        color: #333;
      }
    }

    .userInfo {
      position: absolute;
      top: 72px;
      right: 0;
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
  .navigationContent {
    // width: 800px;
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
  background: #ff8a00;
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
  .header {
    display: block;
    .container {
      width: 100%;
    }
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
      position: absolute;
      left:0;
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
      }
    }
  }
  .header .info {
    float: none;
  }
}
</style>
