<template>
  <div>
    <!-- <div class="mu-text-field">
      <div class="mu-text-field-content">
        <input class="mu-text-field-input" placeholder="只选择一个" @click="showdateSingle = true" v-model="showSingle" readonly="readonly">
        <div><hr class="mu-text-field-line"> <hr class="mu-text-field-focus-line"></div>
      </div>
    </div>-->

    <!-- 选择两个 -->
    <div class="demo-slecetDate">
      <div class="mu-text-field">
        <div class="mu-text-field-content">
          <input
            class="mu-text-field-input"
            placeholder="选择入店和离店时间"
            @click="showdateDouble = true"
            v-model="showDouble"
            readonly="readonly"
          />
          <span class="numdays">共&nbsp;{{ isOne }} &nbsp;晚</span>
        </div>
        <van-divider
          :style="{ color: '#FF9966', borderColor: '#FF9966', padding: '0 16px' }"
        >请选择入住时间</van-divider>
      </div>
    </div>
    <!-- 分割线 -->
    <date
      :showCalendar.sync="showdateSingle"
      maxDate="12m"
      :options="dateOptionsSingle"
      @changeDate="changeDateSingle"
    ></date>
    <date
      :showCalendar.sync="showdateDouble"
      maxDate="12m"
      :options="dateOptionsDouble"
      @changeDate="changeDateDouble"
    ></date>
  </div>
</template>

let days= console.log(days)

<script>
// 导入日期组件
import date from "./datepicker/datePicker";
// 处理移动端点击事件的300ms延迟
import FastClick from "fastclick";
// 日期控件
import dayjs from "dayjs";
FastClick.attach(document.body);
export default {
  data() {
    return {
      days: " ",
      showdateSingle: false,
      showdateDouble: false,
      single: "",
      double: "",
      startSingle: "",
      // 默认获取当天时间和后一天的日期
      startDouble: this.formatDate(new Date().getTime()),
      endDouble: this.formatDate(new Date().getTime() + 24 * 60 * 60 * 1000),
      dateOptionsDouble: {
        // scrollEnd: true, // 滚到最后
        maxDate: "24m", // 月份跨度
        isDoubleCheck: true,
        // 获取当前日期,不能选择今天之前的日期
        startDate: this.formatDate(new Date().getTime())
      },
      dateOptionsSingle: {
        // scrollEnd: true, // 滚到最后
        maxDate: "24m", // 月份跨度
        isDoubleCheck: false
      }
    };
  },
  computed: {
    // showSingle() {
    //   return this.startSingle;
    // },
    // 输入框绑定的值
    showDouble() {
      if (this.startDouble && this.endDouble) {
        return `入住:` + this.startDouble + ` 至  ` + this.endDouble + `离店`;
      } else if (this.startDouble && !this.endDouble) {
        return this.startDouble;
      } else {
        return "";
      }
    },
    isOne() {
      return dayjs(this.endDouble).diff(dayjs(this.startDouble), "day") || 0;
    }
  },

  components: {
    date
  },
  methods: {
    changeDateSingle(start, end) {
      this.startSingle = start;
    },
    changeDateDouble(start, end) {
      this.startDouble = start;
      this.endDouble = end;
    },
    formatDate(timestamp, formats) {
      formats = formats || "Y-M-D";
      var myDate = timestamp ? new Date(timestamp) : new Date();
      var year = myDate.getFullYear();
      var month = formatDigit(myDate.getMonth() + 1);
      var day = formatDigit(myDate.getDate());
      var hour = formatDigit(myDate.getHours());
      var minute = formatDigit(myDate.getMinutes());
      var second = formatDigit(myDate.getSeconds());
      return formats.replace(/Y|M|D|h|m|s/g, function(matches) {
        return {
          Y: year,
          M: month,
          D: day,
          h: hour,
          m: minute,
          s: second
        }[matches];
      });
      // 小于10补0
      function formatDigit(n) {
        return n.toString().replace(/^(\d)$/, "0$1");
      }
    }
  }
};
</script>

<style lang="less" scoped>
@appSize: 1/37.52rem;
.demo-slecetDate{
  background-color: #fff;
}
.mu-text-field {
  font-size: 16 * @appSize;
  width: 100%;
  min-height: 48 * @appSize;
  display: inline-block;
  position: relative;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 8 * @appSize;
  background-color: #fff;
  border: 1px solid orange;
  border-radius: 6 * @appSize;
  margin-top: 10 * @appSize;
  box-sizing: border-box;
}

.mu-text-field.full-width {
  width: 100%;
}

.mu-text-field.has-icon {
  padding-left: 56 * @appSize;
}

.mu-text-field.focus-state {
  color: #7e57c2;
}

.mu-text-field.focus-state.error {
  color: #f44336;
}

.mu-text-field.has-label {
  min-height: 72 * @appSize;
}

.mu-text-field-icon {
  position: absolute;
  left: 16 * @appSize;
  top: 12 * @appSize;
}

