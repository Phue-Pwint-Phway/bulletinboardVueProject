<template>
    <div id="reset">
        <form action="" @submit.prevent="handleSubmit">

            <h3>Reset Password</h3>

            <div class="form-group">
                <label for="">Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="password" />
            </div>
            <div class="form-group">
                <label for="">Password Confirm</label>
                <input type="password" v-model="password_confirm" class="form-control" placeholder="password confirm" />
            </div>

            <button class="btn btn-primary btn-block">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Reset',
    data() {
        return {
            password: '',
            password_confirm: '',
        }
    },
    methods: {
        async handleSubmit() {
            const response = await axios.post('reset', {
                password: this.password,
                password_confirm: this.password_confirm,
                token: this.route.param.token
            });
            console.log(response);
            this.$router.push('/login');
        }
    }
}
</script>