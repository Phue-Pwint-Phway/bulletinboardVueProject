<template>
    <div id="user-list">
        <CommonHeader /> 
        <div class="container">
            <form>
                <div class="row first">
                    <h3>User List</h3>
                </div>
                <div class="row second">
                    <ul>
                        <li>
                            <input type="text" name="name" id="" placeholder="search name">
                        </li>
                        <li>
                            <input type="text" name="email" id="" placeholder="search email">
                        </li>
                        <li>
                            <input type="text" name="created-from" id="" placeholder="create-from Date">
                        </li>
                        <li>
                            <input type="text" name="created-to" id="" placeholder="create-to Date">
                        </li>
                        <li>
                            <button>Search</button>
                        </li>
                        <li>
                            <button type="button">Add</button>
                        </li>
                    </ul>
                </div>
                <div class="row third">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created Use</th>
                            <th>Phone</th>
                            <th>Birth Date</th>
                            <th>Address</th>
                            <th>Created Date</th>
                            <th>Updated Date</th>
                            <th>Delete</th>
                        </tr>
                        <tr>
                            <td><a href="">user1</a></td>
                            <td>user1@gmail.com</td>
                            <td>user1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>2/9/2019</td>
                            <td>1/10/2019</td>
                            <td><button>Delete</button></td>
                        </tr>
                    </table>
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
import CommonHeader from './CommonHeader.vue'

export default {
    name: 'UserList',
    components: {
        CommonHeader,
    }
}
</script>

<style scoped>
/* for user-list */
.container {
    margin: 20px 0px 0px 0px;
}
.first, .second, .third {
    margin: 0px 0px 0px 0px;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
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
table, td, th {
    border: 1px solid black;
    text-align: center;
    padding: 5px 5px 5px 5px;
}
table {
    border-collapse: collapse;
}
.third {
    margin: 20px 0px 0px 0px;
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
