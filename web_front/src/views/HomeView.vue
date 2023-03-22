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
  margin-top: 79px;
  max-width: 90%;
  height: 100%;
}

.home {
  width: 100%;
  height: 100%;
}
</style>