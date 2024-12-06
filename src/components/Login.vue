<template>
  <div class="auth-container container mt-5">
    <ul class="nav nav-tabs mb-3" role="tablist">
      <li class="nav-item">
        <button
          class="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#register"
          type="button"
          role="tab"
        >
          Đăng Ký
        </button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#login"
          type="button"
          role="tab"
        >
          Đăng Nhập
        </button>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active" id="register" role="tabpanel">
        <h3>Đăng Ký</h3>
        <form>
          <div class="mb-3">
            <label for="namedk" class="form-label">Tên</label>
            <input
              type="text"
              class="form-control"
              id="namedk"
              placeholder="Nhập tên của bạn"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Nhập email"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Mật Khẩu</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <button type="submit" class="btn btn-info">Đăng Ký</button>
        </form>
      </div>

      <div class="tab-pane fade" id="login" role="tabpanel">
        <h3>Đăng nhập</h3>
        <form @submit.prevent="handleLogin">
          
          <div class="mb-3">
            <label for="loginEmail" class="form-label">Email</label>
            <input
              type="text"
              class="form-control"
              id="loginEmail"
              v-model="loginForm.email"
              placeholder="Nhập email"
            />
          </div>
          <div class="mb-3">
            <label for="loginPassword" class="form-label">Mật khẩu</label>
            <input
              type="password"
              class="form-control"
              id="loginPassword"
              v-model="loginForm.password"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <button type="" class="btn btn-info">Đăng nhập</button>
        </form>
        <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap";
import { ref } from "vue";

export default {
  setup() {
    const loginForm = ref({
      email: "",
      password: "",
    });

    const errorMessage = ref("");

    const handleLogin = () => {
      const { email, password } = loginForm.value;

      if (email === "nguyendes1410@gmail.com" && password === "Tu14102001") {
        window.location.href = "/main";
      } else {
        errorMessage.value = "Email hoặc mật khẩu không đúng!";
      }
    };

    return {
      loginForm,
      errorMessage,
      handleLogin,
    };
  },
};
</script>

<style scoped>
.auth-container {
  max-width: 500px;
  margin: 0 auto;
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-tabs .nav-link {
  font-size: 16px;
  border: none;
  color: #007bff;
  transition: all 0.3s ease;
}

.nav-tabs .nav-link.active {
  color: #fff;
  background-color: #007bff;
  border-radius: 5px 5px 0 0;
}

.form-label {
  font-size: 14px;
  font-weight: bold;
}

.btn-info {
  background-color: #007bff;
  border-color: #007bff;
  color: white;
  transition: background-color 0.3s ease;
}

.btn-info:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.d-grid .btn {
  font-size: 16px;
}
</style>
