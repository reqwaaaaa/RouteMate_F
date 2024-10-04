<template>
  <div class="home-container">
    <h1>Welcome to RouteMate</h1>
    <p>Please login or register to use the application.</p>
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
