<template>
  <div id="mapdemo"></div>
</template>
<script setup lang="ts">
import AMapLoader from "@amap/amap-jsapi-loader";
import { reactive, onBeforeMount, onUnmounted } from "vue";

export interface MapConfigureInter {
  on: Fn;
  destroy?: Fn;
  clearEvents?: Fn;
  addControl?: Fn;
  setCenter?: Fn;
  setZoom?: Fn;
  plugin?: Fn;
}

let map: MapConfigureInter;

onBeforeMount(()=> {
  AMapLoader.load({
    key: '9467eb4a9bcad2a31de4f1c36372396c',
    version:'2.0',
    plugins: []
  }).then(AMap=> {
    map = new AMap.Map('mapdemo')
  })
})


</script>
<style lang="less">
#mapdemo {
  height: 300px;
}
  
</style>
