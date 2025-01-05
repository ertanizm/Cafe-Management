<template>
  <div class="login-container">
    <div class="login-form">
      <h2>Kafe Yönetim Sistemi</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>E-posta:</label>
          <input type="email" v-model="email" class="form-control" required>
        </div>
        <div class="form-group">
          <label>Şifre:</label>
          <input type="password" v-model="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Giriş Yap</button>
        <router-link to="/register" class="btn btn-link">Kayıt Ol</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      console.log('Giriş yapılıyor:', this.email, this.password)
      // Giriş başarılı olduğunda ana sayfaya yönlendir
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.login-form {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style> 