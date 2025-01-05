<template>
  <div class="home-container">
    <!-- Left Sidebar -->
    <div class="sidebar">
      <div class="sidebar-header">
        <h3>Kafe Yönetim</h3>
      </div>
      
      <div class="user-info">
        <img src="https://via.placeholder.com/50" alt="User" class="user-avatar">
        <span class="user-name">Admin User</span>
      </div>

      <nav class="sidebar-nav">
        <router-link to="/dashboard" class="nav-item">
          <i class="fas fa-home"></i>
          <span>Dashboard</span>
        </router-link>
        
        <router-link to="/orders" class="nav-item">
          <i class="fas fa-shopping-cart"></i>
          <span>Siparişler</span>
        </router-link>
        
        <router-link to="/menu" class="nav-item">
          <i class="fas fa-utensils"></i>
          <span>Menü Yönetimi</span>
        </router-link>
        
        <router-link to="/tables" class="nav-item">
          <i class="fas fa-chair"></i>
          <span>Masa Yönetimi</span>
        </router-link>
        
        <router-link to="/staff" class="nav-item">
          <i class="fas fa-users"></i>
          <span>Personel</span>
        </router-link>
        
        <router-link to="/reports" class="nav-item">
          <i class="fas fa-chart-bar"></i>
          <span>Raporlar</span>
        </router-link>
      </nav>

      <div class="sidebar-footer">
        <button @click="handleLogout" class="logout-btn">
          <i class="fas fa-sign-out-alt"></i>
          <span>Çıkış Yap</span>
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    handleLogout() {
      // Çıkış işlemleri burada yapılacak
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.home-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
}

.sidebar-header {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #34495e;
}

.user-info {
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #34495e;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-name {
  font-size: 14px;
}

.sidebar-nav {
  flex: 1;
  padding: 20px 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #ecf0f1;
  text-decoration: none;
  transition: background-color 0.3s;
  gap: 10px;
}

.nav-item:hover {
  background-color: #34495e;
}

.nav-item.router-link-active {
  background-color: #3498db;
}

.nav-item i {
  width: 20px;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid #34495e;
}

.logout-btn {
  width: 100%;
  padding: 10px;
  background-color: #e74c3c;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.logout-btn:hover {
  background-color: #c0392b;
}

.main-content {
  flex: 1;
  margin-left: 250px;
  padding: 20px;
}
</style> 