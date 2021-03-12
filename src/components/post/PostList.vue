<template>
    <!-- post-list -->
    <div id="post-list">
        <div class="postlist-container">
            <form action="">
                <div class="row1">
                    <h3>Post List</h3>
                </div>
                <div class="row2">
                    <ul>
                        <li>
                            <input type="text" placeholder="search all">
                        </li>
                        <li>
                            <button>Search</button>
                        </li>
                        <li>
                            <button type="button">Add</button>
                        </li>
                        <li>
                            <button type="button">Upload</button>
                        </li>
                        <li>
                            <button>Download</button>
                        </li>
                        <li></li>
                    </ul>
                </div>
                <div class="row3">
                    <table>
                        <tr>
                            <th>Post Title</th>
                            <th>Post Description</th>
                            <th>Posted Use</th>
                            <th>Posted Date</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        <tr>
                            <td><a href="">Title 1</a></td>
                            <td>Description 1</td>
                            <td>User 1</td>
                            <td>5/10/2019</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                        <tr>
                            <td><a href="">Title2</a></td>
                            <td>Description 2</td>
                            <td>User 1</td>
                            <td>5/4/2019</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        <tr>
                            <td><a href="">Title 3</a></td>
                            <td>Description 3</td>
                            <td>User 1</td>
                            <td>4/10/2019</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                        <tr>
                            <td><a href="">Title 4</a></td>
                            <td>Description 4</td>
                            <td>User 2</td>
                            <td>5/11/2019</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                        <tr>
                            <td><a href="">Title 5</a></td>
                            <td>Description 5</td>
                            <td>User 2</td>
                            <td>9/10/2019</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                        <tr>
                            <td><a href="">Title 6</a></td>
                            <td>Description 6</td>
                            <td>User 3</td>
                            <td>11/12/2019</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    </table>
                </div>
                <div class="row4">
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
export default {
    
}
</script>

<style scoped>
/* for post-list */
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.postlist-container {
    margin: 20px 0px 0px 0px;
}
li {
    display: inline;
}
.row2 ul li input {
    padding: 5px 5px 5px 5px;
    margin: 5px 5px 5px 0px;
    width: 100px;
    text-align: center;
}
.row2 ul li button {
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
.row3 {
    margin: 20px 0px 0px 0px;
}
.row4 {
    margin: 20px 0px 0px 100px;
}
.row4 nav ul li {
    margin: 0px 0px 0px 5px;
}
.row4 nav ul li a {
    border: 1px solid black;
    background-color: #3b5998;
    color: white;
    padding: 5px 10px 5px 10px;
}

</style>