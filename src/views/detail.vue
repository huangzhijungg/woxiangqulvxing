<template>
  <div class="detail">
    <div class="top">
      <van-icon name="arrow-left" @click="goBack" class="detail-leftIcon" />
      <van-notice-bar
        text="我想去旅行邀您体验，更好的享受，祝您住店愉快"
        left-icon="volume-o"
        background="#F5DEB3"
        color="#FF8C00"
      />
    </div>
    <!-- 弹出层 -->
    <van-popup v-model="show" overlay closeable position="bottom" :style="{ height: '60%' }">
      <div class="titel">
        <p>酒店信息</p>
      </div>
      <div class="content">
        <div class="intro">
          <p>酒店简介</p>
          <span>{{hotelDetail ? hotelDetail : `暂无酒店详情`}}</span>
        </div>
        <div class="facility">
          <p>酒店设施</p>
          <span>{{`暂无信息`}}</span>
        </div>
        <div class="hint">
          <p>特别提示</p>
          <span>{{`暂无信息`}}</span>
        </div>
        <div class="phone">
          <p>联系方式</p>
          <span>{{hotelPhone}}</span>
        </div>
      </div>
    </van-popup>
    <!-- 轮播图 -->
    <div class="swipper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="hotelInfo">
      <div class="special">
        <span class="tese">酒店名称：{{hotelName}}</span>
      </div>

      <div class="special">
        <span class="tese">酒店地址：{{hotelAddress}}</span>
        <span @click="toMap" class="detailColor">
          地图
          <van-icon name="arrow" class="rightarrow" />
        </span>
      </div>

      <div class="special">
        <span class="tese">酒店详情：{{hotelDetail ? hotelDetail : `暂无酒店详情`}}</span>
        <span @click="showDetail" class="detailColor">
          详情
          <van-icon name="arrow" class="rightarrow" />
        </span>
      </div>
    </div>
    <demo />
    <!-- 折叠面板 -->
    <van-collapse v-model="activeName" accordion>
      <!-- 存放左侧图片 icon -->
      <van-collapse-item
        v-for="(item, index) in roomTypesItem"
        :key="index"
        :title="item.nameChn"
        :value="`日均 ￥` +  item.priceCityMapList[index].totalSalePrice || '' +`起`"
        size="large"
        :name="index"
      >
        <div class="content" :key="index">
          <!-- v-for="(data, index) in roomTypesItem" -->
          <!-- <img src="http://img2.imgtn.bdimg.com/it/u=1165461476,304980642&fm=15&gp=0.jpg" alt=""> -->
          <div class="left">
            <p>{{item.priceCityMapList[index].ratetypeName || ''}}</p>
            <p>无预定条款</p>
            <p>不可取消</p>
            <p class="check">待查</p>
          </div>
          <div class="right">
            <p>
              日均
              <span>￥{{item.priceCityMapList[index].totalSalePrice || ''}}</span>
            </p>
            <p>总价￥{{item.priceCityMapList[index].totalSalePrice || ''}}</p>
            <van-button type="primary" size="mini" @click="reserve">预定</van-button>
          </div>
        </div>
      </van-collapse-item>
      <van-divider :style="{ color: '#FF9933', borderColor: '#FF9933', padding: '0 16px' }">暂无更多房型信息</van-divider>
    </van-collapse>
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
      images: [
        "https://f10.baidu.com/it/u=1208544201,1064095414&fm=72",
        "http://img0.imgtn.bdimg.com/it/u=1692231286,3926982492&fm=26&gp=0.jpg",
        "http://img3.imgtn.bdimg.com/it/u=2920944932,3026420003&fm=26&gp=0.jpg"
      ],
      show: false,
      activeName: "1",
      hotelName: sessionStorage.getItem("hotelName"),
      hotelAddress: sessionStorage.getItem("hotelAdr"),
      hotelPhone: sessionStorage.getItem("hotelPhone"),
      hotelDetail: sessionStorage.getItem("hotelDetail"),
      roomTypesItem: [] || "",
      roomInfo: []
    };
  },
  created() {
    this.$axios({
      method: "post",
      params: {
        city: parseInt(sessionStorage.getItem("hotelCity")),
        hotelId: parseInt(sessionStorage.getItem("hotelId")),
        indate: sessionStorage.getItem("checkInTime"),
        outdate: sessionStorage.getItem("checkOutTime")
      },
      url:
        "http://192.168.1.124:8080/mobile/amanager/info/hotel/ajaxRoomtypeList.htm"
      // url:'http://woxiangqu-tour.cn/mobile/amanager/info/hotel/ajaxRoomtypeList.htm'
    }).then(res => {
      console.log(res);
      if (res.data.roomtypes != "") {
        this.roomTypesItem = res.data.roomtypes;
        // sessionStorage.setItem('breahfast',res.data.roomtypes.priceCityMapList[index].ratetypeName || '')
      }
    });
  },
  methods: {
    toMap() {
      this.$router.push("./map");
    },
    //点击返回到上一页面
    goBack() {
      this.$router.back();
    },
    showDetail() {
      this.show = !this.show;
    },
    reserve() {

      this.$router.push("./reservation");
    }
  }
};
</script>

