<template>
  <div id="modifyPas">
    <div class="title">
      <div class="circle"></div>
      <p v-text="$t('lang.modifyPas')"></p>
      <div class="line"></div>
    </div>
    <div class="inputItem">
      <label for="oldPassword" v-text="$t('lang.oldPas')">原密码</label>
      <input type="password" :placeholder="$t('lang.oldPas')" id="oldPasswird" v-model="oldPwd" />
      <p class="error" v-if="oldError" v-text="oldError"></p>
    </div>
    <div class="inputItem">
      <label for="newPasswird" v-text="$t('lang.newPas')">新密码</label>
      <input type="password" id="newPasswird" :placeholder="$t('lang.newPas')" v-model="newPwd" />
      <p class="error" v-if="newError" v-text="newError"></p>
    </div>
    <div class="inputItem">
      <label for="twoPassword" v-text="$t('lang.twoPas')">再输一次新密码</label>
      <input
        type="password"
        id="twoPassword"
        :placeholder="$t('lang.twoPas')"
        v-model="newPwdConfirm"
      />
      <p class="error" v-if="twoError" v-text="twoError"></p>
    </div>
    <div class="confirm">
      <div class="button" @click="confirm" v-text="$t('lang.submit')">提交</div>
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
      const local = localStorage.getItem("local");
      if (this.comfirmLoading) {
        return;
      }
      if (!this.oldPwd) {
        this.oldError = "不能为空";
        return;
      } else {
        this.oldError = "";
      }
      if (!this.newPwd) {
        this.newError = "不能为空";
        return;
      } else {
        this.newError = "";
      }
      if (!this.newPwdConfirm) {
        this.twoError = "不能为空";
        return;
      } else {
        this.twoError = "";
      }
      if (!this.newPwdConfirm !== this.newPwd) {
        this.twoError =
          local === "en-US"
            ? "两次密码不一致"
            : "Two inputted new passwords must be consistent";
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
  padding-top: 82px;
  .title {
    // height: 135px;
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
      font-size: 40px;
      color: #343434;
      text-align: center;
      line-height: 80px;
      font-weight: bold;
    }
    .line {
      width: 150px;
      border-bottom: 5px solid #e67016;
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
    width: 840px;
    margin: 0 auto;
    padding-bottom: 40px;
    position: relative;
    label {
      width: 210px;
      margin-right: 30px;
      display: inline-block;
      font-size: 30px;
      color: #787878;
      line-height: 50px;
      text-align: right;
    }
    input {
      width: 600px;
      height: 50px;
      outline: none;
      border: 1px solid #343434;
      border-radius: 5px;
      padding: 0 10px;
      font-size: 30px;
      &::placeholder {
        color: #969696;
      }
    }
    p.error {
      font-size: 20px;
      color: red;
      width: 840px;
      padding-left: 240px;
      position: absolute;
      left: 0;
      line-height: 40px;
      bottom: 0;
      text-align: left;
    }
  }
  .confirm {
    margin: 0 auto;
    margin-top: 6px;
    width: 840px;
    padding-left: 240px;
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
    padding-top: 130px;
    .title {
      padding-left: 0;
      // height: 195px;
      margin-top: 160px;
      margin-bottom: 78px;
      .circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        // margin-bottom: 20px;
      }
      p {
        font-size: 40px;
        line-height: 80px;
        // margin-bottom: 20px;
        font-family: Noto Sans S Chinese;
        font-weight: bold;
      }
    }
    & > p {
      font-size: 38px;
      margin-top: 146px;
      margin-bottom: 36px;
      width: 100%;
      padding-left: 0;
    }

    .inputItem {
      width: 100%;
      padding-bottom: 40px;
      label {
        display: none;
      }
      input {
        width: 100%;
        height: 120px;
        padding: 0 16px;
        font-size: 40px;
        border: 2px solid #343434;
        border-radius: 10px;
        &::placeholder {
          color: #969696;
        }
      }
      p.error {
        font-size: 20px;
        color: red;
        width: 100%;
        padding-left: 0;
        line-height: 40px;
      }
    }
    .confirm {
      margin-top: 40px;
      width: 100%;
      padding-left: 0;
      .button {
        width: 180px;
        height: 80px;
        line-height: 80px;
        background: #e67016;
        color: #fff;
        font-size: 40px;
        border-radius: 10px;
        cursor: pointer;
        margin: 0 auto;
      }
    }
  }
}
</style>