<script>
import { Swiper, Navigation } from 'swiper'

export default {
  name: 'DocumentsSlider',
  data() {
    const swiperSlider = null
    const array = Array(5)

    return {
      array,
      swiperSlider,
    }
  },
  mounted() {
    this.swiperSlider = new Swiper(this.$refs.slider, {
      modules: [Navigation],
    })

    this.buttonNext?.addEventListener('click', () => swiper.slideNext())
    this.buttonPrev?.addEventListener('click', () => swiper.slidePrev())
  },
  methods: {
    onNextSlide() {
      this.swiperSlider.slideNext()
    },
    onPrevSlide() {
      this.swiperSlider.slidePrev()
    },
  },
}
</script>

<template>
  <div class="documents">
    <button @click="onPrevSlide" class="documents__button documents__button_prev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="advantages__document-slider-button-image"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M15 6L9 12L15 18" stroke="#898088" stroke-width="2" />
      </svg>
    </button>

    <div ref="slider" class="swiper documents__slider">
      <div class="swiper-wrapper documents__slider">
        <div v-for="item in array" :key="item" class="swiper-slide documents__slide">
          <img class="documents__slide-img" src="~/assets/images/slider-document.png" alt="" />
        </div>
      </div>
    </div>

    <button @click="onNextSlide" class="documents__button documents__button_next">
      <svg
        width="24"
        height="25"
        class="advantages__document-slider-button-image advantages__document-slider-button-image_next"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 6.5L9 12.5L15 18.5" stroke="#898088" stroke-width="2" />
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as ut;
@use '@/assets/scss/styles/variables' as vars;
.documents {
  display: flex;
  align-items: center;

  gap: 1rem;

  height: 311px;

  @include ut.tablet {
    width: 351px;
    height: 311px;
    margin-top: 8px;
  }

  @include ut.desktop {
    width: 517px;
    height: 556px;
  }

  &__slider {
    width: 100%;
    box-shadow: 0px 20px 40px 0px rgba(142, 192, 251, 0.1);

    @include ut.desktop {
      height: 580px;
    }
  }

  &__button {
    width: 4rem;
    height: 4rem;

    outline: none;
    background-color: transparent;

    border-radius: 50%;
    border: 2px solid #898088;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;

    padding: 8px;

    @include ut.tablet {
      &:hover {
        border-color: #342633;
        transition: all 0.3s ease-in-out;

        .advantages__document-slider-button-image {
          path {
            stroke: #342633;
            stroke-width: 2;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }

    &-image {
      width: 24px;
      height: 24px;
      transition: all 0.3s ease-in-out;

      path {
        transition: all 0.3s ease-in-out;
      }

      &_next {
        transform: rotate(360deg);
      }
    }

    &_prev {
    }

    &_next {
      transform: rotate(180deg);
    }
  }

  &__slide {
    width: 100%;
    height: 100%;

    @include ut.desktop {
      width: 500px;
      height: 500px;
    }

    &-img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
