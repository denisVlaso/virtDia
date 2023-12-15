<template>
  <div id="app111">
    <!-- Карусель -->
    <swiper style="" :options="swiperOptions">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img style="border-radius: 30px" :src="image" alt="Slide" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
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
        "../../public/добавляйте.png",
        "../../public/общайтесь.png",
        "../../public/зло.png",
        // Добавьте дополнительные ссылки на изображения по необходимости
      ],
    };
  },
};
</script>

<style>
#app111 {
  display: flex;
  width: 600px;
  height: 200px;
}

#main-content {
  flex-grow: 1;
  padding: 50px;
}
</style>
