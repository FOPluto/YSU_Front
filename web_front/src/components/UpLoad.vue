<template>
    <div class="UpLoad">
        <label for="formFileLg" id="form-label" class="form-label" name="UpLoad">请选择输入文件</label>
        <!-- 输入文件doc或者dot过些天看看docx可以不 -->
        <input class="form-control form-control-lg" id="formFileLg" @change="handleFileChange" type="file" accept="application/msword" />
        <!-- 预览文件的地方（用于渲染） -->
        <div id="wordView" v-html="vHtml">
        </div>
    </div>
</template>

<script>
import JSZip from 'jszip';
import Docxtemplater from 'docxtemplater';

// const reader = new FileReader();



console.log("start");

export default {
    data() {
        return {
            htmlContent: ""
        };
    },
    methods: {
        handleFileChange(event) {
            const reader = new FileReader()
            reader.readAsArrayBuffer(event.target.files[0]);
            if (!reader) {
                return;
            }
            console.log("reader: " + reader);
            reader.onload = (e) => {
                const arrayBuffer = e.target.result
                const zip = new JSZip(arrayBuffer)
                const doc = new Docxtemplater().loadZip(zip)
                const text = doc.getFullText()
                console.log(text)
            }
            reader.readAsArrayBuffer(reader)
        }
    },
    name: "UpLoad"
};
</script>