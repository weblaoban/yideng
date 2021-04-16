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
  .banner {
    position: relative;
    margin-bottom: 140px;
    height: 857px;
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
        font-size: 80px;
        color: #fff;
        text-align: center;
        margin-bottom: 70px;
        font-weight: 500;
      }
      h4 {
        font-size: 30px;
        color: #fff;
        text-align: center;
        font-weight: 100;
      }
    }
  }
  .container {
    margin-bottom: 134px;
    ul {
      li {
        width: 25%;
        float: left;
        cursor: pointer;
        padding-top: 197px;
        p {
          color: #343434;
          font-size: 36px;
          font-weight: bold;
        }
        &:nth-child(2) {
          background: url("../assets/image/index_img1.png");
          background-size: 166px 165px;
          background-position: top center;
          background-repeat: no-repeat;
        }
        &:nth-child(3) {
          background: url("../assets/image/index_img2.png");
          background-size: 175px 157px;
          background-position: top center;
          background-repeat: no-repeat;
        }
        &:nth-child(4) {
          background: url("../assets/image/index_img3.png");
          background-size: 172px 154px;
          background-position: top center;
          background-repeat: no-repeat;
        }
        &:nth-child(1) {
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
      width: 750px;
      height: 546px;
      background: url("../assets/image/mobile/mobileBanner1.png");
      background-size: 100% 100%;
      background-position: top center;
      background-repeat: no-repeat;
      .h2 {
        h2 {
          margin-bottom: 30px;
        }
      }
    }
    .container {
      ul {
        li {
          float: none;
          width: 100%;
          margin-bottom: 275px;
          height: 383px;
          padding-top: 332px;
          p {
            color: #131313;
            font-size: 54px;
          }
          &:nth-child(2) {
            background: url("../assets/image/index_img1.png");
            background-size: 300px 300px;
            background-position: top center;
            background-repeat: no-repeat;
          }
          &:nth-child(3) {
            background: url("../assets/image/index_img2.png");
            background-size: 319px 285px;
            background-position: top center;
            background-repeat: no-repeat;
          }
          &:nth-child(4) {
            background: url("../assets/image/index_img3.png");
            background-size: 329px 293px;
            background-position: top center;
            background-repeat: no-repeat;
          }
          &:nth-child(1) {
            background: url("../assets/image/index_img4.png");
            background-size: 285px 278px;
            background-position: top center;
            background-repeat: no-repeat;
          }
        }
      }
    }
  }
}
</style>
