<template>
  <div class="dishList">
    <h1>List of Dishes</h1>
  </div>
</template>

<script>
import "../../listOfDish.json";
export default {
  name: "DishList",

  data() {
    return {
      dishes: [
        {
          id: 1,
          name: "bagel",
          description: "ham and cheese",
          price: 12,
          quantity: 0,
          image: "www.nowhere.org",
        },
        {
          id: 2,
          name: "bagel",
          description: "ham and cheese",
          price: 12,
          quantity: 0,
          image: "www.nowhere.org",
        },
        {
          id: 3,
          name: "bagel",
          description: "ham and cheese",
          price: 12,
          quantity: 0,
          image: "www.nowhere.org",
        },
      ],
    };
  },
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
