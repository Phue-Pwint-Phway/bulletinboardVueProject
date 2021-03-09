<template>
    <form action="" @submit.prevent="handleSubmit">

        <Error v-if="error" :error="error" />

        <h3>Login</h3>

        <div class="form-group">
            <label for="">Email</label>
            <input type="email" class="form-control" v-model="email" name="email" id="" placeholder="email"/>
        </div>

        <div class="form-group">
            <label for="">Password</label>
            <input type="password" class="form-control" v-model="password" name="password" id="" placeholder="password"/>
        </div>

        <button class="btn btn-primary btn-block">Login</button>

        <p class="forgot-password text-right">
            <router-link to="/forgot">Forgot password?</router-link>
        </p>
    </form>
</template>

<script>
import axios from 'axios'
import Error from './Error.vue'
export default {
    name: 'Login',
    components: {
        Error,
    },
    data(){
        return{
            email: '',
            password: '',
            error: '',
        }
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await axios.post('login', {
                    email: this.email,
                    password: this.password,
                });
                // console.log(response);
                localStorage.setItem('token', response.data.token);
                this.$store.dispatch('loginuser', response.data.loginuser);
                this.$router.push('/');
            }catch (e) {
                this.error = 'Invalid email or password'
            }        
        }
    }
}
</script>