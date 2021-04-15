<template>
  <div id="modifyPas">
    <div class="title">
      <div class="circle"></div>
      <p v-text="$t('lang.introduce')"></p>
      <div class="line"></div>
    </div>
    <div class="inputItem">
      <label for="oldPassword">原密码</label>
      <input type="password" placeholder="原密码" id="oldPasswird" v-model="oldPwd" />
      <p class="error" v-if="oldError" v-text="oldError"></p>
    </div>
    <div class="inputItem">
      <label for="newPasswird">新密码</label>
      <input type="password" id="newPasswird" placeholder="新密码" v-model="newPwd" />
      <p class="error" v-if="newError" v-text="newError"></p>
    </div>
    <div class="inputItem">
      <label for="twoPassword">再输一次新密码</label>
      <input type="password" id="twoPassword" placeholder="再输一次新密码" v-model="newPwdConfirm" />
      <p class="error" v-if="twoError" v-text="twoError"></p>
    </div>
    <div class="confirm">
      <div class="button" @click="confirm">提交</div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "SetPassword",
  data() {
    return {
      oldPwd: "",
      newPwd: "",
      newPwdConfirm: "",
      oldError: "",
      newError: "",
      twoError: "",
      comfirmLoading: false
    };
  },
  methods: {
    ...mapActions(["setTipMessage", "setIsLogin"]),
    async confirm() {
      if (this.comfirmLoading) {
        return;
      }
      if (!this.oldPwd) {
        this.oldError = "原密码不能为空";
        return;
      } else {
        this.oldError = "";
      }
      if (!this.newPwd) {
        this.newError = "原密码不能为空";
        return;
      } else {
        this.newError = "";
      }
      if (!this.newPwdConfirm) {
        this.twoError = "原密码不能为空";
        return;
      } else {
        this.twoError = "";
      }
      this.comfirmLoading = true;
      const loginData = await this.$API.request(this.$API.modifyPas, "POST", {
        oldPwd: this.oldPwd,
        newPwd: this.newPwd,
        newPwdConfirm: this.newPwdConfirm
      });
      this.comfirmLoading = false;
      if (loginData && loginData.success) {
        localStorage.removeItem("userInfo");
        sessionStorage.removeItem("userInfo");
        this.setIsLogin(false);
        this.setTipMessage("修改成功，请重新登录");
        setTimeout(() => {
          this.$router.push("/");
          location.reload();
        }, 1500);
      } else {
        this.setTipMessage(loginData.msg);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#modifyPas {
  .title {
    height: 132px;
    margin: 0 auto;
    margin-bottom: 40px;
    padding-left: 172px;
    margin-top: 160px;
    .circle {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background: #e67016;
      margin: 0 auto;
    }
    p {
      font-size: 37px;
      color: #343434;
      text-align: center;
      line-height: 82px;
      font-weight: bold;
    }
    .line {
      width: 150px;
      border-bottom: 4px solid #e67016;
      margin: 0 auto;
    }
  }
  & > p {
    font-size: 28px;
    color: #787878;
    margin: 0 auto;
    margin-top: 300px;
    margin-bottom: 36px;
    width: 626px;
    padding-left: 172px;
  }
  .inputItem {
    width: 626px;
    margin: 0 auto;
    padding-bottom: 28px;
    position: relative;
    label {
      width: 162px;
      margin-right: 10px;
      display: inline-block;
      font-size: 22px;
      color: #787878;
      line-height: 38px;
      text-align: right;
    }
    input {
      width: 454px;
      height: 38px;
      outline: none;
      border: 1px solid #000;
      border-radius: 5px;
      padding: 0 10px;
      font-size: 22px;
      &::placeholder {
        color: #969696;
      }
    }
    p.error {
      font-size: 14px;
      color: red;
      width: 626px;
      padding-left: 172px;
      position: absolute;
      left: 0;
      line-height: 28px;
      bottom: 0;
      text-align: left;
    }
  }
  .confirm {
    margin: 0 auto;
    margin-top: 6px;
    width: 626px;
    padding-left: 172px;
    .button {
      width: 150px;
      height: 60px;
      line-height: 60px;
      background: #e67016;
      color: #fff;
      font-size: 30px;
      border-radius: 10px;
      cursor: pointer;
      margin: 0 auto;
    }
  }
}

@media screen and (max-width: 750px) {
  #modifyPas {
    padding: 0 33px;
    & > p {
      font-size: 38px;
      margin-top: 146px;
      margin-bottom: 36px;
      width: 100%;
      padding-left: 0;
    }

    .inputItem {
      width: 100%;
      padding-bottom: 36px;
      label {
        display: none;
      }
      input {
        width: 100%;
        height: 83px;
        padding: 0 16px;
        font-size: 28px;
        &::placeholder {
          color: #969696;
        }
      }
      p.error {
        font-size: 14px;
        color: red;
        width: 100%;
        padding-left: 0;
        line-height: 36px;
      }
    }
    .confirm {
      margin-top: 9px;
      width: 100%;
      padding-left: 0;
      .button {
        width: 169px;
        height: 63px;
        line-height: 63px;
        background: #e67016;
        color: #fff;
        font-size: 28px;
        border-radius: 10px;
        cursor: pointer;
        margin: 0 auto;
      }
    }
  }
}
</style>