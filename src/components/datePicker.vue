<template>
  <div>
    <van-cell-group>
      <van-field
        placeholder="选择入住时间"
        left-icon="notes-o"
        @click="showPopupIn"
        :value="valueTimeLiveIn"
      />
      <van-popup v-model="showIn" round position="bottom" :style="{ height: '60%' }">
        <van-datetime-picker
          type="date"
          @confirm="confirmLiveIn"
          @cancel="cancelLiveIn"
          :min-date="startTime"
          :formatter="formatter"
        />
      </van-popup>
    </van-cell-group>
    <van-cell-group>
      <van-field
        placeholder="选择离店时间"
        left-icon="notes-o"
        @click="showPopupOut"
        :value="valueTimeLiveOut"
      />
      <van-popup v-model="showOut" round position="bottom" :style="{ height: '60%' }">
        <van-datetime-picker
          type="date"
          @confirm="confirmLiveOut"
          @cancel="cancelLiveIn"
          :min-date="endTime"
          :formatter="formatter"
        />
      </van-popup>
    </van-cell-group>
  </div>
</template>

<script>
var moment = require("moment");
export default {
  data() {
    return {
      hotelName: "",
      cityName: "",
      showIn: false,
      showOut: false,
      valueTimeLiveIn: "",
      valueTimeLiveOut: "",
      startTime: new Date(), // 开始时间
      endTime: new Date() // 结束时间
    };
  },
  methods: {
    // 点击输入框事件
    showPopupIn() {
      this.showIn = true;
    },
    showPopupOut() {
      this.showOut = true;
    },
    // 点击确认事件
    confirmLiveIn(value) {
      // console.log(1)
      this.valueTimeLiveIn = moment(value).format("YYYY-MM-DD");
      this.showIn = false;
    },
    confirmLiveOut(value) {
      // console.log(2)
      this.valueTimeLiveOut = moment(value).format("YYYY-MM-DD");
      this.showOut = false;
    },
    cancelLiveIn() {
      this.showIn = false;
      this.showOut = false;
    },
    formatter(type, value) {
      // 格式化选择器日期
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    }
  }
};
</script>

<style lang="less" scoped>
@appSize: 1/37.52rem;

.van-cell {
  border: 1 * @appSize solid #ccc;
  border-radius: 6 * @appSize;
  padding: 0;
  text-indent: 5 * @appSize;
  margin-bottom: 10 * @appSize;
}
</style>