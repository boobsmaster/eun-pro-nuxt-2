<script>
export default {
  name: "Section",
};
</script>

<template>
  <div class="section">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as mx;
@use "@/assets/scss/styles/_variables" as vars;
.section {
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 320px;

  @include mx.tablet {
    max-width: 727px;
  }

  @include mx.desktop {
    max-width: 1200px;
  }
}
</style>
