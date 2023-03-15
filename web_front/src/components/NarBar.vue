<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #e3f2fd;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">DemoBar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>

                <li class="nav-item">
                <a class="nav-link" href="#">标注</a>
                </li>

                <li class="nav-item">
                <a class="nav-link" href="#">About</a>
                </li>
            </ul>
            <span class="navbar-text">
                demo
            </span>
            </div>
        </div>
        </nav>
</template>

<script>
export default{
    name: "NavBar",
}
</script>

<style scoped>
    
</style>