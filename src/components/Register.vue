<template>
    <div id="register">
        <form action="">

            <Error v-if="error" :error="error" />

            <h3>Sign Up</h3>
            <div class="form-group">
                <label for="">Email</label>
                <input type="email" class="form-control" v-model="email" name="" id="" placeholder="email"/>
            </div>

            <div class="form-group">
                <label for="">Password</label>
                <input type="password" class="form-control" v-model="password" name="" id="" placeholder="password"/>
            </div>

            <div class="form-group">
                <label for="">Confirm Password</label>
                <input type="password" class="form-control" v-model="password_confirm" name="" id="" placeholder="confirm password"/>
            </div>
            <button class="btn btn-primary btn-block">Sign Up</button>
        </form>        
    </div>
</template>

<script>
import axios from 'axios'
import Error from './Error.vue'
// 
export default {
    name: 'Register',
    components: {
        Error,
    },
    data() {
        return {
            email: '',
            password: '',
            password_confirm: '',
            error: '',
        }
    },
    methods: {
        async handleSubmit() {
            try {
                await axios.post('register',{
                email: this.email,
                password: this.password,
                password_confirm: this.password_confirm,
                }); 
                // console.log(response);
                this.$router.push('/login'); 
            }catch (e) {
                this.error = 'Error occured!';
            }      
        }
    }
}
</script>