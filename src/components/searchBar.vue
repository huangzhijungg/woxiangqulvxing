<template>
  <div class="searchBar">
    <div class="topBar">
      <van-icon name="arrow-left" class="icon" @click="goBackLast"/>
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入酒店名/地名"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            value:'',
        }
    },
    methods: {
        onSearch(){
            console.log('搜索')
        },
        onCancel(){
            console.log('取消');
        },
        goBackLast(){
            this.$router.back()
        }
    },
};
</script>

<style lang="less" scoped>
@appSize: 1/37.52rem;

.topBar {
  width: 100%;
  height: 50 * @appSize;
  background-color: orange;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  .icon{
      color: #fff;
      font-size: 20 * @appSize;
      line-height: 50 * @appSize;
      margin-left: 10 * @appSize;
  }
}
</style>