<template>
  <div id="introduce">
    <div class="banner">
      <h2>关于伊登</h2>
    </div>
    <div class="title">
      <div class="circle"></div>
      <p>企业介绍</p>
    </div>
    <div class="container">
      <div class="introduce">
        <p
          class="desc"
        >上海伊登国际货物运输代理有限公司成立于2007年。作为一家提供全方位服务的物流公司，我们在全球竞争激烈的空运和海运服务领域拥有十几年的成熟经验，能够在全球范围内为您的进出口货物保驾护航。</p>
        <ul>
          <li>
            <p>荣获商务部批准A级国际货运代理证书</p>
          </li>
          <li>
            <p>是航协批准航空货物一级销售代理</p>
          </li>
          <li>
            <p>海关总署批准代理报关企业</p>
          </li>
          <li>
            <p>加入世界货物运输联盟（WCA）</p>
          </li>
          <li>
            <p>通过ISO9001：2015质量管理体系认证</p>
          </li>
        </ul>
        <p
          class="desc"
        >上海伊登国际拥有专业化的国际国内物流网络，分布在中国与世界各大主要港口之间，服务覆盖500多个大中型城市及美洲、欧洲、中东、东南亚及世界其它地区。服务于全产业链千余家国内外客户。</p>
        <div class="section clear">
          <ul>
            <h4>提供各种服务：</h4>
            <li>
              <p>国际空运</p>
            </li>
            <li>
              <p>国际海运</p>
            </li>
            <li>
              <p>跨境铁路运输</p>
            </li>
            <li>
              <p>合同物流</p>
            </li>
          </ul>
          <ul>
            <h4>运输各类货物：</h4>
            <li>
              <p>普通货物</p>
            </li>
            <li>
              <p>医疗用品</p>
            </li>
            <li>
              <p>电子类产品</p>
            </li>
            <li>
              <p>机械设备</p>
            </li>
            <li>
              <p>食品</p>
            </li>
            <li>
              <p>危险货品</p>
            </li>
          </ul>
          <ul>
            <h4>服务特色：</h4>
            <li>
              <p>专业 团队专业，业务熟练</p>
            </li>
            <li>
              <p>先进 技术先进，消息灵通</p>
            </li>
            <li>
              <p>灵活 应对灵活，定制物流</p>
            </li>
            <li>
              <p>专业 团队专业，业务熟练</p>
            </li>
            <li>
              <p>省心 发货到签收，全方位服务</p>
            </li>
          </ul>
        </div>
        <p class="desc">上海伊登国际凭借24小时客户服务热线及货物跟踪查询系统，让您在工厂交货之后，即可足不出户跟踪货物的全程动态。</p>
        <h3>我们致力于让客户享受门到门的全球供应链服务，创造更大的价值。</h3>
      </div>
    </div>
    <div class="title">
      <div class="circle"></div>
      <p>企业介绍</p>
    </div>
    <div class="container">
      <div class="introduce">
        <p class="desc">
          随着企业采购、制造、营销流程全球化的趋势，企业对物流解决方案的要求，正在日益复杂化。伊登竭尽所能地为客户提供最佳的物流方案，以满足各类需求。我们的成熟经验和专业技能保证了我们为客户提供快捷反馈和优质服务，从而让客户从可信、高效、低成本的服务中全面获益。
          <br />作为一个成熟的物流企业，我们将不断改进服务，旨在为客户提供可靠的服务和合作环境。我们希望通过在与客户展开的广泛合作中，向客户提供快速、准确的物流信息来加强客户的市场竞争力。
        </p>
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
    width: 187px;
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
      border-bottom: 4px solid #e67016;
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
          h4 {
            font-size: 33px;
          }
          &:nth-child(2) {
            margin: 0 33px 50px 160px;
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