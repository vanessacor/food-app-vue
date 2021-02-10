<template>
  <div class="dishList">
    <h1>Food App</h1>

    <ul>
      <li v-for="dish in dishes" :key="dish.id">
        {{ dish.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import apiService from "../apiclient/apiservice";
export default {
  name: "DishList",

  data() {
    return {
      dishes: []
    };
  },

  methods: {
    async getAllDishes() {
      const response = await apiService.getAllDishes();
      this.dishes = response.data;
    }
  },

  mounted() {
    this.getAllDishes();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
