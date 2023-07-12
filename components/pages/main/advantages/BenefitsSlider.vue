<script>
import { Swiper, Navigation, Scrollbar } from 'swiper'
export default {
  name: 'BenefitsSlider',
  data() {
    const slider = null
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
      slider,
      benefitsSlides,
    }
  },
  mounted() {
    this.slider = new Swiper(this.$refs.benefitsSlider, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true,

      modules: [Scrollbar],
      scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: 65,
        hide: false,
      },
    })

    this.slider.on('reachBeginning', () => {
      const afterElement = this.$refs.after

      afterElement.style.opacity = '1'
      afterElement.style.zIndex = '1'
    })
  },
}
</script>

<template>
  <div ref="benefitsSlider" class="swiper benefits-slider">
    <div class="swiper-wrapper">
      <div v-for="slide in benefitsSlides" class="swiper-slide benefits-slider__slide">
        <div class="benefits-slider__item">
          <div class="benefits-slider__check">
            <img class="benefits-slider__check-image" src="~/assets/icons/done.svg" alt="" />
          </div>

          <div class="benefits-slider__info">
            <span class="benefits-slider__info-title">{{ slide.title }}</span>
            <span class="benefits-slider__info-subtitle">{{ slide.subtitle }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="swiper-scrollbar"></div>
    <div ref="after" class="slider-after slider-after_mobile"></div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as ut;
@use '@/assets/scss/styles/variables' as vars;
.benefits-slider {
  width: 100%;
  height: 107px;

  @include ut.tablet {
    display: none;
  }

  &__slide {
    display: flex;
    align-items: flex-start;

    width: 250px;
    height: 80px;

    gap: 2rem;
  }

  &__item {
    display: flex;
    gap: 2rem;
  }

  &__check {
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

  &__info {
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
}

/* .slider-after {
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
} */
</style>
