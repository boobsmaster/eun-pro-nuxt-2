<template>
  <div class="slider-service row">
    <div class="slider-service col-4" v-for="service in services">
      <div class="slider-service__icon">
        <component :is="service.component"/>
      </div>
      <div class="slider-service__title">
        <div class="slider-service__title__num">
          {{service.num}}
        </div>
        <div class="slider-service__title__text">
          {{service.title}}
        </div>
      </div>
      <div class="slider-service__description">
        {{service.description}}
      </div>
    </div>
  </div>
</template>

<script>
import SliderServiceIconVisit from "~/static/visit.svg?inline";
import SliderServiceIconLand from "~/static/land.svg?inline";
import SliderServiceIconAnalytics from "~/static/analytics.svg?inline";

export default {
  name: "SliderService",
  components: {
    SliderServiceIconVisit,
    SliderServiceIconLand,
    SliderServiceIconAnalytics
  },
  data() {
    return {
      services: [
        {
          component: 'SliderServiceIconVisit',
          icon: 'visit.svg',
          num: '0.1',
          title: 'Экспертиза',
          description: 'Профессиональная оценочная компания «ЭУН» предлагает услуги своих опытных сотрудников'
        },
        {
          component: 'SliderServiceIconLand',
          icon: 'land.svg',
          num: '0.2',
          title: 'Оценка',
          description: 'Профессиональная оценочная компания «ЭУН» предлагает услуги своих опытных сотрудников'
        },
        {
          component: 'SliderServiceIconAnalytics',
          icon: 'analytics.svg',
          num: '0.3',
          title: 'Аудит',
          description: 'Профессиональная оценочная компания «ЭУН» предлагает услуги своих опытных сотрудников'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
