<template>
    <!-- create-post-confirm -->
    <div class="container">
        <form action="/confirmpost" method="GET">
            <div class="row first">
                <h3>Create Post Confirmation</h3>
            </div>
            <div class="row second">
                <div class="col-md-2">
                    <label for="">Title</label>
                </div>
                <div class="col-md-10">
                    <label for="title">{{ $titel }}</label>
                </div>
            </div>
            <div class="row third">
                <div class="col-md-2">
                    <label for="">Description</label>
                </div>
                <div class="col-md-10">
                    <label for="description">{{ $description }}</label>
                </div>
            </div>
            <div class="row fouth">
                <button type="submit" class="create" onclick="createPostCreateFunction()">Create</button>
                <button type="menu" class="cancel" onclick="location.href='{{ url('/cancelcreatepost') }}'">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* for create-post */
.container {
    margin: 20px 20px 50px 50px;
}
.row {
    margin: 20px 0px 0px 0px;
}
.container form .fouth button {
    margin: 0px 0px 0px 75px;
    padding: 5px 5px 5px 5px;
    width: 100px;
    text-align: center;
}
.confirm, .create {
    background-color: #3b5998;
    color: white;
}
.input-title {
    width: 232px;
}

</style>