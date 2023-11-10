<script setup>
import {onMounted, ref} from 'vue'
import AntV_g6 from "@/components/AntV_g6.vue";

</script>

<template>
  <main class="main">
    <AntV_g6 />
  </main>
</template>

<style scoped>
.message{
  position: absolute;
  width: 100px;
  height: 30px;
}
.stream{
  //display: flex;
  width: 100vw;
  //height: 100vh;
  //flex: 1;
  //width: 1920px;
  //height: 1080px;
  overflow: hidden;
}
.main{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
