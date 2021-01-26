<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <DishList msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import DishList from "@/components/DishList.vue";

export default {
  name: "Home",
  components: {
    DishList
  }
};
</script>