.mu-text-field.has-label .mu-text-field-icon {
  top: 36 * @appSize;
}

.mu-text-field-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  // padding-bottom: 12 * @appSize;
  // padding-top: 4 * @appSize;
  // border: 1px solid orange;
  // border-radius: 6 * @appSize;
  // margin-top: 10 * @appSize;

  .numdays {
    width: 60 * @appSize;
    height: 100%;
    color: orange;
    font-weight: bold;
    font-style: italic;
  }
}
.van-divider {
  margin: 0;
}

.mu-text-field.disabled .mu-text-field-content {
  color: rgba(0, 0, 0, 0.38);
  cursor: not-allowed;
}

.mu-text-field.has-label .mu-text-field-content {
  padding-top: 28 * @appSize;
  padding-bottom: 12 * @appSize;
}

.mu-text-field-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  border-radius: 0 0 0 0;
  box-shadow: none;
  display: block;
  padding: 0;
  margin-left: 2 * @appSize;
  flex: 1;
  height: 32 * @appSize;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-size: inherit;
  color: orange;
  font-family: inherit;
  position: relative;
  // text-indent: 8 * @appSize;
}

.mu-text-field-help {
  position: absolute;
  margin-top: 6 * @appSize;
  font-size: 12 * @appSize;
  line-height: 12 * @appSize;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  left: 0;
  right: 0;
}

.mu-text-field.has-icon .mu-text-field-help {
  left: 56 * @appSize;
}

.mu-text-field.error .mu-text-field-help {
  color: #f44336;
}

.mu-text-field.disabled .mu-text-field-help {
  color: inherit;
}

// .mu-text-field-line {
//   margin: 0;
//   height: 1 * @appSize;
//   border: none;
//   background-color: rgba(0, 0, 0, 0.12);
//   left: 0;
//   right: 0;
//   position: absolute;
// }

.mu-text-field.has-icon .mu-text-field-line {
  left: 56 * @appSize;
}

.mu-text-field-line.disabled {
  height: auto;
  background-color: transparent;
  border-bottom: 2px dotted rgba(0, 0, 0, 0.38);
}

// .mu-text-field-focus-line {
//   margin: 0;
//   height: 2 * @appSize;
//   border: none;
//   background-color: #7e57c2;
//   position: absolute;
//   left: 0;
//   right: 0;
//   margin-top: -1 * @appSize;
//   -webkit-transform: scaleX(0);
//   -ms-transform: scaleX(0);
//   transform: scaleX(0);
//   -webkit-transition: -webkit-transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
//   transition: -webkit-transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
//   transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
//   transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1),
//     -webkit-transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
// }

.mu-text-field.has-icon .mu-text-field-focus-line {
  left: 56 * @appSize;
}

.mu-text-field-focus-line.error,
.mu-text-field-focus-line.focus {
  -webkit-transform: scaleX(1);
  -ms-transform: scaleX(1);
  transform: scaleX(1);
}

.mu-text-field-focus-line.error {
  background-color: #f44336;
}

.mu-text-field-textarea {
  resize: vertical;
  line-height: 1.5;
  position: relative;
  height: 100%;
  resize: none;
}

.mu-text-field-multiline {
  width: 100%;
  position: relative;
}

.mu-text-field-textarea-hide {
  width: 100%;
  height: auto;
  resize: none;
  position: absolute;
  padding: 0;
  overflow: auto;
  visibility: hidden;
}

.mu-text-field-label {
  line-height: 20 * @appSize;
  -webkit-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 1;
  cursor: text;
  -webkit-transform: translateZ(0) scale(0.75);
  transform: translateZ(0) scale(0.75);
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  transform-origin: left top;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.mu-text-field.has-label .mu-text-field-label {
  top: 8 * @appSize;
  position: absolute;
}

.mu-text-field.has-label .mu-text-field-label.float {
  -webkit-transform: translate3d(0, 28px, 0) scale(1);
  transform: translate3d(0, 28px, 0) scale(1);
  color: rgba(0, 0, 0, 0.38);
}

.mu-text-field-hint {
  position: absolute;
  opacity: 0;
  -webkit-transition: opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  transition: opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  color: rgba(0, 0, 0, 0.38);
  line-height: 34 * @appSize;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: text;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}

.mu-text-field-hint.show {
  opacity: 1;
}

.mu-text-field.multi-line .mu-text-field-hint {
  line-height: 1.5;
}

.mu-select-field .mu-dropDown-menu {
  display: block;
  width: 100%;
  height: 32 * @appSize;
}

.mu-select-field .mu-dropDown-menu-text {
  line-height: 32 * @appSize;
  height: 32 * @appSize;
  padding-left: 0;
  padding-right: 24 * @appSize;
  word-wrap: break-word;
  overflow: hidden;
}

.mu-select-field .mu-dropDown-menu-line {
  display: none;
}

.mu-select-field .mu-dropDown-menu-icon {
  right: 0;
  top: 6 * @appSize;
}
</style>
