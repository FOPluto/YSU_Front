<template>
    <ContentView>
    </ContentView>
    <div class="home">
        <div class="container">
            <LoginCard></LoginCard>
        </div>
    </div>
</template>

<script>
import ContentView from "../components/Content.vue";
import LoginCard from "@/components/LoginCard.vue";

export default {
    name: 'LoginView',
    components: {
        ContentView,
        LoginCard
    },
}


</script>

<style scoped>
.container {
    padding-top: 11%;
    padding-bottom: 8%;
    max-width: 100%;
    padding-left: 26%;
    padding-right: 26%;
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