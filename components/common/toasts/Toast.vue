<script>
import Icon from '../icon/Icon.vue'
export default {
  name: 'Toast',
  components: { Icon },
  props: {
    title: { type: String, required: true },
    message: { type: String, required: true },
  },
}
</script>

<template>
  <div class="container">
    <Icon name="success-round" class="container__icon" />
    <div class="container__info">
      <h3 class="container__title">{{ title }}</h3>
      <span class="container__text">{{ message }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  gap: 40px;

  padding: 36px 44px;
  border-radius: 5px;
  background: #fff;

  max-width: 419px;

  &__icon {
    width: 24px;
    height: 24px;
    color: #ffb701;
    flex: 0 0 auto;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__title {
    color: var(--black, #342633);
    font-size: 16px;
    font-family: Gilroy;
    font-weight: 700;
  }

  &__text {
    color: var(--black-light, #898088);

    font-size: 14px;
    font-weight: 500;
    line-height: 143%;
  }
}
</style>
