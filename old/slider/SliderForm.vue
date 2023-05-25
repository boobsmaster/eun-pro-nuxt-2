<template>
  <form class="slider-form">
    <div class="slider-form__body">
      <div class="slider-form__title">
        Оставить заявку
      </div>
      <div class="slider-form__form">
        <input type="text" id="slider-form-phone" name="slider-form-phone"  class="slider-form__phone"
               minlength="4" maxlength="8" placeholder="+7 (999) 999 99 99">
      </div>
      <div class="slider-form__form">
        <input type="text" id="slider-form-name" name="slider-form-name"  class="slider-form__name"
               minlength="4" maxlength="30" placeholder="Иван Иванов">
      </div>
      <div class="slider-form__form">
        <button class="slider-form__button"> Оставить заявку </button>
      </div>

    </div>
  </form>
</template>

<script>

export default {
  name: "SliderForm",
}
</script>

<style scoped>
.slider-form__body {
  background: #342633;
  width: 100%;
  height: 282px;
  padding: 30px;
}
.slider-form__title{
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 16px;
  color: #FFFFFF;
}
.slider-form__phone{
  width: 100%;
}
.slider-form__name{
  width: 100%;
}
.slider-form__button{
  text-transform: uppercase;
  background: #FFB701;
  border-radius: 5px;
  padding: 18px 40px;
}
</style>
