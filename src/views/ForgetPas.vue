<template>
  <div id="modifyPas">
    <div class="title">
      <div class="circle"></div>
      <p v-text="$t('lang.forgetPas')"></p>
      <div class="line"></div>
    </div>
    <p v-text="$t('lang.forgetPasTip')"></p>
    <p class="email">contact@eastern-sha.com</p>
    <p v-text="$t('lang.forgetPasTip1')"></p>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "forgetPas",
  data() {
    return {};
  },
  mounted() {
    this.setShowLogin(false);
  },
  methods: {
    ...mapActions(["setShowLogin"])
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
    font-size: 30px;
    color: #787878;
    margin: 0 auto;
    font-weight: 100;
  }
  p.email {
    font-size: 30px;
    font-family: Noto Sans S Chinese;
    font-weight: bold;
    line-height: 50px;
    color: #e67016;
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
      font-size: 40px;
      color: #787878;
      margin: 0 auto;
      font-weight: 100;
    }
    p.email {
      font-size: 40px;
      font-family: Noto Sans S Chinese;
      font-weight: bold;
      line-height: 50px;
      color: #e67016;
    }
  }
}
</style>