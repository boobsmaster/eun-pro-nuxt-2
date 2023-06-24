<script>
import Button from '~/components/common/button/Button.vue'

export default {
  name: 'CookiesToast',
  components: { Button },
}
</script>

<template>
  <div class="container">
    <p class="container__text">
      Мы используем cookies, чтобы вам было удобнее пользоваться сайтом. Продолжая пользоваться сайтом, вы принимаете
      условия обработки персональных данных
    </p>
    <div class="container__button">
      <Button>Понятно</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 30px;
  gap: 48px;

  width: 100%;
  max-width: 840px;

  border-radius: 5px;
  background: var(--white, #f3f3f3);

  &__text {
    color: var(--black-light, #898088);
    font-size: 14px;
    font-weight: 500;
    line-height: 143%;
    font-family: Gilroy;

    max-width: 491px;
  }

  &__button {
    width: 100%;
    max-width: 225px;
    flex: 0 0 auto;
  }
}
</style>
