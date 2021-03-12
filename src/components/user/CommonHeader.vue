<template>
    <!-- common-header -->
    <div id="common-header">
        <div class="header-container">
            <form>
                <ul>
                    <li>
                        <h2>SCM Bulletin Board</h2>
                    </li>
                    <li>
                        <router-link to="/userlist">Users</router-link>
                    </li>
                    <li>
                        <router-link to="/createuser">User</router-link>
                    </li>
                    <li>
                        <router-link to="/postlist">Posts</router-link>
                    </li>
                    <li>
                        <label class="loginuser"  for="loginUser">Loginuser Name</label>
                    </li>
                    <li>
                        <a href="">Logout</a>
                    </li>
                </ul>
            </form>
        </div>
    </div>
</template>

<script>
export default {
   name: 'Common' 
}
</script>

<style scoped>
/* for common-header */
.header-container {
    border:1px solid black;
}
.header-container ul {
    list-style-type: none;
    margin: 0px 0px 0px 20px;
    padding: 0;
    overflow: hidden;
}
.header-container li {
    display: inline;
    float: left;
}
.header-container li a {
    display: block;
    text-align: center;
    padding: 25px 16px;
    text-decoration: none;
}
.header-container .loginuser {
    display: block;
    margin: 0px 0px 0px 200px;
    padding: 25px 16px 0px 0px;
    text-align: center;
}
.header-container form ul li h2 {
    margin: 15px 0px 0px 0px;
}

</style>