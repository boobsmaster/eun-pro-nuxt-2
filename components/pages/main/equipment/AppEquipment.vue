<template>
  <section class="equipment">
    <div class="equipment__container">
      <header class="equipment__header">
        <div class="equipment__header-appendix"></div>
        <h2 class="equipment__header-title">Применяемое оборудование</h2>
        <div class="equipment__header-link">
          <img
            class="equipment__header-link-icon"
            src="~/assets/icons/chevron.svg"
            alt=""
          /><span class="equipment__header-link-text">Все оборудование</span
          ><a class="equipment__header-link-source" href=""></a>
        </div>
      </header>
      <div class="equipment__grid">
        <div class="equipment__item">
          <div class="equipment__item-image">
            <img
              class="equipment__item-image-source"
              src="~/assets/images/equipment-1.png"
              alt=""
            />
          </div>
          <div class="equipment__item-title">GNSS-приемники Topcon Hiper V</div>
        </div>
        <div class="equipment__item">
          <div class="equipment__item-image">
            <img
              class="equipment__item-image-source"
              src="~/assets/images/equipment-2.png"
              alt=""
            />
          </div>
          <div class="equipment__item-title">Тахеометр Sokkia SET 550RX</div>
        </div>
        <div class="equipment__item">
          <div class="equipment__item-image">
            <img
              class="equipment__item-image-source"
              src="~/assets/images/equipment-3.png"
              alt=""
            />
          </div>
          <div class="equipment__item-title">Дальномер Leica Disto A5</div>
        </div>
        <div class="equipment__item">
          <div class="equipment__item-image">
            <img
              class="equipment__item-image-source"
              src="~/assets/images/equipment-4.png"
              alt=""
            />
          </div>
          <div class="equipment__item-title">Детектор Bosch D-TECT 150 SV</div>
        </div>
      </div>
      <div class="equipment__content">
        <button class="equipment__button equipment__button_slide-prev">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            class="equipment__button-image"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6.5L9 12.5L15 18.5"
              stroke="#898088"
              stroke-width="2"
            />
          </svg>
        </button>
        <div class="swiper equipment__slider">
          <div class="swiper-wrapper equipment__slider-wrapper">
            <div class="swiper-slide equipment__slider-slide">
              <div class="equipment__item">
                <div class="equipment__item-image">
                  <img
                    class="equipment__item-image-source"
                    src="~/assets/images/equipment-1.png"
                    alt=""
                  />
                </div>
                <div class="equipment__item-title">
                  GNSS-приемники Topcon Hiper V
                </div>
              </div>
            </div>
            <div class="swiper-slide equipment__slider-slide">
              <div class="equipment__item">
                <div class="equipment__item-image">
                  <img
                    class="equipment__item-image-source"
                    src="~/assets/images/equipment-2.png"
                    alt=""
                  />
                </div>
                <div class="equipment__item-title">
                  Тахеометр Sokkia SET 550RX
                </div>
              </div>
            </div>
            <div class="swiper-slide equipment__slider-slide">
              <div class="equipment__item">
                <div class="equipment__item-image">
                  <img
                    class="equipment__item-image-source"
                    src="~/assets/images/equipment-3.png"
                    alt=""
                  />
                </div>
                <div class="equipment__item-title">
                  Дальномер Leica Disto A5
                </div>
              </div>
            </div>
            <div class="swiper-slide equipment__slider-slide">
              <div class="equipment__item">
                <div class="equipment__item-image">
                  <img
                    class="equipment__item-image-source"
                    src="~/assets/images/equipment-4.png"
                    alt=""
                  />
                </div>
                <div class="equipment__item-title">
                  Детектор Bosch D-TECT 150 SV
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-scrollbar"></div>
        </div>
        <button class="equipment__button equipment__button_slide-next">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            class="equipment__button-image"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6.5L9 12.5L15 18.5"
              stroke="#898088"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Swiper, Scrollbar, FreeMode } from "swiper";

export class equipmentHandler {
  mainContainer: HTMLElement | null = null;
  equipmentSliders: HTMLElement | null = null;
  buttonNext: HTMLElement | null = null;
  buttonPrev: HTMLElement | null = null;

  constructor(element: HTMLElement) {
    this.mainContainer = element;

    this.equipmentSliders =
      this.mainContainer.querySelector(".equipment__slider");

    this.buttonNext = this.mainContainer.querySelector(
      ".equipment__button_slide-next"
    );
    this.buttonPrev = this.mainContainer.querySelector(
      ".equipment__button_slide-prev"
    );

    this.initEquipmentSlider();

    return this;
  }

