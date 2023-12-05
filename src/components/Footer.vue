<template>
  <footer>
    <div class="footer-content">
      <div class="contact-info">
        <p>Телефон: {{ phoneNumber }}</p>
        <p>Юридический адрес: {{ legalAddress }}</p>
      </div>

      <div class="social-links">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          target="_blank"
          rel="noopener noreferrer"
          >Facebook</a
        >
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          target="_blank"
          rel="noopener noreferrer"
          >Twitter</a
        >
        <!-- Добавьте другие социальные сети по аналогии -->
      </div>
    </div>
    <p>&copy; 2023 Денчик отправляет. Все права защищены.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      phoneNumber: "+7 (800) 555-3535",
      legalAddress: "Парам пам пам",
    };
  },
};
</script>

<style scoped>
footer {
  background-color: #333;

  color: #fff;
  text-align: center;
  padding: 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.contact-info {
  text-align: left;
}

.social-links a {
  color: #fff;
  margin-right: 10px;
  text-decoration: none;
}

.social-links a:hover {
  text-decoration: underline;
}
</style>
