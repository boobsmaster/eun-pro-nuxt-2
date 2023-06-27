<script>
import Button from '~/components/common/button/Button.vue'

export default {
  name: 'CookiesToast',
  components: { Button },
  emits: ['close'],
  data() {
    const isOpen = true

    return {
      isOpen,
    }
  },
  methods: {
    hide() {
      this.isOpen = false
    },
  },
}
</script>

<template>
  <div v-if="isOpen" class="container">
    <p class="container__text">
      Мы используем cookies, чтобы вам было удобнее пользоваться сайтом. Продолжая пользоваться сайтом, вы принимаете
      условия обработки персональных данных
    </p>
    <div @click="hide" class="container__button">
      <Button>Понятно</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: fixed;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 48px;

  width: 100%;

  z-index: 999;
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
    height: auto;
    max-width: 225px;
    flex: 0 0 auto;
  }
}
</style>
