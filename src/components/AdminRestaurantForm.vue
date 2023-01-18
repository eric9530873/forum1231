<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select id="categoryId" class="form-control" name="categoryId" required>
        <option value="" selected disabled>--請選擇--</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        v-model="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        v-model="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        v-model="restaurant.openingHours"
        type="time"
        class="form-control"
        name="opening_hours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        class="d-block mb-3 image-thumbnail"
        width="200px"
        height="200px"
      />
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button type="submit" class="btn btn-primary">送出</button>
  </form>
</template>


<script>
const dummyDate = {
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
  ],
};

export default {
  name: "AdminRestaurantForm",
  props: {
    initialrestaurant: {
      type: Object,
      default: () => {
        return {
          name: "",
          categoryId: "",
          tel: "",
          address: "",
          description: "",
          image: "",
          openingHours: "",
        };
      },
    },
  },
  data() {
    return {
      categories: [],
      restaurant: {
        ...this.initialrestaurant,
      },
    };
  },
  methods: {
    fetchCategories() {
      this.categories = dummyDate.categories;
    },
    handleFileChange(e) {
      console.log(e.target.files);
      if (e.target.files.length == 0) {
        this.restaurant.image = "";
        return;
      }
      this.restaurant.image = window.URL.createObjectURL(e.target.files[0]);
    },
    handleSubmit(e) {
      const formData = new FormData(e.target);
      this.$emit("after-submit", formData);
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>