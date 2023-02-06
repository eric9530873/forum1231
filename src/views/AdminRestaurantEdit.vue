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
import adminAPI from "../apis/admin";
import { Toast } from "@/utils/helpers";

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
    async fetchRestaurant(restaurantId) {
      try {
        const response = await adminAPI.restaurants.getDetail({ restaurantId });
        this.restaurant = {
          ...this.restaurant,
          id: response.data.restaurant.id,
          name: response.data.restaurant.name,
          tel: response.data.restaurant.tel,
          address: response.data.restaurant.address,
          openingHours: response.data.restaurant.opening_hours,
          description: response.data.restaurant.description,
          image: response.data.restaurant.image,
          categoryId: response.data.restaurant.CategoryId,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得",
        });
      }
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