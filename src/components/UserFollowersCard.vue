<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ profile.Followers.length }}</strong> followers (追隨者)
    </div>
    <div class="card-body" v-for="follower in Followers" :key="follower.id">
      <a href="/users/11">
        <img :src="follower.image" width="60" height="60" class="avatar" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFollowersCard",
  props: {
    profile: {
      type: Object,
      require: true,
    },
  },
};
</script>