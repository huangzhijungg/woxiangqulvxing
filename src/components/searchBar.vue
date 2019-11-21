<template>
  <div class="searchBar">
    <div class="topBar">
      <van-row>
        <van-col span="2">
          <van-icon name="arrow-left" class="icon" @click="goBackLast" />
        </van-col>
        <van-col span="22">
          <form action="/">
            <van-search
              v-model="value"
              placeholder="请输入酒店名/地名"
              background="orange"
              :show-action="isShow"
              @search="onSearch"
              @cancel="onCancel"
              @focus="focus"
            />
          </form>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      isShow: false
    }
  },
  methods: {
    onSearch() {
      if (this.value == '') {
        this.$notify({ type: 'danger', message: '请输入要搜索的内容' ,duration:1000});
        return
      }
      console.log('搜索')
    },
    onCancel() {
      console.log('取消')
    },
    goBackLast() {
      this.$router.back()
    },
    focus() {
      this.isShow = true
    },
    onCancel() {
      this.isShow = false
    }
  }
}
</script>

<style lang="less" scoped>
@appSize: 1/37.52rem;

.topBar {
  width: 100%;
  height: 60 * @appSize;
  background-color: orange;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  .icon {
    color: #fff;
    font-size: 20 * @appSize;
    line-height: 60 * @appSize;
    margin-left: 10 * @appSize;
  }
  .van-search {
    box-sizing: border-box;
    padding: 12 * @appSize 12 * @appSize;
  }
}
</style>
