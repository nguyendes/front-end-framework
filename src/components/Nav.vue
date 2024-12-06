<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg py-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Blog luật khoa</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/main" class="nav-link">Trang Chủ</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link"
                >Thông Tin Cá Nhân</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Log Out</router-link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped></style>
