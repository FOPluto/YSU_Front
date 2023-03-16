<template>
    <div>
        <label for="formFileLg" class="form-label">请选择输入文件</label>
        <!-- 输入文件doc或者dot过些天看看docx可以不 -->
        <input class="form-control form-control-lg" id="formFileLg" type="file" accept="application/msword" />
        <!-- 预览文件的地方（用于渲染） -->
        <div ref="file" id="file_info_div">
        </div>
    </div>
</template>

<script>
import mammoth from "mammoth";

export default {
    data() {
        return {
            htmlContent: ""
        };
    },
    methods: {
        handleFileChange(event) {
            const file = event.target.files[0];
            console.log("aaaa");
            if (!file) {
                return;
            }
            let box = document.getElementById("file_info_div");
            // 通过 mammoth 将 Word 文档转换为 HTML 格式
            mammoth.convertToHtml({ arrayBuffer: file }).then(result => {
                const html = result.value;
                this.htmlContent = html;
                console.log(this.htmlContent);
            });
            box.html = this.htmlContent;
        }
    },
    name: "UpLoad"
};
</script>