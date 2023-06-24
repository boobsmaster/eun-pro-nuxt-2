<script>
import Icon from '../../icon/Icon.vue'

export default {
  name: 'Agreement',
  components: { Icon },
}
</script>

<template>
  <div class="agreement">
    <div class="agreement__badge">
      <Icon name="lock-pure" class="agreement__icon" />
    </div>
    <span class="agreement__text">Я даю согласие на обработку моих персональных данных</span>
  </div>
</template>

<style lang="scss" scoped>
.agreement {
  display: flex;
  align-items: flex-start;
  gap: 20px;

  &__badge {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;

    width: 40px;
    height: 40px;

    border-radius: 50%;
    background-color: #f3f3f3;
  }

  &__icon {
    width: 16px;
    height: 16px;
  }

  &__text {
    color: var(--black-light, #898088);

    font-size: 14px;
    line-height: 18px;
  }
}
</style>
