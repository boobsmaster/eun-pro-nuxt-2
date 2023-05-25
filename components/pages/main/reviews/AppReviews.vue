<template>
  <section class="reviews">
    <div class="reviews__container">
      <header class="reviews__header">
        <div class="reviews__header-appendix"></div>
        <h2 class="reviews__header-title">Отзывы о нашей работе</h2>
      </header>
      <div class="reviews__content">
        <button class="reviews__button reviews__button_slide-prev">
          <svg
            width="24"
            height="25"
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
        <div class="swiper reviews__slider reviews__slider_after">
          <div class="swiper-wrapper reviews__slider-wrapper">
            <div class="swiper-slide reviews__slider-slide">
              <div class="reviews__item">
                <div class="reviews__item-image">
                  <img
                    class="reviews__item-image-source"
                    src="~/assets/images/review-1.jpg"
                    alt=""
                  />
                </div>
                <div class="reviews__item-info">
                  <div class="reviews__item-title">МГТУ им. Баумана</div>
                  <div class="reviews__item-description">
                    выполнение экспертных, кадастровых и оценочных работ
                  </div>
                  <div class="reviews__item-text">Кейс отзыва:</div>
                  <div class="reviews__item-link">
                    <img
                      class="reviews__item-link-icon"
                      src="~/assets/icons/link.svg"
                      alt=""
                    />
                    <div class="reviews__item-link-text">МГТУ им. Баумана</div>
                    <a class="reviews__item-link-source" href=""> </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide reviews__slider-slide">
              <div class="reviews__item">
                <div class="reviews__item-image">
                  <img
                    class="reviews__item-image-source"
                    src="~/assets/images/review-2.jpg"
                    alt=""
                  />
                </div>
                <div class="reviews__item-info">
                  <div class="reviews__item-title">МОУ Новопетровская СОШ</div>
                  <div class="reviews__item-description">
                    проведение работ по экспертизе фундаментов зданий школы
                  </div>
                  <div class="reviews__item-text">Кейс отзыва:</div>
                  <div class="reviews__item-link">
                    <img
                      class="reviews__item-link-icon"
                      src="~/assets/icons/link.svg"
                      alt=""
                    />
                    <div class="reviews__item-link-text">
                      МОУ Новопетровская СОШ
                    </div>
                    <a class="reviews__item-link-source" href=""> </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide reviews__slider-slide">
              <div class="reviews__item">
                <div class="reviews__item-image">
                  <img
                    class="reviews__item-image-source"
                    src="~/assets/images/review-1.jpg"
                    alt=""
                  />
                </div>
                <div class="reviews__item-info">
                  <div class="reviews__item-title">МГТУ им. Баумана</div>
                  <div class="reviews__item-description">
                    выполнение экспертных, кадастровых и оценочных работ
                  </div>
                  <div class="reviews__item-text">Кейс отзыва:</div>
                  <div class="reviews__item-link">
                    <img
                      class="reviews__item-link-icon"
                      src="~/assets/icons/link.svg"
                      alt=""
                    />
                    <div class="reviews__item-link-text">МГТУ им. Баумана</div>
                    <a class="reviews__item-link-source" href=""> </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide reviews__slider-slide">
              <div class="reviews__item">
                <div class="reviews__item-image">
                  <img
                    class="reviews__item-image-source"
                    src="~/assets/images/review-2.jpg"
                    alt=""
                  />
                </div>
                <div class="reviews__item-info">
                  <div class="reviews__item-title">МОУ Новопетровская СОШ</div>
                  <div class="reviews__item-description">
                    проведение работ по экспертизе фундаментов зданий школы
                  </div>
                  <div class="reviews__item-text">Кейс отзыва:</div>
                  <div class="reviews__item-link">
                    <img
                      class="reviews__item-link-icon"
                      src="~/assets/icons/link.svg"
                      alt=""
                    />
                    <div class="reviews__item-link-text">
                      МОУ Новопетровская СОШ
                    </div>
                    <a class="reviews__item-link-source" href=""> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-scrollbar"></div>
          <div class="slider-after">
            <button class="slider__button slider__button_slide-next">
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
          <div class="slider-before">
            <button class="slider__button slider__button_slide-prev">
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
        <button class="reviews__button reviews__button_slide-next">
          <svg
            width="24"
            height="25"
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
import { Swiper, Scrollbar } from "swiper";

