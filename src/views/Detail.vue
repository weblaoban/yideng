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
              <td>{{ detail.zd }}</td>
              <td>航班信息</td>
              <td>{{ detail.zd }}</td>
            </tr>
            <tr>
              <td>空运主单号</td>
              <td>{{ detail.zd }}</td>
              <td>数量</td>
              <td>{{ detail.zd }}</td>
            </tr>
            <tr>
              <td>空运分单号</td>
              <td>{{ detail.zd }}</td>
              <td>毛重(kg)</td>
              <td>{{ detail.zd }}</td>
            </tr>
            <tr>
              <td>起运港</td>
              <td>{{ detail.zd }}</td>
              <td>计费重量(kg)</td>
              <td>{{ detail.zd }}</td>
            </tr>
            <tr>
              <td>目的港</td>
              <td>{{ detail.zd }}</td>
              <td>体积(CBM)</td>
              <td>{{ detail.zd }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="basic logistics">
        <p class="basic-title">物流信息</p>
        <ul class="logistics-box">
          <li
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
  created() {},
  //销毁前清除
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
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
        height: 40px;
        font-size: 16px;
        &:nth-child(2n + 1) {
          background: #cecece;
          color: #000;
        }
        &:nth-child(2n) {
          background: #ebebeb;
          font-weight: 100;
        }
      }
    }
  }
  .basic-title {
    color: #000;
    font-size: 22px;
    font-weight: 300;
    text-align: left;
    margin-bottom: 9px;
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
      color: #000;
      font-size: 22px;
      line-height: 21px;
      margin-bottom: 10px;
    }
    .logistics-item-text {
      font-size: 16px;
      color: #000;
      font-weight: 100;
      line-height: 16px;
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