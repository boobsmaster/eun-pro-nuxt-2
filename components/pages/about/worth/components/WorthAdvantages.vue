<script>
import BenefitsSlider from '~/components/pages/main/advantages/BenefitsSlider.vue'
import Icon from '~/components/common/icon/Icon.vue'

export default {
  name: 'WorthAdvantages',
  components: { BenefitsSlider, Icon },
  data() {
    const benefitsSlides = [
      {
        title: 'С нами удобно',
        subtitle: 'Вы можете забрать готовый отчет об оценке лично или мы доставим курьером.',
      },
      {
        title: 'Гарантии',
        subtitle: 'Вникаем в детали и решаем поставленные задачи в каждом отчете об оценке.',
      },

      {
        title: 'Профессионализм',
        subtitle: 'Услуги оказывают только сертифицированные оценщики.',
      },
      {
        title: 'Все сертификаты',
        subtitle: 'Отчеты имеют официальный характер и принимаются любыми инстанциями.',
      },

      {
        title: 'Надежно',
        subtitle: 'Мы помогаем в сборе документов в минимальные сроки.',
      },
      {
        title: 'Конфиденциальность',
        subtitle: 'Все детали сделки будут сохранены и недоступны третьим лицам.',
      },
    ]

    return {
      benefitsSlides,
    }
  },
}
</script>

<template>
  <div class="advantages">
    <BenefitsSlider />

    <div class="benefits">
      <h3 class="benefits__title">Наши ценности</h3>

      <div class="benefits__content">
        <div v-for="item in benefitsSlides" class="benefits__item">
          <div class="benefits__item-check">
            <Icon name="done" class="benefits__item-icon" />
          </div>

          <div class="benefits__item-info">
            <span class="benefits__item-title">{{ item.title }}</span>
            <span class="benefits__item-subtitle">{{ item.subtitle }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;

.advantages {
  padding: 30px 0;

  @include mx.tablet {
    padding: 0;
  }
}

.benefits {
  display: none;
  flex-direction: column;

  gap: 30px;

  padding: 30px 0;

  @include mx.tablet {
    display: flex;
  }

  @include mx.desktop {
    gap: 50px;

    padding: 60px 0;
  }

  &__title {
    display: flex;
    align-items: center;

    gap: 30px;

    font-size: 24px;
    font-weight: 700;

    font-style: normal;
    line-height: normal;

    color: var(--black, #342633);

    @include mx.desktop {
      gap: 63px;

      font-size: 28px;
    }

    &::before {
      content: '';
      display: flex;

      width: 40px;
      height: 5px;

      background: #c2d2df;
    }
  }

  &__content {
    display: flex;
    flex-wrap: wrap;

    row-gap: 30px;
    column-gap: 20px;

    @include mx.desktop {
      row-gap: 40px;
      column-gap: 30px;
    }
  }

  &__item {
    display: flex;
    gap: 20px;
  }

  &__item-check {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    border: 2px solid var(--yellow, #ffb701);
  }

  &__item-icon {
    width: 24px;
    height: 24px;

    object-fit: contain;
  }

  &__item-info {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 290px;

    @include mx.desktop {
      max-width: 320px;
    }
  }

  &__item-title {
    font-size: 16px;
    font-weight: 700;
    font-style: normal;
    line-height: normal;
    color: var(--black, #342633);

    @include mx.desktop {
      font-size: 20px;
    }
  }

  &__item-subtitle {
    font-size: 14px;
    font-weight: 500;
    line-height: 143%;
    font-style: normal;

    color: var(--black-light, #898088);

    @include mx.desktop {
      font-size: 16px;
    }
  }
}
</style>