export class reviewsHandler {
  mainContainer: HTMLElement | null = null;
  reviewsSliders: HTMLElement | null = null;
  buttonNext: HTMLElement | null = null;
  buttonPrev: HTMLElement | null = null;

  constructor(element: HTMLElement) {
    this.mainContainer = element;

    this.reviewsSliders = this.mainContainer.querySelector(".reviews__slider");

    this.buttonNext = this.mainContainer.querySelector(
      ".slider__button_slide-next"
    );
    this.buttonPrev = this.mainContainer.querySelector(
      ".slider__button_slide-prev"
    );

    this.initReviewsSlider();
    this.upgradeMargin();
    this.resizeListener();

    return this;
  }

  private upgradeMargin() {
    const container = document.querySelector(".reviews__header");
    const slider = document.querySelector(".reviews__slider") as HTMLElement;

    const containerRect = container?.getBoundingClientRect();

    if (window.innerWidth <= 990) {
      slider.style.marginLeft = `${containerRect?.x as number}px`;
    } else {
      slider.style.marginLeft = `0px`;
    }
  }

  private resizeListener() {
    window.addEventListener("resize", this.upgradeMargin.bind(this));
  }

  private initReviewsSlider() {
    const swiper = new Swiper(this.reviewsSliders as HTMLElement, {
      direction: "horizontal",
      touchEventsTarget: "container",
      slidesPerView: "auto",
      spaceBetween: 30,
      observer: true,

      modules: [Scrollbar],
      scrollbar: {
        el: ".swiper-scrollbar",
        dragSize: 65,
        hide: false,
      },
      breakpoints: {
        900: {
          slidesPerView: "auto",
        },
      },
    });

    const beforeElement = this.mainContainer?.querySelector(
      ".slider-before"
    ) as HTMLElement;

    const afterElement = this.mainContainer?.querySelector(
      ".slider-after"
    ) as HTMLElement;

    beforeElement.style.opacity = "0";
    beforeElement.style.zIndex = "-1";

    this.buttonNext?.addEventListener("click", () => swiper.slideNext());
    this.buttonPrev?.addEventListener("click", () => swiper.slidePrev());

    swiper.on("slideChange", () => {
      if (swiper.realIndex === 0) {
        afterElement.style.opacity = "1";
        afterElement.style.zIndex = "1";

        beforeElement.style.opacity = "0";
        beforeElement.style.zIndex = "-1";
      }

      if (swiper.realIndex === swiper.slides.length) {
        afterElement.style.opacity = "0";
        afterElement.style.zIndex = "-1";
      }

      if (swiper.realIndex > 0) {
        beforeElement.style.opacity = "1";
        beforeElement.style.zIndex = "1";
      }
    });

    swiper.on("reachEnd", () => {
      const afterElement = this.mainContainer?.querySelector(
        ".slider-after"
      ) as HTMLElement;

      afterElement.style.opacity = "0";
      afterElement.style.zIndex = "-1";
    });

    return swiper;
  }
}
const initReviews = () => {
  const reviews = document.querySelectorAll(".reviews");

  reviews.forEach((element) => {
    new reviewsHandler(element as HTMLElement);
  });
};

if (process.browser) {
  window.addEventListener("load", initReviews);
}
export default {
  name: "AppReviews",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/styles/utils" as ut;
@use "@/assets/scss/styles/variables" as vars;

.slider__button {
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
    display: none;

    @include ut.tablet {
      display: flex;
    }

    @include ut.desktop {
      margin: 0 0px 0px 0px;
    }
  }

  &_slide-next {
    display: none;

    @include ut.tablet {
      display: flex;
    }

    transform: rotate(180deg);
  }
}

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

    background: linear-gradient(
      270deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    z-index: 4;

    button {
      margin: -59px -66px 0px 0px;
    }
  }
}

