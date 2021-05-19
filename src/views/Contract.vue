<template>
  <div id="contract">
    <div class="banner">
      <h2 v-text="$t('lang.contract')"></h2>
    </div>
    <div class="container">
      <div class="contract">
        <div class="title">
          <div class="circle"></div>
          <p v-text="$t('lang.contractInfo')"></p>
          <div class="line"></div>
        </div>
        <div class="map" id="container"></div>
        <div class="info clear">
          <ul @click="changeCenter('1')">
            <h4 v-text="$t('lang.address1')"></h4>
            <li>{{ locale==='zh-CN' ? address[0].dictionariesValue : address[0].remark }}</li>
            <li>{{ address[1].dictionariesValue }}</li>
            <!-- <li>+86-21-53089827</li> -->
            <li>contact@eastern-sha.com</li>
          </ul>
          <ul @click="changeCenter('2')">
            <h4 v-text="$t('lang.address2')"></h4>
            <li v-text="$t('lang.address21')"></li>
            <li>+86+21-53080005</li>
          </ul>
          <ul @click="changeCenter('3')">
            <h4 v-text="$t('lang.address3')"></h4>
            <li v-text="$t('lang.address31')"></li>
            <li>+86+21-68351198</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//坐标  港陆广场：121.485297,31.235345    智慧：121.77183,31.150607   仓储：121.773815,31.17121
