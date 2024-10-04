<template>
  <div class="profile-container">
    <h2>User Profile</h2>
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <!-- 展示用户的其他信息，如历史轨迹 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: 'user123',
        email: 'user@example.com'
      }
    }
  }
}
</script>
