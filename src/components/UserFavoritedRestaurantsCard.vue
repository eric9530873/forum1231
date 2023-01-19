<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ profile.profile.FavoritedRestaurants.length }}</strong>
      收藏的餐廳
    </div>
    <div class="card-body">
      <a
        href="/restaurants/231"
        v-for="favorite in profile.profile.FavoritedRestaurants"
        :key="favorite.id"
      >
        <img :src="favorite.image" width="60" height="60" class="avatar" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFavoritedCard",
  props: {
    profile: {
      type: Object,
      require: true,
    },
  },
};
</script>