  private initEquipmentSlider() {
    const swiper = new Swiper(this.equipmentSliders as HTMLElement, {
      direction: "horizontal",
      touchEventsTarget: "container",
      slidesPerView: 3,
      spaceBetween: 32,
      observer: true,
      freeMode: true,

      modules: [Scrollbar, FreeMode],
      scrollbar: {
        el: ".swiper-scrollbar",
        dragSize: 65,
        hide: false,
      },
    });

    this.buttonNext?.addEventListener("click", () => swiper.slideNext());
    this.buttonPrev?.addEventListener("click", () => swiper.slidePrev());

    return swiper;
  }
}
const initEquipment = () => {
  const equipment = document.querySelectorAll(".equipment");

  equipment.forEach((element) => {
    new equipmentHandler(element as HTMLElement);
  });
};
if (process.browser) {
  window.addEventListener("load", initEquipment);
}
export default {
  name: "AppEquipment",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as ut;
@use "@/assets/scss/styles/variables" as vars;

.equipment {
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 1.8rem 0 2rem 0;

  background: #fcfcfd;

  @include ut.tablet {
    padding: 2.5rem;
  }

  @include ut.desktop {
    padding: 8.2rem 0 0 0;
  }

  &__container {
    display: flex;
    flex-direction: column;

    width: 320px;
    gap: 2rem;

    @include ut.tablet {
      width: 726px;
      gap: 3.2rem;
    }

    @include ut.desktop {
      width: 1200px;
      gap: 50px;
    }
  }

  &__header {
    display: flex;

    @include ut.tablet {
      gap: 3rem;
    }

    @include ut.desktop {
      gap: 6.3rem;
    }

    &-appendix {
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
        font-style: normal;
        font-weight: 400;
        font-size: 2.8rem;
        line-height: 3.2rem;
        color: #342633;
      }
    }

    &-link {
      display: none;

      @include ut.desktop {
        position: relative;
        display: flex;
        gap: 1rem;
        margin-left: auto;
      }

      &-icon {
        width: 2.4rem;
        height: 2.4rem;
      }

      &-text {
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.2rem;

        display: flex;
        align-items: center;

        color: #111e2f;
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

  &__button {
    display: none;

    @include ut.tablet {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 40px;
      height: 40px;

      background: transparent;
      border: 2px solid #898088;
      border-radius: 50px;
    }
    transition: all 0.3s ease-in-out;

    &:hover {
      border-color: #342633;
      transition: all 0.3s ease-in-out;

      .equipment__button-image {
        path {
          stroke: #342633;
          stroke-width: 2;
          transition: all 0.3s ease-in-out;
        }
      }
    }

    &-image {
      path {
        transition: all 0.3s ease-in-out;
      }
    }

    &_slide-prev {
      @include ut.desktop {
        margin: 0 0px 120px 0px;
      }
    }

    &_slide-next {
      margin: 0 7px 0px 0px;
      transform: rotate(180deg);

      @include ut.desktop {
        margin: 0 4px 117px 0px;
      }
    }
  }

  &__content {
    display: none;

    @include ut.desktop {
      display: flex;
      align-items: center;
      padding: 0 3rem;
    }
  }

  &__slider {
    width: 100%;
    height: 210px;

    @include ut.tablet {
      height: 186px;
      width: 580px;

      .swiper-scrollbar {
        display: none;
      }
    }

    @include ut.desktop {
      width: 960px;
      height: 319px;
    }

    &-wrapper {
    }

    &-slide {
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
  }

  &__grid {
    display: flex;
    flex-wrap: wrap;
    row-gap: 2rem;
    column-gap: 3rem;

    @include ut.tablet {
      gap: 2rem;
    }

    @include ut.desktop {
      display: none;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 10px;
    gap: 20px;

    width: 145px;
    height: 127px;

    @include ut.tablet {
      display: flex;
      justify-content: center;
      // align-items: center;

      width: 165px;
      height: 144px;
      gap: 13px;
    }

    @include ut.desktop {
      width: 272px;
      height: 202px;
      gap: 0;
    }

    &-image {
      width: 127px;
      height: 80px;

      @include ut.tablet {
        width: 145px;
        height: 93px;
      }

      @include ut.desktop {
        width: 260px;
        height: 166px;
      }

      &-source {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }

    &-title {
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: #342633;

      @include ut.tablet {
        font-size: 1.4rem;
        line-height: 1.7rem;
      }

      @include ut.desktop {
        font-size: 1.6rem;
        line-height: 1.9rem;
        margin-top: 17px;
      }
    }
  }
}
</style>
