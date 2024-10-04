<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="loginUser()">
      <input v-model="email" type="text" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { login } from '../services/authService'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async loginUser() {
      alert("111")
      const result = await login(this.email, this.password)
      alert("222")
      if (result.access_token) {
        alert("win")
        // Store the token and navigate to the profile page
        localStorage.setItem('token', result.token)
        this.$router.push('/profile')
      } else {
        alert('Login failed')
      }
    }
  }
}
</script>
