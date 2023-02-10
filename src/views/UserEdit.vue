<template>
  <div class="container py-5">
    <form @submit="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="currentUser.name" id="name" type="text" name="name" class="form-control"
          placeholder="Enter Name" required />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img v-if="currentUser.image" :src="currentUser.image" class="d-block img-thumbnail" width="200px"
          height="200px" alt="" />
        <input id="image" type="file" name="image" accept="image/*" class="form-control-file"
          @change="handleFileChange" />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "UserEdit",
  data() {
    return {
      currentUser: {
        id: -1,
        name: "",
        image: "",
      },
    };
  },
  methods: {
    handleFileChange(e) {
      console.log(e.target.files);
      if (e.target.files.length === 0) {
        this.currentUser.image = ""
      } else {
        const imageURL = window.URL.createObjectURL(e.target.files[0]);
        this.currentUser.image = imageURL;
      }
    },
    handleSubmit(e) {
      const formData = new FormData(e.target)
      for (let [name, value] of formData) {
        console.log(name + ':' + value)
      }
    }
  },
};
</script>