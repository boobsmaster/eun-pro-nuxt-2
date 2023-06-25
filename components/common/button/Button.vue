<script>
export default {
  name: 'Button',
  props: {
    buttonType: { type: String },
  },
}
</script>

<template>
  <button class="button" :type="buttonType">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;

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

  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  text-transform: uppercase;

  transition: background-color vars.$transition-duration ease-in-out;

  @include mx.tablet {
    padding: 12px;

    &:hover {
      background: #ffca45;

      transition: background-color vars.$transition-duration ease-in-out;
    }
  }

  @include mx.desktop {
    font-size: 14px;
  }
}
</style>
