<template>
  <div class="home">
    <div class="banner">
      <!-- <img src="../assets/image/banner1.png" alt /> -->
      <div class="h2">
        <h2 v-text="$t('lang.homeTitle')"></h2>
        <h4 v-text="$t('lang.homeP')"></h4>
      </div>
    </div>
    <div class="container">
      <ul class="clear">
        <li v-for="(item,index) in sectionData" :key="index" @click="sectionClick(item)">
          <p v-text="$t('lang.homeMenu'+(index+1))"></p>
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
          // desc:$t('lang.homeMenu1'),
          link: "/list"
        },
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
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["isLogin"])
  },
  methods: {
    ...mapActions(["setShowLogin", "setLoginMaskHeight"]),
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
          sessionStorage.setItem('toList',"toList");
          window.scrollTo(0, 0);
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
  padding-top: 82px;
  .banner {
    position: relative;
    margin-bottom: 130px;
    height: 1000px;
    background: url("../assets/image/banner1.png");
    background-size: 100% 100%;
    background-position: top center;
    background-repeat: no-repeat;
    // img {
    //   display: block;
    //   width: 100%;
    //   min-width: 1200px;
    // }
    .h2 {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      margin: auto;
      // height: 60px;
      margin-top: -70px;
      h2 {
        font-size: 40px;
        color: #fff;
        text-align: center;
        margin-bottom: 11px;
        font-weight: bold;
      }
      h4 {
        font-size: 20px;
        color: #fff;
        text-align: center;
        font-weight: bold;
      }
    }
  }
  .container {
    margin-bottom: 130px;
    ul {
      li {
        width: 25%;
        float: left;
        cursor: pointer;
        padding-top: 210px;
        p {
          color: #343434;
          font-size: 30px;
          font-weight: bold;
        }
        &:nth-child(2) {
          background: url("../assets/image/index_img1.png");
          background-size: 180px 180px;
          background-position: top center;
          background-repeat: no-repeat;
        }
        &:nth-child(3) {
          background: url("../assets/image/index_img2.png");
          background-size: 180px 180px;
          background-position: top center;
          background-repeat: no-repeat;
        }
        &:nth-child(4) {
          background: url("../assets/image/index_img3.png");
          background-size: 180px 180px;
          background-position: top center;
          background-repeat: no-repeat;
        }
        &:nth-child(1) {
          background: url("../assets/image/index_img4.png");
          background-size: 180px 180px;
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
    padding-top: 130px;
    .banner {
      width: 750px;
      height: 400px;
      background: url("../assets/image/mobile/mobileBanner1.png");
      background-size: 100% 100%;
      background-position: top center;
      background-repeat: no-repeat;
      margin-bottom: 160px;
      .h2 {
        // margin-top: -1.1rem;
        h2 {
          margin-bottom: 30px;
        }
        h4{
          font-size: 30px;
          font-weight: 300;
        }
      }
    }
    .container {
      margin-bottom: 1.6rem;
      ul {
        li {
          float: none;
          width: 100%;
          margin-bottom: 80px;
          height: 276px;
          padding-top: 246px;
          p {
            color: #343434;
            font-size: 30px;
            line-height: 30px;
          }
          &:nth-child(2) {
            background: url("../assets/image/index_img1.png");
            background-size: 200px 200px;
            background-position: top center;
            background-repeat: no-repeat;
          }
          &:nth-child(3) {
            background: url("../assets/image/index_img2.png");
            background-size: 200px 200px;
            background-position: top center;
            background-repeat: no-repeat;
          }
          &:nth-child(4) {
            background: url("../assets/image/index_img3.png");
            background-size: 200px 200px;
            background-position: top center;
            background-repeat: no-repeat;
          }
          &:nth-child(1) {
            background: url("../assets/image/index_img4.png");
            background-size: 200px 200px;
            background-position: top center;
            background-repeat: no-repeat;
          }
        }
      }
    }
  }
}
</style>
