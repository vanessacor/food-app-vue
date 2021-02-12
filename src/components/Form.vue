<template>
  <form>
    <input v-model="dish.name" type="text" />
    <input v-model="dish.description" type="text" />
    <input v-model="dish.price" type="number" />
    <input v-model="dish.image" type="text" />
    <button @click="submit" type="button">Submit</button>
    <p v-if="formStatus === 'invalid'" class="form-feedback">
      Please fill all the form
    </p>
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
      },
      isSubmitted: false,
      formStatus: "valid"
    };
  },

  methods: {
    submit() {
      this.isSubmitted = true;
      if (!this.validate()) {
        this.formStatus = "invalid";
        return;
      }
      this.action(this.dish);
    },
    validate() {
      if (
        this.dish.name === "" ||
        this.dish.description === "" ||
        this.dish.price === "" ||
        this.dish.image === ""
      ) {
        return false;
      }
      return true;
    }
  }
};
</script>

<style scoped>
.form-feedback {
    color: red;
}
</style>
