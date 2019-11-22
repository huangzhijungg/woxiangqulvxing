<template>
  <div>
    <!-- 头部 -->
    <topBar :sendTitle="titelData"/>
    <!-- 订单信息 -->
    <div class="oderInfo">
      <span>订单信息</span>
      <div class="oderStatus">
        <p>
          <span class="OderFrist">订单状态</span>
          <span>已付款</span>
        </p>
        <p>
          <span class="OderFrist">订单编号</span>
          <span>2909836374378</span>
        </p>
        <p>
          <span class="OderFrist">入住时间</span>
          <span>2019-11-22</span>
        </p>
        <p>
          <span class="OderFrist">付款方式</span>
          <span>微信支付</span>
        </p>
        <p>
          <span class="OderFrist">预定住户</span>
          <span>我想去</span>
        </p>
        <p>
          <span class="OderFrist">预定手机</span>
          <span>18888888888</span>
        </p>
        <p>
          <span class="OderFrist">订单总额</span>
          <span class="oderPrice">￥465</span>
        </p>
      </div>
    </div>
    <!-- 酒店信息 -->
    <div class="oderInfo">
      <span>酒店信息</span>
      <div class="oderStatus">
        <p>
          <span class="OderFrist">酒店名称</span>
          <span>维也纳国际酒店</span>
        </p>
        <p>
          <span class="OderFrist">房间信息</span>
          <span>高级双床房 &nbsp;|</span>
          <span>&nbsp;不含早</span>
        </p>
        <p>
          <span class="OderFrist">酒店地址</span>
          <span>深圳市福田区深南大道</span>
        </p>
        <p>
          <span class="OderFrist">联系酒店</span>
          <span>0755-109209788</span>
        </p>
        <!-- <p>
          <span class="OderFrist">订单总额</span>
          <span class="oderPrice">￥465</span>
        </p>-->
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
      titelData: "订单详情"
    }
  },
};
</script>

<style lang="less" scoped>
@appSize: 1/37.52rem;

.oderInfo {
  padding: 10 * @appSize;
  box-sizing: border-box;
  span {
    display: inline-block;
    height: 30 * @appSize;
    line-height: 30 * @appSize;
    color: #666;
    margin-bottom: 4 * @appSize;
    text-align: center;
  }
  .oderStatus {
    background-color: #ffffcc;

    p {
      .OderFrist {
        width: 60 * @appSize;
        margin-right: 60 * @appSize;
      }
      .oderPrice {
        color: orange;
        font-size: 16 * @appSize;
      }
    }
  }
}
</style>