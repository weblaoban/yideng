<template>
  <div class="detail-box">
    <div class="container">
      <div class="title">
        <!-- <div class="circle"></div> -->
        <p v-text="$t('lang.detail_title')">货运详情</p>
        <div class="line"></div>
      </div>
      <div class="basic">
        <p class="basic-title" v-text="$t('lang.detail_basic')">基本信息</p>
        <table class="basic-table">
          <tbody>
            <tr>
              <td v-text="$t('lang.detail_basic1')">运输方式</td>
              <td>{{ locale==='zh-CN'?type[detail.transportation] : detail.transportation }}</td>
              <td v-text="$t('lang.detail_basic2')">航班信息</td>
              <td>{{ detail.flightInfo }}</td>
            </tr>
            <tr>
              <td v-text="$t('lang.detail_basic3')">空运主单号</td>
              <td>{{ detail.orderNumber }}</td>
              <td v-text="$t('lang.detail_basic4')">数量</td>
              <td>{{ detail.quantity }}</td>
            </tr>
            <tr>
              <td v-text="$t('lang.detail_basic5')">空运分单号</td>
              <td>{{ detail.branchOrderNumber }}</td>
              <td v-text="$t('lang.detail_basic6')">毛重(kg)</td>
              <td>{{ detail.grossWeight }}</td>
            </tr>
            <tr>
              <td v-text="$t('lang.detail_basic7')">起运港</td>
              <td>{{ detail.departure }}</td>
              <td v-text="$t('lang.detail_basic8')">计费重量(kg)</td>
              <td>{{ detail.chargeableWeight }}</td>
            </tr>
            <tr>
              <td v-text="$t('lang.detail_basic9')">目的港</td>
              <td>{{ detail.destinationPort }}</td>
              <td v-text="$t('lang.detail_basic10')">体积(CBM)</td>
              <td>{{ detail.volume }}</td>
            </tr>
          </tbody>
        </table>
        <div class="mobile-item">
          <div class="mobile-inner">
            <div class="item-title" v-text="$t('lang.detail_basic1')">运输方式</div>
            <div
              class="item-value"
            >{{ locale==='zh-CN'?type[detail.transportation] : detail.transportation }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title" v-text="$t('detail_basic3')">空运主单号</div>
            <div class="item-value">{{ detail.orderNumber }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title" v-text="$t('detail_basic5')">空运分单号</div>
            <div class="item-value">{{ detail.branchOrderNumber }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title" v-text="$t('detail_basic7')">起运港</div>
            <div class="item-value">{{ detail.departure }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title" v-text="$t('detail_basic9')">目的港</div>
            <div class="item-value">{{ detail.destinationPort }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title" v-text="$t('detail_basic2')">航班信息</div>
            <div class="item-value">{{ detail.flightInfo }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title" v-text="$t('detail_basic4')">数量</div>
            <div class="item-value">{{ detail.quantity }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title" v-text="$t('detail_basic6')">毛重(kg)</div>
            <div class="item-value">{{ detail.grossWeight }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title" v-text="$t('detail_basic8')">计费重量(kg)</div>
            <div class="item-value">{{ detail.chargeableWeight }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title" v-text="$t('detail_basic10')">体积(CBM)</div>
            <div class="item-value">{{ detail.volume }}</div>
          </div>
        </div>
      </div>
      <div class="basic logistics">
        <p class="basic-title" v-text="$t('lang.detail_wuliu')">物流信息</p>
        <ul
          class="logistics-box"
          v-if="
            detail.transportation === 'Air' || detail.transportation === 'Sea'
          "
        >
          <li class="logistics-item" v-if="detail.signatureDate">
            <p class="logistics-item-title">{{$t('lang.detail_as1')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as2')}}{{ detail.signatureDate }}</p>
          </li>
          <li class="logistics-item" v-if="detail.outboundDate">
            <p class="logistics-item-title">{{$t('lang.detail_as3')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as4')}}{{ detail.outboundDate }}</p>
          </li>
          <li class="logistics-item" v-if="detail.destinationPort">
            <p class="logistics-item-title">{{$t('lang.detail_as5')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as6')}}{{ detail.destinationPort }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as7')}}{{ detail.ETA }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as8')}}{{ detail.ATA }}</p>
          </li>
          <li class="logistics-item" v-if="detail.fourDeparture">
            <p class="logistics-item-title">{{$t('lang.detail_as9')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as6')}}{{ detail.fourDeparture }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as10')}}{{ detail.fourFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as11')}}{{ detail.fourATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.threeDeparture">
            <p class="logistics-item-title">{{$t('lang.detail_as12')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as6')}}{{ detail.threeDeparture }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as10')}}{{ detail.threeFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as11')}}{{ detail.threeATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.transit">
            <p class="logistics-item-title">{{$t('lang.detail_as13')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as6')}}{{ detail.transit }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as10')}}{{ detail.transitFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as11')}}{{ detail.threeATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.departure">
            <p class="logistics-item-title">{{$t('lang.detail_as14')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as6')}}{{ detail.departure }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as10')}}{{ detail.transitFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as15')}}{{ detail.ETD }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as16')}}{{ detail.ATD }}</p>
          </li>
          <li class="logistics-item">
            <p class="logistics-item-title">{{$t('lang.detail_as17')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as18')}}{{ detail.pickupCity }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as19')}}{{ detail.pickupDate }}</p>
          </li>
          <!-- <li
            v-for="(item, index) in logistics"
            :key="index"
            class="logistics-item"
          >
            <p class="logistics-item-title">{{ detail.title }}</p>
            <p
              v-for="(el, key) in detail.detail"
              :key="key"
              class="logistics-item-text"
            >
              {{ el.name }}：{{ el.value }}
            </p>
          </li>-->
        </ul>
        <ul class="logistics-box" v-else>
          <li class="logistics-item" v-if="detail.signatureDate">
            <p class="logistics-item-title">{{$t('lang.detail_as1')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as2')}}{{ detail.signatureDate }}</p>
          </li>
          <li class="logistics-item" v-if="detail.outboundDate">
            <p class="logistics-item-title">{{$t('lang.detail_as3')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as4')}}{{ detail.outboundDate }}</p>
          </li>
          <li class="logistics-item" v-if="detail.destinationPort">
            <p class="logistics-item-title">{{$t('lang.detail_common1')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common2')}}{{ detail.destinationPort }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as7')}}{{ detail.ETA }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as8')}}{{ detail.ATA }}</p>
          </li>
          <li class="logistics-item" v-if="detail.fourDeparture">
            <p class="logistics-item-title">{{$t('lang.detail_common3')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common2')}}{{ detail.fourDeparture }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common4')}}{{ detail.fourFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common5')}}{{ detail.fourATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.threeDeparture">
            <p class="logistics-item-title">{{$t('lang.detail_common6')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common2')}}{{ detail.threeDeparture }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common4')}}{{ detail.threeFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common5')}}{{ detail.threeATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.transit">
            <p class="logistics-item-title">{{$t('lang.detail_common7')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common2')}}{{ detail.transit }}</p>
            <p
              class="logistics-item-text"
            >{{$t('lang.detail_common4')}}{{ detail.transitFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common5')}}{{ detail.threeATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.departure">
            <p class="logistics-item-title">{{$t('lang.detail_common8')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common2')}}{{ detail.departure }}</p>
            <p
              class="logistics-item-text"
            >{{$t('lang.detail_common4')}}{{ detail.transitFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as15')}}{{ detail.ETD }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as16')}}{{ detail.ATD }}</p>
          </li>
          <li class="logistics-item">
            <p class="logistics-item-title">{{$t('lang.detail_as17')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as18')}}{{ detail.pickupCity }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as19')}}{{ detail.pickupDate }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "detail",
  data() {
    return {
      type: {
        Air: "空运",
        Rail: "铁路运输",
        Truck: "陆运",
        Ocean: "海运"
      },
      detail: {
        zd: "海运"
      },
      logistics: [
        {
          title: "提货",
          detail: [
            {
              name: "城市",
              value: "杭州"
            },
            {
              name: "日期",
              value: "2021-03-25"
            }
          ]
        },
        {
          title: "提货",
          detail: [
            {
              name: "城市",
              value: "杭州"
            },
            {
              name: "日期",
              value: "2021-03-25"
            }
          ]
        },
        {
          title: "提货",
          detail: [
            {
              name: "城市",
              value: "杭州"
            },
            {
              name: "日期",
              value: "2021-03-25"
            }
          ]
        },
        {
          title: "提货",
          detail: [
            {
              name: "城市",
              value: "杭州"
            },
            {
              name: "日期",
              value: "2021-03-25"
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState(["locale"])
  },
  //创建前设置
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#fff;");
  },
  created() {
    this.getDetail();
  },
  //销毁前清除
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
  methods: {
    async getDetail() {
      const freightOrderId = this.$route.params.id;
      const listData = await this.$API.request(this.$API.detail, "POST", {
        freightOrderId
      });
      this.detail = listData.data;
    }
  }
};
</script>
<style lang="scss" scoped>
.detail-box {
  background: #fff;
  padding-top: 82px;
  padding-bottom: 78px;
  .mobile-item {
    display: none;
  }
  .title {
    // width: 187px;
    // height: 135px;
    margin: 0 auto;
    margin-bottom: 80px;
    margin-top: 60px;
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
  .basic {
    width: 860px;
    margin: 0 auto;
    .basic-table {
      width: 100%;
      td {
        width: 25%;
        height: 50px;
        font-size: 20px;
        &:nth-child(2n + 1) {
          background: #f8f8f8;
          color: #787878;
          font-weight: bold;
        }
        &:nth-child(2n) {
          background: #f8f8f8;
          font-weight: 300;
        }
      }
    }
  }
  .basic-title {
    color: #e67016;
    font-size: 30px;
    text-align: left;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .logistics {
    margin-top: 164px;
    .logistics-box {
      background: #f8f8f8;
      padding: 80px 40px;
      text-align: left;
    }
    .logistics-item {
      margin-left: 17px;
      padding-bottom: 28px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 2px;
        background: #e67016;
        height: 100%;
        left: -20px;
      }
      &:last-child {
        padding-bottom: 0;
        &::before {
          display: none;
        }
      }
      &::after {
        content: "";
        position: absolute;
        width: 20px;
        background: #e67016;
        height: 20px;
        left: -30px;
        top: 0;
        border-radius: 50%;
      }
    }
    .logistics-item-title {
      color: #787878;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    .logistics-item-text {
      font-size: 16px;
      color: #787878;
      font-weight: 500;
      line-height: 1.5;
    }
  }
}

@media screen and (max-width: 750px) {
  .detail-box {
    padding-top: 290px;
    padding-bottom: 78px;
    .basic-table {
      display: none;
    }
    .mobile-item {
      display: block;
      background: #f8f8f8;
      padding: 80px 40px;
      color: #787878;
      font-size: 40px;
      line-height: 40px;
      text-align: left;
      margin-bottom: 160px;
      .mobile-inner {
        margin-bottom: 80px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .item-title {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 40px;
      }
      .item-value {
        font-size: 40px;
        font-weight: 300;
        &.item-option {
          color: #e67016;
        }
      }
    }
    .title {
      margin-top: 0;
    }
    // .title {
    //   height: 195px;
    //   margin-top: 0;
    //   margin-bottom: 158px;
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
    // }
    .basic {
      width: 100%;
      .basic-table {
        width: 100%;
        td {
          height: 32px;
          font-size: 12px;
        }
      }
    }
    .basic-title {
      font-size: 40px;
      line-height: 40px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .logistics {
      margin-top: 60px;
      .logistics-box {
        background: #f8f8f8;
        padding: 80px 40px;
        text-align: left;
      }
      .logistics-item {
        margin-left: 17px;
        padding-bottom: 80px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 4px;
          background: #e67016;
          height: 100%;
          left: -25px;
        }
        &:last-child {
          padding-bottom: 0;
          &::before {
            display: none;
          }
        }
        &::after {
          content: "";
          position: absolute;
          width: 40px;
          background: #e67016;
          height: 40px;
          left: -45px;
          top: 0;
          border-radius: 50%;
        }
      }
      .logistics-item-title {
        font-size: 40px;
        line-height: 40px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .logistics-item-text {
        font-size: 30px;
        line-height: 60px;
        margin-bottom: 6px;
      }
    }
  }
}
</style>