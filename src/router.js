import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/login/Home.vue'
import Login from './components/login/Login.vue'
import Register from './components/login/Register.vue'
import Forgot from './components/login/Forgot.vue'
import Reset from './components/login/Reset.vue'
import PostList from './components/post/PostList.vue'
import CreatePost from './components/post/CreatePost.vue'
import UploadCSV from './components/post/UploadCSV.vue'

import UserList from './components/user/UserList.vue'
import CreateUser from './components/user/CreateUser.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/register', component: Register},
        {path: '/forgot', component: Forgot},
        {path: '/reset/:token', component: Reset},

        {path: '/postlist', component: PostList}, // postlist
        {path: '/createpost', component: CreatePost},
        {path: '/uploadCSV', component: UploadCSV},

        {path: '/userlist', component: UserList}, // userlist
        {path: '/createuser', component: CreateUser},
    ]
});