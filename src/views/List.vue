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
        <span class="query-button">查询</span>
      </div>
      <table class="table-list">
        <thead class="table-head">
          <tr>
            <th>运输方式</th>
            <th>运输方式</th>
            <th>运输方式</th>
            <th>运输方式</th>
            <th>运输方式</th>
            <th>运输方式</th>
            <th>运输方式</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr v-for="(item, index) in list" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.name2 }}</td>
            <td>{{ item.name3 }}</td>
            <td>{{ item.name4 }}</td>
            <td>{{ item.name5 }}</td>
            <td>{{ item.name6 }}</td>
            <td>{{ item.name7 }}</td>
            <td class="td-opration">查看详情</td>
          </tr>
        </tbody>
      </table>
      <div class="page-box">
        <span class="page-button" @click="numClick('pre')">上一页</span>
        <span class="page-query">
          <input placeholder="1" class="page-input" v-model="listQuery.page" />
          <span class="page-total">/{{ total }}</span>
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
        {
          name: "海运空运",
          name2: "海运空运",
          name3: "海运空运",
          name4: "海运空运",
          name5: "海运空运",
          name6: "海运空运",
          name7: "海运空运",
        },
        {
          name: "海运空运",
          name2: "海运空运",
          name3: "海运空运",
          name4: "海运空运",
          name5: "海运空运",
          name6: "海运空运",
          name7: "海运空运",
        },
      ],
      total: 123,
      listQuery: {
        page: 1,
        size: 20,
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
  created() {},
  //销毁前清除
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
  methods: {
    getList() {
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
        if (this.listQuery.page >= this.total) {
          return;
        }
        this.listQuery.page++;
      } else if (type === "pre") {
        if (this.listQuery.page <= 1) {
          return;
        }
        this.listQuery.page--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.list-box {
  background: #fff;
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
    &::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #cfcfcf;
      font-size: 16px;
      line-height: 50px;
    }
    &:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #cfcfcf;
      font-size: 16px;
      line-height: 50px;
    }
    &::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #cfcfcf;
      font-size: 16px;
      line-height: 50px;
    }
    &:-ms-input-placeholder {
      /* Internet Explorer 10+ */
      color: #cfcfcf;
      font-size: 16px;
      line-height: 50px;
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
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #000;
        font-size: 13px;
        line-height: 28px;
      }
      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #000;
        font-size: 13px;
        line-height: 28px;
      }
      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #000;
        font-size: 13px;
        line-height: 28px;
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #000;
        font-size: 13px;
        line-height: 28px;
      }
    }
    .page-total {
      color: #000;
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 750px) {
}
</style>