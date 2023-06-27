<script>
import 'swiper/swiper-bundle.css'
import { Swiper, FreeMode } from 'swiper'
export default {
  name: 'WorkTabs',
  emits: ['update'],
  data() {
    const tabs = [
      {
        id: 'firstSlider',
        label: 'Все работы',
      },
      {
        id: 'secondSlider',
        label: 'Экспертиза',
      },
      {
        id: 'thirdSlider',
        label: 'Экологическая',
      },
      {
        id: 'fourSlider',
        label: 'Землеустройство',
      },
      {
        id: 'fiveSlider',
        label: 'Обследование',
      },
      {
        id: 'sixSlider',
        label: 'Землеустройство',
      },
    ]
    const activeTab = tabs[0].id

    return {
      tabs,
      activeTab,
    }
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true,

      breakpoints: {
        990: {
          spaceBetween: 46,
        },
        1600: {
          spaceBetween: 30,
        },
      },

      modules: [FreeMode],
    })
  },
  methods: {
    changeActiveTab(value) {
      console.log(value)

      this.activeTab = String(value)
    },
  },
  watch: {
    activeTab(newValue) {
      if (newValue) {
        this.$emit('update', String(newValue))
      }
    },
  },
}
</script>

<template>
  <section class="header">
    <div class="header__container">
      <div class="header__appendix"></div>
      <h2 class="header__title">Примеры наших работ</h2>
    </div>

    <div class="header__wrapper">
      <div ref="slider" class="swiper header__tabs">
        <div class="swiper-wrapper">
          <div v-for="item in tabs" :key="item.id" class="swiper-slide">
            <button
              :class="[{ ['header__tab_active']: activeTab === item.id }, 'header__tab']"
              @click="changeActiveTab(item.id)"
            >
              {{ item.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as ut;
@use '@/assets/scss/styles/variables' as vars;
.header {
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 1.6rem;

  width: 100%;

  @include ut.tablet {
    width: 100%;
    gap: 2.4rem;
    max-width: unset;
  }

  @include ut.desktop {
    flex-direction: row;
    gap: 8rem;
  }

  &__wrapper {
    @include ut.desktop {
      width: 100%;
      overflow: hidden;
    }
  }

  &__container {
    display: flex;
    width: 320px;
    align-self: center;

    @include ut.tablet {
      width: unset;
      align-self: unset;
      gap: 3rem;
    }

    @include ut.desktop {
      gap: 6.3rem;
    }
  }

  &__appendix {
    display: none;

    @include ut.tablet {
      display: block;
      width: 40px;
      height: 5px;

      background-color: #c2d2df;

      margin-top: 1.1rem;
    }

    @include ut.desktop {
      margin-top: 1.9rem;
    }
  }

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;

    color: #f3f3f3;

    @include ut.tablet {
      font-size: 2.4rem;
      line-height: 2.9rem;
    }

    @include ut.desktop {
      width: 330px;
      font-size: 2.8rem;
      line-height: 3.4rem;
    }
  }

  &__tabs {
    width: 100%;

    border-bottom: 2px solid #433142;
    .swiper-slide {
      width: auto;
    }
    @include ut.tablet {
      width: 100%;
    }

    @include ut.desktop {
      margin: 0.4rem 0 0 0;
    }
  }

  &__tab {
    flex: 0 0 auto;
    padding: 0;
    outline: none;
    border: none;
    background-color: transparent;
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.7rem;
    text-transform: uppercase;

    color: #898088;

    &_active {
      color: #ffb701;
      padding-bottom: 3px;
      border-bottom: 2px solid #ffb701;

      &::after {
        display: block;
        content: '';
      }
    }
  }
}
</style>
