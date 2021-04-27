<template>
  <div id="introduce">
    <div class="banner">
      <h2 v-text="$t('lang.about')"></h2>
    </div>
    <div class="title">
      <div class="circle"></div>
      <p v-text="$t('lang.introduce')"></p>
      <div class="line"></div>
    </div>
    <div class="container">
      <div class="introduce">
        <p class="desc desc2" v-text="$t('lang.introducep1')"></p>
        <ul>
          <li v-for="(item,index) in $t('lang.introduceMenu1')" :key="index">
            <p v-text="item"></p>
          </li>
        </ul>
        <p class="desc" v-text="$t('lang.introducep2')"></p>
        <div class="section clear">
          <ul v-for="(item,index) in $t('lang.introduceMenu2')" :key="index">
            <h4 v-text="item.title"></h4>
            <li v-for="(menu,menuIndex) in item.menu" :key="menuIndex">
              <p v-text="menu"></p>
            </li>
          </ul>
        </div>
        <p class="desc" v-text="$t('lang.introducep3')"></p>
        <h3 v-text="$t('lang.introducep4')"></h3>
      </div>
    </div>
    <!-- <div class="title">
      <div class="circle"></div>
      <p v-text="$t('lang.introduceTitle1')"></p>
      <div class="line"></div>
    </div>
    <div class="container">
      <div class="introduce">
        <p class="desc" v-html="$t('lang.introducep5')"></p>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "introduce"
};
</script>
<style lang="scss" scoped>
#introduce {
  background: #fff;
  padding-bottom: 80px;
  min-width: 1200px;
  padding-top: 82px;
  .banner {
    position: relative;
    margin-bottom: 120px;
    height: 640px;
    background: url("../assets/image/banner2.png");
    background-size: 100% 100%;
    background-position: top center;
    background-repeat: no-repeat;
    h2 {
      font-size: 40px;
      color: #fff;
      text-align: center;
      width: 100%;
      position: absolute;
      top: 50%;
      font-weight: bold;
      line-height: 40px;
      margin-top: -20px;
    }
  }
  .title {
    // width: 187px;
    height: 135px;
    margin: 0 auto;
    margin-bottom: 80px;
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
      // border-bottom: 5px solid #e67016;
    }
    .line {
      width: 150px;
      border-bottom: 5px solid #e67016;
      margin: 0 auto;
    }
  }
  .introduce {
    p {
      font-size: 20px;
      color: #343434;
      margin-bottom: 41px;
      line-height: 40px;
      text-align: left;
      font-weight: 300;
      &.desc2{
        font-weight: 400;
      }
    }
    ul {
      margin-bottom: 40px;
      li {
        padding-left: 21px;
        position: relative;
        // margin-bottom: 8px;
        &:before {
          content: "";
          display: block;
          width: 16px;
          height: 16px;
          border-radius: 8px;
          background: #343434;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        p {
          margin-bottom: 0;
          text-align: left;
        }
      }
    }
    .section {
      margin-bottom: 45px;
      ul {
        float: left;
        max-width: 260px;
        h4 {
          font-size: 20px;
          line-height: 40px;
          color: #343434;
          font-weight: bold;
          text-align: left;
          // margin-bottom: 8px;
        }
        &:nth-child(2) {
          margin: 0 299px 0 292px;
        }
        &:last-child {
          max-width: 387px;
        }
      }
    }
    h3 {
      font-size: 20px;
      line-height: 40px;
      color: #343434;
      margin-bottom: 135px;
      text-align: left;
      font-weight: bold;
    }
  }
}

@media screen and (max-width: 750px) {
  #introduce {
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
      h2{
        font-size: 56px;
        height: 0.56rem;
        line-height: 0.56rem;
        margin-top: -0.28rem;
        font-weight: bold;
      }
    }
    // .title {
    //   height: 195px;
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
    .introduce {
      p {
        font-size: 30px;
        line-height: 50px;
        font-weight: 300;
        margin-bottom: 80px;
        &.desc2{
          font-weight: 300;
        }
      }
      h3{
        font-size: 30px;
        line-height: 50px;
        color: #343434;
      }
      .section {
        margin-bottom: 45px;
        ul {
          float: none;
          // max-width: 2rem;
          // margin-bottom: 80px;
          h4 {
            font-size: 30px;
            line-height: 50px;
          }
          &:nth-child(2) {
            margin: 80px 0 80px;
          }
          &:nth-child(3) {
            max-width: 100%;
          }
          li {
            padding-left: 28px;
            &:before {
              content: "";
              display: block;
              width: 20px;
              height: 20px;
              border-radius: 10px;
              background: #343434;
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              margin: auto;
            }
          }
        }
      }
      ul {
        float: none;
        margin-bottom: 74px;
        // &:nth-child(2) {
        //   margin: 0;
        // }
        h4 {
          font-size: 33px;
        }
        li {
          padding-left: 40px;
          &:before {
            content: "";
            display: block;
            width: 28px;
            height: 28px;
            border-radius: 14px;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            margin: auto;
          }
        }
      }
    }
  }
}
</style>