<template>
  <div class="container">
    <label for="input">Number:</label>
    <input type="text" v-model="userId">
    <button @click="onLoadUser">Load User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: ''
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push('/users/' + this.userId);
    }
  },
  layout: 'users'
};
</script>

<style scoped>
.container
{
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>