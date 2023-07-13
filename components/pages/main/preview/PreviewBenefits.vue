<script>
import BenefitsList from './BenefitsList.vue'
export default {
  name: 'PreviewBenefits',
  components: { BenefitsList },
}
</script>

<template>
  <div class="pre-benefits">
    <div class="pre-benefits__info">
      <h2 class="pre-benefits__info-title">Проведение независимой экспертизы и оценки</h2>
      <span class="pre-benefits__info-subtitle">
        Все виды судебных и внесудебных экспертиз и исследований по различным вопросам
      </span>
    </div>
    <BenefitsList />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as ut;
@use '@/assets/scss/styles/variables' as vars;

.pre-benefits {
  display: flex;
  flex-direction: column;
  gap: 2.1rem;

  @include ut.tablet {
    gap: 4.5rem;
  }

  @include ut.desktop {
    flex-direction: row;
    gap: 0;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @include ut.tablet {
      gap: 3rem;
    }

    @include ut.desktop {
      gap: 2.8rem;
    }
  }

  &__info-title {
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
    color: #f3f3f3;

    @include ut.tablet {
      font-size: 3rem;
      line-height: 3.6rem;
    }

    @include ut.desktop {
      font-size: 4rem;
      line-height: 4.8rem;
    }
  }

  &__info-subtitle {
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;

    color: #898088;

    @include ut.tablet {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.3rem;

      color: #898088;
    }

    @include ut.desktop {
      width: 400px;
      font-size: 2.4rem;
      line-height: 3.4rem;
    }
  }
}
</style>
