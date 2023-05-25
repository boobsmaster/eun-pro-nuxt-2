<template>
  <div class="row about-director">
    <div class="about-director-video">
      <button class="about-director-video__button">
        <AboutVideoIcon />
      </button>
      <div class="about-director-video__description">
        Видеообращение для будущих клиентов
      </div>
    </div>
    <div class="about-director-text">
      <div class="about-director-text__title">
        Бобров Денис Вадимович
      </div>
      <div class="about-director-text__description">
        Генеральный директор. Кадастровый инженер
      </div>
    </div>
    <div class="about-director-pic">
      <NuxtImg src="about/director.png" width="80%" height="auto"/>
    </div>
  </div>
</template>

<script>
import AboutVideoIcon from "~/static/about/play.svg?inline";

export default {
  name: "AboutRight",
  components:{
    AboutVideoIcon
  }
}
</script>

<style scoped>

</style>
