<template>
  <div id="foot">
    <div v-show="showFootContent" class="container">
      <h4 v-text="$t('lang.contractTitle')"></h4>
      <img src="../assets/image/line.png" alt />
      <div class="infoContent">
        <ul class="clear">
          <li>
            <p class="title" v-text="$t('lang.address1')"></p>
            <p class="desc">
              {{ $t("lang.address") }}{{ address[0].dictionariesValue }}
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
            <p class="desc">{{ $t("lang.phone") }}+86+21-53080005</p>
          </li>
          <li>
            <p class="title" v-text="$t('lang.address3')">监管仓库</p>
            <p class="desc">
              {{ $t("lang.address") }}{{ $t("lang.address31") }}
            </p>
            <p class="desc">{{ $t("lang.phone") }}+86+21-68351198</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <img src="../assets/image/line.png" alt />
      <p class="copyRight">
        Copyright © 2020. Shanghai Eastern Network Logistics Co.,Ltd All rights
        reserved.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "foot",
  data() {
    return {
      address: [{ dictionariesValue: "" }, { dictionariesValue: "" }],
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
  padding: 63px 0 53px 0;
  .container {
    width: 1200px;
    img {
      display: block;
      margin-bottom: 24px;
      width: 100%;
    }
    h4 {
      font-size: 30px;
      color: #fff;
      text-align: left;
      line-height: 58px;
      font-weight: 600;
    }
    .copyRight {
      font-size: 15px;
      color: #cecece;
      text-align: center;
    }
    .infoContent {
      ul {
        width: 100%;
        &:last-child {
          padding: 0;
        }
        li {
          float: left;
          width: 33%;
          padding-right: 20px;
          p.title {
            font-size: 26px;
            color: #fff;
            margin-bottom: 24px;
            text-align: left;
          }
          p.desc {
            font-size: 22px;
            color: #fff;
            text-align: left;
            line-height: 44px;
            font-weight: 100;
            padding-left: 25px;
            margin-bottom: 30px;
            &:nth-child(2) {
              background: url(../assets/image/contract/icon11.png);
              background-size: 13.2px 20px;
              background-repeat: no-repeat;
              background-position: 0 0.12rem;
            }
            &:nth-child(3) {
              background: url(../assets/image/contract/icon21.png);
              background-size: 20px 20px;
              background-repeat: no-repeat;
              background-position: 0 0.12rem;
            }
            &:last-child {
              margin-bottom: 18px;
              background: url(../assets/image/contract/icon41.png);
              background-size: 20px 13px;
              background-repeat: no-repeat;
              background-position: 0 0.12rem;
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
    padding-top: 160px;
    padding-bottom: 80px;
    .container {
      width: 100%;
      padding: 0 16px;
      h4 {
        font-size: 36px;
        font-weight: bold;
      }
      .infoContent {
        ul {
          width: 100%;
          &:last-child {
            padding: 0;
          }
          li {
            float: none;
            width: 100%;
            padding-right: 0;
            margin-bottom: 160px;
            &:last-child {
              margin-bottom: 86px;
            }
            p.title {
              font-size: 44px;
              font-weight: bold;
              margin-bottom: 40px;
            }
            p.desc {
              font-size: 32px;
              color: #fff;
              text-align: left;
              // line-height: 72px;
              font-weight: 100;
              padding-left: 50px;
              margin-bottom: 40px;
              &:nth-child(2) {
                background: url(../assets/image/contract/icon11.png);
                background-size: 27px 40px;
                background-repeat: no-repeat;
                background-position: 0 0;
              }
              &:nth-child(3) {
                background: url(../assets/image/contract/icon21.png);
                background-size: 40px 40px;
                background-repeat: no-repeat;
                background-position: 0 0;
              }
              &:last-child {
                margin-bottom: 18px;
                background: url(../assets/image/contract/icon41.png);
                background-size: 40px 26px;
                background-repeat: no-repeat;
                background-position: 0 0.12rem;
              }
            }
          }
        }
      }
      .copyRight {
        font-size: 19px;
        line-height: 25px;
      }
    }
  }
}
</style>