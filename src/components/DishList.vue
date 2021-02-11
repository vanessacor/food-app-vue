<template>
  <div class="dishList">
    <h1>Food App</h1>

    <section class="restaurant-menu">
      <dish-card v-for="dish in dishes" :dish="dish" :key="dish.id" />
    </section>
  </div>
</template>

<script>
import apiService from "../apiclient/apiservice";
import DishCard from "./DishCard.vue";

export default {
  components: { DishCard },
  name: "DishList",

  data() {
    return {
      dishes: [],
    };
  },

  methods: {
    async getAllDishes() {
      const response = await apiService.getAllDishes();
      this.dishes = response.data;
    },
  },

  mounted() {
    this.getAllDishes();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.restaurant-menu {
  overflow-y: scroll;
  margin-bottom: 60px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
