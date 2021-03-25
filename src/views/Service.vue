<template>
  <div id="service">
    <div class="banner">
      <img src="../assets/image/banner2.png" alt />
      <h2>服务产品</h2>
    </div>
    <div class="container">
      <div class="service">
        <div class="title">
          <div class="circle"></div>
          <p>国际空运</p>
          <div class="line"></div>
        </div>
        <div class="content clear">
          <div class="left">
            <p>上海伊登已经在海外主要国家建立了完善的国际合作网络，为您提供：</p>
            <ul>
              <li>
                <p>空运进出口</p>
              </li>
              <li>
                <p>提货-仓储-订舱-清关-保险-送货等全方位服务</p>
              </li>
            </ul>
            <p style="margin-bottom: 0px;">
              我们提供
              <span>门到门</span>的国际空运服务
            </p>
            <p>
              从
              <span>提货</span>到
              <span>签收</span>
              ，每一环都值得信赖，全程为您的货物保驾护航。
            </p>
            <p style="margin-bottom: 0px;">
              <span>经济 快捷</span>
            </p>
            <p>
              上海伊登依托丰富的航线资源，以经济、快捷为服务宗旨，
              <br />根据您的需求，为您包板、包舱、包机
              <br />以优廉的价格和优质的服务
              <br />将您的货物快速且安全地运送至世界的每个角落
            </p>
          </div>
          <div class="right">
            <img src="../assets/image/service/service1.png" alt />
          </div>
        </div>
      </div>
      <div class="service">
        <div class="title">
          <div class="circle"></div>
          <p>国际海运</p>
          <div class="line"></div>
        </div>
        <div class="content clear">
          <div class="left">
            <img src="../assets/image/service/service2.png" alt />
          </div>

          <div class="right">
            <p>
              上海伊登国际拥有交通部批准的无船承运人(NVOCC)经营资格。
              <br />主要经营各类货物的海运进出口运输
              <br />十几年来，我们积累了丰富的运力资源和实践经验，不断完善服务网络的覆盖范围，现已与COSCO, MAERSK, MSC, EVERGREEN, YANGMING, WANHAI等多家船公司保持了长久稳定的合作关系。
              <br />上海伊登立志为客户提供
              <span>更经济、更可靠、更高效</span>的一站式物流服务，船期稳定，运价优惠，是我公司赢得客户青睐的优势之一。
            </p>
          </div>
        </div>
      </div>
      <div class="service">
        <div class="title">
          <div class="circle"></div>
          <p>跨境铁路运输</p>
          <div class="line"></div>
        </div>
        <div class="content clear">
          <div class="left">
            <p>上海伊登为您提供中欧、中亚、中蒙等跨境铁路运输服务，包括班列订舱服务、报关服务、提货和送货服务、整箱和拼箱服务。</p>
            <p>我们与国内外数十个铁路口岸保持良好的合作往来，主要包括西安、郑州、成都、重庆、沈阳、武汉、汉堡、华沙、马拉、杜伊斯堡、乌兰巴托、中亚各国铁路口岸等。</p>
          </div>
          <div class="right">
            <img src="../assets/image/service/service3.png" alt />
          </div>
        </div>
      </div>
      <div class="service">
        <div class="title">
          <div class="circle"></div>
          <p>合同物流</p>
          <div class="line"></div>
        </div>
        <div class="content clear">
          <div class="left">
            <img src="../assets/image/service/service4.png" alt />
          </div>
          <div class="right">
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
  name: "service"
};
</script>
<style lang="scss" scoped>
#service {
  background: #fff;
  padding-bottom: 1px;
  .banner {
    position: relative;
    margin-bottom: 120px;
    img {
      display: block;
      width: 100%;
    }
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

  .service {
    margin-bottom: 135px;
    .left p,
    .right p {
      font-size: 28px;
      color: #000;
      margin-bottom: 25px;
      line-height: 43px;
      text-align: left;
      font-weight: 400;
      span {
        color: #e67016;
        font-size: 28px;
      }
    }
    .title {
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
      }
      .line {
        width: 187px;
        border-bottom: 4px solid #e67016;
        margin: 0 auto;
      }
    }

    .content {
      .left {
        float: left;
        width: 574px;
      }
      .right {
        float: right;
        width: 574px;
      }
      img {
        display: block;
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
    }
  }
}

@media screen and (max-width: 750px) {
  #service {
    .service {
      .content {
        .left {
          float: none;
          width: 100%;
        }
        .right {
          float: none;
          width: 100%;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>