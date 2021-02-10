<template>
  <div class="home">
    <DishList />
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
