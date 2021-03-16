<template>
    <!-- create-post -->
        <div class="container">
            <form id="form1">
                <div class="row first">
                    <h3>Create Post</h3>
                </div>
                <div class="row second">
                    <div class="col-md-2">
                        <label for="">Title</label>
                    </div>
                    <div class="col-md-10">
                        <input v-model="title" class="input-title" type="text">
                        <label for="title">*</label>
                    </div>
                </div>
                <div class="row third">
                    <div class="col-md-2">
                        <label for="">Description</label>
                    </div>
                    <div class="col-md-10">
                        <input v-model="description" class="input-description" type="text">
                        <label for="description">*</label>
                    </div>
                </div>
                <div class="row fouth">
                    <div class="col-md-2"></div>
                    <div class="col-md-10">
                        <button @click.prevent="addUser" type="submit" id="confirm-btn" class="confirm"><router-link to="/postlist" class="confirm">Confirm</router-link></button>
                        <button type="reset" id="clear-btn" class="clear">Clear</button>
                    </div>
                </div>
            </form>
        </div>
</template>

<script>

export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    addUser() {
      this.$store.dispatch("addUser", {
        data: {
          title: this.title,
          description: this.description,
        }
      });
    }
  }
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
    margin: 0px 35px 0px 0px;
    padding: 5px 5px 5px 5px;
    width: 80px;
    text-align: center;
}
.confirm, .create {
    background-color: #3b5998;
    color: white;
}
.input-title, .input-description {
    width: 232px;
}
</style>