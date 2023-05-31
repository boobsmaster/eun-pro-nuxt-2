<script>
export default {
  name: "Button",
};
</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as mx;
@use "@/assets/scss/styles/variables" as vars;

.button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 8px;

  border: none;
  outline: none;
  border-radius: 5px;
  background: #ffb701;

  transition: background-color vars.$transition-duration ease-in-out;

  @include mx.tablet {
    padding: 12px;
  }

  @include mx.tablet {
    &:hover {
      background: #ffca45;

      transition: background-color vars.$transition-duration ease-in-out;
    }
  }
}
</style>
