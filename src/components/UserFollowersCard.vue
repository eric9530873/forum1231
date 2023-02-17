<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ profile.Followers.length ? profile.Followers.length :'0' }}</strong> followers (追蹤者)
    </div>
    <div class="card-body">
      <a
        href="/users/11"
        v-for="follower in profile.Followers"
        :key="follower.id"
      >
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