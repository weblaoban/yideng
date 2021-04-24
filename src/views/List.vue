<template>
  <div class="list-box">
    <div class="container">
      <div class="title">
        <div class="circle"></div>
        <p>我的货运信息</p>
        <div class="line"></div>
      </div>
      <div class="query-box clear">
        <input
          placeholder="输入空运分单号或空运主单号或作业编号进行查询"
          class="query-input"
          v-model="listQuery.keywords"
        />
        <span class="query-button" @click="query">查询</span>
      </div>
      <table class="table-list">
        <thead class="table-head">
          <tr>
            <th>运输方式</th>
            <th>主单号/运单号/收货凭据</th>
            <th>出发港/地</th>
            <th>目的港/地</th>
            <th>航班/航次/车牌/班次信息</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr v-for="(item, index) in list" :key="index">
            <td>{{ type[item.transportation] || item.transportation }}</td>
            <td>{{ item.orderNumber }}</td>
            <td>{{ item.departure }}</td>
            <td>{{ item.destinationPort }}</td>
            <td>{{ item.flightInfo }}</td>
            <td class="td-opration" @click="$router.push(`/detail/${item.id}`)">
              查看详情
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mobile-list">
        <div v-for="(item, index) in list" :key="index" class="mobile-item">
          <div class="mobile-inner">
            <div class="item-title">运输方式</div>
            <div class="item-value">
              {{ type[item.transportation] || item.transportation }}
            </div>
          </div>
          <div class="mobile-inner">
            <div class="item-title">主单号/运单号/收货凭据</div>
            <div class="item-value">{{ item.orderNumber }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title">出发港/地</div>
            <div class="item-value">{{ item.departure }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title">目的港/地</div>
            <div class="item-value">{{ item.destinationPort }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title">航班/航次/车牌/班次信息</div>
            <div class="item-value">{{ item.flightInfo }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title">操作</div>
            <div
              class="item-value item-option"
              @click="$router.push(`/detail/${item.id}`)"
            >
              查看详情
            </div>
          </div>
        </div>
      </div>
      <div class="page-box">
        <span class="page-button" @click="numClick('pre')">上一页</span>
        <span class="page-query">
          <input class="page-input" v-model="listQuery.pageNo" />
          <span class="page-total">/{{ Math.ceil(total / 10) }}</span>
        </span>
        <span class="page-button" @click="numClick('next')">下一页</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      list: [
        //   {
        //   transportation: 'Air',
        //   orderNumber: 122344,
        //   departure: 233344,
        //   destinationPort: 'eiuii',
        //   flightInfo: 'jujjjjjjj',
        //   id: 1,
        // }, {
        //   transportation: 'Air',
        //   orderNumber: 122344,
        //   departure: 233344,
        //   destinationPort: 'eiuii',
        //   flightInfo: 'jujjjjjjj',
        //   id: 1,
        // }, {
        //   transportation: 'Air',
        //   orderNumber: 122344,
        //   departure: 233344,
        //   destinationPort: 'eiuii',
        //   flightInfo: 'jujjjjjjj',
        //   id: 1,
        // }
      ],
      total: 0,
      type: {
        Air: "空运",
        Rail: "铁路运输",
        Truck: "陆运",
        Ocean: "海运",
      },
      listQuery: {
        pageNo: 1,
        pageSize: 10,
        keywords: undefined,
      },
    };
  },
  //创建前设置
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#fff;");
  },
  created() {
    this.getList();
  },
  //销毁前清除
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
  methods: {
    async getList() {
      const listData = await this.$API.request(
        this.$API.list,
        "POST",
        this.listQuery
      );
      console.log(listData.data);
      this.list = listData.data.records;
      this.total = listData.data.total;
      //   fetchCalendarOrderList(this.listQuery).then(response => {
      //     this.list = response.data.data.list
      //     this.total = response.data.data.total
      //   }).catch((response) => {
      //     this.list = []
      //     this.total = 0
      //   })
    },
    numClick(type) {
      if (type === "next") {
        const allPage = Math.ceil(this.total / 10);
        if (this.listQuery.pageNo >= allPage) {
          return;
        }
        this.listQuery.pageNo++;
      } else if (type === "pre") {
        if (this.listQuery.pageNo <= 1) {
          return;
        }
        this.listQuery.pageNo--;
      }
      this.getList();
    },
    query() {
      this.listQuery.pageNo = 1;
      this.getList();
    },
  },
};
</script>

