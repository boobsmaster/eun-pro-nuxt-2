<script>
import BenefitsSlider from './BenefitsSlider.vue'
import DocumentsSlider from './DocumentsSlider.vue'

export default {
  name: 'AppAdvantages',
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
  components: { BenefitsSlider, DocumentsSlider },
}
</script>

<template>
  <section class="advantages">
    <div class="advantages__container">
      <div class="advantages__header">
        <div class="advantages__header-appendix" />
        <h2 class="advantages__header-title">Причины выбрать "ЭУН" своей оценочной компанией</h2>
      </div>

      <BenefitsSlider />

      <div class="advantages__content">
        <div class="advantages__benefits-container">
          <div class="advantages__benefits-list">
            <div v-for="item in benefitsSlides" class="advantages__benefits-item">
              <div class="advantages__benefits-check">
                <img class="advantages__benefits-check-image" src="~/assets/icons/done.svg" alt="" />
              </div>
              <div class="advantages__benefits-info">
                <span class="advantages__benefits-info-title">{{ item.title }}</span>
                <span class="advantages__benefits-info-subtitle">{{ item.subtitle }}</span>
              </div>
            </div>
          </div>

          <div class="advantages__info advantages__info_desktop">
            <p class="advantages__info-text advantages__info-text_level-1">
              Вы, конечно, можете закрыть наш сайт и поискать оценщиков ближе/дешевле/другого типа, но…
            </p>
            <p class="advantages__info-text advantages__info-text_level-2">
              Любую работу мы выполняем четко и слаженно, не по шаблону – вас порадует индивидуальный подход и
              тщательный разбор ситуации!
            </p>
          </div>
        </div>

        <DocumentsSlider />
      </div>

      <div class="advantages__info undefined">
        <p class="advantages__info-text advantages__info-text_level-1">
          Вы, конечно, можете закрыть наш сайт и поискать оценщиков ближе/дешевле/другого типа, но…
        </p>
        <p class="advantages__info-text advantages__info-text_level-2">
          Любую работу мы выполняем четко и слаженно, не по шаблону – вас порадует индивидуальный подход и тщательный
          разбор ситуации!
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as ut;
@use '@/assets/scss/styles/variables' as vars;
.slider-after {
  display: none;

  @include ut.tablet {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    float: right;
    width: 173px;
    height: 100%;

    transition: all 0.3s ease-in-out;

    background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
    content: '';
    z-index: 4;

    pointer-events: none;
    button {
      margin: -59px -66px 0px 0px;
    }
  }
}
.slider-after_mobile {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  float: right;
  width: 100px;
  height: 100%;

  pointer-events: none;
  transition: all 0.3s ease-in-out;

  background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  content: '';
  z-index: 4;

  @include ut.tablet {
    display: none;
  }
}
.swiper-scrollbar.swiper-scrollbar-horizontal {
  bottom: 0;
  height: 6px;
  background: #f3f3f3;
  border-radius: 5px;
  left: 0;
  width: 100%;
}

.swiper-scrollbar-drag {
  background: none;
}

.swiper-scrollbar-drag:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 6px;
  background: #ffb701;
  border-radius: 5px;
}

.swiper-slide {
  position: relative;
  width: auto;
  margin: 0;
}

.advantages {
  display: flex;
  justify-content: center;

  padding-top: 2rem;
  background: rgba(194, 210, 223, 0.05);
  filter: drop-shadow(0px 20px 40px rgba(142, 192, 251, 0.1));

  @include ut.tablet {
    background: white;
    padding-top: 3rem;
    filter: none;
  }

  @include ut.desktop {
    padding-top: 7.5rem;
    padding-bottom: 7rem;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 320px;

    @include ut.tablet {
      width: 727px;
      gap: 3rem;
    }

    @include ut.desktop {
      width: 1200px;
      gap: 5rem;
    }
  }

  &__content {
    @include ut.tablet {
      display: flex;
      align-items: center;

      gap: 1rem;
    }

    @include ut.desktop {
      align-items: flex-start;

      gap: 0.9rem;
    }
  }

  &__header {
    @include ut.tablet {
      display: flex;
      gap: 3rem;
    }

    @include ut.desktop {
      gap: 6.2rem;
    }

    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.4rem;

      color: #342633;

      @include ut.tablet {
        font-size: 2.4rem;
        line-height: 2.9rem;
      }

      @include ut.desktop {
        margin: -4px 0 0 0;

        font-size: 2.8rem;
        line-height: 3.4rem;
      }
    }

    &-appendix {
      display: none;

      @include ut.tablet {
        display: flex;

        width: 40px;
        height: 5px;
        background-color: #c2d2df;
        margin: 13px 0 0 0;
      }

      @include ut.desktop {
      }
    }
  }

  &__benefits {
    &-container {
      @include ut.desktop {
        display: flex;
        flex-direction: column;

        gap: 6rem;
      }
    }

    &-list {
      display: none;

      @include ut.tablet {
        display: flex;
        flex-direction: column;

        gap: 1.1rem;
      }

      @include ut.desktop {
        flex-direction: row;
        flex-wrap: wrap;
        width: 639px;
        row-gap: 3rem;
        column-gap: 3.2rem;
      }
    }

    &-item {
      display: flex;
      gap: 2rem;
    }

    &-info {
      display: flex;
      flex-direction: column;

      @include ut.desktop {
        gap: 0.7rem;

        padding-top: 0.8rem;
      }

      &-title {
        font-style: normal;
        font-weight: 700;

        font-size: 1.6rem;
        line-height: 1.9rem;

        display: flex;
        align-items: center;

        color: #342633;

        @include ut.desktop {
          font-size: 2rem;
          line-height: 2.4rem;
        }
      }

      &-subtitle {
        font-style: normal;
        font-weight: 500;

        width: 200px;

        font-size: 1.4rem;
        line-height: 2rem;

        color: #898088;

        @include ut.tablet {
          width: 308px;
        }
        @include ut.desktop {
          width: 210px;
        }

        @include ut.desktop {
          width: 216px;
          font-weight: 500;
          font-size: 1.6rem;
          line-height: 2.3rem;
          color: #898088;
        }
      }
    }

    &-slider {
      width: 100%;
      height: 107px;

      @include ut.tablet {
        display: none;
      }
    }

    &-slide {
      display: flex;
      align-items: flex-start;

      width: 250px;
      height: 80px;

      gap: 2rem;
      // cursor: grab;
    }

    &-check {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;

      width: 3rem;
      height: 3rem;
      border: 2px solid #ffb701;

      @include ut.desktop {
        width: 4rem;
        height: 4rem;
      }

      &-image {
        width: 100%;
        height: 100%;
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;

    gap: 2rem;

    @include ut.tablet {
      gap: 0.7rem;

      margin-top: -10px;
    }

    @include ut.desktop {
      gap: 2rem;

      display: none;
    }

    &_desktop {
      display: none;

      @include ut.desktop {
        display: flex;

        gap: 2rem;
      }
    }

    &-text {
      &_level-1 {
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.6rem;

        color: #898088;

        @include ut.desktop {
          font-size: 2rem;
          line-height: 2.4rem;
          width: 540px;
        }
      }

      &_level-2 {
        font-style: normal;
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.7rem;
        color: #342633;

        @include ut.tablet {
          font-size: 1.6rem;
          line-height: 1.9rem;
        }

        @include ut.desktop {
          width: 540px;
          font-size: 2rem;
          line-height: 2.4rem;
        }
      }
    }
  }
}
</style>
