<template>
    <!-- update-post -->
    <div class="container">
        <form action="">
            <div class="row first">
                <h3>Update Post</h3>
            </div>
            <div class="row second">
                <div class="col-md-2">
                    <label for="">Title</label>
                </div>
                <div class="col-md-10">
                    <input class="input-title" type="text" name="" id="">
                </div>
            </div>
            <div class="row third">
                <div class="col-md-2">
                    <label for="">Description</label>
                </div>
                <div class="col-md-10">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div class="row fouth">
                <div class="col-md-2">
                    <label for="">Status</label>
                </div>
                <div class="col-md-10">
                    <input type="checkbox" name="form-check-input" id="flexSwitchCheckDefault">
                </div>
            </div>
            <div class="row fifth">
                <button class="confirm" onclick="updatePostConfirmFunction()">Confirm</button>
                <button class="clear">Clear</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'UpdatePost',
}
</script>

<style scoped>
/* for update-post */
.container {
    margin: 20px 20px 50px 50px;
}
.form-check-input {
    clear: left;
    height: 1rem;
    width: calc(1rem + 0.75rem);
    border-radius: 2rem;
}
.row {
    margin: 20px 0px 0px 0px;
}
.container form .fifth button {
    margin: 0px 0px 0px 75px;
    padding: 5px 5px 5px 5px;
    width: 100px;
    text-align: center;
}
.confirm, .update {
    background-color: #3b5998;
    color: white;
}
.input-title {
    width: 232px;
}

</style>