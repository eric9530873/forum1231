<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <RestaurantsTopCard
      :initialrestaurant="restaurant"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantsTopCard from "@/components/RestaurantsTopCard.vue";

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Brook Bins",
      tel: "(807) 861-8119 x528",
      address: "9967 Fritsch Creek",
      opening_hours: "08:00",
      description: "Fuga blanditiis reprehenderit. Iusto rem sequi pos",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.83888327254581",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Angelica Deckow",
      tel: "194.265.2016 x9985",
      address: "632 Lottie Mission",
      opening_hours: "08:00",
      description: "Consequatur quia fuga natus. Modi officiis dolores",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.32700106662419",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Hubert Smitham",
      tel: "826-020-1127",
      address: "440 Windler Crescent",
      opening_hours: "08:00",
      description: "Ducimus maxime soluta aut laboriosam rerum porro o",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.52268416291584",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Mrs. Lew Beer",
      tel: "(077) 423-1986",
      address: "933 Bridie Orchard",
      opening_hours: "08:00",
      description: "Vel et mollitia quo iste laudantium. Sint deleniti",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.259208165406214",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Marian Marvin",
      tel: "264-816-5579 x1719",
      address: "055 Reynolds Forges",
      opening_hours: "08:00",
      description: "Et nemo inventore magnam odio nisi ducimus a recus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.847770358233682",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Keegan Lang",
      tel: "(585) 475-5080 x25422",
      address: "660 Paris Ridges",
      opening_hours: "08:00",
      description: "Reprehenderit nam consectetur voluptatem ullam.\nQu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.858912858131252",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Alene Stiedemann",
      tel: "(101) 856-4363",
      address: "61848 Metz Islands",
      opening_hours: "08:00",
      description: "Aperiam nulla eaque laboriosam hic dolorem. Dolore",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.93885513171248",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Miss Ericka Breitenberg",
      tel: "785.447.1631 x2324",
      address: "53669 Monique Parks",
      opening_hours: "08:00",
      description: "Cumque eligendi a consequatur blanditiis nostrum m",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.19580447336557",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Buster Haley",
      tel: "580.541.6642 x06150",
      address: "29839 Jamison Summit",
      opening_hours: "08:00",
      description: "cum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=58.17672370285505",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Natalie Huels",
      tel: "1-370-120-4622 x695",
      address: "56642 Purdy Spur",
      opening_hours: "08:00",
      description: "debitis amet libero",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.901378033621874",
      viewCounts: 0,
      createdAt: "2023-01-04T03:05:03.000Z",
      updatedAt: "2023-01-04T03:05:03.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  name: "RestaurantsTop",
  components: {
    NavTabs,
    RestaurantsTopCard,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    fetchRestaurantsTop() {
      this.restaurants = dummyData.restaurants;
    },
  },
  created() {
    this.fetchRestaurantsTop();
  },
};
</script>