.slider-before {
  display: none;

  @include ut.tablet {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    float: left;
    width: 173px;
    height: 100%;

    transition: all 0.3s ease-in-out;

    z-index: 4;
    background: linear-gradient(91deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);

    button {
      margin: 29px -104px 0px 0px;
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

  transition: all 0.3s ease-in-out;

  background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  z-index: 4;

  @include ut.tablet {
    display: none;
  }
}

.reviews {
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 2.2rem 0 2rem 0;

  background: #fcfcfd;

  @include ut.tablet {
    padding: 33px 0 0 0;
  }

  @include ut.desktop {
    padding: 7px 0 0 0;
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
      gap: 50px;
      padding: 0 0 93px 0;
    }
  }

  &__header {
    display: flex;
    width: 320px;

    @include ut.tablet {
      width: unset;
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

        margin-top: 1.4rem;
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
  }

  &__button {
    display: none;

    @include ut.tablet {
      align-items: center;
      justify-content: center;

      width: 40px;
      height: 40px;

      background: transparent;
      border: 2px solid #898088;
      border-radius: 50px;
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
    position: relative;

    display: flex;
    width: 100%;
    align-items: center;

    &::after {
      position: absolute;

      content: "";
      width: 136px;
      height: 389px;
      right: 0;
      top: 0;
      z-index: 2;
      pointer-events: none;

      background: linear-gradient(
        270deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0.8) 52.6%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: matrix(1, 0, 0, -1, 0, 0);

      @include ut.tablet {
        display: none;
      }
    }

    @include ut.tablet {
      position: relative;

      width: 857px;
    }

    @include ut.desktop {
      position: unset;

      width: 100%;
    }
  }

  &__slider {
    width: 100%;
    height: 414px;

    .swiper-scrollbar-horizontal {
      height: 5px;
      width: 320px;
      bottom: 0;

      @include ut.desktop {
        transform: unset;
        left: 0;
        width: 100%;
      }
    }
    .swiper-slide {
      width: auto;
    }
    @include ut.tablet {
      width: 861px;
      height: 288px;

      padding-right: 16px;

      .swiper-scrollbar {
        display: none;
      }
    }

    @include ut.desktop {
      width: 100%;
      height: 285px;
    }
    .slider-after {
      button {
        margin: -29px -66px 0px 0px;
      }
    }
    .slider-before {
      margin: -29px 0 0px -66px;
    }

    &-wrapper {
    }

    &-slide {
      &:first-child {
        margin-left: 15px;

        @include ut.tablet {
          margin-left: 0;
        }
      }
    }
  }

  &__item {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;

    width: 288px;
    height: 388px;

    padding: 2rem;

    background: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

    @include ut.tablet {
      flex-direction: row;
      padding: 3rem;
      width: 483px;
      height: 260px;
    }

    &-image {
      width: 125px;
      height: 172px;

      @include ut.tablet {
        flex: 0 0 auto;
        width: 145px;
        height: 200px;
      }

      &-source {
        width: 100%;
        height: 100%;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      @include ut.tablet {
        margin: -12px 0px 0 0;
      }
    }

    &-title {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.7rem;

      color: #342633;

      @include ut.tablet {
        font-size: 1.6rem;
        line-height: 3rem;
      }
    }

    &-description {
      font-size: 1.4rem;
      line-height: 2rem;
      color: #898088;

      @include ut.tablet {
        font-size: 1.6rem;
        line-height: 2.3rem;
      }
    }

    &-text {
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 1.5rem;
      text-transform: uppercase;
      color: #342633;
    }

    &-link {
      position: relative;
      display: flex;
      gap: 1rem;
      margin: -7px 0 0 0px;

      &-icon {
        width: 2.4rem;
        height: 2.4rem;
      }

      &-text {
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2rem;
        color: #898088;

        @include ut.tablet {
          font-weight: 500;
          font-size: 1.6rem;
          line-height: 1.9rem;
        }
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
}
</style>
