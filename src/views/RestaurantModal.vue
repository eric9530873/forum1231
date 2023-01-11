<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail
      :initialuserrestaurant="restaurant"
      :key="restaurant.id"
    />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantCommentsVue
      :restaurantComments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateCommentVue
      :restaurantId="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue";
import RestaurantCommentsVue from "@/components/RestaurantComments.vue";
import CreateCommentVue from "@/components/CreateComment.vue";

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
    viewCounts: 1,
    createdAt: "2023-01-04T03:05:03.000Z",
    updatedAt: "2023-01-06T06:47:04.480Z",
    CategoryId: 1,
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
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
  isFavorited: false,
  isLiked: false,
};
const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: null,
    isAdmin: true,
  },
  isAuthenticated: true,
};
export default {
  name: "RestaurantModal",
  components: {
    RestaurantDetail,
    RestaurantCommentsVue,
    CreateCommentVue,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser,
    };
  },
  methods: {
    fetchRestaurantModal() {
      (this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category
          ? dummyData.restaurant.Category.name
          : "未分類",
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      }),
        (this.restaurantComments = dummyData.restaurant.Comments);
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => commentId !== comment.id
      );
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurantModal(restaurantId);
  },
};
</script>