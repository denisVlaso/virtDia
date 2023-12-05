<template>
  <div class="dialog">
    <div class="users">
      <ul>
        <li class="user_1">Вася</li>
        <li class="user_2">Иван</li>
        <li class="user_3">Вика</li>
        <li class="user_4">Дима</li>
        <li class="user_5">Олег</li>
      </ul>
    </div>
  </div>
</template>

<style scooped>
li {
  list-style-type: none;
  margin-bottom: 2vh;
  border: 1px solid pink;
  padding: 15px 30px 15px 30px;
}
.user_1,
.user_2,
.user_3,
.user_4,
.user_5 {
  background-color: antiquewhite;
  transition: 1s;
  cursor: pointer;
}
.user_1:hover,
.user_2:hover,
.user_3:hover,
.user_4:hover,
.user_5:hover {
  background-color: rgb(241, 215, 180);
  scale: 1.2;
}
.users {
  top: 10vh;
  width: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dialog {
  width: 154.4vh;
  display: grid;
  grid-template-columns: 2fr 10fr;
}
</style>
