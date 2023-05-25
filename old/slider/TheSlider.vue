<template>
  <div class="slider">
    <div class="slider-body row">
      <SliderText class="col-4"/>
      <SliderBenefits class="col-4" />
      <SliderForm  class="col-4"/>
    </div>
    <SliderService />
  </div>
</template>

<script>
import SliderText from "@/components/slider/SliderText";
import SliderBenefits from "@/components/slider/SliderBenefits";
import SliderForm from "@/components/slider/SliderForm";
import SliderService from "@/components/slider/SliderService";

export default {
  name: "TheSlider",
  components: {SliderService, SliderForm, SliderBenefits, SliderText}
}
</script>

<style scoped>
.slider {
  height: 698px;
  background: linear-gradient(180deg, #342633 0%, rgba(52, 38, 51, 0) 100%),
  linear-gradient(90deg, #342633 68.62%, rgba(52, 38, 51, 0) 100%),
  url('@/static/slider/plan.jpeg') right 100% no-repeat;
}

</style>
