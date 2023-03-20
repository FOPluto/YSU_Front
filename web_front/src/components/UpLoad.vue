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
import { result } from 'lodash';
import mammoth from 'mammoth';

console.log("start");

export default {
    data() {
        return {
            htmlContent: ""
        };
    },
    methods: {
        handleFileChange(event) {
            var e = window.event || event;
            console.log(e.target.files[0]);
            let word_view = document.getElementById("wordView");
            mammoth.convertToHtml(e.target.files[0], result => {
                console.log(result);
                word_view.vHtml = result;
            })
        }
    },
    name: "UpLoad"
};
</script>