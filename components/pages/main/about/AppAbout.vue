<script>
export default {
  name: "AppAbout",
};
</script>

<template>
  <section class="about">
    <div class="about__wrapper">
      <header class="about__header">
        <div class="about__header-appendix"></div>
        <h2 class="about__header-title">
          Оценочная компания "Экспертиза и управление недвижимостью"
        </h2>
      </header>
      <div class="about__content">
        <div class="about__statistics">
          <div class="about__statistics-column">
            <div class="about__statistics-item">
              <span class="about__statistics-item-title">1 327</span
              ><span class="about__statistics-item-subtitle"
                >Выполненные экспертизы</span
              >
            </div>
            <div class="about__statistics-item">
              <span class="about__statistics-item-title">285</span
              ><span class="about__statistics-item-subtitle"
                >Довольных клиентов</span
              >
            </div>
            <div class="about__statistics-item">
              <span class="about__statistics-item-title">1 327</span
              ><span class="about__statistics-item-subtitle"
                >Выполненные экспертизы</span
              >
            </div>
          </div>
          <div class="about__statistics-column">
            <div class="about__statistics-item">
              <span class="about__statistics-item-title">124</span
              ><span class="about__statistics-item-subtitle"
                >Судебных экспертиз</span
              >
            </div>
            <div class="about__statistics-item">
              <span class="about__statistics-item-title">48 </span
              ><span class="about__statistics-item-subtitle"
                >Обследование зданий</span
              >
            </div>
            <div class="about__statistics-item">
              <span class="about__statistics-item-title">124</span
              ><span class="about__statistics-item-subtitle"
                >Судебных экспертиз</span
              >
            </div>
          </div>
          <div class="about__statistics-column">
            <div class="about__statistics-item">
              <span class="about__statistics-item-title">124</span
              ><span class="about__statistics-item-subtitle"
                >Судебных экспертиз</span
              >
            </div>
            <div class="about__statistics-item">
              <span class="about__statistics-item-title">48</span
              ><span class="about__statistics-item-subtitle"
                >Обследование зданий</span
              >
            </div>
            <div class="about__statistics-item">
              <span class="about__statistics-item-title">124</span
              ><span class="about__statistics-item-subtitle"
                >Судебных экспертиз</span
              >
            </div>
          </div>
        </div>
        <div class="about__info">
          <div class="about__info-image">
            <img
              class="about__info-image-source"
              src="~/assets/images/tas-agro-mobile.png"
              alt=""
            />
          </div>
          <div class="about__info-content">
            <span class="about__info-content-title">Бобров Денис Вадимович</span
            ><span class="about__info-content-subtitle"
              >Генеральный директор. Кадастровый инженер</span
            >
          </div>
          <div class="about__info-content-appeal">
            <!-- <div class="about__info-content-appeal-button"> -->
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="about__info-content-appeal-button"
            >
              <circle
                cx="20"
                cy="20.5"
                r="19"
                stroke="#FFB701"
                stroke-width="2"
              />
              <path
                d="M23.0408 20.2952L17.9255 16.7145C17.3953 16.3434 16.6667 16.7227 16.6667 17.3699V23.6302C16.6667 24.2774 17.3953 24.6567 17.9255 24.2856L23.0408 20.7048C23.183 20.6053 23.183 20.3948 23.0408 20.2952Z"
                fill="#FFB701"
              />
            </svg>

            <!-- <div class="about__info-content-appeal-button-img">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  class="about__info-content-appeal-button-img-source"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid none"
                >
                  <path
                    d="M16.7074 12.2952L8.25877 6.38114C7.72855 6.00998 7 6.38931 7 7.03652V17.9635C7 18.6107 7.72855 18.99 8.25877 18.6189L16.7074 12.7048C16.8496 12.6053 16.8496 12.3947 16.7074 12.2952Z"
                    fill="#FFB701"
                  />
                </svg>
              </div> -->
            <!-- </div> -->
            <span class="about__info-content-appeal-description"
              >Видеообращение для будущих клиентов</span
            >
          </div>
          <div class="about__image about__image_tablet">
            <img
              class="about__info-image-source"
              src="~/assets/images/tas-agro-tablet.png"
              alt=""
            />
          </div>
          <div class="about__image about__image_desktop">
            <img
              class="about__info-image-source"
              src="~/assets/images/tas-agro-desktop.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as ut;
@use "@/assets/scss/styles/variables" as vars;

