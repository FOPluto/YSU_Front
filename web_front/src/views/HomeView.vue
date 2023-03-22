<!--
 * @FileDescription:该文件为Home目录的页面文件
 * @Author: FoPluto
-->
<template>
  <ContentView>
  </ContentView>
  <div class="home">
    <div class="container">
      <div class="card" id="container-card">
        <div class="card-body">
          <UpLoad />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentView from "../components/Content.vue";
import UpLoad from "../components/UpLoad.vue";

// 后面注释的是打算发送到后台的
// import mammoth from "mammoth";

export default {
  name: 'HomeView',
  components: {
    ContentView,
    UpLoad,
  },
}


</script>


<style scoped>
.container {
  padding-top: 79px;
  padding-bottom: 40px;
  max-width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  height: auto;
  background-size: 100%;
  position: relative;
}


.home {
  background-image: url("../assets/preview.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>