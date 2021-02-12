<template>
  <div class="dishCard item-card" :key="dish.id">
    <div class="item-photo-wrapper">
      <img class="item-photo" :src="dish.image" :alt="dish.name" />
    </div>
    <div class="item-details">
      <h4 class="item-price">{{ dish.price }}</h4>
      <h4 class="item-title">{{ dish.name }}</h4>
      <p class="item-options">{{ dish.description }}</p>
      <div class="item-picker" id="dish.id">
        <button @click="$emit('delete:dish', dish.id)" class="remove-product">
          <font-awesome-icon icon="trash-alt" />
        </button>

        <button @click="$emit('edit:dish', dish)">
          <font-awesome-icon icon="pen" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DishCard",
  data() {
    return {
      isFormShowing: false
    };
  },
  props: {
    dish: Object
  }
};
</script>

<style scoped>
.item-card {
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 160px;
  gap: 20px;
  justify-items: center;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.item-card .item-photo-wrapper {
  grid-area: 1/1;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.item-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-details {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: bolder;
}

.item-details > * {
  margin: 0;
}

.item-title {
  margin-bottom: 5px;
}
.item-price {
  color: #ff6900;
}

.item-options {
  margin-bottom: 5px;
  color: #b3b1b1;
  font-size: small;
  font-weight: normal;
  white-space: nowrap;
  overflow: hidden;
}

.item-picker {
  display: flex;
  width: 90px;
  padding-top: 15px;
}

.item-picker button {
  width: 30px;
  padding: 10px;
  border: none;
  font-weight: bold;
  color: #b4b4b4;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: transparent;
}

.item-picker p {
  display: block;
  width: 30px;
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
  background-color: #dfdbdb;
  color: #292929;
}
</style>
