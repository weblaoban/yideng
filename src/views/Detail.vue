<template>
  <div class="detail-box">
    <div class="container">
      <h4 class="title">货运详情</h4>
      <div class="basic">
        <p class="basic-title">基本信息</p>
        <table class="basic-table">
          <tbody>
            <tr>
              <td>运输方式</td>
              <td>{{ type[detail.transportation] }}</td>
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
      </div>
      <div class="basic logistics">
        <p class="basic-title">物流信息</p>
        <ul class="logistics-box" v-if="detail.transportation === 'Air' ||detail.transportation === 'Sea'">
          <li
            class="logistics-item"
            v-if="detail.signatureDate"
          >
            <p class="logistics-item-title">签收</p>
            <p
              class="logistics-item-text"
            >
              签收日期：{{ detail.signatureDate }}
            </p>
          </li>
          <li
            class="logistics-item"
            v-if="detail.outboundDate"
          >
            <p class="logistics-item-title">出库</p>
            <p
              class="logistics-item-text"
            >
              出库日期：{{ detail.outboundDate }}
            </p>
          </li>
          <li
            class="logistics-item"
            v-if="detail.destinationPort"
          >
            <p class="logistics-item-title">目的港口</p>
            <p
              class="logistics-item-text"
            >
              港口：{{ detail.destinationPort }}
            </p>
            <p
              class="logistics-item-text"
            >
              预计到达日期：{{ detail.ETA }}
            </p>
            <p
              class="logistics-item-text"
            >
              实际到达日期：{{ detail.ATA }}
            </p>
          </li>
          <li
            class="logistics-item"
            v-if="detail.fourDeparture"
          >
            <p class="logistics-item-title">四程港口</p>
            <p
              class="logistics-item-text"
            >
              港口：{{ detail.fourDeparture }}
            </p>
            <p
              class="logistics-item-text"
            >
              航班信息：{{ detail.fourFlightInfo}}
            </p>
            <p
              class="logistics-item-text"
            >
              起飞日期：{{ detail.fourATD }}
            </p>
          </li>
          <li
            class="logistics-item"
            v-if="detail.threeDeparture"
          >
            <p class="logistics-item-title">三程港口</p>
            <p
              class="logistics-item-text"
            >
              港口：{{ detail.threeDeparture }}
            </p>
            <p
              class="logistics-item-text"
            >
              航班信息：{{ detail.threeFlightInfo}}
            </p>
            <p
              class="logistics-item-text"
            >
              起飞日期：{{ detail.threeATD }}
            </p>
          </li>
          <li
            class="logistics-item"
            v-if="detail.transit"
          >
            <p class="logistics-item-title">二程港口</p>
            <p
              class="logistics-item-text"
            >
              港口：{{ detail.transit }}
            </p>
            <p
              class="logistics-item-text"
            >
              航班信息：{{ detail.transitFlightInfo}}
            </p>
            <p
              class="logistics-item-text"
            >
              起飞日期：{{ detail.threeATD }}
            </p>
          </li>
          <li
            class="logistics-item"
            v-if="detail.departure"
          >
            <p class="logistics-item-title">起运港口</p>
            <p
              class="logistics-item-text"
            >
              港口：{{ detail.departure }}
            </p>
            <p
              class="logistics-item-text"
            >
              航班信息：{{ detail.transitFlightInfo}}
            </p>
            <p
              class="logistics-item-text"
            >
              预计起运日期：{{ detail.ETD }}
            </p>
            <p
              class="logistics-item-text"
            >
              实际起运日期：{{ detail.ATD }}
            </p>
          </li>
          <li
            class="logistics-item"
          >
            <p class="logistics-item-title">提货</p>
            <p
              class="logistics-item-text"
            >
              城市：{{ detail.pickupCity }}
            </p>
            <p
              class="logistics-item-text"
            >
              日期：{{ detail.pickupDate }}
            </p>
          </li>
          <!-- <li
            v-for="(item, index) in logistics"
            :key="index"
            class="logistics-item"
          >
            <p class="logistics-item-title">{{ item.title }}</p>
            <p
              v-for="(el, key) in item.detail"
              :key="key"
              class="logistics-item-text"
            >
              {{ el.name }}：{{ el.value }}
            </p>
          </li> -->
        </ul>
        <ul class="logistics-box" v-else>
          <li
            class="logistics-item"
            v-if="detail.signatureDate"
          >
            <p class="logistics-item-title">签收</p>
            <p
              class="logistics-item-text"
            >
              签收日期：{{ detail.signatureDate }}
            </p>
          </li>
          <li
            class="logistics-item"
            v-if="detail.outboundDate"
          >
            <p class="logistics-item-title">出库</p>
            <p
              class="logistics-item-text"
            >
              出库日期：{{ detail.outboundDate }}
            </p>
          </li>
          <li
            class="logistics-item"
            v-if="detail.destinationPort"
          >
            <p class="logistics-item-title">到达站</p>
            <p
              class="logistics-item-text"
            >
              站点：{{ detail.destinationPort }}
            </p>
            <p
              class="logistics-item-text"
            >
              预计到达日期：{{ detail.ETA }}
            </p>
            <p
              class="logistics-item-text"
            >
              实际到达日期：{{ detail.ATA }}
            </p>
          </li>
          <li
            class="logistics-item"
            v-if="detail.fourDeparture"
          >
            <p class="logistics-item-title">四程中转站</p>
            <p
              class="logistics-item-text"
            >
              站点：{{ detail.fourDeparture }}
            </p>
            <p
              class="logistics-item-text"
            >
              班次信息：{{ detail.fourFlightInfo}}
            </p>
            <p
              class="logistics-item-text"
            >
              起运日期：{{ detail.fourATD }}
            </p>
          </li>
          <li
            class="logistics-item"
            v-if="detail.threeDeparture"
          >
            <p class="logistics-item-title">三程中转站</p>
            <p
              class="logistics-item-text"
            >
              站点：{{ detail.threeDeparture }}
            </p>
            <p
              class="logistics-item-text"
            >
              班次信息：{{ detail.threeFlightInfo}}
            </p>
            <p
              class="logistics-item-text"
            >
              起运日期：{{ detail.threeATD }}
            </p>
          </li>
          <li
            class="logistics-item"
            v-if="detail.transit"
          >
            <p class="logistics-item-title">二程中转站</p>
            <p
              class="logistics-item-text"
            >
              站点：{{ detail.transit }}
            </p>
            <p
              class="logistics-item-text"
            >
              班次信息：{{ detail.transitFlightInfo}}
            </p>
            <p
              class="logistics-item-text"
            >
              起运日期：{{ detail.threeATD }}
            </p>
          </li>
          <li
            class="logistics-item"
            v-if="detail.departure"
          >
            <p class="logistics-item-title">始发站</p>
            <p
              class="logistics-item-text"
            >
              站点：{{ detail.departure }}
            </p>
            <p
              class="logistics-item-text"
            >
              班次信息：{{ detail.transitFlightInfo}}
            </p>
            <p
              class="logistics-item-text"
            >
              预计起运日期：{{ detail.ETD }}
            </p>
            <p
              class="logistics-item-text"
            >
              实际起运日期：{{ detail.ATD }}
            </p>
          </li>
          <li
            class="logistics-item"
          >
            <p class="logistics-item-title">提货</p>
            <p
              class="logistics-item-text"
            >
              城市：{{ detail.pickupCity }}
            </p>
            <p
              class="logistics-item-text"
            >
              日期：{{ detail.pickupDate }}
            </p>
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
        Air: '空运',
        Rail: '铁路运输',
        Truck: '陆运',
        Sea: '海运',
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
      const listData = await this.$API.request(this.$API.detail, "POST", { freightOrderId });
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
  }
};
</script>
<style lang="scss" scoped>
.detail-box {
  background: #fff;
  padding-bottom: 78px;
  .title {
    font-size: 28px;
    color: #787878;
    text-align: center;
    font-weight: 400;
    padding: 74px 0 58px 0;
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
    color: #E67016;
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
        width: 12px;
        background: #e67016;
        height: 12px;
        left: -20px;
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
    padding-bottom: 78px;
    .title {
      font-size: 38px;
      padding: 86px 0 52px 0;
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
      font-size: 17px;
      margin-bottom: 8px;
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
          width: 12px;
          background: #e67016;
          height: 12px;
          left: -20px;
          top: 0;
          border-radius: 50%;
        }
      }
      .logistics-item-title {
        font-size: 28px;
        line-height: 28px;
        margin-bottom: 13px;
      }
      .logistics-item-text {
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 6px;
      }
    }
  }
}
</style>