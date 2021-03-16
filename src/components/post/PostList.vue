<template>
    <!-- post-list -->
    <div id="post-list">
        <CommonHeader />
        <div class="container">
            <form>
                <div class="row first">
                    <h3>Post List</h3>
                </div>
                <div class="row second">
                    <ul>
                        <li>
                            <input type="text" placeholder="search all">
                        </li>
                        <li>
                            <button>Search</button>
                        </li>
                        <li>
                            <router-link to="/createpost"><button type="submit">Add</button></router-link>
                        </li>
                        <li>
                            <router-link to="/uploadCSV"><button type="submit">Upload</button></router-link>
                        </li>
                        <li>
                            <router-link to="/"><button type="submit">Download</button></router-link>
                        </li>
                        <li></li>
                    </ul>
                </div>
                <div class="row third">
                    <ListItem />
                </div>
                <div class="row fouth">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>
                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item"><a class="page-link" href="#">4</a></li>
                          <li class="page-item"><a class="page-link" href="#">5</a></li>
                          <li class="page-item"><a class="page-link" href="#">6</a></li>
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>
                        </ul>
                    </nav>
                </div>
            </form>
        </div>
    </div>    
</template>

<script>
import ListItem from './ListItem.vue'
export default {
    name: 'PostList',
    components: {
        ListItem,
    }
}
</script>

<style scoped>
/* for post-list */
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.container {
    margin: 20px 0px 0px 0px;
}
.first, .second, .third {
    margin: 0px 0px 0px 0px;
}
li {
    display: inline;
}
.second ul li input {
    padding: 5px 5px 5px 5px;
    margin: 5px 5px 5px 0px;
    width: 100px;
    text-align: center;
}
.second ul li button {
    background-color: #3b5998;
    color: white;
    padding: 5px 5px 5px 5px;
    margin: 5px 5px 5px 0px;
    width: 100px;
    text-align: center;
}
.fouth {
    margin: 20px 0px 0px 100px;
}
.fouth nav ul li {
    margin: 0px 0px 0px 5px;
}
.fouth nav ul li a {
    border: 1px solid black;
    background-color: #3b5998;
    color: white;
    padding: 5px 10px 5px 10px;
}
</style>