import { mapState } from "vuex";
export default {
  name: "contract",
  data() {
    return {
      type: "1",
      center: [121.485297, 31.235345],
      center2: [121.77183, 31.150607],
      center3: [121.773815, 31.17121],
      map: null,
      address: [{ dictionariesValue: "", remark: "" }, { dictionariesValue: "" }]
    };
  },
  created() {
    this.getAddress();
  },
  computed: {
    ...mapState(["locale"])
  },
  mounted() {
    this.$nextTick(() => {
      // if (!window.BMap) return;
      const BMap = window.BMap;
      const screenWidth = screen.width;
      this.map = new BMap.Map("container"); // 创建Map实例
      const point = new BMap.Point(this.center[0], this.center[1]);
      this.map.centerAndZoom(point, screenWidth <= 750 ? 18 : 20); // 初始化地图,设置中心点坐标和地图级别
      // this.map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

      const locale = this.locale;
      const messages = this.$i18n.messages[locale].lang;
      const opts = {
        width: 300,
        height: 50,
        title: messages.address1
      };
      if (screenWidth <= 750) {
        Object.assign(opts, {
          width: 40,
          height: 20
        });
      }
      const infoWindow = new BMap.InfoWindow(messages.address11, opts);
      this.map.openInfoWindow(infoWindow, point);
    });
  },
  methods: {
    async getAddress() {
      const listData = await this.$API.request(this.$API.address, "POST");
      this.address = listData.data;
    },
    changeCenter(type) {
      const BMap = window.BMap;
      const screenWidth = screen.width;
      const locale = this.locale;
      const messages = this.$i18n.messages[locale].lang;
      this.type = type;
      if (type === "1") {
        const point = new BMap.Point(this.center[0], this.center[1]);
        const opts = {
          width: 300,
          height: 50,
          title: messages.address1
        };
        if (screenWidth <= 750) {
          Object.assign(opts, {
            width: 40,
            height: 20
          });
        }
        const infoWindow = new BMap.InfoWindow(messages.address11, opts);
        this.map.openInfoWindow(infoWindow, point);
        this.map.centerAndZoom(point, screenWidth <= 750 ? 18 : 20); // 初始化地图,设置中心点坐标和地图级别
      } else if (type === "2") {
        const point = new BMap.Point(this.center2[0], this.center2[1]);
        const opts = {
          width: 300,
          height: 70,
          title: messages.address2
        };
        if (screenWidth <= 750) {
          Object.assign(opts, {
            width: 40,
            height: 20
          });
        }
        const infoWindow = new BMap.InfoWindow(messages.address21, opts);
        this.map.openInfoWindow(infoWindow, point);
        this.map.centerAndZoom(point, 15); // 初始化地图,设置中心点坐标和地图级别
      } else if (type === "3") {
        const point = new BMap.Point(this.center2[0], this.center2[1]);
        const opts = {
          width: 300,
          height: 50,
          title: messages.address3
        };
        if (screenWidth <= 750) {
          Object.assign(opts, {
            width: 40,
            height: 20
          });
        }
        const infoWindow = new BMap.InfoWindow(messages.address31, opts);
        this.map.openInfoWindow(infoWindow, point);
        this.map.centerAndZoom(point, 15); // 初始化地图,设置中心点坐标和地图级别
      }
    }
  },
  watch: {
    locale: function() {
     this.changeCenter(this.type)
    },
  }
};
</script>
<style>
#contract span,
#contract a,
#contract input {
  font-size: 12px;
}
</style>
<style lang="scss" scoped>
#contract {
  background: #fff;
  padding-bottom: 1px;
  min-width: 1200px;
  font-size: 12px;
  padding-top: 82px;
  .banner {
    position: relative;
    margin-bottom: 120px;
    height: 640px;
    background: url("../assets/image/banner2.png");
    background-size: 100% 100%;
    background-position: top center;
    background-repeat: no-repeat;
    h2 {
      font-size: 40px;
      color: #fff;
      text-align: center;
      width: 100%;
      position: absolute;
      top: 50%;
      font-weight: bold;
      line-height: 40px;
      margin-top: -20px;
    }
  }

  #container {
    overflow: hidden;
    width: 100%;
    height: 500px;
    margin-bottom: 70px;
    font-family: "微软雅黑";
  }

  .contract {
    margin-bottom: 120px;
    .title {
      height: 135px;
      margin: 0 auto;
      margin-bottom: 80px;
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

    .info {
      ul {
        float: left;
        height: 277px;
        cursor: pointer;
        &:first-child {
          width: 373px;
          border-right: 1px solid #e67016;
        }
        &:nth-child(2) {
          width: 457px;
          border-right: 1px solid #e67016;
          padding-left: 45px;
          padding-right: 45px;
        }
        &:nth-child(3) {
          width: 353px;
          padding-left: 16px;
          padding-right: 11px;
        }
        h4 {
          font-size: 30px;
          line-height: 50px;
          color: #e67016;
          font-weight: bold;
          text-align: left;
          margin-bottom: 30px;
        }
        li {
          padding-left: 25px;
          font-size: 20px;
          line-height: 36px;
          font-weight: 400;
          text-align: left;
          margin-bottom: 24px;
          color: #343434;
          font-weight: 300;
          &:nth-child(2) {
            background: url(../assets/image/contract/icon1.png);
            background-position: left 8px;
            background-repeat: no-repeat;
            background-size: 14px 20px;
          }
          &:nth-child(3) {
            background: url(../assets/image/contract/icon2.png);
            background-position: left 8px;
            background-repeat: no-repeat;
            background-size: 20px 20px;
          }
          // &:nth-child(4) {
          //   background: url(../assets/image/contract/icon3.png);
          //   background-position: left 11.5px;
          //   background-repeat: no-repeat;
          //   background-size: 20px 13px;
          // }
          &:nth-child(4) {
            background: url(../assets/image/contract/icon4.png);
            background-position: 0 11.5px;
            background-repeat: no-repeat;
            background-size: 20px 13px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  #contract {
    min-width: auto;
    padding-top: 130px;
    .banner {
      height: 400px;
      background: url("../assets/image/mobile/mobileBanner1.png");
      background-size: 100% 100%;
      background-position: top center;
      background-repeat: no-repeat;
      margin-bottom: 160px;
      h2 {
        font-size: 40px;
        height: 0.56rem;
        line-height: 0.56rem;
        margin-top: -0.28rem;
        font-weight: bold;
      }
      img {
        min-width: auto;
      }
    }
    #container {
      height: 448px;
      margin-bottom: 160px;
    }

    .contract {
      margin-bottom: 160px;
      // .title {
      //   height: 195px;
      //   margin-bottom: 78px;
      //   .circle {
      //     width: 80px;
      //     height: 80px;
      //     border-radius: 50%;
      //     margin-bottom: 20px;
      //   }
      //   p {
      //     font-size: 52px;
      //     line-height: 52px;
      //     margin-bottom: 20px;
      //     font-family: Noto Sans S Chinese;
      //     font-weight: bold;
      //   }
      //   .line {
      //     width: 187px;
      //     border-bottom: 5px solid #e67016;
      //     margin: 0 auto;
      //   }
      // }

      .info {
        ul {
          float: none;
          height: auto;
          cursor: pointer;
          width: 100% !important;
          border-right: none !important;
          // padding-right: 0 !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
          &:first-child {
            padding-bottom: 154px;
          }
          &:nth-child(2) {
            padding-bottom: 154px;
            li {
              &:nth-child(2) {
                // font-size: 28px;
              }
            }
          }
          &:nth-child(3) {
            // padding-top: 74px;
          }
          li {
            padding-left: 37px;
            font-size: 30px;
            font-weight: 300;
            text-align: left;
            margin-bottom: 40px;
            // padding: 0 130px;
            line-height: 30px;
            &:nth-child(2) {
              background: url(../assets/image/contract/icon1.png);
              background-position: left top;
              background-repeat: no-repeat;
              background-size: 20px 30px;
            }
            &:nth-child(3) {
              background: url(../assets/image/contract/icon2.png);
              background-position: left top;
              background-repeat: no-repeat;
              background-size: 30px 30px;
            }
            &:nth-child(4) {
              background: url(../assets/image/contract/icon4.png);
              background-position: 0 12px;
              background-repeat: no-repeat;
              background-size: 30px 20px;
            }
          }
        }
      }
    }
  }
}
</style>