<template>
    <ContentView>
    </ContentView>
    <div class="home">
        <div class="container">
            <div class="card" id="container-card">

            </div>
        </div>
    </div>
</template>

<script>
import ContentView from "../components/Content.vue";

export default {
    name: 'LoginView',
    components: {
        ContentView,
    },
}


</script>

<style scoped>
.container {
    padding-top: 8%;
    padding-bottom: 5%;
    max-width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    height: 100%;
    background-size: 100%;
    position: relative;
}

#container-card {
    height: 100%;
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