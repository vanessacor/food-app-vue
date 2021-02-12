<template>
  <form>
    <input v-model="dish.name" type="text" />
    <input v-model="dish.description" type="text" />
    <input v-model="dish.price" type="number" />
    <input v-model="dish.image" type="text" />
    <button @click="$emit('createDish', dish)" type="button">Submit</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  props: {
    dishToUpdate: Object
  },

  data() {
    return {
      dish: {
        name: this.props ? this.dishToUpdate.name : "",
        description: this.props ? this.dishToUpdate.description : "",
        price: this.props ? this.dishToUpdate.price : "",
        image: this.props ? this.dishToUpdate.image : ""
      }
    };
  }
};
</script>

<style scoped></style>
