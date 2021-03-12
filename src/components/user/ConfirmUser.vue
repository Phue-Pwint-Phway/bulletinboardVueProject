<template>
    <div class="container">
        <form action="confirmuser" method="GET">
            <div class="row">
                <div class="col-md-8">
                    <div class="container">
                        <form action="">
                            <div class="row one">
                                <h3>Create User confirmation</h3>
                            </div>
                            <div class="row two">
                                <div class="col-md-5">
                                    <label for="name">Name</label>
                                </div>
                                <div class="col-md-7">
                                    <!-- <input type="text" name="name" id=""> -->
                                </div>
                            </div>
                            <div class="row three">
                                <div class="col-md-5">
                                    <label for="email">Email Address</label>
                                </div>
                                <div class="col-md-7">
                                    <!-- <input type="text" name="email" id=""> -->
                                </div>
                            </div>
                            <div class="row four">
                                <div class="col-md-5">
                                    <label for="password">Password</label>
                                </div>
                                <div class="col-md-7">
                                    <!-- <input type="password" name="password" id=""> -->
                                </div>
                            </div>
                            <div class="row five">
                                <div class="col-md-5">
                                    <label for="type">Type</label>
                                </div>
                                <div class="col-md-7">
                                    <!-- <select id="inputState" class="type-option">
                                        <option selected> </option>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                      </select> -->
                                </div>
                            </div>
                            <div class="row sixth">
                                <div class="col-md-5">
                                    <label for="phone">Phone</label>
                                </div>
                                <div class="col-md-7">
                                    <!-- <input type="text" name="phone" id=""> -->
                                </div>
                            </div>
                            <div class="row seven">
                                <div class="col-md-5">
                                    <label for="dateofbirth">Date of Birth</label>
                                </div>
                                <div class="col-md-7">
                                    <!-- <input type="date" id="start" name="trip-start" value="bday"> -->
                                </div>
                            </div>
                            <div class="row eight">
                                <div class="col-md-5">
                                    <label for="address">Address</label>
                                </div>
                                <div class="col-md-7">
                                    <!-- <textarea name="address" id="" cols="30" rows="10"></textarea> -->
                                </div>
                            </div>

                            <div class="row nine">
                                <button class="create" onclick="createUserCreateFunction()">Create</button>
                                <button class="cancel" onclick="location.href='{{ url('/cancelcreateuser') }}'">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <img id="output"/>
                    </div>
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
    margin: 0px 0px 0px 75px;
    padding: 5px 5px 5px 5px;
    width: 100px;
    text-align: center;
}
.confirm, .create {
    background-color: #3b5998;
    color: white;
}

</style>