<template>
  <div>
    <div class="about-left-title row">
      <div class="about-left-title__line col-2">
      </div>
      <div class="about-left-title__text col-10">
        Оценочная компания "Экспертиза и управление недвижимостью"
      </div>
    </div>
    <AboutLeftExpertises class="row"/>
  </div>

</template>

<script>
import AboutLeftExpertises from "@/components/about/AboutLeftExpertises";
export default {
  name: "AboutLeft",
  components: {AboutLeftExpertises}
}
</script>

<style scoped>
.about-left-title__line:after{
  content: "";
  width: 40px;
  height: 0px;

  border: 5px solid #C2D2DF;
}
</style>
