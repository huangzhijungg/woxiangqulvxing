<template>
  <div class="search">
    <!-- 搜索 -->
    <div class="topBar">
      <van-row>
        <van-col span="2">
          <van-icon name="arrow-left" class="icon" @click="goBackLast" />
        </van-col>
        <van-col span="22">
          <form action="/" class="top-search">
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
      <demo />
    </div>

    <!-- <van-tabs
      v-model="activeName"
      color="#000"
      title-active-color="#000"
      title-inactive-color="#000"
      class="topClassify"
    >
      <van-tab>
        <div class="tab-title" slot="title">城市</div>
      </van-tab>
      <van-tab>
        <div class="tab-title" slot="title" @click="starLevel">星级价格</div>
      </van-tab>
      <van-tab>
        <div class="tab-title" slot="title">位置区域</div>
      </van-tab>
    </van-tabs>-->

    <!-- <van-popup
      v-model="showStart"
      position="bottom"
      :style="{ height: '20%' }"
      close-icon="success"
      closeable
    >
      <van-radio-group v-model="radio" class="chooseRoom" checked-color="#ff6633">
        <van-radio name="1" checked-color="#07c160">经济型</van-radio>
        <van-radio name="2" checked-color="#07c160">舒适型</van-radio>
        <van-radio name="3" checked-color="#07c160">高档型</van-radio>
        <van-radio name="4" checked-color="#07c160">豪华型</van-radio>
        <van-radio name="5" checked-color="#07c160">不限</van-radio>
      </van-radio-group>
    </van-popup>-->

    <!-- 酒店列表   -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="(item, index) in searchHotelList"
        :key="index"
        @click="toDetail(item)"
        class="search-list"
      >
        <div class="hotelList">
          <div class="leftImg">
            <img
              :src="
                item.hotelImg
                  ? item.hotelImg
                  : `http://hbimg.b0.upaiyun.com/bdaca9a07e1a8947c00c2f826ebf848750927aa24963-cATwbg_fw658`
              "
              alt
            />
          </div>
          <div class="rightText">
            <p class="hotelName">{{ item.nameChn }}</p>
            <p class="hotelXing">{{ item.levelName }}</p>
            <p class="hotelHao">{{ item.adress }}</p>
            <p class="hotelAdr">{{ item.cityName }}</p>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import demo from "../components/demo";

export default {
  components: {
    demo
  },
  data() {
    return {
      value: "",
      isShow: false,
      loading: false,
      finished: false,
      activeName: "a",
      showStart: false,
      radio: "5",
      searchHotelList: [],
      page: 1
    };
  },
  // mounted() {
  //     this.getSearchHotel();
  // },
  methods: {
    getSearchHotel() {
      this.$axios({
        method: "post",
        params: {
          nameChn: localStorage.getItem("searchHotelName"),
          cityName: localStorage.getItem("searchCityName"),
          indate: sessionStorage.getItem("checkInTime"),
          outdate: sessionStorage.getItem("checkOutTime")
        },
        url:"http://192.168.1.124:8080/mobile/amanager/info/hotel/ajaxHotelList.htm"
        // url:"http://woxiangqu-tour.cn/mobile/amanager/info/hotel/ajaxHotelList.htm"
      }).then(data => {
        this.searchHotelList = data.data.hotels;
        this.loading = false;
      });
    },
    onSearch() {
      if (this.value == "") {
        this.$notify({
          type: "danger",
          message: "请输入要搜索的内容",
          duration: 1000
        });
      }
    },
    onCancel() {
      console.log("取消");
      this.isShow = false;
    },
    goBackLast() {
      this.$router.back();
    },
    focus() {
      this.isShow = true;
    },

    onLoad() {
      // 异步更新数据;
      setTimeout(() => {
        this.$axios({
          method: "post",
          params: {
            page: this.page++,
            limit: 10,
            nameChn: localStorage.getItem("searchHotelName"),
            cityName: localStorage.getItem("searchCityName")
          },
          url: "http://192.168.1.124:8080/mobile/amanager/info/hotel/ajaxHotelList.htm"
          // url:"http://woxiangqu-tour.cn/mobile/amanager/info/hotel/ajaxHotelList.htm"
        }).then(item => {
          if (item.status == 200) {
            console.log(item);
            // 将获取到的数据保存到hotelList
            this.searchHotelList = [
              ...this.searchHotelList,
              ...item.data.hotels
            ];
            // 加载状态结束
            this.loading = false;
            // 数据全部加载完成
            if (this.searchHotelList.length >= item.data.page.totalCount) {
              this.finished = true;
            }
          }
        });
      }, 1000);
    },

    starLevel() {
      this.showStart = true;
    },

    toDetail(item) {
      sessionStorage.setItem("hotelName", item.nameChn);
      sessionStorage.setItem("hotelAdr", item.adress);
      sessionStorage.setItem("hotelPhone", item.phone);
      sessionStorage.setItem("hotelDetail", item.summary || "");
      sessionStorage.setItem("hotelCity", item.city);
      sessionStorage.setItem("hotelId", item.hotelId);
      this.$router.push("./Detail");
    }
  }
};
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
.search-list {
  height: 140 * @appSize;
}
.topClassify {
  position: fixed;
  top: 130 * @appSize;
  right: 0;
  left: 0;
  z-index: 999;
}
.van-popup__close-icon--top-right {
  color: orange;
  font-size: 30px;
}
.chooseRoom {
  display: flex;
  justify-content: space-around;
  margin-top: 80 * @appSize;
}
.van-list {
  margin-top: 130px;
}
.hotelList {
  width: 100%;
  height: 100 * @appSize;
  display: flex;

  .leftImg {
    display: flex;
    margin-right: 10 * @appSize;
    img {
      width: 110 * @appSize;
      height: 100%;
    }
  }
  .rightText {
    font-size: 14 * @appSize;
    .hotelName {
      color: #000;
    }
    .hotelXing {
      color: orange;
    }
    .hotelHao {
      width: 200 * @appSize;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #ccc;
    }
    .hotelAdr {
      color: skyblue;
    }
  }
}
</style>
