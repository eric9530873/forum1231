<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UsersCardVue v-for="user in users" :key="user.id" :initialuser="user" />
    </div>
  </div>
</template>


<script>
import NavTabs from "../components/NavTabs.vue";
import UsersCardVue from "@/components/UsersCard.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$2gCT6P3h8B8XzRiGjfypkOyvbkj2DxxxtiAwbEyxqMrkFNc/LSZdq",
      isAdmin: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2n5LWbmK6-GAAiylBFD8IqLJOXVcLa2aAQ&usqp=CAU",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$rc7qBTcHCVOSCdRZw0/2Ju6ZVtgPG2sZh3gGB4QlScya.lPOHoP4m",
      isAdmin: false,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Blue_eyes_cat.jpg/202px-Blue_eyes_cat.jpg",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$AK2gnrr.5VmSvFjdmp2l1OUDZL/5P7JlWyH2GI7mTX2xLwJ/LlnH6",
      isAdmin: false,
      image:
        "https://crazypetter.com.tw/wp-content/uploads/2019/07/BLOW-%E6%88%90%E9%95%B7%E5%8F%B2_190413_0911.jpg",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  components: {
    NavTabs,
    UsersCardVue,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>