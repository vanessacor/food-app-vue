<template>
  <form>
    <input v-model="dish.name" type="text" />
    <input v-model="dish.description" type="text" />
    <input v-model="dish.price" type="number" />
    <input v-model="dish.image" type="text" />
    <button @click="action(dish)" type="button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  props: {
    dishToUpdate: Object,
    action: {
      type: Function
    }
  },

  data() {
    return {
      dish: {
        id: this.dishToUpdate ? this.dishToUpdate.id : "",
        name: this.dishToUpdate ? this.dishToUpdate.name : "",
        description: this.dishToUpdate ? this.dishToUpdate.description : "",
        price: this.dishToUpdate ? this.dishToUpdate.price : "",
        image: this.dishToUpdate ? this.dishToUpdate.image : ""
      }
    };
  }
};
</script>

<style scoped></style>
