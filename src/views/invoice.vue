<template>
  <div class="invoice">
    <topBar :sendTitle="titelData" />
    <div class="invoice-oderInfo">
      <span>凭证明细</span>
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item
          title="维也纳国际酒店"
          name="1"
          icon="newspaper-o"
          value="展开"
          class="invoice-info"
        >
          <p>入住时间 : 2019-11-27</p>
          <p>离店时间 : 2019-11-28</p>
          <p>订单总额 : ￥568</p>
          <p>可开金额 : ￥568</p>
        </van-collapse-item>
      </van-collapse>

      <span class="makeinvoice-info">开票信息</span>
      <van-cell-group>
        <van-cell title="发票类型">
          <van-tabs type="card" background="white" title-active-color="#fff" color="orange">
            <van-tab title="电子"></van-tab>
            <van-tab title="纸质"></van-tab>
          </van-tabs>
        </van-cell>
        <van-field v-model="value1" placeholder="请选择发票抬头" label="发票抬头" is-link />
        <van-field v-model="value2" placeholder="发票内容" label="发票内容" is-link />
        <van-field v-model="value3" placeholder="发票备注信息" label="备注信息" is-link />
      </van-cell-group>

      <span class="makeinvoice-info">配送信息</span>
      <van-cell-group>
        <van-field v-model="value4" placeholder="请输入手机号码" label="收票人手机" />
        <van-field v-model="value5" placeholder="用于接收电子发票" label="电子邮箱" />
        <van-field v-model="value6" placeholder="用于接收发票时间" label="邮寄日期" />
      </van-cell-group>
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
      titelData: "填写发票信息",
      activeName: "1",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: ""
    };
  }
};
</script>

<style lang="less" scoped>
@appSize: 1/37.52rem;
.invoice {
  background-color: #edf0f5;
}
.invoice-oderInfo {
  padding: 10 * @appSize;
  box-sizing: border-box;
  margin-top: 40 * @appSize;
  span {
    display: inline-block;
    height: 30 * @appSize;
    line-height: 30 * @appSize;
    color: #666;
    margin-bottom: 4 * @appSize;
    text-align: center;
  }
}
.invoice-info {
  p {
    margin: 6 * @appSize;
  }
  .van-cell__left-icon {
    font-size: 30 * @appSize;
    color: orange;
  }
}
.makeinvoice-info {
  margin-top: 10 * @appSize;
}
</style>