<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ profile.profile.Comments.length }}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <a
        href="/restaurants/231"
        v-for="comment in profile.profile.Comments"
        :key="comment.id"
      >
        <img
          :src="comment.Restaurant.image"
          width="60"
          height="60"
          class="avatar"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCommentsCard",
  props: {
    profile: {
      type: Object,
      require: true,
    },
  },
};
</script>