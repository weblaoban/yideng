<template>
  <div id="foot">
    <div v-show="showFootContent" class="container">
      <h4 v-text="$t('lang.contractTitle')"></h4>
      <div class="line" />
      <!-- <img src="../assets/image/line.png" alt /> -->
      <div class="infoContent">
        <ul class="clear">
          <li>
            <p class="title" v-text="$t('lang.address1')"></p>
            <p class="desc">
              {{ $t("lang.address") }}{{ locale==='zh-CN' ? address[0].dictionariesValue : address[0].remark }}
            </p>
            <p class="desc">
              {{ $t("lang.phone") }}{{ address[1].dictionariesValue }}
            </p>
            <p class="desc">{{ $t("lang.email") }}contact@eastern-sha.com</p>
          </li>
          <li>
            <p class="title" v-text="$t('lang.address2')"></p>
            <p class="desc">
              {{ $t("lang.address") }}{{ $t("lang.address21") }}
            </p>
            <p class="desc">{{ $t("lang.phone") }}+86-21-53080005</p>
          </li>
          <li>
            <p class="title" v-text="$t('lang.address3')">监管仓库</p>
            <p class="desc">
              {{ $t("lang.address") }}{{ $t("lang.address31") }}
            </p>
            <p class="desc">{{ $t("lang.phone") }}+86-21-68351198</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <!-- <img src="../assets/image/line.png" alt /> -->
      <div class="line line2" />
      <p class="copyRight">
        Copyright © 2020. Shanghai Eastern Network Logistics Co.,Ltd All rights
        reserved.
      </p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "foot",
  data() {
    return {
      address: [{ dictionariesValue: "", remark: "" }, { dictionariesValue: "" }],
    };
  },
  props: {
    showFootContent: Boolean,
  },
  created() {
    this.getAddress();
  },
  methods: {
    async getAddress() {
      const listData = await this.$API.request(this.$API.address, "POST");
      this.address = listData.data;
    },
  },
  computed: {
    ...mapState(["locale"])
  },
};
</script>
<style lang="scss" scoped>
#foot {
  background: url(../assets/image/footer-bg.png);
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  min-width: 1200px;
  padding: 59px 0 20px 0;
  .container {
    width: 1200px;
    .line{
      height: 0;
      border: 1px solid #FFFFFF;
      margin-bottom: 20px;
    }
    // img {
    //   display: block;
    //   margin-bottom: 20px;
    //   width: 100%;
    // }
    h4 {
      font-size: 20px;
      color: #fff;
      text-align: left;
      line-height: 40px;
      font-weight: bold;
    }
    .copyRight {
      font-size: 12px;
      color: #fff;
      font-weight: 100;
      text-align: center;
    }
    .infoContent {
      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        &:last-child {
          padding: 0;
        }
        li {
          float: left;
          width: 360px;
          &:last-child{
            margin-right: 0;
          }
          &:nth-child(1){
            width: 360px;
          }
          p.title {
            font-size: 20px;
            line-height: 20px;
            color: #fff;
            margin-bottom: 30px;
            text-align: left;
            font-weight: bold;
          }
          p.desc {
            font-size: 20px;
            color: #fff;
            text-align: left;
            line-height: 36px;
            font-weight: 300;
            padding-left: 25px;
            margin-bottom: 30px;
            &:nth-child(2) {
              background: url(../assets/image/contract/icon11.png);
              background-size: 14px 20px;
              background-repeat: no-repeat;
              background-position: 0 8px;
            }
            &:nth-child(3) {
              background: url(../assets/image/contract/icon21.png);
              background-size: 20px 20px;
              background-repeat: no-repeat;
              background-position: 0 8px;
            }
            &:nth-child(4) {
              margin-bottom: 18px;
              background: url(../assets/image/contract/icon41.png);
              background-size: 20px 13px;
              background-repeat: no-repeat;
              background-position: 0 11.5px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  #foot {
    min-width: auto;
    padding-top: 50px;
    padding-bottom: 60px;
    .container {
      width: 100%;
      padding: 0 16px;
      h4 {
        font-size: 30px;
        line-height: 50px;
        font-weight: bold;
      }
      .line{
        margin-bottom: 70px;
      }
      .line2{
        margin-bottom: 38px;
      }
      .infoContent {
        ul {
          width: 100%;
          display: block;
          &:last-child {
            padding: 0;
          }
          li {
            float: none;
            width: 100%;
            padding-right: 0;
            margin-bottom: 60px;
            margin-right: 0;
            &:last-child {
              margin-bottom: 66px;
            }
          &:nth-child(1){
            width: 100%;
          }
            p.title {
              font-size: 30px;
              margin-bottom: 40px;
            }
            p.desc {
              font-size: 30px;
              color: #fff;
              text-align: left;
              // line-height: 72px;
              font-weight: 100;
              padding-left: 40px;
              margin-bottom: 40px;
              &:nth-child(2) {
                background: url(../assets/image/contract/icon11.png);
                background-size: 20px 30px;
                background-repeat: no-repeat;
                background-position: 0 0;
              }
              &:nth-child(3) {
                background: url(../assets/image/contract/icon21.png);
                background-size: 30px 30px;
                background-repeat: no-repeat;
                background-position: 0 0;
              }
              &:nth-child(4) {
                margin-bottom: 18px;
                background: url(../assets/image/contract/icon41.png);
                background-size: 30px 20px;
                background-repeat: no-repeat;
                background-position: 0 0.12rem;
              }
            }
          }
        }
      }
      .copyRight {
        font-size: 20px;
        line-height: 30px;
      }
    }
  }
}
</style>