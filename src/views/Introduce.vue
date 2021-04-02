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
        <p class="desc" v-text="$t('lang.introducep1')"></p>
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
    <div class="title">
      <div class="circle"></div>
      <p v-text="$t('lang.introduceTitle1')"></p>
      <div class="line"></div>
    </div>
    <div class="container">
      <div class="introduce">
        <p class="desc" v-html="$t('lang.introducep5')"></p>
      </div>
    </div>
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
  .banner {
    position: relative;
    margin-bottom: 120px;
    height: 388px;
    background: url("../assets/image/banner2.png");
    background-size: 100% 100%;
    background-position: top center;
    background-repeat: no-repeat;
    h2 {
      font-size: 62px;
      color: #fff;
      text-align: center;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      font-weight: 500;
      height: 60px;
    }
  }
  .title {
    // width: 187px;
    height: 132px;
    margin: 0 auto;
    margin-bottom: 40px;
    .circle {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background: #e67016;
      margin: 0 auto;
    }
    p {
      font-size: 37px;
      color: #000;
      text-align: center;
      line-height: 82px;
      // border-bottom: 4px solid #e67016;
    }
    .line {
      width: 187px;
      border-bottom: 4px solid #e67016;
      margin: 0 auto;
    }
  }
  .introduce {
    p {
      font-size: 25px;
      color: #000;
      margin-bottom: 49px;
      line-height: 1.5;
      text-align: left;
      font-weight: 400;
    }
    ul {
      margin-bottom: 40px;
      li {
        padding-left: 30px;
        position: relative;
        margin-bottom: 8px;
        &:before {
          content: "";
          display: block;
          width: 22px;
          height: 22px;
          border-radius: 12.5px;
          border: 1px solid #e67016;
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
          font-size: 25px;
          color: #000;
          font-weight: 600;
          text-align: left;
          margin-bottom: 8px;
        }
        &:nth-child(2) {
          margin: 0 150px 0 327px;
        }
        &:last-child{
          max-width:387px;
        }

      }
    }
    h3 {
      font-size: 31px;
      color: #000;
      margin-bottom: 135px;
      text-align: left;
    }
  }
}

@media screen and (max-width: 750px) {
  #introduce {
    min-width: auto;
    .banner {
      width: 750px;
      height: 546px;
      background: url("../assets/image/mobile/mobileBanner1.png");
      background-size: 100% 100%;
      background-position: top center;
      background-repeat: no-repeat;
    }
    .introduce {
      p {
        font-size: 33px;
      }
      .section {
        margin-bottom: 45px;
        ul {
          // float: none;
        max-width: 2rem;
          h4 {
            font-size: 33px;
          }
          &:nth-child(2) {
            margin: 0 33px 50px 160px;
          }
          &:nth-child(3) {
            max-width: 100%;
          }
          li {
            padding-left: 40px;
            &:before {
              content: "";
              display: block;
              width: 28px;
              height: 28px;
              border-radius: 14px;
              border: 1px solid #e67016;
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
        &:nth-child(2) {
          margin: 0;
        }
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
            border: 1px solid #e67016;
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