<template>
  <div>
    <div class="text-center m-3">
      <Navbar />
    </div>

    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
body {
  text-align: center;
  background: #f4f4f4;
}
a {
  color: #333;
  text-decoration: none !important;
}
</style>
