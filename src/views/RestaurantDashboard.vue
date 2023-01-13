<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>


<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Trey Weimann",
    tel: "(536) 896-8493 x67881",
    address: "74161 Nienow Streets",
    opening_hours: "08:00",
    description:
      "Et in veritatis repellat asperiores fuga recusandae.\nAlias dolorem beatae.\nQuia sapiente et maxime.\nOmnis vero in sit libero est neque id est.\nEa rerum quia.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=66.53294827062011",
    viewCounts: 2,
    createdAt: "2023-01-04T03:05:03.000Z",
    updatedAt: "2023-01-06T08:49:32.000Z",
    CategoryId: 1,
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
    Comments: [
      {
        id: 101,
        text: "Eligendi voluptatem ducimus sit fugiat rerum rerum molestiae voluptates.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2023-01-04T03:05:03.000Z",
        updatedAt: "2023-01-04T03:05:03.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$2gCT6P3h8B8XzRiGjfypkOyvbkj2DxxxtiAwbEyxqMrkFNc/LSZdq",
          isAdmin: true,
          image: null,
          createdAt: "2023-01-04T03:05:03.000Z",
          updatedAt: "2023-01-04T03:05:03.000Z",
        },
      },
      {
        id: 1,
        text: "Reprehenderit rerum quisquam voluptatem ut sunt labore.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2023-01-04T03:05:03.000Z",
        updatedAt: "2023-01-04T03:05:03.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$rc7qBTcHCVOSCdRZw0/2Ju6ZVtgPG2sZh3gGB4QlScya.lPOHoP4m",
          isAdmin: false,
          image: null,
          createdAt: "2023-01-04T03:05:03.000Z",
          updatedAt: "2023-01-04T03:05:03.000Z",
        },
      },
      {
        id: 51,
        text: "Eos fugiat sed molestiae tenetur.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2023-01-04T03:05:03.000Z",
        updatedAt: "2023-01-04T03:05:03.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$rc7qBTcHCVOSCdRZw0/2Ju6ZVtgPG2sZh3gGB4QlScya.lPOHoP4m",
          isAdmin: false,
          image: null,
          createdAt: "2023-01-04T03:05:03.000Z",
          updatedAt: "2023-01-04T03:05:03.000Z",
        },
      },
    ],
  },
};

export default {
  name: "RestaurantDashboard",
  data() {
    return {
      restaurant: [],
    };
  },
  methods: {
    fetchRestaurantDashboard() {
      this.restaurant = dummyData.restaurant;
    },
  },
  created() {
    this.fetchRestaurantDashboard();
  },
};
</script>