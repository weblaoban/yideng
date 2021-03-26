<template>
  <div class="home">
    <div class="banner">
      <img src="../assets/image/banner1.png" alt />
      <div class="h2">
        <h2>上海伊登</h2>
        <h4>为客户提供有效和建设性的可靠服务和合作环境</h4>
      </div>
    </div>
    <div class="container">
      <ul class="clear">
        <li v-for="(item,index) in sectionData" :key="index" @click="sectionClick(item)">
          <p v-text="item.desc"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      sectionData: [
        {
          desc: "我们的团队",
          link: "/introduce"
        },
        {
          desc: "我们的服务",
          link: "/service"
        },
        {
          desc: "我们的网络",
          link: "/internet"
        },
        {
          desc: "货物查询",
          link: "/list"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["isLogin"])
  },
  methods: {
    ...mapActions(["setShowLogin","setLoginMaskHeight"]),
    sectionClick(data) {
      if (data.link === "/list") {
        if (this.isLogin) {
          this.$router.push(data.link);
        } else {
          this.$nextTick(() => {
            const app = document.getElementById("app");
            this.setLoginMaskHeight(app.offsetHeight);
          });
          this.setShowLogin(true);
          window.scrollTo(0,0);
        }
      } else {
        this.$router.push(data.link);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  min-width: 1200px;
  background: #fff;
  padding-bottom: 1px;
  .banner {
    position: relative;
    margin-bottom: 140px;
    img {
      display: block;
      width: 100%;
      min-width: 1200px;
    }
    .h2 {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      margin: auto;
      height: 60px;
      margin-top: -40px;
      h2 {
        font-size: 62px;
        color: #fff;
        text-align: center;
        margin-bottom: 70px;
        font-weight: 500;
      }
      h4 {
        font-size: 28px;
        color: #fff;
        text-align: center;
        font-weight: 500;
      }
    }
  }
  .container {
    margin-bottom: 160px;
    ul {
      li {
        width: 25%;
        float: left;
        cursor: pointer;
        padding-top: 197px;
        p {
          color: #131313;
          font-size: 28px;
        }
        &:first-child {
          background: url("../assets/image/index_img1.png");
          background-size: 166px 165px;
          background-position: top center;
          background-repeat: no-repeat;
        }
        &:nth-child(2) {
          background: url("../assets/image/index_img2.png");
          background-size: 175px 157px;
          background-position: top center;
          background-repeat: no-repeat;
        }
        &:nth-child(3) {
          background: url("../assets/image/index_img3.png");
          background-size: 172px 154px;
          background-position: top center;
          background-repeat: no-repeat;
        }
        &:nth-child(4) {
          background: url("../assets/image/index_img4.png");
          background-size: 155px 151px;
          background-position: top center;
          background-repeat: no-repeat;
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .home {
    min-width: auto;
    .banner {
      img {
        min-width: auto;
      }
    }
    .container {
      ul {
        li {
          float: none;
          width: 100%;
        }
      }
    }
  }
}
</style>
