<template>
  <div class="divHeader" @click="$router.push('/')">
    <div class="Home">Главная</div>
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
.divHeader {
  padding: 0 20px 0 20px;
  height: fit-content;
  align-items: center;
  background-color: deepskyblue;
  display: flex;
  flex-direction: column;
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
.Home {
  padding: 15px;
  border-right: 1px solid #ccc;
  cursor: pointer;
  background-color: cyan;
  margin-bottom: 15px;
}
.liHeader:last-child {
  border-right: none;
}
</style>
