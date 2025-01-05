<template>
  <div class="dashboard">
    <h2>Dashboard</h2>
    <div class="dashboard-stats">
      <div class="stat-card">
        <i class="fas fa-coffee"></i>
        <div class="stat-info">
          <h3>Günlük Satış</h3>
          <p>2,500 ₺</p>
        </div>
      </div>
      <div class="stat-card">
        <i class="fas fa-users"></i>
        <div class="stat-info">
          <h3>Aktif Masalar</h3>
          <p>8/12</p>
        </div>
      </div>
      <div class="stat-card">
        <i class="fas fa-clipboard-list"></i>
        <div class="stat-info">
          <h3>Bekleyen Siparişler</h3>
          <p>5</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage'
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.stat-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 15px;
}

.stat-card i {
  font-size: 2em;
  color: #3498db;
}

.stat-info h3 {
  margin: 0;
  font-size: 1em;
  color: #666;
}

.stat-info p {
  margin: 5px 0 0;
  font-size: 1.5em;
  font-weight: bold;
  color: #2c3e50;
}
</style> 