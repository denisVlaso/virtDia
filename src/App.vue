<template>
  <div id="app">
    <Header></Header>
    <MainComponent class="mC"></MainComponent>
    <div class="dialog">
      <div class="section">
        <p>Контакты</p>
        <People></People>
      </div>
      <div class="section">
        <p>Сообщения</p>
        <Message></Message>
      </div>
      <div class="section">
        <p>Новости</p>
        <News></News>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Message from "./components/Message.vue";
import People from "./components/People.vue";
import Footer from "./components/Footer.vue";
import MainComponent from "./components/MainComponent.vue";
import News from "./components/News.vue";

export default {
  name: "App",
  components: {
    Header,
    Message,
    People,
    MainComponent,
    Footer,
    News,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: rgb(108, 168, 221);
  display: block;
}
.dialog {
  width: auto;
  display: flex;
  width: fit-content;
  margin: 0 auto;
}
.mC {
  margin: 0 auto;
}
.section {
  display: flex;
  width: fit-content;
  flex-direction: column;
}
.section > p {
  margin: 0 auto;
  font-size: 25px;
}
</style>
