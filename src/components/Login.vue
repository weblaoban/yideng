<template>
  <div class="login">
    <div class="mask" :style="'height:'+loginMaskHeight+'px'">
      <div class="maskContent">
        <p>登陆后即可查询货运信息</p>
        <div class="inputItem">
          <input
            autocomplete="new-password"
            type="text"
            name="userName"
            v-model="userName"
            placeholder="用户名"
          />
          <p class="error" v-show="userNameError" v-text="userNameError"></p>
        </div>
        <div class="inputItem">
          <input
            autocomplete="new-password"
            type="password"
            name="password"
            v-model="passWord"
            placeholder="密码"
          />
          <p class="error" v-show="userNameError" v-text="userNameError"></p>
        </div>
        <div class="checkBox">
          <input v-model="rember" type="checkbox" id="rember" @change="changeRember" />
          <label for="rember">下次自动登录</label>
        </div>
        <div class="buttonContent">
          <div class="button" @click="confirm">确定</div>
          <div class="button" @click="cancel">取消</div>
        </div>
        <p class="tip">*目前账号采用邀请制，不开放注册</p>
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
    ...mapActions(["setShowLogin", "setTipMessage"]),
    changeRember() {
      console.log(this.rember);
    },
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
      const loginData = await this.$API.requeat(this.$API.login, "POST", {
        userName: this.userName,
        password: this.passWord
      });
      this.comfirmLoading = false;
      if (loginData && loginData.success) {
        localStorage.setItem("userInfo", loginData.data);
        this.setIsLogin(true);
        location.reload();
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
  .maskContent {
    width: 798px;
    height: 522px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    margin: 200px auto 0;
    padding: 49px 127px 35px;
    & > p {
      color: #787878;
      font-size: 28px;
      text-align: left;
      margin-bottom: 25px;
    }
    .inputItem {
      width: 100%;
      padding-bottom: 27px;
      position: relative;
      text-align: left;
      input {
        border: 1px solid #000000;
        border-radius: 5px;
        outline: none;
        color: #787878;
        font-size: 28px;
        padding-left: 30px;
        height: 70px;
        width: 100%;
        background: transparent;
      }
      .error {
        position: absolute;
        bottom: 0;
        line-height: 27px;
        left: 0;
        font-size: 14px;
        color: red;
      }
    }

    .checkBox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 27px;
      label {
        font-size: 15px;
        color: #000;
      }
    }
    .buttonContent {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 45px;
      .button {
        width: 169px;
        height: 62px;
        border-radius: 20px;
        cursor: pointer;
        color: #fff;
        line-height: 62px;
        background: #787878;
        &:first-child {
          margin-right: 40px;
          background: #e67016;
        }
      }
    }

    .tip {
      font-size: 15px;
      color: #787878;
      text-align: center;
    }
  }
}

@media screen and (max-width: 750px) {
  .mask {
    padding: 0 30px;
    .maskContent {
      width: 100%;
      .tip {
        font-size: 13px;
      }
      & > p {
        font-size: 23px;
      }
      .inputItem {
        input {
          height: 56px;
          font-size: 22px;
        }
      }
      .checkBox label {
        font-size: 13px;
      }
      .buttonContent {
        .button {
          width: 135px;
          height: 50px;
          line-height: 50px;
        }
      }
    }
  }
}
</style>