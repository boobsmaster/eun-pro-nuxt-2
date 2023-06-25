<script>
import Input from '../input/Input.vue'
import Button from '../button/Button.vue'
import Icon from '~/components/common/icon/Icon.vue'

export default {
  name: 'WriteFormOne',
  components: { Icon, Input, Button },
  emits: ['close'],
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
}
</script>

<template>
  <div class="container">
    <div class="container__header">
      <div class="container__header-controls">
        <h2 class="container__header-title">{{ title }}</h2>

        <button @click="$emit('close')" class="container__header-button">
          <Icon name="close" class="container__header-icon" />
        </button>
      </div>
      <p class="container__header-description">{{ description }}</p>
    </div>

    <div class="container__content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;

.container {
  display: flex;
  flex-direction: column;

  height: fit-content;
  min-width: 320px;
  max-width: 460px;
  padding: 20px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.1);

  @include mx.tablet {
    min-width: 750px;
    gap: 23px;
    padding: 26px 30px 30px 30px;
    max-width: 750px;
  }

  @include mx.desktop {
    gap: 19px;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__header-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__header-title {
    color: var(--black, #342633);
    font-size: 18px;
    font-family: Gilroy;
    font-weight: 700;

    @include mx.tablet {
      font-size: 20px;
    }

    @include mx.desktop {
      font-size: 24px;
    }
  }

  &__header-description {
    color: var(--black-light, #898088);
    font-size: 14px;
    font-family: Gilroy;
    font-weight: 500;
    line-height: 143%;

    @include mx.desktop {
      font-size: 16px;
    }
  }

  &__header-button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: fit-content;
    width: fit-content;

    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
  }

  &__header-icon {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
    color: #4f4f4f;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }
}
</style>
