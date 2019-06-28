<template>
  <div class="container">
    <h3>A single user, with ID: {{ $route.params.id }}</h3>
  </div>
</template>

<script>
export default {
  validate(data) {
    return /^\d+$/.test(data.params.id);
  }
};
</script>

<style>
.container {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
