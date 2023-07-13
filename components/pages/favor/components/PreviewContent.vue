<script>
import Icon from '~/components/common/icon/Icon.vue'
import BenefitsList from '../../main/preview/BenefitsList.vue'

export default {
  name: 'PreviewContent',
  data() {
    const breadcrumbs = [
      {
        url: '#',
        label: 'Главная',
      },
      {
        url: '#',
        label: 'Все услуги',
      },
      {
        url: '#',
        label: 'Строительная экспертиза для суда',
      },
    ]
    return {
      breadcrumbs,
    }
  },
  components: { Icon, BenefitsList },
}
</script>

<template>
  <div class="container">
    <div class="container__breadcrumbs">
      <a v-for="item in breadcrumbs" :href="item.url" class="container__link">
        <span class="container__link-label">{{ item.label }}</span>
        <Icon name="double-arrow" class="container__link-icon" />
      </a>
    </div>
    <div class="container__content">
      <h3 class="container__title">
        Строительная экспертиза для суда
        <span class="container__title container__title_yellow">от 25 000 руб.</span>
      </h3>

      <span class="container__description">
        Все виды судебных и внесудебных экспертиз и исследований по различным вопросам
      </span>
    </div>
    <div class="container__benefits">
      <BenefitsList />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;
.container {
  display: flex;
  flex-direction: column;

  &__breadcrumbs {
    display: none;

    @include mx.tablet {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__link-label {
    font-size: 14px;
    font-weight: 500;
    line-height: 143%;
    font-style: normal;

    color: var(--white, #f3f3f3);
  }

  &__link-icon {
  }

  &__content {
    display: flex;
    flex-direction: column;

    gap: 10px;
  }

  &__title {
    font-size: 24px;
    font-weight: 700;

    font-style: normal;
    line-height: normal;

    color: var(--white, #f3f3f3);

    &_yellow {
      color: var(--yellow, #ffb701);
    }
  }
  &__description {
    font-size: 14px;
    font-weight: 500;
    line-height: 143%;
    font-style: normal;

    color: var(--black-light, #898088);
  }

  &__benefits {
    margin-top: 30px;
  }
}
</style>
