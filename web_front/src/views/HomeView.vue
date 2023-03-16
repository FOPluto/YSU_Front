<!--
 * @FileDescription:该文件为Home目录的页面文件
 * @Author: FoPluto
-->
<template>
  <ContentView>
  </ContentView>
  <div class="home">
    <div class="container">
      <div class="card">
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

  // data() {
  //   return {
  //     htmlContent: ""
  //   }
  // },

  // methods: {
  //   handleFileChange(event) {
  //     const file = event.target.files[0];
  //     if (!file) {
  //       return;
  //     }

  //     // 通过 mammoth 将 Word 文档转换为 HTML 格式
  //     mammoth.convertToHtml({ arrayBuffer: file }).then(result => {
  //       const html = result.value;
  //       this.htmlContent = html;
  //     });
  //   },
  //   sendToBackend() {
  //     // 将 HTML 内容发送给后端
  //     axios.post("/api/upload", { html: this.htmlContent });
  //   }
  // },
  name: 'HomeView',
  components: {
    ContentView,
    UpLoad,
  }
}


</script>


<style scoped>
.container {
  margin-top: 69px;
}
</style>