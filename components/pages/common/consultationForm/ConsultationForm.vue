<script>
export default {
  name: 'ConsultationForm',
}
</script>

<template>
  <div class="form-consultation">
    <h4 class="form-consultation__title">Требуется консультация?</h4>
    <div class="form-consultation__content">
      <div class="form-consultation__content-item">
        <span class="form-consultation__content-item-caption"> Имя </span>
        <input class="form-consultation__content-input" placeholder="Иван Иванов" />
      </div>
      <div class="form-consultation__content-item">
        <span class="form-consultation__content-item-caption"> Телефон </span>
        <input class="form-consultation__content-input" placeholder="+7 (999) 999 99 99" />
      </div>
      <div class="form-consultation__content-item">
        <span class="form-consultation__content-item-caption">Почта</span>
        <input class="form-consultation__content-input" placeholder="example@mail.ru" />
      </div>
    </div>

    <div class="form-consultation__submit">
      <div class="form-consultation__submit-badge">
        <img class="form-consultation__submit-badge-icon" src="~/assets/icons/lock-light.svg" alt="" />
        <span class="form-consultation__submit-badge-text">Я даю согласие на обработку моих персональных данных</span>
      </div>
      <button class="form-consultation__submit-button">Заказать экспертизу</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;

.form-consultation {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;
  margin: 0 0 -20px 0;
  width: 100%;
  padding: 2rem;
  z-index: 3;

  background: white;

  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);

  @include mx.desktop {
  }

  @include mx.tablet {
    padding: 3rem;
    margin: 0 0 -41px 0;
  }

  @include mx.desktop {
    margin: 0 0 -61px 0;
    padding: 4rem;
  }

  &__title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    color: #262c34;

    @include mx.tablet {
      font-size: 2.4rem;
      line-height: 2.9rem;
    }

    @include mx.desktop {
      font-size: 2.8rem;
      line-height: 3.2rem;
    }
  }

  &__content {
    display: flex;
    gap: 2rem;
    flex-direction: column;

    @include mx.tablet {
      flex-direction: row;
    }

    @include mx.desktop {
      gap: 5rem;
    }
  }

  &__content-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @include mx.tablet {
      &:first-child,
      &:last-child {
        width: 197px;
      }
      width: 226px;
    }

    @include mx.desktop {
      width: 340px;

      &:first-child,
      &:last-child {
        width: 340px;
      }
    }

    &-caption {
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.6rem;

      color: #283c63;
    }
  }

  &__content-input {
    background: #ffffff;

    border-radius: 4px;
    border: 1px solid #e2e1f2;

    padding: 1.2rem;

    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;

    color: #828282;
  }

  &__submit {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @include mx.tablet {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    @include mx.desktop {
      gap: 5rem;
    }

    &-button {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 18px 40px;
      gap: 10px;

      width: 100%;
      height: 40px;

      background: #ffb701;
      border-radius: 5px;
      border: none;
      outline: none;
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 1.5rem;

      text-transform: uppercase;

      color: #262c34;

      transition: background-color 0.3s ease-in-out;

      &:hover {
        background: #ffca45;

        transition: background-color 0.3s ease-in-out;
      }

      @include mx.tablet {
        width: 197px;
        height: 40px;
        padding: 12.5px;
      }

      @include mx.desktop {
        width: 340px;
        height: 54px;
        padding: 18px 40px;
      }
    }
  }

  &__submit-badge {
    display: flex;
    align-items: center;
    gap: 2rem;

    &-icon {
      width: 4rem;
      height: 4rem;
    }

    &-text {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.8rem;

      display: flex;
      align-items: center;

      color: #898088;

      @include mx.tablet {
        width: 162px;

        font-size: 1.1rem;
        line-height: 1.8rem;
      }

      @include mx.desktop {
        width: 256px;
        font-size: 1.4rem;
        line-height: 1.8rem;
      }
    }
  }
}
</style>
