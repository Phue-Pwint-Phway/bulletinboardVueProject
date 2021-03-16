<template>
    <div class="row third">
        <table>
            <tr>
                <th>Post Title</th>
                <th>Post Description</th>
                <th>Posted Use</th>
                <th>Posted Date</th>
                <th>Edit</th>
                <th>Delete</th>            
            </tr>
            <tr v-for="item in tableData" :key="item.name">
                <td>{{ item.title }}</td>
                <td>{{ item.description }}</td>
                <td>User 1</td>
                <td>5/10/2019</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["tableData"])
  }
}
</script>

<style scoped>
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
</style>