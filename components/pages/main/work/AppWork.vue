<script>
import { Swiper, FreeMode, Scrollbar } from 'swiper'
import WriteTwo from '~/components/common/forms/WriteTwo.vue'
import Modal from '~/components/common/modal/Modal.vue'
import Tabs from './Tabs.vue'
import 'swiper/swiper-bundle.css'

export default {
  name: 'AppWork',
  components: { WriteTwo, Modal, Tabs },
  data() {
    const isVisibleModal = false
    const slider = null
    const activeKey = 'firstSlider'
    const slidesCategory = {
      firstSlider: [
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
            img: '~/assets/images/work-item-first-1.jpg',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
            img: '~/assets/images/work-item-first-1.jpg',
          },
        ],
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
        ],
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
        ],
      ],
      secondSlider: [
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
            img: '~/assets/images/work-item-first-1.jpg',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
            img: '~/assets/images/work-item-first-1.jpg',
          },
        ],
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
        ],
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
        ],
      ],
      thirdSlider: [
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
            img: '~/assets/images/work-item-first-1.jpg',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
            img: '~/assets/images/work-item-first-1.jpg',
          },
        ],
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
        ],
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
        ],
      ],
      fourSlider: [
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
            img: '~/assets/images/work-item-first-1.jpg',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
            img: '~/assets/images/work-item-first-1.jpg',
          },
        ],
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
        ],
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
        ],
      ],
      fiveSlider: [
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
            img: '~/assets/images/work-item-first-1.jpg',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
            img: '~/assets/images/work-item-first-1.jpg',
          },
        ],
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
        ],
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
        ],
      ],
      sixSlider: [
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
            img: '~/assets/images/work-item-first-1.jpg',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
            img: '~/assets/images/work-item-first-1.jpg',
          },
        ],
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
        ],
        [
          {
            id: '1',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
          {
            id: '2',
            label: 'Общество с ограниченной ответственностью «Финмаркт»',
            url: '#',
          },
        ],
      ],
    }

    const advancedItems = {
      firstSlider: 'advanced-item-first.jpg',
      secondSlider: 'advanced-item-second.jpeg',
      thirdSlider: 'advanced-item-first.jpg',
      fourSlider: 'advanced-item-second.jpeg',
      fiveSlider: 'advanced-item-first.jpg',
      sixSlider: 'advanced-item-second.jpeg',
    }

    return {
      slider,
      activeKey,
      advancedItems,
      isVisibleModal,
      slidesCategory,
    }
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('resize', this.myEventHandler)
    }

    this.slider = new Swiper(this.$refs.workSlider, {
      direction: 'horizontal',
      touchEventsTarget: 'container',
      slidesPerView: 'auto',
      slidesOffsetBefore: this.setOffset(),
      spaceBetween: 20,
      observer: true,
      observeParents: true,
      freeMode: true,

      modules: [Scrollbar, FreeMode],
      scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: 65,
        hide: false,
      },

      breakpoints: {
        990: {
          slidesOffsetBefore: 0,
          scrollbar: {
            dragSize: 65,
          },
        },
        1601: {
          slidesOffsetBefore: 0,
          spaceBetween: 30,
          scrollbar: {
            dragSize: 275,
          },
        },
      },
    })

    if (window.innerWidth <= 990) {
      this.$refs.tabs.$el.children[1].style.marginLeft = `${this.setOffset()}px`
    }
  },
  methods: {
    changeActiveKey(value) {
      this.activeKey = String(value)
    },
    myEventHandler() {
      const targetEl = this.$refs.tabs.$el.children[1]

      if (window.innerWidth <= 990) {
        targetEl.style.marginLeft = `${this.setOffset()}px`
        this.slider.params.slidesOffsetBefore = this.setOffset()

        this.slider.updateSize()
        this.slider.updateProgress()
        this.slider.update()
      } else {
        targetEl.style.marginLeft = '0px'

        this.slider.params.slidesOffsetBefore = 0
        this.slider.update()
      }
    },
    getOffset() {
      const containerRect = this.$refs.tabs.$el.children[0].getBoundingClientRect()

      return containerRect?.x
    },
    changeVisibleModal() {
      this.isVisibleModal = !this.isVisibleModal
    },
    setOffset() {
      return this.getOffset() - 20
    },
  },
  destroyed() {
    window.removeEventListener('resize', this.myEventHandler)
  },
  watch: {
    activeKey(newValue) {
      this.slider.slideTo(0)
    },
  },
}
</script>

