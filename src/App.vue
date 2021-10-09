<template>
  <div class="example">
    <p>{{ msg }}</p>
    <Home></Home>
  </div>
</template>

<script>
const Home = () => import('./views/Home.vue');
export default {
  name: 'App',
  components: {
    Home,
  },
  data() {
    return {
      msg: 'Hello webpack!!!',
    };
  },
};
</script>

<style lang="scss" scoped>
.example {
  background-color: #ccc;
  color: $color;
}
</style>
