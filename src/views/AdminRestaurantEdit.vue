<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initialrestaurant="restaurant"
      @after-submit="handleAferSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "@/components/AdminRestaurantForm.vue";

const dummyData = {
  restaurant: {
    id: 2,
    name: "Arturo Gutkowski V",
    tel: "266-503-9714 x54129",
    address: "1110 Boehm Lakes",
    opening_hours: "08:00",
    description:
      "Mollitia saepe eaque id quaerat. Suscipit sed autem consequatur temporibus delectus ducimus maiores. Quo quia porro explicabo iure commodi et saepe praesentium.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=94.62756455455612",
    CategoryId: 3,
  },
};

export default {
  name: "AdminRestaurantEdit",
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
    };
  },
  methods: {
    fetchRestaurant() {
      this.restaurant = {
        ...this.restaurant,
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        openingHours: dummyData.restaurant.opening_hours,
        description: dummyData.restaurant.description,
        image: dummyData.restaurant.image,
        categoryId: dummyData.restaurant.CategoryId,
      };
    },
    handleAferSubmit(formData) {
      for (let [name, value] of formData.entries()) {
        console.log(name + ":" + value);
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
};
</script>