<template>
  <section class="work">
    <Modal v-if="isVisibleModal">
      <WriteTwo @close="changeVisibleModal" />
    </Modal>

    <div class="work__container">
      <Tabs ref="tabs" @update="changeActiveKey" />

      <div class="work__content">
        <div ref="workSlider" class="swiper work__slider">
          <div class="swiper-wrapper work__slider-wrapper">
            <div class="swiper-slide work__slider-slide">
              <div class="work__advanced-item">
                <div class="work__advanced-item-preview">
                  <div class="work__advanced-item-preview-overlay"></div>
                  <img class="work__advanced-item-preview-image" src="~/assets/images/advanced-item-first.jpg" alt="" />
                  <span class="work__advanced-item-preview-title">
                    Общество с ограниченной ответственностью «Финмаркт»
                  </span>
                  <div class="work__advanced-item-preview-link">
                    <img class="work__advanced-item-preview-link-icon" src="~/assets/icons/arrow-right.svg" alt="" />
                    <div class="work__advanced-item-preview-link-text">Подробнее</div>
                    <a class="work__advanced-item-preview-link-source" href=""></a>
                  </div>
                </div>

                <div class="work__advanced-item-details">
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title">Объект:</span>
                    <p class="work__advanced-item-details-info-description">
                      Здание многофункционального комплекса "Орбион", расположенный по адресу: г. Москва, Инновационный
                      центр Сколково, ул. Нобеля
                    </p>
                  </div>
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title">Вид экспертизы:</span>
                    <p class="work__advanced-item-details-info-description">
                      Строительно-техническая экспертиза. Кадастровые работы. Геодезические работы.
                    </p>
                  </div>
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title">Результат экспертизы:</span>
                    <p class="work__advanced-item-details-info-description">
                      Объект введен в эксплуатацию. Поставлен на кадастровый учет. Объект беспрепятственно
                      функционирует.
                    </p>
                  </div>
                  <button @click="changeVisibleModal" class="work__advanced-item-details-button">Хочу так же!</button>
                </div>
              </div>
            </div>

            <div v-for="slides in slidesCategory[activeKey]" class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div v-for="item in slides" class="work__item">
                  <img class="work__item-image" src="~/assets/images/work-item-first-1.jpg" alt="" />
                  <span class="work__item-title">{{ item.label }}</span>
                  <div class="work__item-overlay" />
                  <a class="work__item-link" href="" />
                  <button class="work__item-button">Хочу так же</button>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-scrollbar" />
          <div class="slider-after" />
          <div class="slider-after slider-after_mobile" />
        </div>
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

    background: linear-gradient(270deg, #342633 0%, rgba(52, 38, 51, 0.8) 52.6%, rgba(52, 38, 51, 0) 100%);
    content: '';
    z-index: 4;

    button {
      margin: -59px -66px 0px 0px;
    }
  }

  @include ut.desktop {
    margin: 0 -2px 0 0px;
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

  transition: all 0.3s ease-in-out;

  background: linear-gradient(270deg, #342633 0%, rgba(52, 38, 51, 0.8) 52.6%, rgba(52, 38, 51, 0) 100%);
  content: '';
  z-index: 4;

  @include ut.tablet {
    display: none;
  }
}
.work {
  display: flex;
  padding: 2rem;

  width: 100%;
  background: #342633;

  @media only screen and (min-width: 600px) {
    justify-content: center;
  }

  @include ut.tablet {
    justify-content: center;
    padding: 3rem 0 0 0;
  }

  @include ut.desktop {
    padding: 7.2rem 0 3.3rem 0;
    .swiper-scrollbar {
      background: #433142;
    }
  }

  &__container {
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    /* max-width: 440px; */
    gap: 2rem;

    @include ut.tablet {
      width: 727px;
      max-width: unset;
      gap: 3rem;
    }

    @include ut.desktop {
      gap: 4.8rem;
      width: 1201px;
    }
  }

  &__content {
    width: 100%;
  }

  &__content-wrapper {
    position: relative;
    width: 100%;
    height: 1000px;
  }

  &__slide-container {
    display: flex;
    flex-direction: column;

    gap: 2rem;
  }

  &__slider {
    width: 100%;
    height: 418px;

    @include ut.tablet {
      width: 100%;
    }

    .swiper-slide {
      width: auto;
    }

    .swiper-wrapper {
    }

    .swiper-scrollbar-horizontal {
      height: 5px;
      width: 320px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      @include ut.desktop {
        transform: unset;
        left: 0;
        width: 100%;
      }
    }
    .swiper-scrollbar {
      display: block;

      @include ut.tablet {
        display: none;
      }

      @include ut.desktop {
        display: block;
      }
    }

    @include ut.tablet {
      height: 458px;
      width: 861px;
    }

    @include ut.desktop {
      height: 613px;
      width: 100%;
    }

    &-wrapper.swiper-wrapper {
      scroll-snap-type: none;
    }

    &-slide {
      &-container {
        display: flex;
        flex-direction: column;
      }
    }
  }

  &__advanced-item {
    display: flex;

    &-preview {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      padding: 2rem;

      transition: all 0.3s ease-in-out;

      @include ut.desktop {
        &:hover {
          .work__advanced-item-preview-title {
            opacity: 0;
            transition: all 0.2s ease-in-out;
          }

          .work__advanced-item-preview-image {
            transform: scale(1.3);
            transition: all 0.3s ease-in-out;
          }

          .work__advanced-item-preview-overlay {
            transition: all 0.3s ease-in-out;
            background: linear-gradient(0deg, rgba(52, 38, 51, 0), rgba(52, 38, 51, 0));
          }

          .work__advanced-item-preview-link-text {
            // opacity: 0;
            // pointer-events: none;
            color: #f3f3f3;
            transition: all 0.3s ease-in-out;
          }
        }
      }

      border-radius: 0.5rem;
      overflow: hidden;

      width: 320px;
      height: 392px;

      z-index: 2;

      @include ut.tablet {
        padding: 3rem;
        width: 350px;
        height: 430px;
        border-radius: 0.5rem 0 0 0.5rem;
      }

      @include ut.desktop {
        justify-content: space-between;
        width: 380px;
        height: 576px;
        padding: 3rem 3rem 2rem 3rem;
      }

      &-title {
        z-index: 2;
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.4rem;

        width: 265px;

        color: #ffffff;
        transition: all 0.3s ease-in-out;
        @include ut.desktop {
          width: 327px;
          font-size: 2.4rem;
          line-height: 2.9rem;
        }
      }

      &-image {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        transition: all 0.3s ease-in-out;
      }

      &-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        transition: all 0.3s ease-in-out;

        background: linear-gradient(0deg, rgba(52, 38, 51, 0.8), rgba(52, 38, 51, 0.8));
      }

      &-link {
        position: relative;
        transition: all 0.3s ease-in-out;

        display: flex;
        gap: 0.5rem;
        z-index: 6;

        &-icon {
          width: 1.6rem;
          height: 1.6rem;
        }

        &-text {
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 1.6rem;

          color: #898088;
          transition: all 0.3s ease-in-out;
        }

        &-source {
          position: absolute;
          top: 0;
          left: 0;

          width: 100%;
          height: 100%;
        }
      }
    }

    &-details {
      display: none;

      @include ut.tablet {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 3rem;

        width: 370px;
        height: 430px;

        background: #433142;
        padding: 3rem 2rem;

        border-radius: 0 0.5rem 0.5rem 0;
      }

      @include ut.desktop {
        width: 308px;
        height: 576px;
        padding: 3rem;
      }

      &-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &-title {
          font-size: 1.2rem;
          line-height: 1.7rem;

          letter-spacing: 0.2em;
          text-transform: uppercase;

          color: #f3f3f3;
        }

        &-description {
          font-weight: 500;
          font-size: 1.4rem;
          line-height: 2rem;
          color: #898088;
          word-break: break-all;

          @include ut.desktop {
            font-size: 1.6rem;
            line-height: 2.3rem;
          }
        }
      }

      &-button {
        position: relative;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 248px;
        height: 4rem;

        padding: 1.8rem 4rem;

        outline: none;
        border: none;

        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.5rem;
        text-transform: uppercase;

        color: #342633;

        background: #ffb701;
        border-radius: 5px;

        transition: background-color 0.3s ease-in-out;

        &:hover {
          background: #ffca45;

          transition: background-color 0.3s ease-in-out;
        }

        @include ut.desktop {
          width: 248px;
          height: 54px;
          margin: 1.5rem 0 0 0;
        }

        &-link {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 2rem;

    width: 185px;
    height: 185px;

    border-radius: 0.5rem;
    overflow: hidden;

    &:hover {
      .work__item-button {
        opacity: 1;
        transition: all 0.3s ease-in-out;
      }

      .work__item-overlay {
        background: transparent;
        transition: all 0.3s ease-in-out;
      }

      .work__item-image {
        transform: scale(1.2);
        transition: all 0.3s ease-in-out;
      }
    }

    @include ut.tablet {
      width: 205px;
      height: 205px;
    }

    @include ut.desktop {
      width: 278px;
      height: 273px;
    }

    &-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    &-title {
      font-style: normal;
      font-weight: 700;
      z-index: 3;
      font-size: 1.2rem;
      line-height: 1.5rem;

      color: #ffffff;

      @include ut.desktop {
        font-size: 1.6rem;
        line-height: 1.9rem;
      }
    }

    &-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;

      background: linear-gradient(0deg, rgba(52, 38, 51, 0.8), rgba(52, 38, 51, 0.8));
    }

    &-link {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
      z-index: 3;
    }

    &-button {
      display: none;

      @include ut.desktop {
        position: relative;

        opacity: 0;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 18px 40px;
        gap: 10px;

        border: none;
        outline: none;

        width: 238px;
        height: 50px;

        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;

        text-transform: uppercase;
        color: #342633;

        background: #ffb701;
        border-radius: 5px;
        z-index: 4;

        transition: background-color 0.3s ease-in-out;

        &:hover {
          background: #ffca45;

          transition: background-color 0.3s ease-in-out;
        }

        &-link {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
