<template>
  <div id="app111">
    <!-- Карусель -->
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Slide" width="300" height="300" />
        <div>{{ image }}</div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
    </swiper>

    <!-- Основное содержимое -->
    <div id="main-content">
      <!-- Здесь будет основное содержимое вашего приложения -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        // Опции карусели
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      images: [
        "https://i.pinimg.com/736x/a2/cf/53/a2cf53cbb6b0a55232de252775b7b534.jpg",
        "https://free-images.com/or/ad07/a_letter_ah_aha.jpg",
        // Добавьте дополнительные ссылки на изображения по необходимости
      ],
      todos: ["ААААААААААААААААААААААААААААААААААААААААААААААА"],
    };
  },
};
</script>

<style>
#app111 {
  display: flex;
  width: 400px;
  height: 300px;
}

#main-content {
  flex-grow: 1;
  padding: 50px;
}
</style>
