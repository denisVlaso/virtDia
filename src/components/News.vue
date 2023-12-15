<template>
  <div class="news">
    <p class="newsMessages" v-for="todo in todos">{{ todo }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        "Вчера в Новом Уренгое был найден телефон",
        "Экзамене будет 23 числа в субботу",
        "Автобусные рейсы из Петербурга в Финляндию вновь приостановили",
      ],
    };
  },
};
</script>

<style scooped>
.news {
  width: -webkit-fill-available;
  background-color: #c3c3f596;
  height: max-content;
  display: block;
  margin-left: 10%;
  font-style: oblique;
  font-size: 25px;
  border-radius: 10%;
  padding: 10px;
}
.newsMessages {
  background-color: #a0a0fb;
  border-radius: 15px;
  margin-top: 20px;
}
</style>
