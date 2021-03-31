<template>
  <div class="list-box">
    <div class="container">
      <div class="title">我的货运信息</div>
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
            <td>{{ type[item.transportation] }}</td>
            <td>{{ item.orderNumber }}</td>
            <td>{{ item.departure }}</td>
            <td>{{ item.destinationPort }}</td>
            <td>{{ item.flightInfo }}</td>
            <td class="td-opration" @click="$router.push(`/detail/${item.id}`)">查看详情</td>
          </tr>
        </tbody>
      </table>
      <div class="page-box">
        <span class="page-button" @click="numClick('pre')">上一页</span>
        <span class="page-query">
          <input class="page-input" v-model="listQuery.pageNo" />
          <span class="page-total">/{{ Math.ceil(total/10) }}</span>
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
      list: [],
      total: 0,
      type: {
        Air: '空运',
        Rail: '铁路运输',
        Truck: '陆运',
        Sea: '海运',
      },
      listQuery: {
        pageNo: 1,
        pageSize: 10,
        keywords: undefined
      }
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
      const listData = await this.$API.request(this.$API.list, "POST", this.listQuery);
      console.log(listData.data)
      this.list = listData.data.records;
      this.total = listData.data.total
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
        const allPage = Math.ceil(this.total / 10)
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
    }
  }
};
</script>

<style lang="scss" scoped>
.list-box {
  background: #fff;
  //   position: relative;
  height: calc(100vh - 72px);
  align-items: center;
  display: flex;
  .container {
    //   position: absolute;
    //   left: 0;
    //   right: 0;
    //   top: 0;
    //   bottom: 0;
  }
  .query-box {
    margin-bottom: 34px;
    text-align: center;
  }
  .title {
    font-size: 28px;
    color: #787878;
    margin-bottom: 26px;
  }
  .query-input {
    width: 800px;
    height: 50px;
    border: 1px solid #000000;
    border-radius: 5px;
    // float: left;
    margin-right: 24px;
    padding: 0 7px;
    font-size: 16px;
    outline: none;
    &::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #cfcfcf;
      font-size: 16px;
    }
    &:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #cfcfcf;
      font-size: 16px;
      //   line-height: 16px;
    }
    &::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #cfcfcf;
      font-size: 16px;
      //   line-height: 16px;
    }
    &:-ms-input-placeholder {
      /* Internet Explorer 10+ */
      color: #cfcfcf;
      font-size: 16px;
      //   line-height: 16px;
    }
  }
  .query-button {
    display: inline-block;
    width: 108px;
    height: 52px;
    background: #e67016;
    line-height: 52px;
    border-radius: 4px;
    // float: left;
    color: #fff;
    cursor: pointer;
  }
  .table-list {
    width: 100%;
    .table-head {
      th {
        background: #cecece;
        color: #000;
        font-size: 12px;
        height: 32px;
      }
    }
    .table-body {
      td {
        background: #ebebeb;
        color: #000;
        font-size: 12px;
        height: 32px;
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
      width: 61px;
      height: 28px;
      background: #e67016;
      line-height: 28px;
      color: #fff;
      font-size: 16px;
      border-radius: 5px;
    }
    .page-query {
      margin: 0 10px;
    }
    .page-input {
      width: 28px;
      height: 28px;
      border: 1px solid #000;
      border-radius: 5px;
      font-size: 13px;
      outline: none;
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #000;
        font-size: 13px;
        // line-height: 12px;
      }
      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #000;
        font-size: 13px;
        // line-height: 12px;
      }
      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #000;
        font-size: 13px;
        // line-height: 12px;
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #000;
        font-size: 13px;
        // line-height: 28px;
      }
    }
    .page-total {
      color: #000;
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 750px) {
  .list-box {
    align-items: flex-start;
    padding-top: 146px;
    .query-input {
      width: 100%;
      display: block;
      margin-right: 0;
      margin-bottom: 27px;
      border: 2px solid #000;
    }
    .title {
      font-size: 38px;
    }
    .query-button {
      width: 137px;
      //   height: 51px;
      border-radius: 20px;
      line-height: normal;
      padding: 14px 0;
      height: auto;
    }
    .table-list {
      width: 100%;
      .table-head {
        th {
          width: 16.6666%;
          font-size: 16px;
          height: 46px;
          zoom: 0.5;
        }
      }
      .table-body {
        td {
          font-size: 14px;
          height: 46px;
          zoom: 0.5;
        }
      }
    }
    .page-box {
      margin-top: 30px;
      .page-button {
        display: inline-block;
        width: 91px;
        height: 43px;
        line-height: 43px;
        font-size: 24px;
      }
      .page-query {
        margin: 0 10px;
      }
      .page-input {
        width: 42px;
        height: 42px;
        border: 2px solid #000;
        border-radius: 5px;
        font-size: 19px;
        outline: none;
        &::-webkit-input-placeholder {
          /* WebKit browsers */
          color: #000;
          font-size: 19px;
          // line-height: 12px;
        }
        &:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: #000;
          font-size: 19px;
          // line-height: 12px;
        }
        &::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: #000;
          font-size: 19px;
          // line-height: 12px;
        }
        &:-ms-input-placeholder {
          /* Internet Explorer 10+ */
          color: #000;
          font-size: 19px;
          // line-height: 28px;
        }
      }
      .page-total {
        color: #000;
        font-size: 16px;
      }
    }
  }
}
</style>