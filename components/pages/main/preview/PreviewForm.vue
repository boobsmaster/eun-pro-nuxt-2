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
  name: 'PreviewForm',
  components: { ValidationProvider, ValidationObserver, Input },
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
  <form class="preview-form">
    <span class="preview-form__title">Оставить заявку</span>
    <ValidationProvider class="preview-form__input" rules="required|min:5|max:255" v-slot="{ errors, valid, failed }">
      <Input
        placeholder="Иван Иванов"
        :errors="errors"
        :valid="valid"
        :failed="failed"
        v-model="formValues.name"
        :dark="true"
        id="name"
      />
    </ValidationProvider>

    <ValidationProvider
      :rules="{
        required: true,
        phone: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
      }"
      v-slot="{ errors, valid, failed }"
      class="preview-form__input"
    >
      <Input
        placeholder="+7 (999) 999 99 99"
        v-mask="'+7 (###) ###-##-##'"
        v-model="formValues.number"
        :errors="errors"
        :valid="valid"
        :failed="failed"
        id="phone"
        :dark="true"
      />
    </ValidationProvider>

    <button class="preview-form__button">Оставить заявку</button>
  </form>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as ut;
@use '@/assets/scss/styles/variables' as vars;
.preview-form {
  width: 100%;
  padding: 2rem 2rem 3.4rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  background-color: #342633;

  @include ut.desktop {
    padding: 3rem;
  }

  @include ut.tablet {
    width: 227px;
    flex: 0 0 auto;
  }

  @include ut.desktop {
    width: 301px;
    gap: 2.2rem;
    padding: 3rem 3rem 3rem 2.6rem;
  }

  &__title {
    font-style: normal;
    font-weight: 700;

    font-size: 1.6rem;
    line-height: 1.6rem;

    color: #ffffff;

    @include ut.desktop {
      font-weight: 700;

      font-size: 2rem;
      line-height: 1.6rem;
    }
  }

  &__input {
    width: 100%;
  }

  &__button {
    width: 100%;
    outline: none;
    border: none;
    height: 40px;

    font-family: vars.$default-font;
    font-weight: 700;

    font-size: 1.2rem;
    line-height: 1.5rem;
    text-transform: uppercase;

    border-radius: 5px;

    color: #342633;
    background: #ffb701;

    transition: background-color 0.3s ease-in-out;

    &:hover {
      background: #ffca45;

      transition: background-color 0.3s ease-in-out;
    }

    @include ut.desktop {
      width: 241px;
      height: 54px;
    }
  }
}
</style>
