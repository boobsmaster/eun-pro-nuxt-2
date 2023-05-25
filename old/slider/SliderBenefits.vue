<template>
  <div class="slider-benefits__body">
    <div class="slider-benefits__item">
      <div class="slider-benefits__icon">
        <SliderStarIcon />
      </div>
      <div class="slider-benefits__text">
        Гарантия на работы до 5 лет
      </div>
    </div>
    <div class="slider-benefits__item">
      <div class="slider-benefits__icon">
        <SliderCalendarIcon />
      </div>
      <div class="slider-benefits__text">
        Используем точное оборудование
      </div>
    </div>
    <div class="slider-benefits__item">
      <div class="slider-benefits__icon">
        <SliderAlarmclockIcon />
      </div>
      <div class="slider-benefits__text">
        Соблюдаем все сроки
      </div>
    </div>

  </div>
</template>

<script>
import SliderStarIcon from "~/static/star.svg?inline";
import SliderCalendarIcon from "~/static/calendar.svg?inline";
import SliderAlarmclockIcon from "~/static/alarmclock.svg?inline";

export default {
  name: "SliderBenefits",
  components: {
    SliderStarIcon,
    SliderCalendarIcon,
    SliderAlarmclockIcon,
  },

}
</script>

<style scoped>

</style>
