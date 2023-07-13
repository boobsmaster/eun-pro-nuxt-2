<script>
import Icon from '~/components/common/icon/Icon.vue'

export default {
  name: 'BenefitsList',
  data() {
    const benefits = [
      {
        icon: 'star',
        title: 'Гарантия на работы до 5 лет ',
      },
      {
        title: 'Используем точное оборудование',
        icon: 'calendar',
      },
      {
        title: 'Соблюдаем все сроки',
        icon: 'alarmclock',
      },
    ]

    return {
      benefits,
    }
  },
  components: { Icon },
}
</script>

<template>
  <div class="benefits-list">
    <div v-for="item in benefits" class="benefits-list__item">
      <Icon class="benefits-list__item-icon" :name="item.icon" />
      <span class="benefits-list__item-title">{{ item.title }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as ut;
@use '@/assets/scss/styles/variables' as vars;
.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @include ut.tablet {
    gap: 3rem;
    flex-direction: row;
  }

  @include ut.desktop {
    flex-direction: column;
    gap: 2.9rem;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 1rem;

    &-icon {
      width: 2.4rem;
      height: 2.4rem;
    }

    &-title {
      font-style: normal;
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.4rem;

      color: #f3f3f3;

      @include ut.desktop {
        font-weight: 600;

        font-size: 1.4rem;
        line-height: 1.7rem;
      }
    }
  }
}
</style>
