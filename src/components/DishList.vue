<template>
  <div class="dishList">
    <h1>Food App</h1>

    <section>
      <div v-if="isFormShowing">
        <Form :action="createDish" />
      </div>
      <button @click="toggleForm" v-else>New Dish</button>
    </section>
    <section>
      <div v-if="showUpdateDish">
        <Form :dishToUpdate="dishToUpdate" :action="updateDish" />
      </div>
    </section>

    <section class="restaurant-menu">
      <dish-card
        v-for="dish in dishes"
        :dish="dish"
        :key="dish.id"
        @delete:dish="deleteDish"
        @edit:dish="editDish"
      />
    </section>
  </div>
</template>

<script>
import apiService from "../apiclient/apiservice";
import DishCard from "./DishCard.vue";
import Form from "./Form";

export default {
  components: { DishCard, Form },
  name: "DishList",

  data() {
    return {
      dishes: [],
      isFormShowing: false,
      showUpdateDish: false,
      dishToUpdate: {}
    };
  },

  methods: {
    async getAllDishes() {
      const response = await apiService.getAllDishes();
      this.dishes = response.data;
    },
    async deleteDish(id) {
      await apiService.deleteDish(id);
      this.getAllDishes();
    },
    async createDish(dish) {
      console.log(dish);
      await apiService.postDish(dish);
      this.isFormShowing = false;
      this.getAllDishes();
    },
    async updateDish(dish) {
      await apiService.putDish(dish);
      this.showUpdateDish = false;
      this.dishToUpdate = {};
      this.getAllDishes();
    },

    toggleForm() {
      this.isFormShowing = !this.isFormShowing;
    },
    editDish(dish) {
      console.log(dish.id);
      this.showUpdateDish = true;
      this.dishToUpdate = dish;
    }
  },

  mounted() {
    this.getAllDishes();
  }
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
