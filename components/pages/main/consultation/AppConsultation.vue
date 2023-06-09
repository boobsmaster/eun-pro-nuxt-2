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

export default {
  name: 'AppConsultation',
  components: {
    ValidationProvider,
    ValidationObserver,
    Input,
  },
  data() {
    const formValues = {
      name: '',
      phone: '',
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
  <section class="consultation">
    <div class="consultation__container">
      <header class="consultation__header">
        <span class="consultation__header-title consultation__header-title_regular">
          Требуется
          <span class="consultation__header-title consultation__header-title_bold"> консультация? </span>
        </span>
      </header>
      <ValidationObserver v-slot="{ handleSubmit }" tag="div">
        <form @submit.prevent="handleSubmit(save)" class="consultation__form">
          <div class="consultation__form-item">
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
                v-model="formValues.phone"
                :errors="errors"
                :valid="valid"
                :failed="failed"
                :dark="true"
                id="phone"
              />
            </ValidationProvider>
          </div>
          <div class="consultation__form-item">
            <ValidationProvider rules="required|min:5|max:255" v-slot="{ errors, valid, failed }">
              <Input
                label="Имя"
                placeholder="Иван Иванов"
                :errors="errors"
                :valid="valid"
                :failed="failed"
                :dark="true"
                v-model="formValues.name"
                id="name"
              />
            </ValidationProvider>
          </div>
          <div class="consultation__form-agreement">
            <img class="consultation__form-agreement-badge" src="~/assets/icons/lock.svg" alt="" /><span
              class="consultation__form-agreement-description"
              >Я даю согласие на обработку моих персональных данных</span
            >
          </div>
          <button type="submit" class="consultation__form-button">
            <span class="consultation__form-button-text">перезвоните мне</span>
          </button>
        </form>
      </ValidationObserver>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as ut;
@use '@/assets/scss/styles/variables' as vars;

.consultation {
  display: flex;
  justify-content: center;

  width: 100%;

  background: #342633;

  padding: 2rem 0;

  @include ut.tablet {
    padding: 3rem 0 2.9rem;
  }

  @include ut.desktop {
    background: #ffffff;
    padding: 0;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 2.2rem;

    width: 320px;

    @include ut.tablet {
      width: 726px;
      gap: 3.2rem;
    }

    @include ut.desktop {
      padding: 30px 0px 2.9rem 31px;

      gap: 2.2rem;
      width: 1202px;
      background: #342633;
    }
  }

  &__header {
    &-title {
      display: flex;
      align-items: center;

      color: #f3f3f3;
      gap: 5px;

      &_regular {
        font-size: 2rem;
        font-weight: 400;
        line-height: 2.3rem;

        letter-spacing: 0em;

        text-align: left;

        @include ut.desktop {
          font-size: 2.8rem;
          line-height: 3.2rem;
        }
      }

      &_bold {
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.4rem;
        letter-spacing: 0em;

        text-align: left;

        @include ut.desktop {
          font-size: 2.8rem;
          line-height: 3.4rem;
        }
      }
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @include ut.tablet {
      flex-direction: row;
      align-items: flex-start;
    }

    @include ut.desktop {
      gap: 4.5rem;
    }

    &-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      &-title {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.6rem;

        color: #f3f3f3;
      }

      &-input {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.6rem;

        background: #433142;
        border-radius: 5px;
        border: none;

        color: #898088;

        padding: 12px;

        @include ut.tablet {
          width: 165px;
        }

        @include ut.desktop {
          width: 254px;
        }
      }
    }

    &-agreement {
      display: flex;
      gap: 1rem;

      @include ut.tablet {
        gap: 0.5rem;
        margin: 0px 0 7px 0;
        flex: 0 0 auto;
        align-self: center;
      }

      @include ut.desktop {
        margin: 0px 0px 4px -14px;
        gap: 2.2rem;
      }

      &-badge {
        @include ut.tablet {
          width: 2.4rem;
          height: 2.4rem;
        }

        @include ut.desktop {
          width: 4rem;
          height: 4rem;
        }
      }

      &-description {
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2rem;

        display: flex;
        align-items: center;

        color: #898088;

        @include ut.tablet {
          width: 143px;
          margin: -3px 0 0 0;

          font-weight: 500;
          font-size: 1rem;
          line-height: 1.4rem;
        }

        @include ut.desktop {
          width: 210px;
          margin: 2px 0 0 0;

          font-weight: 400;
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

      border: none;
      outline: none;
      background: #ffb701;
      border-radius: 5px;

      transition: background-color 0.3s ease-in-out;

      &:hover {
        background: #ffca45;

        transition: background-color 0.3s ease-in-out;
      }

      @include ut.tablet {
        width: 165px;
        margin: 0px 0px 1px -8px;
        padding: 1.2rem;
        align-self: center;
      }

      @include ut.desktop {
        width: 247px;
        height: 54px;
        padding: 18.5px;
      }

      // margin: 2px 0px 0px 0;

      &-text {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.5rem;

        text-transform: uppercase;

        color: #342633;

        @include ut.tablet {
          font-style: normal;
          font-size: 1.2rem;
          line-height: 1.5rem;

          text-transform: uppercase;

          color: #342633;
        }

        @include ut.desktop {
          font-size: 1.4rem;
          line-height: 1.7rem;

          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