<style lang="less">
@appSize: 1/37.52rem;
.detail {
  background-color: #fff;
}

.top {
  width: 100%;
  height: 40 * @appSize;
  background-color: #f5deb3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  .detail-leftIcon {
    font-size: 22 * @appSize;
    color: #fff;
    float: left;
    line-height: 40 * @appSize;
    margin: 0 10 * @appSize;
  }
  .van-notice-bar {
    .van-notice-bar__left-icon,
    .van-notice-bar__right-icon {
      min-width: 30 * @appSize;
    }
  }
}
.swipper {
  margin-top: 40 * @appSize;
  padding: 10 * @appSize;
  box-sizing: border-box;
}
.van-swipe {
  width: 100%;
  height: 220 * @appSize;
  border-radius: 10 * @appSize;

  img {
    width: 100%;
    height: 100%;
  }
}
.hotelInfo {
  color: #292421;
  div {
    width: 100%;
    height: 40 * @appSize;
    font-size: 16 * @appSize;
    text-indent: 10 * @appSize;
    line-height: 40 * @appSize;
    border-bottom: 1 * @appSize solid #ccc;
  }
  .special {
    display: flex;
    justify-content: space-between;
    .tese {
      width: 290 * @appSize;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .detailColor {
      color: orange;
    }
  }
  .special,
  .name {
    span {
      .rightarrow {
        right: 18 * @appSize;
        top: 3 * @appSize;
      }
    }
  }
}
.van-collapse {
  background-color: #fff;
  padding: 2 * @appSize;
  box-sizing: border-box;
  // van-cell van-cell--clickable van-cell--large

  .van-collapse-item {
    margin-bottom: 10 * @appSize;
    .van-cell {
      display: flex;
      align-items: center;
    }
    .van-cell--large {
      height: 64 * @appSize;
    }
    .van-collapse-item__title {
      padding: 0 6 * @appSize;
      box-sizing: border-box;

      .van-icon__image {
        width: 110 * @appSize;
        height: 60 * @appSize;

        .van-image__img {
          margin-top: -18 * @appSize;
        }
      }
    }
    .van-collapse-item__wrapper {
      .van-collapse-item__content {
        background-color: #ddd;
        padding: 0;
      }
    }
    .content {
      display: flex;
      border-bottom: 1px solid #ccc;
      margin-bottom: 5 * @appSize;

      // img{
      //   width: 90 * @appSize;
      //   height: 70 * @appSize;
      //   margin: 8 * @appSize 20 * @appSize 0 8 * @appSize;
      // }
      .left {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-bottom: 0;
        margin-left: 10 * @appSize;

        .check {
          color: orange;
        }
      }
      .right {
        p {
          font-size: 10 * @appSize;
          margin-bottom: 4 * @appSize;
          span {
            color: red;
          }
        }
      }
    }
  }
}
.titel {
  width: 100%;
  height: 40 * @appSize;
  background-color: orange;
  p {
    text-align: center;
    line-height: 40 * @appSize;
    color: #fff;
    font-size: 14 * @appSize;
  }
}
.content {
  padding: 10 * @appSize;
  box-sizing: border-box;
  div {
    margin-bottom: 20 * @appSize;
    p {
      font-size: 14 * @appSize;
      font-weight: bold;
    }
    span {
      font-size: 12 * @appSize;
      color: #666;
    }
  }
}
</style>
