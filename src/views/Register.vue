<template>
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { register } from '../services/authService'

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async registerUser() {
      const result = await register(this.username, this.password, this.email)
      if (result.message === 'User registered successfully') {
        this.$router.push('/login')
      } else {
        alert('Registration failed')
      }
    }
  }
}
</script>
