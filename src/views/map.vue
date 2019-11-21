<template>
  <!-- 定义地图显示容器 -->
  <div class="map">
    <div class="map-top">
      <van-icon name="arrow-left" class="map-iconLeft" @click="onClickLeft" />
      <span class="text">位置信息</span>
    </div>
    <div class="baidumap" id="allmap"></div>
  </div>
</template>

<script>
export default {
  name: "pm-distribution",
  components: {},
  mounted() {
    this.baiduMap();
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    baiduMap() {
      var map = new BMap.Map("allmap"); // 创建地图实例

      var point = new BMap.Point(); // 创建点坐标114.07, 22.62
      map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别

      function myFun(result) {
        var cityName = result.name;
        map.setCenter(cityName);
        console.log("当前定位城市:" + cityName);
        al
      }
      var myCity = new BMap.LocalCity();
      myCity.get(myFun);

      // 地图控件
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.ScaleControl());
      map.addControl(new BMap.GeolocationControl());
      map.addControl(new BMap.CopyrightControl());

      var marker = new window.BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
    }
  }
};
</script>

<style lang="less" scoped>
@appSize: 1/37.52rem;

.map {
  height: 100%;

  .map-top {
    height: 40 * @appSize;
    background-color: orange;
    display: flex;
    align-items: center;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    .map-iconLeft {
      font-size: 18 * @appSize;
      margin-left: 10 * @appSize;
      margin-right: 20 * @appSize;
    }
    .text {
      font-size: 14 * @appSize;
    }
  }
  .baidumap {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>