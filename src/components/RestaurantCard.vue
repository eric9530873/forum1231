<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaruant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      />
      <div class="card-body">
        <p class="card-text title-wrap">
          <a href="#"> {{ restaruant.name }} </a>
        </p>
        <span class="badge badge-secondary">{{
          restaruant.Category.name ? restaruant.Category.name : "未分類"
        }}</span>
        <p class="card-text text-truncate">
          {{ restaruant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-danger btn-border favorite mr-2">
          移除最愛
        </button>
        <button type="button" class="btn btn-primary btn-border favorite mr-2">
          加到最愛
        </button>
        <button type="button" class="btn btn-danger like mr-2">Unlike</button>
        <button type="button" class="btn btn-primary like mr-2">Like</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialrestaurant: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      restaruant: this.initialrestaurant,
    };
  },
};
</script>