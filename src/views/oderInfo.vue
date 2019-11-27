<template>
  <div class="oderInfo">
    <topBar :sendTitle="titelData" />
    <div class="oderList" v-for="(item, index) in 4" :key="index">
      <div class="oderItem">
        <p class="oder-hotelname">维也纳国际酒店</p>
        <p>豪华大床房 | 不含早  </p>
        <p>2019-11-26&nbsp;至 &nbsp;2019-11-27</p>
        <p class="oderAllPrice">订单总额 : ￥ 468</p>
        <van-button type="primary" to="orderInquiry" size="small" class="oderBtn" color="orange">详情</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import topBar from "../components/topBar";
export default {
  components: {
    topBar
  },
  data() {
    return {
      titelData: "订单信息"
    };
  }
};
</script>

<style lang="less" scoped>
@appSize: 1/37.52rem;

.oderList {
  margin-top: 40 * @appSize;
  .oderItem {
    padding: 10 * @appSize;
    box-sizing: border-box;
    width: 100%;
    height: 130 * @appSize;
    box-shadow: 0 * @appSize 15 * @appSize 10 * @appSize -10 * @appSize #ccc;
    p {
      margin-bottom: 4 * @appSize;
    }
    .oder-hotelname {
      font-size: 14 * @appSize;
      color: #000;
      font-weight: bold;
    }
    .oderAllPrice {
      color: orange;
      font-size: 16 * @appSize;
    }
    .oderBtn{
        position: relative;
        bottom: 10px;
        left: 280 * @appSize;
    }
  }
}
</style>