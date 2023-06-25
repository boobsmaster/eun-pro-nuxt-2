<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { max, min, required, regex } from 'vee-validate/dist/rules'

import Input from '~/components/common/input/Input.vue'
extend('required', {
  ...required,
  message: 'Это поле обязательное!',
})
extend('max', {
  ...max,
  message: 'Количество симовлов превышает максимально допустимое!',
})
extend('min', {
  ...min,
  message: 'Менее 5 символов!',
})

extend('phone', {
  ...regex,
  message: 'Введите номер в формате: +7 (999) 999 99 99',
})

extend('email', {
  ...regex,
  message: 'Введите корректный email',
})

export default {
  name: 'QuestionForm',
  components: { ValidationProvider, ValidationObserver, Input },
  emits: ['close'],
  data() {
    const formValues = {
      name: '',
      number: '',
    }

    return {
      formValues,
    }
  },
  methods: {
    save() {
      console.log('formValues', this.formValues)
    },
  },
}
</script>

<template>
  <ValidationObserver v-slot="{ handleSubmit }" tag="div">
    <form @submit.prevent="handleSubmit(save)" class="consultation">
      <header class="consultation__header">
        <h4 class="consultation__header-title">Требуется консультация?</h4>
      </header>
      <div class="consultation__content">
        <div class="consultation__content-item">
          <ValidationProvider rules="required|min:5|max:255" v-slot="{ errors, valid, failed }">
            <Input
              label="Имя"
              placeholder="Иван Иванов"
              :errors="errors"
              :valid="valid"
              :failed="failed"
              v-model="formValues.name"
              id="name"
            />
          </ValidationProvider>
        </div>
        <div class="consultation__content-item">
          <ValidationProvider
            :rules="{
              required: true,
              phone: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
            }"
            v-slot="{ errors, valid, failed }"
          >
            <Input
              label="Телефон"
              placeholder="+7 (999) 999 99 99"
              v-mask="'+7 (###) ###-##-##'"
              v-model="formValues.number"
              :errors="errors"
              :valid="valid"
              :failed="failed"
              id="phone"
            />
          </ValidationProvider>
        </div>
        <div class="consultation__content-item">
          <ValidationProvider
            :rules="{
              required: true,
              email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            }"
            v-slot="{ errors, valid, failed }"
          >
            <Input
              label="Почта"
              placeholder="example@mail.ru"
              v-model="formValues.email"
              :errors="errors"
              :valid="valid"
              :failed="failed"
              id="email"
              class="form__input"
            />
          </ValidationProvider>
        </div>
      </div>
      <div class="consultation__submit">
        <div class="consultation__submit-badge">
          <img class="consultation__submit-badge-icon" src="~/assets/icons/lock-light.svg" alt="" /><span
            class="consultation__submit-badge-text"
            >Я даю согласие на обработку моих персональных данных</span
          >
        </div>
        <button type="submit" class="consultation__submit-button">Заказать экспертизу</button>
      </div>
    </form>
  </ValidationObserver>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as ut;
@use '@/assets/scss/styles/variables' as vars;
.consultation {
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

  @include ut.tablet {
    padding: 3rem;
    margin: 0 0 -33px 0;
  }

  @include ut.desktop {
    margin: 0 0 -104px 0;
    padding: 4rem;
  }

  &__header {
    &-title {
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.4rem;
      color: #262c34;

      @include ut.tablet {
        font-size: 2.4rem;
        line-height: 2.9rem;
      }

      @include ut.desktop {
        font-size: 2.8rem;
        line-height: 3.2rem;
      }
    }
  }

  &__content {
    display: flex;
    gap: 2rem;
    flex-direction: column;

    @include ut.tablet {
      flex-direction: row;
    }

    @include ut.desktop {
      gap: 5rem;
    }

    &-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      @include ut.tablet {
        &:first-child,
        &:last-child {
          width: 197px;
        }
        width: 226px;
      }

      @include ut.desktop {
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

      &-input {
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
    }
  }

  &__submit {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @include ut.tablet {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    @include ut.desktop {
      gap: 5rem;
    }

    &-badge {
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

        @include ut.tablet {
          width: 162px;

          font-size: 1.1rem;
          line-height: 1.8rem;
        }

        @include ut.desktop {
          width: 256px;
          font-size: 1.4rem;
          line-height: 1.8rem;
        }
      }
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

      @include ut.tablet {
        width: 197px;
        height: 40px;
        padding: 12.5px;
      }

      @include ut.desktop {
        width: 340px;
        height: 54px;
        padding: 18px 40px;
      }
    }
  }
}
</style>
