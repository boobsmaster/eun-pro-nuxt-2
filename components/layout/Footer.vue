<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__logo">
        <img
          class="footer__logo-source"
          src="~/assets/images/footer-logo.png"
          alt=""
        /><a class="footer__logo-link" href=""></a>
      </div>
      <div class="footer__content">
        <div class="footer__nav">
          <div class="footer__list">
            <h2 class="footer__list-title">Навигация</h2>
            <ul class="footer__list-nav">
              <li class="footer__list-item">
                о компании<a class="footer__list-item-link" href=""></a>
              </li>
              <li class="footer__list-item">
                блог<a class="footer__list-item-link" href=""></a>
              </li>
              <li class="footer__list-item">
                вакансии<a class="footer__list-item-link" href=""></a>
              </li>
              <li class="footer__list-item">
                отзывы<a class="footer__list-item-link" href=""></a>
              </li>
              <li class="footer__list-item">
                сертификаты<a class="footer__list-item-link" href=""></a>
              </li>
              <li class="footer__list-item">
                объекты<a class="footer__list-item-link" href=""></a>
              </li>
            </ul>
          </div>
          <div class="footer__list">
            <h2 class="footer__list-title">Услуги</h2>
            <ul class="footer__list-nav">
              <li class="footer__list-item">
                экспертиза<a class="footer__list-item-link" href=""></a>
              </li>
              <li class="footer__list-item">
                оценка<a class="footer__list-item-link" href=""></a>
              </li>
              <li class="footer__list-item">
                аудит<a class="footer__list-item-link" href=""></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__contacts">
          <div class="footer__contacts-item">
            <div class="footer__contacts-img">
              <img
                class="footer__source"
                src="~/assets/icons/location.svg"
                alt="Location"
              />
            </div>
            <div class="footer__contacts-info">
              <span class="footer__contacts-title">ул. Октябрьская, 4к2 </span
              ><span class="footer__contacts-subtitle">Москва</span>
            </div>
          </div>
          <div class="footer__contacts-item">
            <div class="footer__contacts-img">
              <img
                class="footer__source"
                src="~/assets/icons/location.svg"
                alt="Location"
              />
            </div>
            <div class="footer__contacts-info">
              <span class="footer__contacts-title">просп. Московский, 25/1</span
              ><span class="footer__contacts-subtitle">Санкт-Петербург</span>
            </div>
          </div>
          <div class="footer__contacts-item">
            <div class="footer__contacts-img">
              <img
                class="footer__source"
                src="~/assets/icons/phone-grey.svg"
                alt=""
              />
            </div>
            <div class="footer__contacts-info">
              <span class="footer__contacts-title">+7 (495) 419-25-30</span
              ><span class="footer__contacts-subtitle">Оставить заявку</span>
            </div>
          </div>
          <div class="footer__contacts-item">
            <div class="footer__contacts-img">
              <img
                class="footer__source"
                src="~/assets/icons/mail.svg"
                alt=""
              />
            </div>
            <div class="footer__contacts-info">
              <span class="footer__contacts-title">info@eunpro.ru</span
              ><span class="footer__contacts-subtitle">Мы на связи!</span>
            </div>
          </div>
          <div class="footer__contacts-item">
            <div class="footer__contacts-img">
              <img
                class="footer__source"
                src="~/assets/icons/time.svg"
                alt=""
              />
            </div>
            <div class="footer__contacts-info">
              <span class="footer__contacts-title">с 9:00 по 18:00</span
              ><span class="footer__contacts-subtitle">Сб-Вс - выходной</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__info">
        <span class="footer__info-item footer__info-item_first"
          >ТОВ «Экспертиза и управление недвижемостью»</span
        ><span class="footer__info-item footer__info-item_second">
          ИНН: 590586510793 ОГРН: 317595800040212</span
        >
        <div class="footer__info-socials">
          <button class="footer__info-socials-button">
            <a class="footer__info-socials-button-link" href="#"></a
            ><img
              class="footer__info-socials-button-icon"
              src="~/assets/icons/youTube.svg"
              alt="Youtube"
            />
          </button>
          <button class="footer__info-socials-button">
            <a class="footer__info-socials-button-link" href="#"></a
            ><img
              class="footer__info-socials-button-icon"
              src="~/assets/icons/twitter.svg"
              alt="Twitter"
            />
          </button>
          <button class="footer__info-socials-button">
            <a class="footer__info-socials-button-link" href="#"></a
            ><img
              class="footer__info-socials-button-icon"
              src="~/assets/icons/google.svg"
              alt="Google"
            />
          </button>
          <button class="footer__info-socials-button">
            <a class="footer__info-socials-button-link" href="#"></a
            ><img
              class="footer__info-socials-button-icon"
              src="~/assets/icons/skype.svg"
              alt="Skype"
            />
          </button>
        </div>
      </div>
      <div class="footer__license">
        <span class="footer__license-item footer__license-item_short"
          >2016 - 2020 Eunpro.ru © Все права защищены</span
        ><span class="footer__license-item"
          >Договор оферты и Политика обработки персональных данных</span
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/styles/utils" as ut;
@use "@/assets/scss/styles/variables" as vars;

