<template>
    <div>
        <label for="formFileLg" class="form-label">请选择输入文件</label>
        <!-- 输入文件doc或者dot过些天看看docx可以不 -->
        <input class="form-control form-control-lg" id="formFileLg" type="file" accept="application/msword" />
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
            if (!file) {
                return;
            }

            // 通过 mammoth 将 Word 文档转换为 HTML 格式
            mammoth.convertToHtml({ arrayBuffer: file }).then(result => {
                const html = result.value;
                this.htmlContent = html;
            });
        }
    },
    name: "UpLoad"
};
</script>