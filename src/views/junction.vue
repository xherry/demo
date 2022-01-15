<template>
  <div>
    <!-- <h1 style="text-align: center">省市区</h1> -->
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      contactStationSata: [],
      zoom: 5,
      cityMarks: [],
      areaMarks: [],
      allMarks: [],
    };
  },
  created() {},
  mounted() {
    this.getInfos();
  },
  methods: {
    getInfos() {
      this.$axios.get("Junctions.json").then((res) => {
        // console.log(res);
        this.contactStationSata = res.data;
        this.initMap(res.data);
        // this.markerScale(res.data);
        this.setCityMark();
        // this.setAreaMark();
      });
    },
    markerScale(data) {
      let that = this;
      data.map((item) => {
        var marker = new AMap.Marker({
          map: that.map,
          position: item.json_geometry.coordinates,
          // 将 html 传给 content
          //   zooms: [10, 19], // 在指定地图缩放级别范围内展示海量点图层
          content: `<div>
                <div style="background:red;
                        color:#fff;
                        font-size:12px;
                        white-space: nowrap;
                        padding:5px 8px;
                        border-radius: 2px;
                        position: absolute;
                        top: -100%;
                        left: -50%;
                        transform: translateX(-35%)"> 
                    <span>${item["联络站名称"]}</span> 
                </div>
                <img style='margin:0 auto;' src="//vdata.amap.com/icons/b18/1/2.png"></img>
            </div>`,
          // 以 icon 的 [center bottom] 为原点
          offset: new AMap.Pixel(-13, -30),
          url: item["链接"],
        });
        marker.on("click", toUrl);
        that.allMarks.push(marker);
        // 将 markers 添加到地图
        // that.map.add(marker);
      });
      function toUrl(e) {
        console.log(e);
        window.open(e.target._opts.url);
      }
    },
    mapZoomstart() {
      console.log("缩放开始");
    },
    mapZoom() {
      this.zoom = this.map.getZoom(); //获取当前地图级别
      console.log("正在缩放");
    },
    mapZoomend() {
      let zoom = this.zoom;
      if (zoom >= 3 && zoom < 7) {
        this.setCityMark();
        if (this.allMarks.length > 0) {
          this.map.remove(this.allMarks);
        }
        if (this.areaMarks.length > 0) {
          this.map.remove(this.areaMarks);
        }
      }
      if (zoom >= 7 && zoom < 12) {
        this.setAreaMark();
        if (this.allMarks.length > 0) {
          this.map.remove(this.allMarks);
        }
        if (this.cityMarks.length > 0) {
          this.map.remove(this.cityMarks);
        }
      }
      if (zoom >= 12) {
        this.markerScale(this.contactStationSata);
        if (this.areaMarks.length > 0) {
          this.map.remove(this.areaMarks);
        }
        if (this.cityMarks.length > 0) {
          this.map.remove(this.cityMarks);
        }
      }
      console.log("缩放结束");
    },
    initMap(data) {
      let that = this;
      this.map = new AMap.Map("container", {
        zoom: 6, //设置地图显示的缩放级别
        center: [120.153576, 30.287459], //设置地图中心点坐标
        // layers: [new AMap.TileLayer.Satellite()], //设置图层,可设置成包含一个或多个图层的数组
        // mapStyle: "amap://styles/whitesmoke", //设置地图的显示样式
        viewMode: "3D", //设置地图模式
        lang: "zh_cn", //设置地图语言类型
        // mapStyle: "amap://styles/30791b88e2bdedc14b0e81ff95aa70ec"
      });
      this.map.on("zoomstart", this.mapZoomstart);
      this.map.on("zoomchange", this.mapZoom);
      this.map.on("zoomend", this.mapZoomend);
      //   var styleObject = {
      //     url: "//vdata.amap.com/icons/b18/1/2.png", // 图标地址
      //     size: new AMap.Size(20, 20), // 图标大小
      //     anchor: new AMap.Pixel(5, 5), // 图标显示位置偏移量，基准点为图标左上角
      //   };
      //   var massMarks = new AMap.MassMarks(null, {
      //     zIndex: 5, // 海量点图层叠加的顺序
      //     zooms: [9, 9.9], // 在指定地图缩放级别范围内展示海量点图层
      //     style: styleObject, // 设置样式对象
      //   });
      //   let arrs = [];
      //   data.forEach((item) => {
      //     let obj = {
      //       lnglat: item.json_geometry.coordinates, //点标记位置
      //       name: item["联络站名称"],
      //       title: item["联络站名称"],
      //       id: item.OBJECTID,
      //       url: item["链接"],
      //     };
      //     arrs.push(obj);
      //   });
      //   massMarks.setData(arrs);
      //   massMarks.on("click", function (e) {
      //     console.log(e);
      //     window.open(e.data.url);
      //   });
      //   let marker = null;
      //   massMarks.on("mouseover", function (e) {
      //     marker = new AMap.Marker({ content: " ", map: that.map });
      //     marker.setPosition(e.data.lnglat);
      //     marker.setLabel({ content: e.data.name });
      //   });
      //   massMarks.on("mouseout", function (e) {
      //     if (marker) {
      //       that.map.remove(marker);
      //       marker = null;
      //     }
      //   });
      //   // 将海量点添加至地图实例
      //   massMarks.setMap(this.map);
    },
    setCityMark() {
      let that = this;
      // 创建一个 Icon
      var startIcon = new AMap.Icon({
        // 图标尺寸
        size: new AMap.Size(25, 25),
        // 图标的取图地址
        image: "//vdata.amap.com/icons/b18/1/2.png",
        // 图标所用图片大小
        imageSize: new AMap.Size(25, 25),
        // 图标取图偏移量
        imageOffset: new AMap.Pixel(0, 0),
      });
      let cityMarks = [];
      var marker = new AMap.Marker({
        map: that.map,
        position: new AMap.LngLat(120.755625, 30.746631), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "嘉兴市",
        // icon: startIcon,
        content: `<div>
                <div style="background:red;
                        color:#fff;
                        font-size:12px;
                        white-space: nowrap;
                        padding:5px 8px;
                        border-radius: 2px;
                        position: absolute;
                        top: -100%;
                        left: -50%;
                        transform: translateX(-4%)"> 
                    <span>嘉兴市</span> 
                </div>
                <img style='margin:0 auto;' src="//vdata.amap.com/icons/b18/1/2.png"></img>
            </div>`,
        // zooms: [3, 5.9], // 在指定地图缩放级别范围内展示
      });
      this.cityMarks.push(marker);
    },
    setAreaMark() {
      let that = this;
      let arrs = [
        { name: "南湖区", latLng: [120.783025, 30.747842] },
        { name: "秀洲区", latLng: [120.709018, 30.765168] },
      ];
      // 创建一个 Icon
      var startIcon = new AMap.Icon({
        // 图标尺寸
        size: new AMap.Size(25, 25),
        // 图标的取图地址
        image: "//vdata.amap.com/icons/b18/1/2.png",
        // 图标所用图片大小
        imageSize: new AMap.Size(25, 25),
        // 图标取图偏移量
        imageOffset: new AMap.Pixel(0, 0),
      });
      arrs.forEach((item) => {
        var marker = new AMap.Marker({
          position: new AMap.LngLat(item.latLng[0], item.latLng[1]), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          title: item.name,
          //   icon: startIcon,
          content: `<div>
                <div style="background:red;
                        color:#fff;
                        font-size:12px;
                        white-space: nowrap;
                        padding:5px 8px;
                        border-radius: 2px;
                        position: absolute;
                        top: -100%;
                        left: -50%;
                        transform: translateX(-4%)"> 
                    <span>${item.name}</span> 
                </div>
                <img style='margin:0 auto;' src="//vdata.amap.com/icons/b18/1/2.png"></img>
            </div>`,
          //   zooms: [6, 8.9], // 在指定地图缩放级别范围内展示
          map: that.map,
        });
        // 将创建的点标记添加到已有的地图实例：
        this.areaMarks.push(marker);
        // this.map.add(marker);
      });
    },
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 900px;
}
</style>