.about {
  position: relative;

  display: flex;
  justify-content: center;
  padding-top: 2rem;

  @include ut.tablet {
    padding-top: 3rem;
  }

  @include ut.desktop {
    padding-top: 7rem;
  }

  &__image {
    position: absolute;
    display: none;

    &_tablet {
      bottom: 0px;
      right: 11px;
      margin: 0px 0 -2px 0;

      @include ut.tablet {
        display: block;
      }

      @include ut.desktop {
        display: none;
      }
    }

    &_desktop {
      @include ut.desktop {
        pointer-events: none;
        margin: 0px -152px -92px 0px;
        bottom: 0;
        right: 0;
        display: block;
      }
    }
  }

  &__background-image {
    display: none;

    @include ut.tablet {
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;

      width: 178px;
      height: 193px;
    }

    &-source {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    @include ut.tablet {
      gap: 0;
    }
  }

  &__header {
    width: 320px;

    @include ut.tablet {
      display: flex;
      gap: 3rem;

      width: 727px;

      margin-bottom: -2.1rem;
    }

    @include ut.desktop {
      width: 1200px;
      gap: 6.4rem;
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
        font-weight: 400;
        font-size: 28px;

        line-height: 32px;
        width: 400px;
      }
    }

    &-appendix {
      display: none;

      @include ut.tablet {
        display: block;

        width: 46px;
        height: 5px;

        background-color: #c2d2df;

        margin-top: 1.6rem;
      }

      @include ut.desktop {
        width: 39px;
      }
    }
  }

  &__content {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 360;

    gap: 2rem;

    @include ut.tablet {
      width: 726px;

      flex-direction: row;
      align-items: flex-start;
      gap: 6.6rem;

      justify-content: space-between;
    }

    @include ut.desktop {
      width: 1200px;
      justify-content: flex-start;
      margin-top: 7rem;

      gap: 13.5rem;
      padding-bottom: 90px;
    }
  }

  &__statistics {
    display: flex;
    flex-direction: row;

    @include ut.tablet {
      gap: 5.5rem;
    }

    @include ut.desktop {
      gap: 8rem;
      margin-top: 2rem;
    }

    &-column {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      align-items: center;
      width: 12rem;

      @include ut.tablet {
        border-left: 2px solid rgba(#c2d2df, 0.1);
        padding: 6.2rem 0px 4rem 1.4rem;
        gap: 6rem;
      }

      @include ut.desktop {
        width: 14rem;
        padding: 0;
        gap: 8rem;
      }
    }

    &-item {
      display: flex;
      flex-direction: column;

      &-title {
        font-style: normal;
        font-weight: 250;
        font-size: 2.4rem;
        line-height: 2.8rem;
        text-align: center;

        color: #ffb701;

        @include ut.tablet {
          font-weight: 250;

          font-size: 3.6rem;
          line-height: 4.1rem;
        }

        @include ut.desktop {
          font-weight: 250;

          font-size: 6.4rem;
          line-height: 7.3rem;
        }
      }

      &-subtitle {
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 1.7rem;
        width: 110px;

        text-align: center;

        color: #898088;

        @include ut.tablet {
          font-size: 1.4rem;
          line-height: 1.6rem;
        }

        @include ut.desktop {
          text-align: center;
        }
      }
    }
  }

  &__info {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    width: 320px;
    padding-bottom: 2rem;
    border-top: none;

    @include ut.tablet {
      padding: 5.8rem 0 0 0;
      height: 100%;

      border-top: none;
      border-bottom: none;
      border: 2px solid rgba(#c2d2df, 0.1);
      padding-left: 1.5rem;
      gap: 3rem;
    }

    @include ut.desktop {
      padding: 5px 0 0 0;
      border-top: none;
      gap: 8rem;
    }

    &-image {
      position: absolute;
      bottom: 0;
      right: 2px;
      pointer-events: none;

      @include ut.tablet {
        display: none;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      // @include ut.desktop {
      //   margin-top: 9rem;
      // }

      &-title {
        font-style: normal;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 1.9rem;

        color: #342633;

        @include ut.tablet {
          font-size: 2rem;

          width: 150px;

          line-height: 2.4rem;
        }

        @include ut.desktop {
          width: 100%;

          font-size: 2.4rem;
          line-height: 2.9rem;
        }
      }

      &-subtitle {
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2rem;

        color: #898088;

        width: 190px;

        @include ut.tablet {
          font-size: 1.4rem;
          line-height: 1.6rem;
        }

        @include ut.desktop {
          width: 100%;
        }
      }

      &-appeal {
        display: flex;
        align-items: center;

        gap: 1rem;

        @include ut.desktop {
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
        }

        &-button {
          /* outline: none;
          border: 2px solid #ffb701;
          background-color: transparent;
          border-radius: 50%;

          width: 4rem;
          height: 4rem;

          display: flex;
          align-items: center;
          justify-content: center;

          transition: all 0.3s ease-in-out; */
          cursor: pointer;

          transition: all 0.3s ease-in-out;

          &:hover {
            transition: all 0.3s ease-in-out;

            circle {
              stroke: #342633;
              transition: all 0.3s ease-in-out;
            }

            path {
              fill: #342633;
              transition: all 0.3s ease-in-out;
            }
          }

          &-img {
            display: block;

            width: 2.4rem;
            height: 2.4rem;

            &-source {
              display: inline-block;
              width: 100%;
              height: 100%;

              path {
                transition: all 0.3s ease-in-out;
              }
            }
          }

          @include ut.desktop {
            width: 6rem;
            height: 6rem;
          }
        }

        &-description {
          font-weight: 500;
          font-size: 1.2rem;
          line-height: 1.7rem;

          color: #342633;

          width: 100px;

          @include ut.desktop {
            font-size: 1.6rem;
            line-height: 2.3rem;
          }
        }
      }
    }
  }
}
</style>
