<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ profile.profile.Followings.length }}</strong> followings
      (追蹤者)
    </div>
    <div class="card-body">
      <a
        href="/users/11"
        v-for="following in profile.profile.Followings"
        :key="following.id"
      >
        <img :src="following.image" width="60" height="60" class="avatar" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFollowingCard",
  props: {
    profile: {
      type: Object,
      require: true,
    },
  },
};
</script>