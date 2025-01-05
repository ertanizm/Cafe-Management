<template>
  <div class="register-container">
    <div class="register-form">
      <h2>Kayıt Ol</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label>Ad Soyad:</label>
          <input type="text" v-model="fullName" class="form-control" required>
        </div>
        <div class="form-group">
          <label>E-posta:</label>
          <input type="email" v-model="email" class="form-control" required>
        </div>
        <div class="form-group">
          <label>Şifre:</label>
          <input type="password" v-model="password" class="form-control" required>
        </div>
        <div class="form-group">
          <label>Şifre Tekrar:</label>
          <input type="password" v-model="passwordConfirm" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Kayıt Ol</button>
        <router-link to="/login" class="btn btn-link">Giriş Yap</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      fullName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  },
  methods: {
    handleRegister() {
      console.log('Kayıt yapılıyor:', this.email)
    }
  }
}
</script>

<style scoped>
.register-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.register-form {
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