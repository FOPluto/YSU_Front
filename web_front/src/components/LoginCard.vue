<template>
    <div class="card mt-5">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <a class="nav-link" :class="{ active: activeTab === 'login' }" @click="activeTab = 'login'">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ active: activeTab === 'register' }" @click="activeTab = 'register'">Register</a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <div v-if="activeTab === 'login'">
                <h3>Login</h3>
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="login-username">Username</label>
                        <input type="text" id="login-username" v-model="loginData.username" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="login-password">Password</label>
                        <input type="password" id="login-password" v-model="loginData.password" class="form-control" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
            <div v-if="activeTab === 'register'">
                <h3>Register</h3>
                <form @submit.prevent="register">
                    <div class="form-group">
                        <label for="register-username">Username</label>
                        <input type="text" id="register-username" v-model="registerData.username" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="register-password">Password</label>
                        <input type="password" id="register-password" v-model="registerData.password" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="register-confirm-password">Confirm Password</label>
                        <input type="password" id="register-confirm-password" v-model="registerData.confirmPassword" class="form-control" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'login',
            loginData: {
                username: '',
                password: ''
            },
            registerData: {
                username: '',
                password: '',
                confirmPassword: ''
            }
        }
    },
    methods: {
        login() {
            // 处理登录逻辑
            console.log('Login', this.loginData)
        },
        register() {
            // 处理注册逻辑
            console.log('Register', this.registerData)
        }
    }
}
</script>

<style>
.nav-link {
    cursor: pointer;
}
</style>