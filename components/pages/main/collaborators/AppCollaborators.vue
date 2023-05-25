<script lang="ts">
import { Swiper, FreeMode, Scrollbar } from "swiper";

export class collaboratorsHandler {
  mainContainer: HTMLElement | null = null;
  collaboratorsSliders: HTMLElement | null = null;
  buttonNext: HTMLElement | null = null;
  buttonPrev: HTMLElement | null = null;

  constructor(element: HTMLElement) {
    this.mainContainer = element;

    this.collaboratorsSliders = this.mainContainer.querySelector(
      ".collaborators__slider"
    );

    this.buttonNext = this.mainContainer.querySelector(
      ".collaborators__button_slide-next"
    );
    this.buttonPrev = this.mainContainer.querySelector(
      ".collaborators__button_slide-prev"
    );

    this.initCollaboratorsSlider();

    return this;
  }

  private initCollaboratorsSlider() {
    const swiper = new Swiper(this.collaboratorsSliders as HTMLElement, {
      direction: "horizontal",
      touchEventsTarget: "container",
      slidesPerView: "auto",
      spaceBetween: 20,
      observer: true,
      freeMode: true,

      modules: [Scrollbar, FreeMode],
      scrollbar: {
        el: ".swiper-scrollbar",
        dragSize: 65,
        hide: false,
      },

      breakpoints: {
        990: {
          spaceBetween: 30,
        },
        1601: {
          spaceBetween: 30,
        },
      },
    });

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

const initCollaborators = () => {
  const collaborators = document.querySelectorAll(".collaborators");

  collaborators.forEach((element) => {
    new collaboratorsHandler(element as HTMLElement);
  });
};
if (process.browser) {
  window.addEventListener("load", initCollaborators);
}

export default {
  name: "AppCollaborators",
};
</script>

<template>
  <section class="collaborators">
    <div class="collaborators__container">
      <header class="collaborators__header">
        <div class="collaborators__header-appendix"></div>
        <h2 class="collaborators__header-title">
          Наши независимые оценщики и эксперты
        </h2>
      </header>
      <div class="collaborators__content">
        <button class="collaborators__button collaborators__button_slide-prev">
          <svg
            width="24"
            height="25"
            class="collaborators__button-image"
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
        <div class="swiper collaborators__slider">
          <div class="swiper-wrapper collaborators__slider-wrapper">
            <div class="swiper-slide collaborators__slider-slide">
              <div class="collaborators__item">
                <div class="collaborators__item-image">
                  <img
                    class="collaborators__item-image-source"
                    src="~/assets/images/expert-1.png"
                    alt=""
                  />
                </div>
                <span class="collaborators__item-title"
                  >Окружко Дмитрий Алексеевич</span
                ><span class="collaborators__item-subtitle"
                  >Эксперт-землеустроитель</span
                >
              </div>
            </div>
            <div class="swiper-slide collaborators__slider-slide">
              <div class="collaborators__item">
                <div class="collaborators__item-image">
                  <img
                    class="collaborators__item-image-source"
                    src="~/assets/images/expert-2.png"
                    alt=""
                  />
                </div>
                <span class="collaborators__item-title"
                  >Афанасьева Наталья Евгеньевна</span
                ><span class="collaborators__item-subtitle"
                  >Эксперт документооборота</span
                >
              </div>
            </div>
            <div class="swiper-slide collaborators__slider-slide">
              <div class="collaborators__item">
                <div class="collaborators__item-image">
                  <img
                    class="collaborators__item-image-source"
                    src="~/assets/images/expert-3.png"
                    alt=""
                  />
                </div>
                <span class="collaborators__item-title"
                  >Фомин Юрий Иванович</span
                ><span class="collaborators__item-subtitle"
                  >Строительный эксперт. Сметчик. Эксперт по инженерным
                  системам</span
                >
              </div>
            </div>
            <div class="swiper-slide collaborators__slider-slide">
              <div class="collaborators__item">
                <div class="collaborators__item-image">
                  <img
                    class="collaborators__item-image-source"
                    src="~/assets/images/expert-4.png"
                    alt=""
                  />
                </div>
                <span class="collaborators__item-title"
                  >Богданов Дмитрий Андреевич</span
                ><span class="collaborators__item-subtitle"
                  >Эксперт-землеустроитель</span
                >
              </div>
            </div>
            <div class="swiper-slide collaborators__slider-slide">
              <div class="collaborators__item">
                <div class="collaborators__item-image">
                  <img
                    class="collaborators__item-image-source"
                    src="~/assets/images/expert-5.png"
                    alt=""
                  />
                </div>
                <span class="collaborators__item-title"
                  >Богданов Алексей Андреевич</span
                ><span class="collaborators__item-subtitle"
                  >Эксперт по электроэнергетике. Кадастровый инженер</span
                >
              </div>
            </div>
            <div class="swiper-slide collaborators__slider-slide">
              <div class="collaborators__item">
                <div class="collaborators__item-image">
                  <img
                    class="collaborators__item-image-source"
                    src="~/assets/images/expert-1.png"
                    alt=""
                  />
                </div>
                <span class="collaborators__item-title"
                  >Окружко Дмитрий Алексеевич</span
                ><span class="collaborators__item-subtitle"
                  >Эксперт-землеустроитель</span
                >
              </div>
            </div>
            <div class="swiper-slide collaborators__slider-slide">
              <div class="collaborators__item">
                <div class="collaborators__item-image">
                  <img
                    class="collaborators__item-image-source"
                    src="~/assets/images/expert-4.png"
                    alt=""
                  />
                </div>
                <span class="collaborators__item-title"
                  >Богданов Дмитрий Андреевич</span
                ><span class="collaborators__item-subtitle"
                  >Эксперт-землеустроитель</span
                >
              </div>
            </div>
            <div class="swiper-slide collaborators__slider-slide">
              <div class="collaborators__item">
                <div class="collaborators__item-image">
                  <img
                    class="collaborators__item-image-source"
                    src="~/assets/images/expert-1.png"
                    alt=""
                  />
                </div>
                <span class="collaborators__item-title"
                  >Окружко Дмитрий Алексеевич</span
                ><span class="collaborators__item-subtitle"
                  >Эксперт-землеустроитель</span
                >
              </div>
            </div>
          </div>
          <div class="swiper-scrollbar"></div>
          <div class="slider-after slider-after_mobile"></div>
        </div>
        <button class="collaborators__button collaborators__button_slide-next">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            class="collaborators__button-image"
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

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as ut;
@use "@/assets/scss/styles/variables" as vars;

.collaborators {
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 1.8rem 0 2rem 0;

  @include ut.tablet {
    padding: 3rem;
  }

  @include ut.desktop {
    padding: 7.2rem 0 0 0;
  }

  &__container {
    display: flex;
    flex-direction: column;

    width: 320px;
    gap: 2rem;

    @include ut.tablet {
      width: 726px;
      gap: 2.8rem;
    }

    @include ut.desktop {
      width: 1200px;
      gap: 7rem;
      border-left: 2px solid rgba(#c2d2df, 0.1);
      border-right: 2px solid rgba(#c2d2df, 0.1);
      padding-bottom: 5.9rem;
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

        width: 300px;
      }
    }
  }

  &__content {
    display: flex;
    align-items: center;

    @include ut.desktop {
      padding: 0 3rem;
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

      /* Black light */

      background: transparent;
      border: 2px solid #898088;
      border-radius: 50px;
      transition: all 0.3s ease-in-out;

      &:hover {
        border-color: #342633;
        transition: all 0.3s ease-in-out;

        .collaborators__button-image {
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
      margin: 0 30px 119px 0px;

      @include ut.desktop {
        margin: 0 0px 0px 0px;
      }
    }

    &_slide-next {
      margin: 0 7px 119px 24px;
      transform: rotate(180deg);

      @include ut.desktop {
        margin: 0 1px 0px 0px;
      }
    }
  }

  &__slider {
    width: 100%;
    height: 327px;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;

      width: 70px;
      height: 300px;

      background: linear-gradient(
        270deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0.8) 52.6%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: matrix(1, 0, 0, -1, 0, 0);
    }

    .swiper-slide {
      width: auto;
    }

    @include ut.tablet {
      height: 355px;
      width: 585px;

      .swiper-scrollbar {
        display: none;
      }
    }

    @include ut.desktop {
      width: 995px;
    }

    &-wrapper {
    }

    &-slide {
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 120px;

    @include ut.tablet {
      width: 175px;
      gap: 2rem;
    }

    &-image {
      width: 120px;
      height: 162px;

      overflow: hidden;
      border-radius: 0.5rem;

      @include ut.tablet {
        width: 175px;
        height: 235px;
      }

      @include ut.desktop {
        width: 175px;
        height: 235px;
      }

      &-source {
        width: 100%;
        height: 100%;
      }
    }

    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.7rem;

      color: #342633;

      @include ut.tablet {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 1.9rem;
      }

      @include ut.desktop {
      }
    }

    &-subtitle {
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.7rem;
      color: #898088;

      @include ut.tablet {
        margin: -8px 0px 0px 0;
      }
    }
  }
}
</style>
