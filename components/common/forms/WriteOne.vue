<script>
import Input from '../input/Input.vue'
import Icon from '~/components/common/icon/Icon.vue'
import FormWrapper from './FormWrapper.vue'
import Button from '../button/Button.vue'
import Agreement from './components/Agreement.vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { max, min, required, regex } from 'vee-validate/dist/rules'

import Toast from '../toasts/Toast.vue'
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
  name: 'WriteFormOne',
  components: { Icon, Input, Button, FormWrapper, Agreement, ValidationProvider, ValidationObserver, Toast },
  emits: ['close'],
  data() {
    const isValidForm = false
    const formValues = {
      name: '',
      number: '',
    }

    return {
      formValues,
      isValidForm,
    }
  },
  methods: {
    save() {
      console.log('formValues', this.formValues)

      this.isValidForm = !this.isValidForm

      setTimeout(() => {
        this.isValidForm = false

        this.$emit('close')
      }, 1000)
    },
  },
}
</script>

<template>
  <div>
    <FormWrapper
      @close="$emit('close')"
      v-if="!isValidForm"
      title="Затрудняетесь c выбором?"
      description="Персональный менеджер свяжется c вами и подготовит для вас предложение."
    >
      <div class="form">
        <div class="form__description">
          <div class="form__description-info">
            <span class="form__description-title">Бобров Денис Вадимович</span>
            <span class="form__description-subtitle">Ваш персональный менеджер</span>
          </div>
          <img src="~/assets/images/form-director.png" alt="" class="form__description-image" />
        </div>

        <ValidationObserver v-slot="{ handleSubmit }" tag="div">
          <form @submit.prevent="handleSubmit(save)" class="form__content">
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

            <Agreement />

            <Button type="submit" button-type="submit">Перезвоните мне</Button>
          </form>
        </ValidationObserver>
      </div>
    </FormWrapper>
    <Toast v-if="isValidForm" title="Заявка принята" message="Наш менеджер свяжется с Вами в ближайшее время!" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;

.form {
  display: flex;
  flex-direction: column;
  margin-top: 28px;

  @include mx.tablet {
    flex-direction: row;
    gap: 30px;

    margin-bottom: -1px;
  }

  &__description {
    display: flex;
    justify-content: space-between;

    @include mx.tablet {
      order: 2;

      margin-top: 18px;
    }
  }

  &__description-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    max-width: 116px;

    @include mx.tablet {
      max-width: 165px;
    }
  }

  &__description-title {
    color: var(--black, #342633);
    font-size: 14px;
    font-family: Gilroy;
    font-weight: 700;
    line-height: initial;

    @include mx.tablet {
      font-size: 20px;
    }
  }

  &__description-subtitle {
    color: var(--black-light, #898088);
    font-size: 12px;
    line-height: initial;
    font-family: Gilroy;
    font-weight: 500;

    @include mx.tablet {
      font-size: 14px;
    }
  }

  &__description-image {
    width: 118px;
    height: 128px;

    object-fit: cover;

    @include mx.tablet {
      width: 261px;
      height: 283px;

      margin: -7px 0 -32px -96px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 18px;

    margin-top: -32px;

    @include mx.tablet {
      margin-top: 0;

      max-width: 330px;
    }
  }
}
</style>
