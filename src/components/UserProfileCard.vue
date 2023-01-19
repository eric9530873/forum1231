<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-6">
        <img :src="profile.profile.image" width="300px" height="300px" />
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">{{ profile.profile.name }}</h5>
          <p class="card-text">{{ profile.profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ profile.profile.Comments.length }}</strong>
              已評論餐廳
            </li>
            <li>
              <strong>{{ profile.profile.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ profile.profile.Followers.length }}</strong>
              followings (追蹤者)
            </li>
            <li>
              <strong>{{ profile.profile.Followings.length }}</strong>
              followers (追隨者)
            </li>
          </ul>
          <p></p>
          <template>
            <div style="display: contents" v-if="profile.profile.isAdmin">
              <router-link
                :to="{ name: 'user-edit', params: { id: profile.profile.id } }"
                class="btn btn-primary mb-4"
              >
                EDIT
              </router-link>
            </div>
            <form style="display: contents" v-else>
              <button
                v-if="profile.isFollowed"
                type="submit"
                class="btn btn-danger"
                @click="deleteFollow"
              >
                取消追蹤
              </button>
              <button
                v-else
                @click="addFollow"
                type="submit"
                class="btn btn-primary"
              >
                追蹤
              </button>
            </form>
          </template>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfileCard",
  props: {
    initialprofile: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      profile: this.initialprofile,
    };
  },
  methods: {
    deleteFollow() {
      this.profile = {
        ...this.profile,
        isFollowed: false,
      };
    },
    addFollow() {
      this.profile = {
        ...this.profile,
        isFollowed: true,
      };
    },
  },
};
</script>