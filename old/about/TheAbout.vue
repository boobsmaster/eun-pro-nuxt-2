<template>
  <div class="about row">
    <AboutLeft class="col-6"/>
    <AboutRight class="col-6"/>
  </div>
</template>

<script>

import AboutLeft from "@/components/about/AboutLeft";
import AboutRight from "@/components/about/AboutRight";

export default {
  name: "TheAbout",
  components: {AboutRight, AboutLeft}
}
</script>

<style scoped>
.about{
}
</style>
