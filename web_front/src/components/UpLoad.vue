<template>
    <div class="UpLoad">
        <label for="formFileLg" id="form-label" class="form-label" name="UpLoad">文件上传</label>
        <!-- 输入文件doc或者dot过些天看看docx可以不 -->
        <input class="form-control form-control-lg" id="formFileLg" @change="changeFile" type="file" accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
        <!-- 预览文件的地方（用于渲染） -->
        <!-- 来一个card装起来 -->
        <div class="container" id="input-word-imshow">
            <div class="card" id="input-word-imshow-card">
                <div id="wordView" v-html="wordText"></div>
            </div>
        </div>
        <div class="container" id="input-word-imshow">
            <div class="card" id="input-word-imshow-card">
                <div id="resultView" v-html="resultWordText"></div>
            </div>
        </div>
    </div>
</template>

<script>
import mammoth from 'mammoth';
import { Buffer } from 'buffer';

var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
// debug
console.log("start");

// @ts-ignore
window.Buffer = Buffer;

export default {
    data() {
        return {
            vHtml: "",             // 展示字符串
            wordText: "",          // 用户输入文档的结果，也需要转换成html
            resultWordText: "",    // 结果的展示，需要先转换成html
        };
    },
    methods: {

        displayResult(result) {
            console.log(result.value);
            this.wordText = result.value;
        },

        changeFile(event) {
            let file = event.target.files[0];
            let reader = new FileReader();
            let that = this;
            console.log("本地文件...");
            if (!file) {
                return;
            }

            reader.onload = function (loadEvent) {
                // 修改后的写法
                let arrayBuffer = loadEvent.target.result;
                // let buffer = to_buffer(arrayBuffer);

                console.log("处理文件...");

                mammoth
                    .convertToHtml({ arrayBuffer: arrayBuffer })
                    .then(that.displayResult)
                    .done();

                console.log("上传文件...");
                console.log(data);

                // data.append('multipartFile', fs.createReadStream('/D:/FeizaiDoc/定密项目相关介绍v0.1/中石油数据集转化源码/密点标注样本/丁鹏-办公文件 J2436896 关于开展2022年中秋国庆送温暖活动离退休、偿解困难群体帮扶工作的通知（离退休管理科）.docx'));
                data.append('multipartFile', arrayBuffer);
                var config = {
                    method: 'get',
                    url: 'localhost:8083/upload',
                    data: data
                };

                axios(config)
                    .then(function (response) {
                        console.log(JSON.stringify(response.data));
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            };
            console.log("本地文件...");
            reader.readAsArrayBuffer(file);
        },
        sendToBackend() {
            // 将 HTML 内容发送给后端,并调用回调函数
            axios.post("/api/upload", { html: this.htmlContent }).then({

            });
        },
    },
    name: "UpLoad",
};
</script>

<style>
#input-word-imshow {
    margin-top: 2%;
    min-height: 1%;
    height: 100%;
}

.card-body {
    height: 100%;
}

#input-word-imshow-card {
    padding: 3% 4% 3% 4%;
    min-height: 20%;
    height: 100%;
}
</style>