.footer {
  display: flex;
  justify-content: center;
  flex: 0 1 auto;
  width: 100%;

  background-color: #342633;

  &__container {
    color: white;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;

    width: 320px;
    gap: 20px;

    @include ut.tablet {
      width: 720px;
      padding-top: 6rem;
      gap: 3rem;
    }

    @include ut.desktop {
      width: 1200px;

      display: grid;
      padding-top: 9.1rem;

      grid-column-gap: 0px;

      grid-row-gap: 0px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;

    @include ut.tablet {
      flex-direction: row;
      gap: 13.4rem;
    }

    @include ut.desktop {
      grid-area: 1 / 2 / 3 / 3;

      margin-left: 3rem;
      padding-bottom: 5rem;

      gap: 19rem;
    }
  }

  &__logo {
    position: relative;

    width: 228px;
    height: 44px;

    @include ut.desktop {
      grid-area: 1 / 1 / 2 / 2;
    }

    &-source {
      width: 100%;
      height: 100%;
    }

    &-link {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
    }
  }

  &__nav {
    display: flex;
    gap: 4.4rem;

    @include ut.tablet {
      gap: 9.6rem;
    }

    @include ut.desktop {
      gap: 16rem;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 1.9rem;

      letter-spacing: 0.2em;

      text-transform: uppercase;

      color: #898088;

      @include ut.tablet {
        font-style: normal;
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.4rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
      }
    }

    &-nav {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    &-item {
      position: relative;
      font-style: normal;
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.7rem;

      letter-spacing: 0.2em;
      text-transform: uppercase;

      color: #f3f3f3;

      &-link {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
      }
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 3.5rem;

    @include ut.tablet {
      margin: -3px 0 0px -1px;
    }

    @include ut.desktop {
      width: 221px;
      margin: 0;

      padding: -1px 0 0px -8px;
    }

    &-item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    &-img {
      width: 2.4rem;
      height: 2.4rem;
    }

    &-source {
      width: 100%;
      height: 100%;
    }

    &-info {
      display: flex;
      flex-direction: column;
    }

    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: #f3f3f3;
    }

    &-subtitle {
      font-style: normal;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: #898088;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding-top: 1rem;
    padding-bottom: 3rem;

    border-bottom: 2px solid rgba(#f3f3f3, 0.1);

    @include ut.tablet {
      flex-direction: row;
      align-items: center;
      gap: 2.1rem;

      padding-bottom: 3rem;
      padding-top: 4rem;
      border-bottom: 2px solid rgba(#f3f3f3, 0.1);
    }

    @include ut.desktop {
      grid-area: 2 / 1 / 3 / 2;
      flex-direction: column;
      align-items: flex-start;
      border: none;

      padding: 0;
      margin: -19px 0 0 0px;
      gap: 2rem;
    }

    &-item {
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2.3rem;

      color: #ffffff;

      &_first {
        @include ut.tablet {
          width: 226px;
          white-space: break-spaces;
        }
      }

      &_second {
        font-weight: 400;

        width: 184px;

        @include ut.tablet {
          width: 189px;
        }
      }
    }

    &-socials {
      display: flex;
      justify-content: center;
      gap: 1rem;

      padding-top: 1rem;

      @include ut.tablet {
        margin-left: 3.3rem;
        padding: 0;
      }

      @include ut.desktop {
        margin: 0 0 0 0;
        padding-top: 25px;
      }

      &-button {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        outline: none;
        background-color: transparent;

        background: #898088;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;

        width: 2.4rem;
        height: 2.4rem;

        &-link {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        &-icon {
        }
      }
    }
  }

  &__license {
    display: flex;
    flex-direction: column;

    gap: 2rem;

    padding-bottom: 2rem;

    @include ut.tablet {
      flex-direction: row;
      gap: 6.4rem;
    }

    @include ut.desktop {
      border-top: 2px solid rgba(#f3f3f3, 0.1);
      grid-area: 3 / 1 / 4 / 3;
      padding-top: 3rem;
      padding-bottom: 2.6rem;
      justify-content: space-between;
    }

    &-item {
      font-style: normal;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2.3rem;

      display: flex;
      align-items: center;

      color: rgba(#f3f3f3, 0.6);

      &_short {
        width: 182.4px;
        word-break: break-all;
        white-space: break-spaces;

        @include ut.desktop {
          width: fit-content;
        }
      }
    }
  }
}
</style>
