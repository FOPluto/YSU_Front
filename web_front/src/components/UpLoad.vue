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
import mammoth from "mammoth";
import axios from "axios";
import { Buffer } from 'buffer';

console.log("start");

// @ts-ignore
window.Buffer = Buffer;

export default {
    data() {
        return {
            vHtml: "",
        };
    },
    methods: {

        displayResult(result) {
            let html = result.value;
			console.log(html)
            let newHTML = html.replace(//g, '')
            console.log(newHTML)
        },

        toBuffer(ab) {
            var buf = new Buffer(ab.byteLength);
            var view = new Uint8Array(ab);
            for (var i = 0; i < buf.length; ++i) {
                buf[i] = view[i];
            }
            return buf;
        },

        toArrayBuffer(buf) {
            var ab = new ArrayBuffer(buf.length);
            var view = new Uint8Array(ab);
            for (var i = 0; i < buf.length; ++i) {
                view[i] = buf[i];
            }
            return ab;
        },

        handleFileChange(event) {
            console.log(event);
            let file = event.target.files[0];
            if (!file) {
                return;
            }
            let reader = new FileReader();

            reader.onload = function (loadEvent) {
                // 修改后的写法
                let arrayBuffer = loadEvent.target.result;
                // let buffer = to_buffer(arrayBuffer);
                console.log(arrayBuffer);
                // 通过 mammoth 将 Word 文档转换为 HTML 格式                const length = response.data.content.data.length

                mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
                    .then(this.displayResult)
                    .done();
            };
            // console.log(file);
            // console.log("");
            // console.log(reader);
            reader.readAsArrayBuffer(file);
        },
        sendToBackend() {
            // 将 HTML 内容发送给后端
            axios.post("/api/upload", { html: this.htmlContent });
        },
    },
    name: "UpLoad",
};
</script>