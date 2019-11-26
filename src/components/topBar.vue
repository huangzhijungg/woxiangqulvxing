<template>
  <div class="topBar">
    <div class="topNav">
      <van-icon name="arrow-left" class="iconBack" @click="goBack" />
      <span class="text-pay">{{sendTitle}}</span>
    </div>
  </div>
</template>

<script>
export default {
    // props: {
    //   titelData: {
    //     type: String,

     
    //     default:null
    //   }
    // },
  props:["sendTitle"],//第一种方式
  
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
@appSize: 1/37.52rem;

.topNav {
  height: 40 * @appSize;
  background-color: orange;
  display: flex;
  align-items: center;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  .iconBack {
    font-size: 18 * @appSize;
    margin-left: 10 * @appSize;
    margin-right: 20 * @appSize;
  }
  .text-pay {
    font-size: 14 * @appSize;
  }
}
</style>