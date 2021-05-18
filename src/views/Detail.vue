<template>
  <div class="detail-box">
    <div class="container">
      <div class="back" @click="$router.push(`/list`)">
        <img src="../assets/image/mobile/back.png" alt="返回" />
        <span class="back-text" v-text="$t('lang.detail_back')"></span>
      </div>
      <div class="title">
        <!-- <div class="circle"></div> -->
        <p v-text="$t('lang.detail_title')">货运详情</p>
        <div class="line"></div>
      </div>
      <div class="basic">
        <p class="basic-title" v-text="$t('lang.detail_basic')">基本信息</p>
        <table class="basic-table">
          <tbody>
            <tr>
              <td v-text="$t('lang.detail_basic1')">运输方式</td>
              <td>{{ locale==='zh-CN'?type[detail.transportation]||detail.transportation : detail.transportation }}</td>
              <td v-text="$t('lang.detail_basic2')" v-if="detail.transportation === 'Air'">航班信息</td>
              <td
                v-text="$t('lang.detail_basic11')"
                v-else-if="detail.transportation === 'Ocean'"
              >船名航次信息</td>
              <td
                v-text="$t('lang.detail_basic15')"
                v-else-if="detail.transportation === 'Rail'"
              >班次信息</td>
              <td
                v-text="$t('lang.detail_basic19')"
                v-else-if="detail.transportation === 'Truck'"
              >车牌号</td>
              <td v-text="$t('lang.detail_basic2')" v-else></td>
              <td>{{ detail.flightInfo }}</td>
            </tr>
            <tr>
              <td v-text="$t('lang.detail_basic3')" v-if="detail.transportation === 'Air'">空运主单号</td>
              <td
                v-text="$t('lang.detail_basic12')"
                v-else-if="detail.transportation === 'Ocean'"
              >主单号</td>
              <td
                v-text="$t('lang.detail_basic16')"
                v-else-if="detail.transportation === 'Rail'"
              >运单号</td>
              <td
                v-text="$t('lang.detail_basic20')"
                v-else-if="detail.transportation === 'Truck'"
              >收货凭据</td>
              <td v-text="$t('lang.detail_basic3')" v-else>空运主单号</td>
              <td>{{ detail.orderNumber }}</td>
              <td v-text="$t('lang.detail_basic13')" v-if="detail.transportation === 'Ocean'">箱型</td>
              <td v-text="$t('lang.detail_basic4')" v-else>数量</td>
              <td>{{ detail.quantity }}</td>
            </tr>
            <tr>
              <td v-text="$t('lang.detail_basic5')" v-if="detail.transportation === 'Air'">空运分单号</td>
              <td
                v-text="$t('lang.detail_basic14')"
                v-else-if="detail.transportation === 'Ocean'"
              >分单号</td>
              <td v-text="''" v-else-if="detail.transportation === 'Rail'">空运分单号</td>
              <td v-text="''" v-else-if="detail.transportation === 'Truck'">空运分单号</td>
              <td v-text="$t('lang.detail_basic5')" v-else>空运分单号</td>
              <td
                v-if="detail.transportation === 'Air' || detail.transportation === 'Ocean'"
              >{{ detail.branchOrderNumber }}</td>
              <td v-else-if="detail.transportation === 'Rail' || detail.transportation === 'Truck'"></td>
              <td v-else>{{ detail.branchOrderNumber }}</td>
              <td v-text="$t('lang.detail_basic6')">毛重(kg)</td>
              <td>{{ detail.grossWeight }}</td>
            </tr>
            <tr>
              <td v-text="$t('lang.detail_basic7')" v-if="detail.transportation === 'Air'">起运港</td>
              <td
                v-text="$t('lang.detail_basic7')"
                v-else-if="detail.transportation === 'Ocean'"
              >起运港</td>
              <td
                v-text="$t('lang.detail_basic17')"
                v-else-if="detail.transportation === 'Rail'"
              >始发站</td>
              <td
                v-text="$t('lang.detail_basic21')"
                v-else-if="detail.transportation === 'Truck'"
              >出发地</td>
              <td v-text="$t('lang.detail_basic7')" v-else>起运港</td>
              <td>{{ detail.departure }}</td>
              <td v-text="$t('lang.detail_basic8')">计费重量(kg)</td>
              <td>{{ detail.chargeableWeight }}</td>
            </tr>
            <tr>
              <td v-text="$t('lang.detail_basic9')" v-if="detail.transportation === 'Air'">目的港</td>
              <td
                v-text="$t('lang.detail_basic9')"
                v-else-if="detail.transportation === 'Ocean'"
              >目的港</td>
              <td
                v-text="$t('lang.detail_basic18')"
                v-else-if="detail.transportation === 'Rail'"
              >到达站</td>
              <td
                v-text="$t('lang.detail_basic22')"
                v-else-if="detail.transportation === 'Truck'"
              >目的地</td>
              <td v-text="$t('lang.detail_basic9')" v-else>目的港</td>
              <td>{{ detail.destinationPort }}</td>
              <td v-text="$t('lang.detail_basic10')">体积(CBM)</td>
              <td>{{ detail.volume }}</td>
            </tr>
          </tbody>
        </table>
        <div class="mobile-item clear">
          <div class="mobile-inner">
            <div class="item-title" v-text="$t('lang.detail_basic1')">运输方式</div>
            <div
              class="item-value"
            >{{ locale==='zh-CN'?type[detail.transportation]||detail.transportation : detail.transportation }}</div>
          </div>
          <div class="mobile-inner">
            <div
              class="item-title"
              v-text="$t('lang.detail_basic2')"
              v-if="detail.transportation === 'Air'"
            >航班信息</div>
            <div
              class="item-title"
              v-text="$t('lang.detail_basic11')"
              v-else-if="detail.transportation === 'Ocean'"
            >航班信息</div>
            <div
              class="item-title"
              v-text="$t('lang.detail_basic15')"
              v-else-if="detail.transportation === 'Rail'"
            >航班信息</div>
            <div
              class="item-title"
              v-text="$t('lang.detail_basic19')"
              v-else-if="detail.transportation === 'Truck'"
            >航班信息</div>
            <div class="item-title" v-text="$t('lang.detail_basic2')" v-else>航班信息</div>
            <div class="item-value">{{ detail.flightInfo }}</div>
          </div>
          <div class="mobile-inner">
            <div
              class="item-title"
              v-text="$t('lang.detail_basic3')"
              v-if="detail.transportation === 'Air'"
            >空运主单号</div>
            <div
              class="item-title"
              v-text="$t('lang.detail_basic12')"
              v-else-if="detail.transportation === 'Ocean'"
            >空运主单号</div>
            <div
              class="item-title"
              v-text="$t('lang.detail_basic16')"
              v-else-if="detail.transportation === 'Rail'"
            >空运主单号</div>
            <div
              class="item-title"
              v-text="$t('lang.detail_basic20')"
              v-else-if="detail.transportation === 'Truck'"
            >空运主单号</div>
            <div class="item-title" v-text="$t('lang.detail_basic3')" v-else>空运主单号</div>
            <div class="item-value">{{ detail.orderNumber }}</div>
          </div>
          <div class="mobile-inner">
            <div
              class="item-title"
              v-text="$t('lang.detail_basic5')"
              v-if="detail.transportation === 'Air'"
            >空运分单号</div>
            <div
              class="item-title"
              v-text="$t('lang.detail_basic14')"
              v-else-if="detail.transportation === 'Ocean'"
            >空运分单号</div>
            <div class="item-title" v-text="''" v-else-if="detail.transportation === 'Rail'">空运分单号</div>
            <div class="item-title" v-text="''" v-else-if="detail.transportation === 'Truck'">空运分单号</div>
            <div class="item-title" v-text="$t('lang.detail_basic5')" v-else>空运分单号</div>
            <div
              class="item-value"
              v-if="detail.transportation === 'Air' || detail.transportation === 'Ocean'"
            >{{ detail.branchOrderNumber }}</div>
            <div
              class="item-value"
              v-else-if="detail.transportation === 'Rail' || detail.transportation === 'Truck'"
            ></div>
            <div class="item-value" v-else>{{ detail.branchOrderNumber }}</div>
          </div>
          <div class="mobile-inner">
            <div
              class="item-title"
              v-text="$t('lang.detail_basic7')"
              v-if="detail.transportation === 'Air'"
            >起运港</div>
            <div
              class="item-title"
              v-text="$t('lang.detail_basic7')"
              v-else-if="detail.transportation === 'Ocean'"
            >起运港</div>
            <div
              class="item-title"
              v-text="$t('lang.detail_basic17')"
              v-else-if="detail.transportation === 'Rail'"
            >起运港</div>
            <div
              class="item-title"
              v-text="$t('lang.detail_basic21')"
              v-else-if="detail.transportation === 'Truck'"
            >起运港</div>
            <div class="item-title" v-text="$t('lang.detail_basic7')" v-else>起运港</div>
            <div class="item-value">{{ detail.departure }}</div>
          </div>
          <div class="mobile-inner">
            <div
              class="item-title"
              v-text="$t('lang.detail_basic9')"
              v-if="detail.transportation === 'Air'"
            >目的港</div>
            <div
              class="item-title"
              v-text="$t('lang.detail_basic9')"
              v-else-if="detail.transportation === 'Ocean'"
            >目的港</div>
            <div
              class="item-title"
              v-text="$t('lang.detail_basic18')"
              v-else-if="detail.transportation === 'Rail'"
            >目的港</div>
            <div
              class="item-title"
              v-text="$t('lang.detail_basic22')"
              v-else-if="detail.transportation === 'Truck'"
            >目的港</div>
            <div class="item-title" v-text="$t('lang.detail_basic9')" v-else>目的港</div>
            <div class="item-value">{{ detail.destinationPort }}</div>
          </div>
          <div class="mobile-inner">
            <div
              class="item-title"
              v-text="$t('lang.detail_basic13')"
              v-if="detail.transportation === 'Ocean'"
            >数量</div>
            <div class="item-title" v-text="$t('lang.detail_basic4')" v-else>数量</div>
            <div class="item-value">{{ detail.quantity }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title" v-text="$t('lang.detail_basic6')">毛重(kg)</div>
            <div class="item-value">{{ detail.grossWeight }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title" v-text="$t('lang.detail_basic8')">计费重量(kg)</div>
            <div class="item-value">{{ detail.chargeableWeight }}</div>
          </div>
          <div class="mobile-inner">
            <div class="item-title" v-text="$t('lang.detail_basic10')">体积(CBM)</div>
            <div class="item-value">{{ detail.volume }}</div>
          </div>
        </div>
      </div>
      <div
        class="backPc"
        style="margin:0; margin-left: 170px;margin-top: 64px;"
        @click="$router.push(`/list`)"
         v-text="$t('lang.detail_back')"
      >返回</div>
      <div class="basic logistics">
        <p class="basic-title" v-text="$t('lang.detail_wuliu')">物流信息</p>
        <!-- 空运 -->
        <ul class="logistics-box" v-if="
            detail.transportation === 'Air'
          ">
          <li class="logistics-item" v-if="detail.signatureDate">
            <p class="logistics-item-title">{{$t('lang.detail_as1')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as2')}}{{ detail.signatureDate }}</p>
          </li>
          <li class="logistics-item" v-if="detail.outboundDate">
            <p class="logistics-item-title">{{$t('lang.detail_as3')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as4')}}{{ detail.outboundDate }}</p>
          </li>
          <li class="logistics-item" v-if="detail.destinationPort">
            <p class="logistics-item-title">{{$t('lang.detail_as5')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as6')}}{{ detail.destinationPort }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as7')}}{{ detail.eta }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as8')}}{{ detail.ata }}</p>
          </li>
          <li class="logistics-item" v-if="detail.fourDeparture">
            <p class="logistics-item-title">{{$t('lang.detail_as9')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as6')}}{{ detail.fourDeparture }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as10')}}{{ detail.fourFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as11')}}{{ detail.fourATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.threeDeparture">
            <p class="logistics-item-title">{{$t('lang.detail_as12')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as6')}}{{ detail.threeDeparture }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as10')}}{{ detail.threeFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as11')}}{{ detail.threeATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.transit">
            <p class="logistics-item-title">{{$t('lang.detail_as13')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as6')}}{{ detail.transit }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as10')}}{{ detail.transitFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as11')}}{{ detail.transitATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.departure">
            <p class="logistics-item-title">{{$t('lang.detail_as14')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as6')}}{{ detail.departure }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as10')}}{{ detail.flightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as15')}}{{ detail.etd }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as16')}}{{ detail.atd }}</p>
          </li>
          <li class="logistics-item">
            <p class="logistics-item-title">{{$t('lang.detail_as17')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as18')}}{{ detail.pickupCity }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as19')}}{{ detail.pickupDate }}</p>
          </li>
          <!-- <li
            v-for="(item, index) in logistics"
            :key="index"
            class="logistics-item"
          >
            <p class="logistics-item-title">{{ detail.title }}</p>
            <p
              v-for="(el, key) in detail.detail"
              :key="key"
              class="logistics-item-text"
            >
              {{ el.name }}：{{ el.value }}
            </p>
          </li>-->
        </ul>
        <!-- 海运 -->
        <ul
          class="logistics-box"
          v-else-if="
            detail.transportation === 'Ocean'
          "
        >
          <li class="logistics-item" v-if="detail.signatureDate">
            <p class="logistics-item-title">{{$t('lang.detail_as1')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as2')}}{{ detail.signatureDate }}</p>
          </li>
          <li class="logistics-item" v-if="detail.outboundDate">
            <p class="logistics-item-title">{{$t('lang.detail_as3')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as4')}}{{ detail.outboundDate }}</p>
          </li>
          <li class="logistics-item" v-if="detail.destinationPort">
            <p class="logistics-item-title">{{$t('lang.detail_oce1')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce2')}}{{ detail.destinationPort }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce3')}}{{ detail.eta }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce4')}}{{ detail.ata }}</p>
          </li>
          <li class="logistics-item" v-if="detail.fourDeparture">
            <p class="logistics-item-title">{{$t('lang.detail_oce5')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce2')}}{{ detail.fourDeparture }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce6')}}{{ detail.fourFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce7')}}{{ detail.fourATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.threeDeparture">
            <p class="logistics-item-title">{{$t('lang.detail_oce8')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce2')}}{{ detail.threeDeparture }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce6')}}{{ detail.threeFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce7')}}{{ detail.threeATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.transit">
            <p class="logistics-item-title">{{$t('lang.detail_oce9')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce2')}}{{ detail.transit }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce6')}}{{ detail.transitFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce7')}}{{ detail.transitATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.departure">
            <p class="logistics-item-title">{{$t('lang.detail_oce10')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce2')}}{{ detail.departure }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce6')}}{{ detail.flightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce11')}}{{ detail.etd }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_oce12')}}{{ detail.atd }}</p>
          </li>
          <li class="logistics-item">
            <p class="logistics-item-title">{{$t('lang.detail_as17')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as18')}}{{ detail.pickupCity }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as19')}}{{ detail.pickupDate }}</p>
          </li>
        </ul>
        <!-- 铁路运 -->
        <ul
          class="logistics-box"
          v-else-if="
            detail.transportation === 'Rail'
          "
        >
          <li class="logistics-item" v-if="detail.signatureDate">
            <p class="logistics-item-title">{{$t('lang.detail_as1')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as2')}}{{ detail.signatureDate }}</p>
          </li>
          <li class="logistics-item" v-if="detail.outboundDate">
            <p class="logistics-item-title">{{$t('lang.detail_as3')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as4')}}{{ detail.outboundDate }}</p>
          </li>
          <li class="logistics-item" v-if="detail.destinationPort">
            <p class="logistics-item-title">{{$t('lang.detail_common1')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common2')}}{{ detail.destinationPort }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common3')}}{{ detail.eta }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common4')}}{{ detail.ata }}</p>
          </li>
          <li class="logistics-item" v-if="detail.fourDeparture">
            <p class="logistics-item-title">{{$t('lang.detail_common5')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common2')}}{{ detail.fourDeparture }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common6')}}{{ detail.fourFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common7')}}{{ detail.fourATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.threeDeparture">
            <p class="logistics-item-title">{{$t('lang.detail_common8')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common2')}}{{ detail.threeDeparture }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common6')}}{{ detail.threeFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common7')}}{{ detail.threeATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.transit">
            <p class="logistics-item-title">{{$t('lang.detail_common9')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common2')}}{{ detail.transit }}</p>
            <p
              class="logistics-item-text"
            >{{$t('lang.detail_common6')}}{{ detail.transitFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common7')}}{{ detail.transitATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.departure">
            <p class="logistics-item-title">{{$t('lang.detail_common10')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common2')}}{{ detail.departure }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common6')}}{{ detail.flightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common11')}}{{ detail.etd }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_common12')}}{{ detail.atd }}</p>
          </li>
          <li class="logistics-item">
            <p class="logistics-item-title">{{$t('lang.detail_as17')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as18')}}{{ detail.pickupCity }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as19')}}{{ detail.pickupDate }}</p>
          </li>
        </ul>
        <!-- 陆运 -->
        <ul
          class="logistics-box"
          v-else-if="
            detail.transportation === 'Truck'
          "
        >
          <li class="logistics-item" v-if="detail.signatureDate">
            <p class="logistics-item-title">{{$t('lang.detail_as1')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as2')}}{{ detail.signatureDate }}</p>
          </li>
          <li class="logistics-item" v-if="detail.outboundDate">
            <p class="logistics-item-title">{{$t('lang.detail_as3')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as4')}}{{ detail.outboundDate }}</p>
          </li>
          <li class="logistics-item" v-if="detail.destinationPort">
            <p class="logistics-item-title">{{$t('lang.detail_truck1')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_truck2')}}{{ detail.destinationPort }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_truck3')}}{{ detail.eta }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_truck4')}}{{ detail.ata }}</p>
          </li>
          <li class="logistics-item" v-if="detail.fourDeparture">
            <p class="logistics-item-title">{{$t('lang.detail_truck5')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_truck2')}}{{ detail.fourDeparture }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_truck6')}}{{ detail.fourFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_truck7')}}{{ detail.fourATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.threeDeparture">
            <p class="logistics-item-title">{{$t('lang.detail_truck8')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_truck2')}}{{ detail.threeDeparture }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_truck6')}}{{ detail.threeFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_truck7')}}{{ detail.threeATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.transit">
            <p class="logistics-item-title">{{$t('lang.detail_truck9')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_truck2')}}{{ detail.transit }}</p>
            <p
              class="logistics-item-text"
            >{{$t('lang.detail_truck6')}}{{ detail.transitFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_truck7')}}{{ detail.transitATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.departure">
            <p class="logistics-item-title">{{$t('lang.detail_truck10')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_truck2')}}{{ detail.departure }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_truck6')}}{{ detail.flightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_truck11')}}{{ detail.etd }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_truck12')}}{{ detail.atd }}</p>
          </li>
          <li class="logistics-item">
            <p class="logistics-item-title">{{$t('lang.detail_as17')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as18')}}{{ detail.pickupCity }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as19')}}{{ detail.pickupDate }}</p>
          </li>
        </ul>

        <ul class="logistics-box" v-else>
          <li class="logistics-item" v-if="detail.signatureDate">
            <p class="logistics-item-title">{{$t('lang.detail_as1')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as2')}}{{ detail.signatureDate }}</p>
          </li>
          <li class="logistics-item" v-if="detail.outboundDate">
            <p class="logistics-item-title">{{$t('lang.detail_as3')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as4')}}{{ detail.outboundDate }}</p>
          </li>
          <li class="logistics-item" v-if="detail.destinationPort">
            <p class="logistics-item-title">{{$t('lang.detail_as5')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as6')}}{{ detail.destinationPort }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as7')}}{{ detail.eta }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as8')}}{{ detail.ata }}</p>
          </li>
          <li class="logistics-item" v-if="detail.fourDeparture">
            <p class="logistics-item-title">{{$t('lang.detail_as9')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as6')}}{{ detail.fourDeparture }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as10')}}{{ detail.fourFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as11')}}{{ detail.fourATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.threeDeparture">
            <p class="logistics-item-title">{{$t('lang.detail_as12')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as6')}}{{ detail.threeDeparture }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as10')}}{{ detail.threeFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as11')}}{{ detail.threeATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.transit">
            <p class="logistics-item-title">{{$t('lang.detail_as13')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as6')}}{{ detail.transit }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as10')}}{{ detail.transitFlightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as11')}}{{ detail.transitATD }}</p>
          </li>
          <li class="logistics-item" v-if="detail.departure">
            <p class="logistics-item-title">{{$t('lang.detail_as14')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as6')}}{{ detail.departure }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as10')}}{{ detail.flightInfo }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as15')}}{{ detail.etd }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as16')}}{{ detail.atd }}</p>
          </li>
          <li class="logistics-item">
            <p class="logistics-item-title">{{$t('lang.detail_as17')}}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as18')}}{{ detail.pickupCity }}</p>
            <p class="logistics-item-text">{{$t('lang.detail_as19')}}{{ detail.pickupDate }}</p>
          </li>
          <!-- <li
            v-for="(item, index) in logistics"
            :key="index"
            class="logistics-item"
          >
            <p class="logistics-item-title">{{ detail.title }}</p>
            <p
              v-for="(el, key) in detail.detail"
              :key="key"
              class="logistics-item-text"
            >
              {{ el.name }}：{{ el.value }}
            </p>
          </li>-->
        </ul>
      </div>
      <div class="back" @click="$router.push(`/list`)">
        <img src="../assets/image/mobile/back.png" alt="返回" />
        <span class="back-text" v-text="$t('lang.detail_back')"></span>
      </div>
      <div class="backPc" @click="$router.push(`/list`)"  v-text="$t('lang.detail_back')">返回</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "detail",
  data() {
    return {
      type: {
        Air: "空运",
        Rail: "铁路运输",
        Truck: "陆运",
        Ocean: "海运"
      },
      detail: {
        zd: "海运"
      },
      logistics: [
        {
          title: "提货",
          detail: [
            {
              name: "城市",
              value: "杭州"
            },
            {
              name: "日期",
              value: "2021-03-25"
            }
          ]
        },
        {
          title: "提货",
          detail: [
            {
              name: "城市",
              value: "杭州"
            },
            {
              name: "日期",
              value: "2021-03-25"
            }
          ]
        },
        {
          title: "提货",
          detail: [
            {
              name: "城市",
              value: "杭州"
            },
            {
              name: "日期",
              value: "2021-03-25"
            }
          ]
        },
        {
          title: "提货",
          detail: [
            {
              name: "城市",
              value: "杭州"
            },
            {
              name: "日期",
              value: "2021-03-25"
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState(["locale"])
  },
  //创建前设置
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#fff;");
  },
  created() {
    this.getDetail();
  },
  //销毁前清除
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
  methods: {
    async getDetail() {
      const freightOrderId = this.$route.params.id;
      const listData = await this.$API.request(this.$API.detail, "POST", {
        freightOrderId
      });
      this.detail = listData.data;
    }
  }
};
</script>
<style lang="scss" scoped>
.detail-box {
  background: #fff;
  padding-top: 82px;
  padding-bottom: 78px;
  .mobile-item {
    display: none;
  }
  .back {
    display: none;
  }
  .backPc {
    width: 150px;
    height: 60px;
    background: #e67016;
    opacity: 1;
    border-radius: 10px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    line-height: 60px;
    margin: 95px auto 0;
    cursor: pointer;
  }
  .title {
    // width: 187px;
    // height: 135px;
    margin: 0 auto;
    margin-bottom: 80px;
    margin-top: 60px;
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
  .basic {
    width: 860px;
    margin: 0 auto;
    .basic-table {
      width: 100%;
      td {
        width: 25%;
        height: 50px;
        font-size: 20px;
        &:nth-child(2n + 1) {
          background: #f8f8f8;
          color: #787878;
          font-weight: bold;
        }
        &:nth-child(2n) {
          background: #f8f8f8;
          font-weight: 300;
        }
      }
    }
  }
  .basic-title {
    color: #e67016;
    font-size: 30px;
    text-align: left;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .logistics {
    margin-top: 100px;
    .logistics-box {
      background: #f8f8f8;
      padding: 80px 40px;
      text-align: left;
    }
    .logistics-item {
      margin-left: 17px;
      padding-bottom: 28px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 2px;
        background: #e67016;
        height: 100%;
        left: -20px;
      }
      &:last-child {
        padding-bottom: 0;
        &::before {
          display: none;
        }
      }
      &::after {
        content: "";
        position: absolute;
        width: 20px;
        background: #e67016;
        height: 20px;
        left: -30px;
        top: 0;
        border-radius: 50%;
      }
    }
    .logistics-item-title {
      color: #787878;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    .logistics-item-text {
      font-size: 16px;
      color: #787878;
      font-weight: 500;
      line-height: 1.5;
    }
  }
}

@media screen and (max-width: 750px) {
  .detail-box {
    padding-top: 170px;
    padding-bottom: 78px;
    .basic-table {
      display: none;
    }
    .back {
      display: flex;
      width: auto;
      align-items: center;
      img {
        width: 30px;
        height: 35px;
      }
      .back-text {
        color: #e67016;
        font-size: 40px;
        margin-left: 10px;
      }
    }

    .backPc {
      display: none;
    }
    .mobile-item {
      display: flex;
      flex-wrap: wrap;
      background: #f8f8f8;
      padding: 20px 40px;
      color: #787878;
      font-size: 30px;
      line-height: 30px;
      text-align: left;
      margin-bottom: 80px;
      .mobile-inner {
        float: left;
        width: 50%;
        padding: 20px 0;
        position: relative;
        &::after {
          position: absolute;
          content: "";
          height: 2px;
          background: #787878;
          width: 200%;
          transform: scale(0.5);
          left: -50%;
          bottom: 0;
        }
        &::before {
          position: absolute;
          content: "";
          height: 200%;
          background: #787878;
          width: 2px;
          transform: scale(0.5);
          right: 0;
          bottom: -50%;
        }
        &:nth-child(2n) {
          padding-left: 20px;
          &::before {
            display: none;
          }
        }
        &:last-child {
          margin-bottom: 0;
          &::after {
            display: none;
          }
        }
        &:nth-last-child(2) {
          &::after {
            display: none;
          }
        }
      }
      .item-title {
        font-size: 30px;
        line-height: 30px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .item-value {
        font-size: 30px;
        line-height: 30px;
        font-weight: 300;
        &.item-option {
          color: #e67016;
        }
      }
    }
    .title {
      margin-top: 60px;
    }
    // .title {
    //   height: 195px;
    //   margin-top: 0;
    //   margin-bottom: 158px;
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
    .basic {
      width: 100%;
      .basic-table {
        width: 100%;
        td {
          height: 32px;
          font-size: 12px;
        }
      }
    }
    .basic-title {
      font-size: 40px;
      line-height: 40px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .logistics {
      margin-top: 60px;
      margin-bottom: 80px;
      .logistics-box {
        background: #f8f8f8;
        padding: 40px 40px 40px 90px;
        text-align: left;
      }
      .logistics-item {
        margin-left: 0;
        padding-bottom: 80px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 4px;
          background: #e67016;
          height: 100%;
          left: -37px;
        }
        &:last-child {
          padding-bottom: 0;
          &::before {
            display: none;
          }
        }
        &::after {
          content: "";
          position: absolute;
          width: 30px;
          background: #e67016;
          height: 30px;
          left: -50px;
          top: 0;
          border-radius: 50%;
        }
      }
      .logistics-item-title {
        font-size: 30px;
        line-height: 30px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .logistics-item-text {
        font-size: 26px;
        line-height: 40px;
        margin-bottom: 6px;
      }
    }
  }
}
</style>