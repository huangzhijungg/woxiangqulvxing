<template>
  <div class="reservation">
    <div class="topB">
      <van-icon name="arrow-left" class="iconLeft" @click="onClickLeft" />
      <span class="text">订单填写</span>
    </div>
    <div class="orderInfo">
      <P class="hotelName">维也纳国际酒店</P>
      <P class="liveTime">时间</P>
      <P class="info">高级双床房 | 不含早</P>
      <van-divider :style="{ color: '#1989fa', borderColor: 'orange', padding: '0 16px' }"></van-divider>
      <van-notice-bar text="即定即保，订单一经确定，不可取消·更改" left-icon="label-o" />
    </div>
    <div class="userInfo">
      <van-cell-group>
        <van-field v-model="value1" label="住房人1" placeholder="姓名"  right-icon="plus" @click-right-icon="clickShowInput"/>
      </van-cell-group>
      <van-cell-group v-show="showInput">
        <van-field v-model="value2" label="住房人2" placeholder="姓名" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="phonenumber" label="手机号" placeholder="请输入手机" maxlength="11" />
        <p v-if="!isShow" class="pText">请输入正确的手机号</p>
      </van-cell-group>
    </div>
    <div class="comment">
      <van-cell-group>
        <van-field
          v-model="remark"
          rows="2"
          autosize
          label="住房备注"
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
        />
        
      </van-cell-group>
      <van-divider :style="{ color: '#1989fa', borderColor: 'orange', padding: '0 16px' }"></van-divider>
      <van-notice-bar text="您的需求我们会及时通知酒店并尽量协助安排，但要视酒店情况，不能确保满足" left-icon="label-o" />
    </div>
    <div class="txt">
      <div class="ss">
        <p class="cacel">取消条款</p>
        <span class="color">此房即定即保，订单一经确定，不可取消或更改，</span>
      </div>
      <div class="ss">
        <p class="cacel">入住离店时间</p>
        <p class="color">酒店入住时间最早为14：00，退房时间最晚为次日12：00</p>
      </div>
    </div>
    <div class="money">

      <span>订单总额 ： ￥ 248</span>
      <button @click="nextTo">提交订单</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 绑定输入框的值
      value1: "我想去",
      value2:'',
      phonenumber: "18888880008",
      // 住房备注
      remark: "",
      // 手机验证
      isShow: true,
      // 控制第二个输入框的显示与隐藏
      showInput:false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    clickShowInput(){
      this.showInput = true
    },
    // 点击后验证手机号是否符合规则
    nextTo() {
      if (this.value == "" || this.phonenumber == "") {
        console.log(111);
        this.$toast({
          message: "姓名或电话不能为空",
          icon: "warning"
        });
      } else {
        let re = /^1(3|4|5|6|7|8|9)\d{9}$/;
        // 正则，验证手机号输入是否正确
        let show = re.test(this.phonenumber);
        // 若正确返回true，反之false
        this.isShow = show;
        // isShow获取之后返回到v-if进行判断是消失还是出现
        if (this.isShow) {
          // this.$router.push("/Login_test");
          console.log("通过");
          // 一定要进行判断，只有返回的是true才证明输入电话号码正确，才能跳转到下一页获取验证码
          this.$router.push('./pay')
          // console.log("支付成功");
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
@appSize: 1/37.52rem;

.reservation {
  background-color: rgb(239, 239, 241);
}

.topB {
  height: 40 * @appSize;
  background-color: orange;
  display: flex;
  align-items: center;
  color: #fff;
  margin-bottom: 10 * @appSize;

  .iconLeft {
    font-size: 18 * @appSize;
    margin-left: 10 * @appSize;
    margin-right: 20 * @appSize;
  }
  .text {
    // text-align: center;
    font-size: 14 * @appSize;
  }
}
.orderInfo {
  background-color: #fff;
  padding: 10 * @appSize;
  box-sizing: border-box;
  margin-bottom: 10 * @appSize;

  p {
    margin-bottom: 5 * @appSize;
  }
  .hotelName {
    font-weight: bold;
    color: #000;
  }
}
.userInfo {
  margin-bottom: 10 * @appSize;

  .pText {
    text-align: center;
    color: red;
  }
}
.txt {
  padding: 10 * @appSize;
  box-sizing: border-box;
  background-color: #ccc;

  .ss {
    margin-bottom: 5 * @appSize;

    .cacel {
      color: #000;
      font-weight: bold;
      margin-bottom: 8 * @appSize;
    }
    .color {
      color: #666;
      margin-bottom: 8 * @appSize;
    }
  }
}
.money {
  display: flex;
  justify-content: space-between;
  padding: 10 * @appSize;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  span {
    color: orange;
    font-size: 16 * @appSize;
  }
  button {
    border: none;
    background-color: orange;
    color: #fff;
  }
}
</style>