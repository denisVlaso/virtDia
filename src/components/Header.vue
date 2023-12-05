<template>
  <div class="divHeader">
    <ul class="ulHeader">
      <li class="liHeader" v-for="item in menuItems">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, text: "Настройки" },
        { id: 2, text: "Регистрация" },
        { id: 3, text: "Войти" },
      ],
    };
  },
};
</script>

<style scooped>
.head {
  padding: 0 20px 0 20px;
  display: grid;
  height: 10vh;
  width: 100%;
  align-items: center;
  background-color: deepskyblue;
  display: grid;
  grid-template-columns: 1fr 12fr 1fr 1fr;
}
.registration {
  padding: 15px;
  background-color: cyan;
  height: min-content;
  grid-column: 3;
}
.login {
  padding: 15px;
  background-color: cyan;
  height: min-content;
  margin-left: auto;
}
.setting {
  padding: 15px;
  background-color: cyan;
  height: min-content;
}
.divHeader {
  padding: 0 20px 0 20px;
  display: grid;
  height: 10vh;
  width: max-width;
  align-items: center;
  background-color: deepskyblue;
  display: grid;

  grid-template-columns: 1fr 12fr 1fr 1fr;
}
.ulHeader {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.liHeader {
  padding: 15px;
  border-right: 1px solid #ccc;
  cursor: pointer;
  background-color: cyan;
}

.liHeader:last-child {
  border-right: none;
}
</style>
