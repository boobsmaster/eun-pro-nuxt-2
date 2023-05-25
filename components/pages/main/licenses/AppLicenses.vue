<template>
  <section class="licenses">
    <div class="licenses__container">
      <header class="licenses__header">
        <div class="licenses__header-appendix"></div>
        <h2 class="licenses__header-title">Наши сертификаты и лицензии</h2>
      </header>
      <div class="licenses__content">
        <button class="licenses__button licenses__button_slide-prev">
          <svg
            width="24"
            height="25"
            class="licenses__button-image"
            viewBox="0 0 24 25"
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
        <div class="swiper licenses__slider">
          <div class="swiper-wrapper licenses__slider-wrapper">
            <div class="swiper-slide licenses__slider-slide">
              <img
                class="licenses__slider-slide-image"
                src="~/assets/images/license.png"
                alt=""
              />
            </div>
            <div class="swiper-slide licenses__slider-slide">
              <img
                class="licenses__slider-slide-image"
                src="~/assets/images/license.png"
                alt=""
              />
            </div>
            <div class="swiper-slide licenses__slider-slide">
              <img
                class="licenses__slider-slide-image"
                src="~/assets/images/license.png"
                alt=""
              />
            </div>
            <div class="swiper-slide licenses__slider-slide">
              <img
                class="licenses__slider-slide-image"
                src="~/assets/images/license.png"
                alt=""
              />
            </div>
            <div class="swiper-slide licenses__slider-slide">
              <img
                class="licenses__slider-slide-image"
                src="~/assets/images/license.png"
                alt=""
              />
            </div>
            <div class="swiper-slide licenses__slider-slide">
              <img
                class="licenses__slider-slide-image"
                src="~/assets/images/license.png"
                alt=""
              />
            </div>
            <div class="swiper-slide licenses__slider-slide">
              <img
                class="licenses__slider-slide-image"
                src="~/assets/images/license.png"
                alt=""
              />
            </div>
            <div class="swiper-slide licenses__slider-slide">
              <img
                class="licenses__slider-slide-image"
                src="~/assets/images/license.png"
                alt=""
              />
            </div>
          </div>
          <div class="swiper-scrollbar"></div>
          <div class="slider-after slider-after_mobile"></div>
        </div>
        <button class="licenses__button licenses__button_slide-next">
          <svg
            width="24"
            height="25"
            class="licenses__button-image"
            viewBox="0 0 24 25"
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
import { Swiper, Navigation, Scrollbar, Pagination } from "swiper";

export class LicensesHandler {
  mainContainer: HTMLElement | null = null;
  licensesSliders: HTMLElement | null = null;
  buttonNext: HTMLElement | null = null;
  buttonPrev: HTMLElement | null = null;

  constructor(element: HTMLElement) {
    this.mainContainer = element;

    this.licensesSliders =
      this.mainContainer.querySelector(".licenses__slider");

    this.buttonNext = this.mainContainer.querySelector(
      ".licenses__button_slide-next"
    );
    this.buttonPrev = this.mainContainer.querySelector(
      ".licenses__button_slide-prev"
    );

    this.initLicensesSlider();

    return this;
  }

  private getOffset() {
    const container = document.querySelector(".licenses__header");
    const containerRect = container?.getBoundingClientRect();

    return containerRect?.x;
  }

  private setOffset() {
    return (this.getOffset() as number) - 20;
  }

  private initLicensesSlider() {
    const swiper = new Swiper(this.licensesSliders as HTMLElement, {
      direction: "horizontal",
      touchEventsTarget: "container",
      slidesPerView: "auto",
      spaceBetween: 20,
      observer: true,
      freeMode: true,
      slidesOffsetBefore: this.setOffset(),

      modules: [Scrollbar],
      scrollbar: {
        el: ".swiper-scrollbar",
        dragSize: 65,
        hide: false,
      },

      breakpoints: {
        990: {
          slidesOffsetBefore: 0,
          spaceBetween: 20,
        },
        1601: {
          slidesOffsetBefore: 0,
          spaceBetween: 30,
        },
      },
    });

    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth <= 990) {
          swiper.params.slidesOffsetBefore = this.setOffset() as number;
          swiper.updateSize();
          swiper.updateProgress();
          swiper.update();
        } else {
          swiper.params.slidesOffsetBefore = 0;
          swiper.update();
        }
      },
      false
    );

    this.buttonNext?.addEventListener("click", () => swiper.slideNext());
    this.buttonPrev?.addEventListener("click", () => swiper.slidePrev());

    const afterElement = this.mainContainer?.querySelector(
      ".slider-after"
    ) as HTMLElement;

    swiper.on("sliderFirstMove", () => {
      afterElement.style.opacity = "0";
      afterElement.style.zIndex = "-1";
    });

    swiper.on("reachBeginning", () => {
      const afterElement = this.mainContainer?.querySelector(
        ".slider-after"
      ) as HTMLElement;

      afterElement.style.opacity = "1";
      afterElement.style.zIndex = "1";
    });

    return swiper;
  }
}
const initLicenses = () => {
  const licenses = document.querySelectorAll(".licenses");

  licenses.forEach((element) => {
    new LicensesHandler(element as HTMLElement);
  });
};
if (process.browser) {
  window.addEventListener("load", initLicenses);
}

export default {
  name: "AppLicenses",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/styles/utils" as ut;
@use "@/assets/scss/styles/variables" as vars;

.licenses {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1.8rem 2rem 2rem 2rem;
  background: #fcfcfd;

  @include ut.tablet {
    justify-content: center;
    padding: 3rem;
  }

  @include ut.desktop {
    padding: 7.2rem 0 0 0;
  }

  &__container {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    gap: 2rem;

    @include ut.tablet {
      align-items: unset;
      width: 726px;
      gap: 3.2rem;
    }

    @include ut.desktop {
      width: 1200px;
      gap: 5rem;
      padding-bottom: 5.9rem;
    }
  }

  &__header {
    display: flex;
    width: 100%;
    max-width: 320px;

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

        width: 300px;
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
      transition: all 0.3s ease-in-out;

      &:hover {
        border-color: #342633;
        transition: all 0.3s ease-in-out;

        .licenses__button-image {
          path {
            stroke: #342633;
            stroke-width: 2;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }

    &-image {
      path {
        transition: all 0.3s ease-in-out;
      }
    }

    &_slide-prev {
      // margin: 0 30px 0px 0;

      @include ut.desktop {
        margin: 0 0px 0px 0px;
      }
    }

    &_slide-next {
      margin: 0 7px 0px 0px;
      transform: rotate(180deg);

      @include ut.desktop {
        margin: 0 1px 0px 0px;
      }
    }
  }

  &__content {
    display: flex;
    align-items: center;
    width: 100%;

    @include ut.desktop {
      padding: 0 3rem;
    }
  }

  &__slider {
    width: 100%;
    height: 210px;

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

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;

      width: 176px;
      height: 315px;
      z-index: 2;

      background: linear-gradient(
        270deg,
        #fcfcfd 0%,
        rgba(252, 252, 253, 0.8) 52.6%,
        rgba(252, 252, 253, 0) 100%
      );

      transform: matrix(1, 0, 0, -1, 0, 0);
    }

    @include ut.tablet {
      height: 186px;
      width: 580px;

      .swiper-scrollbar {
        display: none;
      }
    }

    @include ut.desktop {
      width: 995px;
      height: 319px;
    }

    &-wrapper {
    }
    &-slide {
      width: 130px;
      height: 182px;

      @include ut.desktop {
        width: 226px;
        height: 315px;
      }

      &-image {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
