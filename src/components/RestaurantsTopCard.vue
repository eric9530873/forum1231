<template>
  <div class="card mb-3" style="max-width: 540px; margin: auto">
    <div class="row no-gutters">
      <div class="col-md-4">
        <a href="#">
          <img class="card-img" :src="restaurant.image" />
        </a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Mrs. Mckenzie Johnston</h5>
          <span class="badge badge-secondary"
            >收藏數：{{ restaurant.FavoriteCount }}</span
          >
          <p class="card-text">
            {{ restaurant.description }}
          </p>
          <a href="#" class="btn btn-primary mr-2">Show</a>

          <button
            v-if="restaurant.isFavorited"
            @click="deleteFavorite"
            type="button"
            class="btn btn-danger mr-2"
          >
            移除最愛
          </button>
          <button
            @click="addFavorite"
            v-else
            type="button"
            class="btn btn-primary"
          >
            加到最愛
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "RestaurantsTopCard",
  props: {
    initialrestaurant: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      restaurant: this.initialrestaurant,
    };
  },
  methods: {
    deleteFavorite() {
      console.log("456");
      this.restaurant = {
        ...this.restaurant,
        isFavorited: false,
      };
    },
    addFavorite() {
      console.log("123");
      this.restaurant = {
        ...this.restaurant,
        isFavorited: true,
      };
    },
  },
};
</script>