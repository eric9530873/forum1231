<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/"> 餐廳評論網 </router-link>
    <div id="navbarSupportedContent" class="navbar-collapse collapse">
      <template>
        <div class="ml-auto d-flex align-items-center">
          <!-- is user is admin -->
          <router-link
            to="/admin/restaurants"
            class="text-white mr-3"
            v-if="currentUser.isAdmin"
          >
            管理員後台
          </router-link>

          <template v-if="isAuthenticated">
            <!-- is user is login -->
            <router-link to="#" class="text-white mr-3">
              {{ currentUser.name || "使用者" }} 您好
            </router-link>
            <button
              type="button"
              class="btn btn-sm btn-outline-success my-2 my-sm-0"
            >
              登出
            </button>
          </template>
        </div>
      </template>
    </div>
  </nav>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  data() {
    return {
      currentUser: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
      isAuthenticated: false,
    };
  },
  methods: {
    fetchUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser,
      };
      this.isAuthenticated = dummyUser.isAuthenticated;
    },
  },

  created() {
    console.log("fetchUser");
    this.fetchUser();
  },
};
</script>