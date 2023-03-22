<template>
    <ContentView>
    </ContentView>
    <div class="home">
        <div class="container">
            <div class="card" id="container-card">
                <div class="card-body">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContentView from "../components/Content.vue";

export default {
    name: 'RegistView',
    components: {
        ContentView,
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