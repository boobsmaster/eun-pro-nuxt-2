<template>
  <section class="contacts">
    <div class="contacts__container">
      <h2 class="contacts__title">Связь с нами!</h2>
      <div class="contacts__list">
        <div class="contacts__item">
          <div class="contacts__image">
            <img
              class="contacts__image-source"
              src="~/assets/icons/location.svg"
              alt="Location"
            />
          </div>
          <div class="contacts__info">
            <span class="contacts__info-title">ул. Октябрьская, 4к2 </span
            ><span class="contacts__info-subtitle">Москва</span>
          </div>
        </div>
        <div class="contacts__item">
          <div class="contacts__image">
            <img
              class="contacts__image-source"
              src="~/assets/icons/location.svg"
              alt="Location"
            />
          </div>
          <div class="contacts__info">
            <span class="contacts__info-title">просп. Московский, 25/1</span
            ><span class="contacts__info-subtitle">Санкт-Петербург</span>
          </div>
        </div>
        <div class="contacts__item">
          <div class="contacts__image">
            <img
              class="contacts__image-source"
              src="~/assets/icons/phone-grey.svg"
              alt=""
            />
          </div>
          <div class="contacts__info">
            <span class="contacts__info-title">+7 (495) 419-25-30</span
            ><span class="contacts__info-subtitle">Оставить заявку</span>
          </div>
        </div>
        <div class="contacts__item">
          <div class="contacts__image">
            <img
              class="contacts__image-source"
              src="~/assets/icons/mail.svg"
              alt=""
            />
          </div>
          <div class="contacts__info">
            <span class="contacts__info-title">info@eunpro.ru</span
            ><span class="contacts__info-subtitle">Мы на связи!</span>
          </div>
        </div>
        <div class="contacts__item">
          <div class="contacts__image">
            <img
              class="contacts__image-source"
              src="~/assets/icons/time.svg"
              alt=""
            />
          </div>
          <div class="contacts__info">
            <span class="contacts__info-title">с 9:00 по 18:00</span
            ><span class="contacts__info-subtitle">Сб-Вс - выходной</span>
          </div>
        </div>
      </div>
      <button class="contacts__button">
        перезвоните мне<a class="contacts__button-link" href=""> </a>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppContactMenu",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as ut;
@use "@/assets/scss/styles/variables" as vars;

.contacts {
  position: fixed;

  display: none;

  top: 87px;
  left: 0;
  width: 100%;
  height: 100%;

  background: #342633;
  padding: 2rem;

  &_active {
    display: flex;
    justify-content: center;
  }

  @include ut.tablet {
    display: none;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 76px;
    width: 320px;
  }

  &__title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #898088;
  }

  &__item {
    display: flex;
    gap: 1rem;
  }

  &__image {
    width: 2.4rem;
    height: 2.4rem;

    &-source {
      width: 100%;
      height: 100%;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;

    gap: 2rem;
  }

  &__info {
    display: flex;
    flex-direction: column;
    margin: 0 0px -1px 0px;

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

  &__button {
    position: relative;
    width: 100%;
    outline: none;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 40px;
    gap: 10px;

    width: 320px;
    height: 40px;

    background: #ffb701;
    border-radius: 5px;

    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;

    text-transform: uppercase;

    color: #342633;

    &-link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
