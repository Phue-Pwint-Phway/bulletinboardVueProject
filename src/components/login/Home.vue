<template>
    <div id="home">
        <div>
            <h3 v-if="loginuser">Hello, Welcome</h3>
            <h3 v-if="!loginuser">You are not logged in!</h3>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
// 
export default {
    name: 'Home',
    props: ['loginuser'],
    computed: {
        ...mapGetters(['loginuser'])
    }

    // data() {
    //     return {
    //         loginuser: null
    //     }
    // },
    // async created() {
    //     const response = await axios.get('loginuser');
            
    //     // console.log(response);
    //     this.loginuser = response.data;
    // }
}
</script>

<style scoped>

</style>