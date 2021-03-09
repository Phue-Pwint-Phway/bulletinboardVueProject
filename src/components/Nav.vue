<template>
    <div id="nav">
        <nav class="navbar navbar-expand navbar-light fixed-top">
            <div class="container">
                <router-link to="/" class="navbar-brand">Home</router-link>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto" v-if="!loginuser">
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/register" class="nav-link">Sign up</router-link>
                        </li>                       
                    </ul>
                    <ul class="navbar-nav ml-auto" v-if="loginuser">
                        <li class="nav-item">
                            <a href="javascript:void(0)" @click="handleClidk" class="nav-link">Logout</a>
                        </li>                       
                    </ul>          
                </div>
            </div>
        </nav>
    </div>     
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Nav',
    // props: ['loginuser'],
    methods: {
        handleClick() {
            localStorage.removeItem('token');
            this.$store.dispatch('loginuser', null);
            this.$router.push('/');
        }
    },
    computed: {
        ...mapGetters(['loginuser'])
    }
}
</script>

<style scoped>

</style>