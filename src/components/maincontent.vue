<template>
  <div class="featured-post">
    <div class="container">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/4.jpg" class="d-block w-100 imgg" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/5.jpg" class="d-block w-100 imgg" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/6.jpg" class="d-block w-100 imgg" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  <div class="section-latest">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Bài Viết</h2>
        </div>
        <div class="col-12">
          <div
            class="form-wrapper d-flex justify-content-center align-items-center"
          >
            <form
              class="p-4 border rounded shadow-sm bg-light"
              @submit.prevent="submitForm"
            >
              <h3 class="text-center mb-4">Đăng bài viết</h3>
              <div class="mb-3">
                <label for="title" class="form-label">Tiêu đề</label>
                <input
                  type="text"
                  id="title"
                  class="form-control"
                  placeholder="Nhập tiêu đề bài viết"
                  v-model="baiVietForm.title"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">Nội dung</label>
                <textarea
                  id="content"
                  class="form-control"
                  rows="5"
                  v-model="baiVietForm.content"
                  placeholder="Nhập nội dung bài viết"
                  required
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">Hình ảnh minh họa</label>
                <input
                  type="file"
                  id="image"
                  class="form-control"
                  @change="previewImage"
                />
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary px-5 py-2">
                  {{ isEditing ? "Cập Nhật" : "Đăng Bài" }}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-4" v-for="(a, index) in baiViet" :key="index">
              <div class="card">
                <div class="imggg">
                  <img :src="a.image" alt="" class="card-img" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{ a.title }}</h5>
                  <p class="card-text">
                    {{ a.content }}
                  </p>
                  <div class="button-card d-flex justify-content-around">
                    <button
                      type="submit"
                      class="btn btn-danger px-4 py-2"
                      @click="deleteBaiViet(index)"
                    >
                      Xoá
                    </button>
                    <button
                      type="submit"
                      class="btn btn-primary px-2 py-2"
                      @click="editBaiViet(index)"
                    >
                      Update
                    </button>
                    <button
                      type="submit"
                      class="btn btn-primary px-2 py-2"
                      @click="isShowBinhLuan(index)"
                    >
                      Bình Luận
                    </button>
                  </div>
                  <h5 class="mb-3 mt-4">Bình luận</h5>
                  <div v-if="showBinhLuan[index]" class="mt-3">
                    <textarea
                      v-model="binhLuan[index]"
                      class="form-control"
                      placeholder="Nhập bình luận tại đây..."
                    ></textarea>
                    <button
                      class="btn btn-success mt-2"
                      @click="luuBinhLuan(index)"
                    >
                      Gửi
                    </button>
                  </div>

                  <div
                    class="comment mb-3"
                    v-for="(a, cIndex) in a.binhLuan || []"
                    :key="cIndex"
                  >
                    <div class="d-flex align-items-center mb-2">
                      <div
                        class="avatar rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3"
                        style="width: 40px; height: 40px; font-size: 16px"
                      >
                        J97
                      </div>
                      <strong>Jack</strong>
                    </div>
                    <p class="mb-1">
                      {{ a }}
                    </p>
                    <small class="text-muted">1 phút trước</small>
                  </div>
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
  name: "maincontentt",
  setup() {
    const baiViet = ref([]);
    const baiVietForm = ref({
      title: "",
      content: "",
      image: "",
    });
    let isEditing = ref(false);
    let editingIndex = ref(null);
    const submitForm = () => {
      if (isEditing.value == true) {
        baiViet.value[editingIndex.value] = { ...baiVietForm.value };
        isEditing.value = false;
        editingIndex.value = null;
      } else {
        baiViet.value.push({ ...baiVietForm.value });
      }
      resetForm();
    };
    const editBaiViet = (index) => {
      baiVietForm.value = { ...baiViet.value[index] };
      isEditing.value = true;
      editingIndex.value = index;
    };
    const deleteBaiViet = (index) => {
      baiViet.value.splice(index, 1);
    };
    const resetForm = () => {
      baiVietForm.value = {
        title: "",
        content: "",
        image: "",
      };
    };
    const previewImage = (event) => {
      const file = event.target.files[0];
      if (file) {
        baiVietForm.value.image = URL.createObjectURL(file);
      } else {
        alert("Không có file nào được chọn.");
      }
    };
    //comment
    const binhLuan = ref([]);
    const showBinhLuan = ref([]);
    const isShowBinhLuan = (index) => {
      showBinhLuan.value[index] = !showBinhLuan.value[index];
    };
    const luuBinhLuan = (index) => {
      if (!binhLuan.value[index]) {
        alert("Vui lòng nhập bình luận.");
        return;
      }
      if (!baiViet.value[index].binhLuan) {
        baiViet.value[index].binhLuan = [];
      }
      baiViet.value[index].binhLuan.push(binhLuan.value[index]);
      // binhLuan.value[index] = "";
      showBinhLuan.value[index] = false;
    };

    return {
      baiViet,
      baiVietForm,
      submitForm,
      editBaiViet,
      deleteBaiViet,
      resetForm,
      isEditing,
      editingIndex,
      previewImage,
      binhLuan,
      showBinhLuan,
      isShowBinhLuan,
      luuBinhLuan,
    };
  },
};
</script>

<style>
.card-img {
  width: 90%;
  height: 350px;
  object-fit: cover;
}
.imgg {
  height: 500px;
  object-fit: cover;
}
.avatarr {
  height: 300px;
  object-fit: cover;
}
.imggg {
  text-align: center;
}
.section-latest {
  padding-top: 20px;
}
body {
  background: linear-gradient(to bottom right, #f8f9fa, #e9ecef);
  font-family: "Arial", sans-serif;
}

form {
  background: #ffffff;
}

h3 {
  color: #343a40;
  font-weight: bold;
}

.form-label {
  font-weight: 500;
  color: #495057;
}

input,
textarea,
button {
  border-radius: 8px;
}

button:hover {
  background: #0056b3;
  border-color: #004085;
}
.comment-form {
  background: #ffffff;
}

.comment-form h4 {
  color: #495057;
  font-weight: bold;
}

.comment-form .form-label {
  font-weight: 500;
  color: #343a40;
}

.comment-form input,
.comment-form textarea {
  border: 1px solid #ced4da;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.comment-form input:focus,
.comment-form textarea:focus {
  border-color: #80bdff;
  box-shadow: 0 0 8px rgba(128, 189, 255, 0.5);
}

.comment-form button {
  background: #007bff;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.comment-form button:hover {
  background: #0056b3;
}
.comment-section {
  max-height: 400px;
  overflow-y: auto;
}

.comment {
  padding: 10px 0;
  border-bottom: 1px solid #e9ecef;
}

.comment:last-child {
  border-bottom: none;
}

#displayInfo img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}
.form-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  width: 400px;
}
</style>