<style lang="scss" scoped>
.list-box {
  background: #fff;
  //   position: relative;
  // height: calc(100vh - 82px);
  padding-top: 82px;
  padding-bottom: 40px;
  // align-items: center;
  // display: flex;
  .container {
    //   position: absolute;
    //   left: 0;
    //   right: 0;
    //   top: 0;
    //   bottom: 0;
  }
  .mobile-list {
    display: none;
  }
  .query-box {
    margin-bottom: 40px;
    text-align: center;
  }
  .title {
    // width: 187px;
    height: 135px;
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
  .query-input {
    width: 1030px;
    height: 60px;
    border: 1px solid #343434;
    border-radius: 5px;
    // float: left;
    margin-right: 18px;
    padding: 0 7px;
    font-size: 24px;
    outline: none;
    &::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #cfcfcf;
      font-size: 24px;
    }
    &:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #cfcfcf;
      font-size: 24px;
      //   line-height: 16px;
    }
    &::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #cfcfcf;
      font-size: 24px;
      //   line-height: 16px;
    }
    &:-ms-input-placeholder {
      /* Internet Explorer 10+ */
      color: #cfcfcf;
      font-size: 24px;
      //   line-height: 16px;
    }
  }
  .query-button {
    display: inline-block;
    width: 150px;
    height: 60px;
    background: #e67016;
    line-height: 60px;
    border-radius: 10px;
    // float: left;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
  }
  .table-list {
    width: 100%;
    .table-head {
      th {
        background: #f8f8f8;
        color: #787878;
        font-size: 20px;
        height: 50px;
        font-weight: bold;
      }
    }
    .table-body {
      td {
        background: #f8f8f8;
        color: #787878;
        font-size: 20px;
        height: 50px;
        font-weight: 100;
        // border: 1px solid #FFFFFF;
        &.td-opration {
          color: #e67016;
          cursor: pointer;
        }
      }
    }
  }
  .page-box {
    margin-top: 30px;
    .page-button {
      display: inline-block;
      width: 150px;
      height: 60px;
      background: #e67016;
      line-height: 60px;
      color: #fff;
      border-radius: 10px;
      font-size: 30ppx;
    }
    .page-query {
      margin: 0 29px;
    }
    .page-input {
      width: 60px;
      height: 60px;
      border: 1px solid #343434;
      border-radius: 10px;
      font-size: 30px;
      outline: none;
      color: #787878;
      text-align: center;
      margin-right: 10px;
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #787878;
        font-size: 30px;
        // line-height: 12px;
      }
      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #787878;
        font-size: 30px;
        // line-height: 12px;
      }
      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #000;
        font-size: 30px;
        // line-height: 12px;
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #000;
        font-size: 30px;
        // line-height: 28px;
      }
    }
    .page-total {
      color: #787878;
      font-size: 30px;
    }
  }
}

@media screen and (max-width: 750px) {
  .list-box {
    align-items: flex-start;
    padding-top: 290px;
    padding-bottom: 160px;
    height: auto;
    .mobile-list {
      display: block;
      .mobile-item {
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
          font-weight: bold;
          font-size: 40px;
          margin-bottom: 40px;
        }
        .item-value {
          font-weight: 300;
          font-size: 40px;
          &.item-option {
            color: #e67016;
          }
        }
      }
    }
    .table-list {
      display: none;
    }
    .query-input {
      width: 100%;
      height: 120px;
      display: block;
      margin-right: 0;
      margin-bottom: 80px;
      border: 2px solid #343434;
      font-size: 28px;
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #787878;
        font-size: 28px;
      }
      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #787878;
        font-size: 28px;
        //   line-height: 16px;
      }
      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #787878;
        font-size: 28px;
        //   line-height: 16px;
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #787878;
        font-size: 28px;
        //   line-height: 16px;
      }
    }
    .query-box {
      margin-bottom: 160px;
    }
    .title{
      margin-top: 0;
    }
    // .title {
    //   height: 195px;
    //   margin-top: 0;
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
    .query-button {
      width: 180px;
      // height: 51px;
      border-radius: 0;
      line-height: normal;
      padding: 20px 0;
      height: auto;
      font-size: 40px;
      line-height: 40px;
      border-radius: 10px;
    }
    .page-box {
      margin-top: 30px;
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      .page-button {
        display: inline-block;
        width: 180px;
        font-size: 40px;
        padding: 20px 0;
        line-height: 40px;
        height: auto;
      }
      .page-query {
        margin: 0 40px;
      }
      .page-input {
        width: 80px;
        height: 80px;
        border: 2px solid #343434;
        border-radius: 10px;
        font-size: 40px;
        outline: none;
        &::-webkit-input-placeholder {
          /* WebKit browsers */
          color: #787878;
          font-size: 40px;
          // line-height: 12px;
        }
        &:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: #787878;
          font-size: 40px;
          // line-height: 12px;
        }
        &::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: #787878;
          font-size: 40px;
          // line-height: 12px;
        }
        &:-ms-input-placeholder {
          /* Internet Explorer 10+ */
          color: #787878;
          font-size: 40px;
          // line-height: 28px;
        }
      }
      .page-total {
        color: #787878;
        font-size: 40px;
      }
    }
  }
}
</style>