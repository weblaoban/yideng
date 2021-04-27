<template>
  <div class="login">
    <div class="mask" :style="'height:'+loginMaskHeight+'px'">
      <div class="maskContent">
        <p v-text="$t('lang.loginTip')"></p>
        <div class="inputItem">
          <input
            autocomplete="new-password"
            type="text"
            name="userName"
            v-model="userName"
            :placeholder="$t('lang.username')"
          />
          <p class="error" v-show="userNameError" v-text="userNameError"></p>
        </div>
        <div class="inputItem">
          <input
            autocomplete="new-password"
            type="password"
            name="password"
            v-model="passWord"
            :placeholder="$t('lang.password')"
          />
          <p class="error" v-show="userNameError" v-text="userNameError"></p>
        </div>
        <div class="checkBox">
          <div class="input">
            <input v-model="rember" type="checkbox" id="rember" />
            <label for="rember" v-text="$t('lang.auto')"></label>
          </div>
          <div class="forget">
            <router-link to="/forgetPas"  v-text="$t('lang.forgetPas')"></router-link>
          </div>
        </div>
        <div class="buttonContent">
          <div class="button" @click="confirm" v-text="$t('lang.confirm')"></div>
          <div class="button" @click="cancel" v-text="$t('lang.cancel')"></div>
        </div>
        <p class="tip" v-text="$t('lang.loginMs')"></p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      userName: "",
      passWord: "",
      userNameError: "",
      passwordError: "",
      rember: false,
      comfirmLoading: false
    };
  },
  computed: {
    ...mapGetters(["loginMaskHeight"])
  },
  methods: {
    ...mapActions(["setShowLogin", "setTipMessage", "setIsLogin"]),
    async confirm() {
      if (this.comfirmLoading) {
        return;
      }
      if (!this.userName) {
        this.userNameError = "用户名不能为空";
        return;
      }
      if (!this.passWord) {
        this.passwordError = "密码不能为空";
        return;
      }
      this.comfirmLoading = true;
      const loginData = await this.$API.request(this.$API.login, "POST", {
        userName: this.userName,
        passWord: this.passWord
      });
      this.comfirmLoading = false;
      if (loginData && loginData.success) {
        if (!this.rember) {
          sessionStorage.setItem("userInfo", JSON.stringify(loginData.data));
          localStorage.removeItem("rember");
        } else {
          localStorage.setItem("userInfo", JSON.stringify(loginData.data));
          localStorage.setItem("rember", "rember");
        }
        this.setIsLogin(true);
        const toList = sessionStorage.getItem("toList");
        if (toList) {
          this.$router.push("/list");
          sessionStorage.removeItem("toList");
          this.setShowLogin(false);
          setTimeout(() => {
            location.reload();
          }, 30);
        } else {
          location.reload();
        }
      } else {
        this.setTipMessage(loginData.msg);
      }
    },
    cancel() {
      this.setShowLogin(false);
      this.userName = "";
      this.password = "";
      this.userNameError = "";
      this.passwordError = "";
      this.rember = false;
      const toList = sessionStorage.getItem("toList");
      if (toList) {
        sessionStorage.removeItem("toList");
      }
    }
  }
};
</script>
<style lang="scss">
.mask {
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  min-width: 1200px;
  .maskContent {
    width: 600px;
    // height: 400px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    margin: 300px auto 0;
    padding: 70px 80px 17px;
    & > p {
      color: #787878;
      font-size: 20px;
      text-align: left;
      margin-bottom: 25px;
    }
    .inputItem {
      width: 100%;
      padding-bottom: 20px;
      position: relative;
      text-align: left;
      input {
        border: 1px solid #000000;
        border-radius: 5px;
        outline: none;
        color: #787878;
        font-size: 20px;
        padding-left: 10px;
        height: 50px;
        width: 100%;
        background: transparent;
      }
      input::placeholder {
        font-weight: 100;
      }
      .error {
        position: absolute;
        bottom: 0;
        line-height: 20px;
        left: 0;
        font-size: 14px;
        color: red;
      }
    }

    .checkBox {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      height: 20px;
      .input {
        display: flex;
        align-items: center;
        justify-content: start;
        input {
          width: 20px;
          height: 20px;
          margin-right: 3px;
        }
      }

      label {
        font-size: 20px;
        font-weight: 300;
        color: #787878;
      }
      .forget a {
        color: #787878;
        font-size: 20px;
        font-weight: 300;
      }
    }
    .buttonContent {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
      .button {
        width: 80px;
        height: 40px;
        border-radius: 10px;
        cursor: pointer;
        color: #fff;
        line-height: 40px;
        background: #787878;
        font-size: 20px;
        &:first-child {
          margin-right: 60px;
          background: #e67016;
        }
      }
    }

    .tip {
      font-size: 14px;
      color: #787878;
      text-align: center;
      font-weight: 100;
      margin-bottom:0;
    }
  }
}

@media screen and (max-width: 750px) {
  .mask {
    padding: 0 30px;
    min-width: auto;
    .maskContent {
      width: 100%;
      padding: 80px 30px 30px;    
      margin: 200px auto 0;
      .tip {
        font-size: 27px;
      }
      & > p {
        font-size: 30px;
        margin-bottom: 30px;
      }
      .inputItem {
        padding-bottom: 30px;
        input {
          border: 2px solid #000000;
          height: 80px;
          font-size: 30px;
        }
        .error {
          position: absolute;
          bottom: 0;
          line-height: 30px;
          left: 0;
          font-size: 20px;
          color: red;
        }
      }
      .checkBox {
        margin-bottom: 62px;
        height: 30px;
        .input {
          input {
            width: 30px;
            height: 30px;
            margin-right: 10px;
          }
        }

        label {
          font-size: 28px;
          font-weight: 300;
          color: #787878;
        }
        .forget a {
          color: #787878;
          font-size: 30px;
          font-weight: 300;
        }
      }
      .buttonContent {
        .button {
          width: 120px;
          height: 60px;
          line-height: 60px;
          font-size: 30px;
        }
      }
    }
  }
}
</style>