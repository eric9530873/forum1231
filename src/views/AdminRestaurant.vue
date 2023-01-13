<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="restaurant.image | emptyImage"
          style="width: 250px; margin-bottom: 25px"
        />
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{ restaurant.openingHours }}
            </li>
            <li>
              <strong>Tel:</strong>
              {{ restaurant.tel }}
            </li>
            <li>
              <strong>Address:</strong>
              {{ restaurant.address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr />
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import { emptyImageFilter } from "@/utils/mixins";
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
    viewCounts: 1,
    createdAt: "2023-01-04T03:05:03.000Z",
    updatedAt: "2023-01-06T08:45:14.000Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
  },
};

export default {
  name: "AdminRestaurant",
  mixins: [emptyImageFilter],
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
      },
    };
  },
  methods: {
    fetchRestaurant() {
      const { restaurant } = dummyData;
      this.restaurant = {
        ...this.restaurant,
        id: restaurant.id,
        name: restaurant.name,
        categoryName: restaurant.Category.name,
        image: restaurant.image,
        openingHours: restaurant.opening_hours,
        tel: restaurant.tel,
        address: restaurant.address,
        description: restaurant.description,
      };
    },
  },
  mounted() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
};
</script>