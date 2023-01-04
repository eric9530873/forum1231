<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCardVue
        v-for="restaurant in restaurants"
        v-bind:key="restaurant.id"
        :initialrestaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>


<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCardVue from "@/components/RestaurantCard.vue";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Trey Weimann",
      tel: "(536) 896-8493 x67881",
      address: "74161 Nienow Streets",
      opening_hours: "08:00",
      description: "Et in veritatis repellat asperiores fuga recusanda",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.53294827062011",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-01-04T03:05:03.000Z",
        updatedAt: "2023-01-04T03:05:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Arturo Gutkowski V",
      tel: "266-503-9714 x54129",
      address: "1110 Boehm Lakes",
      opening_hours: "08:00",
      description: "Mollitia saepe eaque id quaerat. Suscipit sed aute",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=94.62756455455612",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-01-04T03:05:03.000Z",
        updatedAt: "2023-01-04T03:05:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Sibyl Watsica",
      tel: "471.953.5135 x026",
      address: "09886 Zulauf Port",
      opening_hours: "08:00",
      description: "expedita et odio",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.529994197155204",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-01-04T03:05:03.000Z",
        updatedAt: "2023-01-04T03:05:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Eula Grimes",
      tel: "708-694-5250",
      address: "9275 Conn Causeway",
      opening_hours: "08:00",
      description: "voluptatem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.476186909566145",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-01-04T03:05:03.000Z",
        updatedAt: "2023-01-04T03:05:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Miss Erich Jacobi",
      tel: "(025) 533-6724",
      address: "631 Bosco Passage",
      opening_hours: "08:00",
      description: "Harum est ea laboriosam illum voluptatibus consequ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.763362530744267",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-01-04T03:05:03.000Z",
        updatedAt: "2023-01-04T03:05:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Mrs. Pamela Paucek",
      tel: "098.703.0685 x1907",
      address: "309 Jose Lights",
      opening_hours: "08:00",
      description: "Ipsa error illum quasi sit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.164201420943835",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2023-01-04T03:05:03.000Z",
        updatedAt: "2023-01-04T03:05:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Earnest Schimmel",
      tel: "(988) 475-2543",
      address: "837 Stehr Square",
      opening_hours: "08:00",
      description: "rerum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.293911198823256",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-01-04T03:05:03.000Z",
        updatedAt: "2023-01-04T03:05:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Katrina Jaskolski",
      tel: "(436) 880-0332 x4260",
      address: "5436 Kaya Ranch",
      opening_hours: "08:00",
      description: "Vero nam numquam similique quae dolorem repellat e",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.98492866003474",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-01-04T03:05:03.000Z",
        updatedAt: "2023-01-04T03:05:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Franco Kulas",
      tel: "(330) 676-8560 x2951",
      address: "902 Emmalee Road",
      opening_hours: "08:00",
      description: "Earum excepturi qui eum beatae eos quibusdam dolor",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.68380855421228",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-01-04T03:05:03.000Z",
        updatedAt: "2023-01-04T03:05:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Eugene Howe",
      tel: "(700) 506-9647",
      address: "191 Brown Cove",
      opening_hours: "08:00",
      description: "Totam ducimus ipsa veritatis. Rerum sunt ab sunt c",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.20592717149445",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-01-04T03:05:03.000Z",
        updatedAt: "2023-01-04T03:05:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5, 6],
  prev: 1,
  next: 2,
};

export default {
  name: "RestaurantMain",
  components: {
    NavTabs,
    RestaurantCardVue,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: -1,
    };
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
      this.categories = dummyData.categories;
      this.categoryId = dummyData.categoryId;
      this.currentPage = dummyData.page;
      this.totalPage = dummyData.totalPage;
    },
  },
  created() {
    this.fetchRestaurants();
  },
};
</script>