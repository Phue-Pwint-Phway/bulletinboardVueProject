<template>
    <div class="container">
        <form>
            <div class="row one">
                <h3>Create User</h3>
            </div>
            <div class="row two">
                <div class="col-md-2">
                    <label for="name">Name</label>
                </div>
                <div class="col-md-10">
                    <input type="text" name="name" id="">
                </div>
            </div>
            <div class="row three">
                <div class="col-md-2">
                    <label for="email">Email Address</label>
                </div>
                <div class="col-md-10">
                    <input type="text" name="email" id="">
                </div>
            </div>
            <div class="row four">
                <div class="col-md-2">
                    <label for="password">Password</label>
                </div>
                <div class="col-md-10">
                    <input type="password" name="password" id="">
                </div>
            </div>
            <div class="row five">
                <div class="col-md-2">
                    <label for="confirmpassword">Confirm Password</label>
                </div>
                <div class="col-md-10">
                    <input type="password" name="confirmpassword" id="">
                </div>
            </div>
            <div class="row sixth">
                <div class="col-md-2">
                    <label for="type">Type</label>
                </div>
                <div class="col-md-10">
                    <select id="inputState" class="type-option">
                        <option selected> </option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
            </div>
            <div class="row seven">
                <div class="col-md-2">
                    <label for="phone">Phone</label>
                </div>
                <div class="col-md-10">
                    <input type="text" name="phone" id="">
                </div>
            </div>
            <div class="row eight">
                <div class="col-md-2">
                    <label for="dateofbirth">Date of Birth</label>
                </div>
                <div class="col-md-10">
                    <input type="date" id="start" name="trip-start" value="bday">
                </div>
            </div>
            <div class="row nine">
                <div class="col-md-2">
                    <label for="address">Address</label>
                </div>
                <div class="col-md-10">
                    <input type="text" name="" id="">
                </div>
            </div>
            <div class="row ten">
                <div class="col-md-2">
                    <label for="profile">Profile</label>
                </div>
                <div class="col-md-10">
                    <input type="file" accept="image/*" onchange="loadFile(event)">
                </div>
            </div>
            <div class="row eleven">
                <div class="col-md-2"></div>
                <div class="col-md-10">
                    <img id="output"/>
                </div>
            </div>
            <div class="row twelve">
                <div class="col-md-2"></div>
                <div class="col-md-10">
                    <button type="submit" class="confirm" onclick="createUserConfirmFunction()">Confirm</button>
                    <button type="reset" class="clear">Clear</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* for create-user */
.container {
    margin: 20px 20px 50px 50px;
}
.row {
    margin: 20px 0px 0px 0px;
}
.container form .row input, .type-option {
    width: 250px;
    height: 30px;
}
textarea {
    width: 250px;
}
.container form .row button {
    margin: 0px 35px 0px 0px;
    padding: 5px 5px 5px 5px;
    width: 100px;
    text-align: center;
}
.confirm, .create {
    background-color: #3b5998;
    color: white;
}

</style>