<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button type="button" class="btn btn-danger float-right" v-if="currentUser.isAdmin"
          @click="handleDeleteButtonClick(comment.id)">
          Delete
        </button>
        <h3>
          <a href="#"> {{ comment.User.name }} </a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";
import { mapState } from "vuex";
import { Toast } from "@/utils/helpers";
import commentsAPI from '../apis/comments'

export default {
  name: "restaurantComments",
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      require: true,
    },
  },

  methods: {
    async handleDeleteButtonClick(commentId) {
      try {
        const response = await commentsAPI.delete({ commentId })
        console.log(response)
        this.$emit("after-delete-comment", commentId);
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法刪除'
        })
      }
      this.$emit("after-delete-comment", commentId);
    },
  },
  computed: {
    ...mapState(['currentUser'])
  },
};
</script>