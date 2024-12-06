<template>
  <footer class="bg-light py-4">
    <div class="container text-center">
      <div class="mb-3">
        <a href="https://www.facebook.com/younggvivian" class="text-decoration-none mx-2">
          <i
            class="fab fa-facebook-f bg-white text-dark rounded-circle p-2"
          ></i>
        </a>
        <a href="https://x.com/younggvivian" class="text-decoration-none mx-2">
          <i class="fab fa-twitter bg-white text-dark rounded-circle p-2"></i>
        </a>
        <a href="https://www.linkedin.com/in/des-nguy%E1%BB%85n-8965302a2" class="text-decoration-none mx-2">
          <i
            class="fab fa-linkedin-in bg-white text-dark rounded-circle p-2"></i>
        </a>
        <a href="#" class="text-decoration-none mx-2">
          <i class="fab fa-youtube bg-white text-dark rounded-circle p-2"></i>
        </a>
      </div>
      <p class="mb-2 text-muted">
        Copyright &copy; 2024 All rights reserved |  made
        <span class="text-danger">&hearts;</span> by NguyenTu
      </p>
      <p class="mb-0 text-muted">
        <a href="#" class="text-decoration-none mx-1">Terms & Conditions</a> /
        <a href="#" class="text-decoration-none mx-1">Privacy Policy</a>
      </p>
    </div>
  </footer>
</template>

<script></script>

<style scoped>
footer {
  border-top: 1px solid #dee2e6;
  margin-top: 50px;
}

footer .fab {
  font-size: 20px;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, color 0.3s ease;
}

footer .fab:hover {
  background-color: #007bff;
  color: white;
}

footer p {
  font-size: 14px;
}

footer a {
  color: #6c757d;
}

footer a:hover {
  color: #007bff;
  text-decoration: underline;
}
</style>
