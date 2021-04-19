<template>
  <div class="detail-box">
    <div class="container">
      <div class="title">
        <div class="circle"></div>
        <p>货运详情</p>
        <div class="line"></div>
      </div>
      <div class="basic">
        <p class="basic-title">基本信息</p>
        <table class="basic-table">
          <tbody>
            <tr>
              <td>运输方式</td>
              <td>{{ type[detail.transportation] || detail.transportation }}</td>
              <td>航班信息</td>
              <td>{{ detail.flightInfo }}</td>
            </tr>
            <tr>
              <td>空运主单号</td>
              <td>{{ detail.orderNumber }}</td>
              <td>数量</td>
              <td>{{ detail.quantity }}</td>
            </tr>
            <tr>
              <td>空运分单号</td>
              <td>{{ detail.branchOrderNumber }}</td>
              <td>毛重(kg)</td>
              <td>{{ detail.grossWeight }}</td>
            </tr>
            <tr>
              <td>起运港</td>
              <td>{{ detail.departure }}</td>
              <td>计费重量(kg)</td>
              <td>{{ detail.chargeableWeight }}</td>
            </tr>
            <tr>
              <td>目的港</td>
              <td>{{ detail.destinationPort }}</td>
              <td>体积(CBM)</td>
              <td>{{ detail.volume }}</td>
            </tr>
          </tbody>
        </table>
        <div class="mobile-item">
          <div class="mobile-inner">
            <div class="item-title">运输方式</div>
            <div class="item-value">{{ type[detail.transportation] || detail.transportation }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title">空运主单号</div>
            <div class="item-value">{{ detail.orderNumber }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title">空运分单号</div>
            <div class="item-value">{{ detail.branchOrderNumber }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title">起运港</div>
            <div class="item-value">{{ detail.departure }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title">目的港</div>
            <div class="item-value">{{ detail.destinationPort }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title">航班信息</div>
            <div class="item-value">{{ detail.flightInfo }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title">数量</div>
            <div
              class="item-value"
            >
              {{ detail.quantity }}
            </div>
          </div>
          <div class="mobile-inner">
            <div class="item-title">毛重(kg)</div>
            <div class="item-value">{{ detail.grossWeight }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title">计费重量(kg)</div>
            <div class="item-value">{{ detail.chargeableWeight }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title">体积(CBM)</div>
            <div class="item-value">{{ detail.volume }}</div>
          </div>
        </div>
      </div>
      <div class="basic logistics">
        <p class="basic-title">物流信息</p>
        <ul
          class="logistics-box"
          v-if="
            detail.transportation === 'Air' || detail.transportation === 'Sea'
          "
        >
          <li class="logistics-item" v-if="detail.signatureDate">
            <p class="logistics-item-title">签收</p>
            <p class="logistics-item-text">
              签收日期：{{ detail.signatureDate }}
            </p>
          </li>
          <li class="logistics-item" v-if="detail.outboundDate">
            <p class="logistics-item-title">出库</p>
            <p class="logistics-item-text">
              出库日期：{{ detail.outboundDate }}
            </p>
          </li>
          <li class="logistics-item" v-if="detail.destinationPort">
            <p class="logistics-item-title">目的港口</p>
            <p class="logistics-item-text">
              港口：{{ detail.destinationPort }}
            </p>
            <p class="logistics-item-text">预计到达日期：{{ detail.ETA }}</p>
            <p class="logistics-item-text">实际到达日期：{{ detail.ATA }}</p>
          </li>
          <li class="logistics-item" v-if="detail.fourDeparture">
            <p class="logistics-item-title">四程港口</p>
            <p class="logistics-item-text">港口：{{ detail.fourDeparture }}</p>
            <p class="logistics-item-text">
              航班信息：{{ detail.fourFlightInfo }}
            </p>
            <p class="logistics-item-text">起飞日期：{{ detail.fourATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.threeDeparture">
            <p class="logistics-item-title">三程港口</p>
            <p class="logistics-item-text">港口：{{ detail.threeDeparture }}</p>
            <p class="logistics-item-text">
              航班信息：{{ detail.threeFlightInfo }}
            </p>
            <p class="logistics-item-text">起飞日期：{{ detail.threeATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.transit">
            <p class="logistics-item-title">二程港口</p>
            <p class="logistics-item-text">港口：{{ detail.transit }}</p>
            <p class="logistics-item-text">
              航班信息：{{ detail.transitFlightInfo }}
            </p>
            <p class="logistics-item-text">起飞日期：{{ detail.threeATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.departure">
            <p class="logistics-item-title">起运港口</p>
            <p class="logistics-item-text">港口：{{ detail.departure }}</p>
            <p class="logistics-item-text">
              航班信息：{{ detail.transitFlightInfo }}
            </p>
            <p class="logistics-item-text">预计起运日期：{{ detail.ETD }}</p>
            <p class="logistics-item-text">实际起运日期：{{ detail.ATD }}</p>
          </li>
          <li class="logistics-item">
            <p class="logistics-item-title">提货</p>
            <p class="logistics-item-text">城市：{{ detail.pickupCity }}</p>
            <p class="logistics-item-text">日期：{{ detail.pickupDate }}</p>
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
          </li> -->
        </ul>
        <ul class="logistics-box" v-else>
          <li class="logistics-item" v-if="detail.signatureDate">
            <p class="logistics-item-title">签收</p>
            <p class="logistics-item-text">
              签收日期：{{ detail.signatureDate }}
            </p>
          </li>
          <li class="logistics-item" v-if="detail.outboundDate">
            <p class="logistics-item-title">出库</p>
            <p class="logistics-item-text">
              出库日期：{{ detail.outboundDate }}
            </p>
          </li>
          <li class="logistics-item" v-if="detail.destinationPort">
            <p class="logistics-item-title">到达站</p>
            <p class="logistics-item-text">
              站点：{{ detail.destinationPort }}
            </p>
            <p class="logistics-item-text">预计到达日期：{{ detail.ETA }}</p>
            <p class="logistics-item-text">实际到达日期：{{ detail.ATA }}</p>
          </li>
          <li class="logistics-item" v-if="detail.fourDeparture">
            <p class="logistics-item-title">四程中转站</p>
            <p class="logistics-item-text">站点：{{ detail.fourDeparture }}</p>
            <p class="logistics-item-text">
              班次信息：{{ detail.fourFlightInfo }}
            </p>
            <p class="logistics-item-text">起运日期：{{ detail.fourATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.threeDeparture">
            <p class="logistics-item-title">三程中转站</p>
            <p class="logistics-item-text">站点：{{ detail.threeDeparture }}</p>
            <p class="logistics-item-text">
              班次信息：{{ detail.threeFlightInfo }}
            </p>
            <p class="logistics-item-text">起运日期：{{ detail.threeATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.transit">
            <p class="logistics-item-title">二程中转站</p>
            <p class="logistics-item-text">站点：{{ detail.transit }}</p>
            <p class="logistics-item-text">
              班次信息：{{ detail.transitFlightInfo }}
            </p>
            <p class="logistics-item-text">起运日期：{{ detail.threeATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.departure">
            <p class="logistics-item-title">始发站</p>
            <p class="logistics-item-text">站点：{{ detail.departure }}</p>
            <p class="logistics-item-text">
              班次信息：{{ detail.transitFlightInfo }}
            </p>
            <p class="logistics-item-text">预计起运日期：{{ detail.ETD }}</p>
            <p class="logistics-item-text">实际起运日期：{{ detail.ATD }}</p>
          </li>
          <li class="logistics-item">
            <p class="logistics-item-title">提货</p>
            <p class="logistics-item-text">城市：{{ detail.pickupCity }}</p>
            <p class="logistics-item-text">日期：{{ detail.pickupDate }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      type: {
        Air: "空运",
        Rail: "铁路运输",
        Truck: "陆运",
        Ocean: "海运",
      },
      detail: {
        zd: "海运",
      },
      logistics: [
        {
          title: "提货",
          detail: [
            {
              name: "城市",
              value: "杭州",
            },
            {
              name: "日期",
              value: "2021-03-25",
            },
          ],
        },
        {
          title: "提货",
          detail: [
            {
              name: "城市",
              value: "杭州",
            },
            {
              name: "日期",
              value: "2021-03-25",
            },
          ],
        },
        {
          title: "提货",
          detail: [
            {
              name: "城市",
              value: "杭州",
            },
            {
              name: "日期",
              value: "2021-03-25",
            },
          ],
        },
        {
          title: "提货",
          detail: [
            {
              name: "城市",
              value: "杭州",
            },
            {
              name: "日期",
              value: "2021-03-25",
            },
          ],
        },
      ],
    };
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
      console.log(this.$route.params);
      const freightOrderId = this.$route.params.id;
      const listData = await this.$API.request(this.$API.detail, "POST", {
        freightOrderId,
      });
      this.detail = listData.data;
      console.log(listData);
      //   this.$API.requeat(this.$API.login,'POST',this.listQuery).then(response => {
      //     this.list = response.data.data.list
      //     this.total = response.data.data.total
      //   }).catch((response) => {
      //     this.list = []
      //     this.total = 0
      //   })
    },
  },
};
</script>
<style lang="scss" scoped>
.detail-box {
  background: #fff;
  padding-bottom: 78px;
  .mobile-item{
    display: none;
  }
  .title {
    // width: 187px;
    height: 132px;
    margin: 0 auto;
    margin-bottom: 50px;
    margin-top: 117px;
    .circle {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background: #e67016;
      margin: 0 auto;
    }
    p {
      font-size: 50px;
      color: #343434;
      text-align: center;
      line-height: 82px;
      font-weight: bold;
      // border-bottom: 4px solid #e67016;
    }
    .line {
      width: 150px;
      border-bottom: 4px solid #e67016;
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
        font-size: 22px;
        &:nth-child(2n + 1) {
          background: #f8f8f8;
          color: #787878;
        }
        &:nth-child(2n) {
          background: #f8f8f8;
          font-weight: 100;
        }
      }
    }
  }
  .basic-title {
    color: #e67016;
    font-size: 38px;
    text-align: left;
    margin-bottom: 30px;
  }
  .logistics {
    margin-top: 60px;
    .logistics-box {
      background: #f8f8f8;
      padding: 50px 93px 40px;
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
        left: -15px;
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
      font-size: 30px;
      line-height: 21px;
      margin-bottom: 20px;
    }
    .logistics-item-text {
      font-size: 24px;
      color: #787878;
      font-weight: 100;
      line-height: 30px;
    }
  }
}

@media screen and (max-width: 750px) {
  .detail-box {
    padding-top: 160px;
    padding-bottom: 78px;
    .basic-table{
      display: none;
    }
    .mobile-item{
      display: block;
        background: #F8F8F8;
        padding: 80px 40px;
        color: #787878;
        font-size: 44px;
        line-height: 44px;
        text-align: left;
        margin-bottom: 160px;
        .mobile-inner{
          margin-bottom: 80px;
          &:last-child{
            margin-bottom: 0;
          }
        }
        .item-title{
          font-weight: bold;
          margin-bottom: 40px;
        }
        .item-value{
          font-weight: 300;
          &.item-option{
            color: #E67016;
          }
        }
      }
    .title {
      height: 195px;
      margin-top: 0;
      margin-bottom: 158px;
      .circle {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-bottom: 20px;
      }
      p {
        font-size: 52px;
        line-height: 52px;
        margin-bottom: 20px;
        font-family: Noto Sans S Chinese;
        font-weight: bold;
      }
    }
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
      font-size: 44px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
    .logistics {
      margin-top: 60px;
      .logistics-box {
        background: #f8f8f8;
        padding: 50px 93px 40px;
        text-align: left;
      }
      .logistics-item {
        margin-left: 17px;
        padding-bottom: 172px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 2px;
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
        font-size: 44px;
        line-height: 44px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .logistics-item-text {
        font-size: 32px;
        line-height: 60px;
        margin-bottom: 6px;
      }
    }
  }
}
</style>