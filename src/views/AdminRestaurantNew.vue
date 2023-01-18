<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantFormVue @after-submit="handleAferSubmit" />
  </div>
</template>

<script>
import AdminRestaurantFormVue from "@/components/AdminRestaurantForm.vue";

export default {
  name: "AdminRestaurantNew",
  components: {
    AdminRestaurantFormVue,
  },
  methods: {
    handleAferSubmit(formData) {
      for (let [name, value] of formData.entries()) {
        console.log(name + ":" + value);
      }
    },
  },
};
</script>