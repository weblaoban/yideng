<template>
  <div id="service">
    <div class="banner">
      <h2>{{ $t("lang.netTitle1") }}</h2>
    </div>
    <div class="container">
      <div class="service">
        <div class="title" @click="showMessage(1)">
          <div class="circle"></div>
          <p>{{ $t("lang.serviceTitle") }}</p>
          <div class="line"></div>
        </div>
        <div class="content" ref="left1">
          <div class="right">
            <img src="../assets/image/service/service1.png" alt />
          </div>
          <div class="left">
            <p>{{ $t("lang.servicedes") }}</p>
            <!-- <ul>
              <li>
                <p>{{ $t("lang.servicedes2") }}</p>
              </li>
              <li>
                <p>{{ $t("lang.servicedes3") }}</p>
              </li>
            </ul> -->
            <!-- <br /> -->
            <div v-html="$t('lang.servicedes4')">
              <p style="margin-bottom: 0px">
                我们提供
                <span>门到门</span>的国际空运服务
              </p>
              <p>
                从
                <span>提货</span>到
                <span>签收</span>
                ，每一环都值得信赖，全程为您的货物保驾护航。
              </p>
              <p style="margin-bottom: 0px">
                <span>经济 快捷</span>
              </p>
              <p>
                上海伊登依托丰富的航线资源，以经济、快捷为服务宗旨，
                <br />根据您的需求，为您包板、包舱、包机
                <br />以优廉的价格和优质的服务
                <br />将您的货物快速且安全地运送至世界的每个角落
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="service">
        <div class="title" @click="showMessage(2)">
          <div class="circle"></div>
          <p>{{ $t("lang.serviceTitle2") }}</p>
          <div class="line"></div>
        </div>
        <div class="content" ref="left2">
          <div class="right">
            <img src="../assets/image/service/service2.png" alt />
          </div>

          <div class="left" v-html="$t('lang.servicedes5')">
            <p>
              上海伊登国际拥有交通部批准的无船承运人(NVOCC)经营资格。
              <br />主要经营各类货物的海运进出口运输
              <br />十几年来，我们积累了丰富的运力资源和实践经验，不断完善服务网络的覆盖范围，现已与COSCO,
              MAERSK, MSC, EVERGREEN, YANGMING,
              WANHAI等多家船公司保持了长久稳定的合作关系。
              <br />上海伊登立志为客户提供
              <span>更经济、更可靠、更高效</span>的一站式物流服务，船期稳定，运价优惠，是我公司赢得客户青睐的优势之一。
            </p>
          </div>
        </div>
      </div>
      <div class="service">
        <div class="title" @click="showMessage(3)">
          <div class="circle"></div>
          <p>{{ $t("lang.serviceTitle3") }}</p>
          <div class="line"></div>
        </div>
        <div class="content" ref="left3">
          <div class="right">
            <img src="../assets/image/service/service3.png" alt />
          </div>
          <div class="left" v-html="$t('lang.servicedes6')">
            <p>上海伊登为您提供中欧、中亚、中蒙等跨境铁路运输服务，包括班列订舱服务、报关服务、提货和送货服务、整箱和拼箱服务。</p>
            <p>我们与国内外数十个铁路口岸保持良好的合作往来，主要包括西安、郑州、成都、重庆、沈阳、武汉、汉堡、华沙、马拉、杜伊斯堡、乌兰巴托、中亚各国铁路口岸等。</p>
          </div>
        </div>
      </div>
      <div class="service">
        <div class="title" @click="showMessage(4)">
          <div class="circle"></div>
          <p>{{ $t("lang.serviceTitle4") }}</p>
          <div class="line"></div>
        </div>
        <div class="content" ref="left4">
          <div class="right">
            <img src="../assets/image/service/service4.png" alt />
          </div>
          <div class="left" v-html="$t('lang.servicedes7')">
            <p>上海伊登国际为客户提供多种合同物流方案，包括国内运输和国内仓储，非保税和保税业务，危险品，冷藏冷冻品以及各类大件项目运输服务。</p>
            <p>我们在全国搭建了多网络平台，在上海拥有上万平米的转运中心及物流仓储中心。自有及合同车辆千余部，门到门运输服务覆盖全国1,000多个城市。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "service",
  methods: {
    showMessage(index) {
      const clientWidth =
        document.body.clientWidth || document.documentElement.clientWidth;
      if (clientWidth > 750) {
        return;
      }
      const elName = "left" + index;
      const el = this.$refs[elName];
      if (el) {
        el.classList.toggle("showLeft");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#service {
  background: #fff;
  padding-bottom: 1px;
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
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .service {
    margin-bottom: 135px;
    width: 510px;
    flex-shrink: 0;
    &:nth-child(2) {
      .left {
        min-height: 510px;
      }
    }
    &:nth-child(2),
    &:nth-child(4) {
      float: right;
    }
    .left /deep/ p,
    .right /deep/ p {
      font-size: 20px;
      color: #343434;
      // margin-bottom: 25px;
      line-height: 40px;
      text-align: left;
      font-weight: 300;
      span {
        color: #343434;
        font-weight: bold;
        font-size: 20px;
      }
    }
    .title {
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
      }
      .line {
        width: 150px;
        border-bottom: 5px solid #e67016;
        margin: 0 auto;
      }
    }

    .content {
      // .showLeft {
      //   display: none!important;
      // }
      .left {
        // float: left;
        width: 100%;
        display: block;
      }
      .right {
        // float: right;
        width: 100%;
      }
      img {
        display: block;
        width: 100%;
        margin-bottom: 80px;
      }
      /deep/ ul {
        // margin-bottom: 40px;
        li {
          padding-left: 30px;
          position: relative;
          margin-bottom: 8px;
          &:before {
            content: "";
            display: block;
            width: 16px;
            height: 16px;
            border-radius: 8px;
            background: #343434;
            position: absolute;
            left: 0;
            top: 0.12rem;
            margin: auto;
          }
          p {
            margin-bottom: 0;
            text-align: left;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  #service {
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
      h2 {
        font-size: 56px;
        height: 0.56rem;
        line-height: 0.56rem;
        margin-top: -0.28rem;
        font-weight: bold;
      }
    }
    .service {
      float: none !important;
      width: 100%;
      margin: 0 auto 1.35rem;
      .title {
        .circle {
          &:after {
            content: "+";
            font-size: 0.5rem;
            color: #fff;
            line-height: 50px;
          }
        }
      }
      .content {
        display: none;
        .left /deep/ p,
        .right /deep/ p {
          font-size: 30px;
          font-weight: 300;
          line-height: 50px;
          span {
            font-size: 30px;
            font-weight: bold;
            line-height: 50px;
          }
        }
        &.showLeft {
          display: block !important;
        }
        .left {
          // display: none;
          float: none;
          width: 100%;
          min-height: auto !important;
        }
        .right {
          float: none;
          width: 100%;
        }
        img {
          width: 100%;
          margin-bottom: 80px;
        }

        /deep/ ul {
          li {
            padding-left: 40px;
            &:before {
              content: "";
              display: block;
              width: 20px;
              height: 20px;
              border-radius: 10px;
              position: absolute;
              left: 0;
              top: 15px;
              margin: auto;
            }
          }
        }
      }
    }
  }
}
</style>