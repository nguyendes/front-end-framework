<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-2">
        <h2>Thông tin cá nhân</h2>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-4">
            <form
              class="p-4 border rounded shadow-sm bg-light personal-info-form"
              @submit.prevent="handleEdit"
            >
              <h4 class="text-center mb-4">Thông tin cá nhân</h4>
              <div class="mb-3">
                <label for="name" class="form-label">Họ và tên</label>
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  placeholder="Nhập họ và tên"
                  v-model="form.name"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="Nhập email"
                  v-model="form.email"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Mật khẩu</label>
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  placeholder="Nhập mật khẩu"
                  v-model="form.password"
                  required
                />
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary px-5 py-2">
                  Sửa Thông Tin
                </button>
              </div>
              <p v-if="errorMessage" class="text-danger mt-2">
                {{ errorMessage }}
              </p>
            </form>
          </div>
          <div class="col-8">
            <div class="p-4 border rounded shadow-sm bg-white">
              <h5 class="mb-3">Thông tin của bạn</h5>
              <div class="d-flex align-items-center">
                <img
                  src="../assets/362895970_276853821702421_3680553520987191800_n.jpg"
                  alt="Avatar"
                  class="rounded-circle me-4 avatarr"
                />
                <div>
                  <p class="mb-1 fw-bold">
                    Tên: <span>{{ user.name }}</span>
                  </p>
                  <p class="mb-0 fw-bold">
                    Email: <span>{{ user.email }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const user = ref({
      name: "Nguyễn Viết Tú",
      email: "nguyendes1410@gmail.com",
    });

    const form = ref({
      name: user.value.name,
      email: user.value.email,
      password: "",
    });

    const errorMessage = ref("");

    const handleEdit = () => {
      if (form.value.password === "Tu14102001") {
        user.value.name = form.value.name;
        user.value.email = form.value.email;
        form.value.password = "";
        errorMessage.value = "";
        alert("Sửa thông tin thành công!");
      } else {
        errorMessage.value = "Mật khẩu không đúng! Vui lòng thử lại.";
      }
    };

    return {
      user,
      form,
      errorMessage,
      handleEdit,
    };
  },
};
</script>
<style>
.avatar {
  font-weight: bold;
  text-transform: uppercase;
}
.personal-info-form {
  background: #ffffff;
}

.personal-info-form h4 {
  color: #495057;
  font-weight: bold;
}

.personal-info-form .form-label {
  font-weight: 500;
  color: #343a40;
}

.personal-info-form input {
  border: 1px solid #ced4da;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.personal-info-form input:focus {
  border-color: #80bdff;
  box-shadow: 0 0 8px rgba(128, 189, 255, 0.5);
}

.personal-info-form button {
  background: #007bff;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.personal-info-form button:hover {
  background: #0056b3;
}
</style>
