<script>
import Input from '../input/Input.vue'
import Button from '../button/Button.vue'
import FormWrapper from './FormWrapper.vue'
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
  name: 'ContactsForm2',
  components: { FormWrapper, Input, Agreement, Button, ValidationProvider, ValidationObserver, Toast },
  emits: ['close'],
  data() {
    const formValues = {
      name: '',
      number: '',
    }

    const isValidForm = false

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
      v-if="!isValidForm"
      @close="$emit('close')"
      title="Мы вам перезвоним"
      description="Оставьте ваши данные и мы свяжемся с вами. Мы не занимаемся рассылкой рекламных сообщений, а так же не передаем контактные данные третьим лицам"
    >
      <ValidationObserver v-slot="{ handleSubmit }" tag="div">
        <form @submit.prevent="handleSubmit(save)" class="form">
          <div class="form__content">
            <ValidationProvider
              :rules="{
                required: true,
                phone: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
              }"
              class="form__input form__input_number"
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
            <ValidationProvider
              rules="required|min:5|max:255"
              v-slot="{ errors, valid, failed }"
              class="form__input form__input_name"
            >
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
          <div class="form__control">
            <Agreement class="form__agreement" />
            <div class="form__button">
              <Button>Задать вопрос</Button>
            </div>
          </div>
        </form>
      </ValidationObserver>
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

  margin-top: 11px;
  gap: 17px;

  @include mx.tablet {
    gap: 26px;
  }

  @include mx.desktop {
    margin-top: 6px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @include mx.tablet {
      gap: 30px;
      flex-direction: row;
    }
  }

  &__input {
    @include mx.tablet {
      width: 330px;
    }
    &_name {
      @include mx.tablet {
        order: 1;
      }
    }
    &_number {
      @include mx.tablet {
        order: 2;
      }
    }
  }

  &__control {
    display: flex;
    flex-direction: column;
    gap: 18px;

    @include mx.tablet {
      gap: 30px;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    @include mx.desktop {
      gap: 47px;
      align-items: center;
    }
  }
  &__agreement {
    @include mx.tablet {
      max-width: 391px;
    }

    @include mx.desktop {
      max-width: 303px;
    }
  }

  &__button {
    width: 100%;
    height: 40px;

    @include mx.tablet {
      max-width: 225px;
    }

    @include mx.desktop {
      width: 241px;
      height: 54px;

      .button {
        width: 241px;
      }
    }
  }
}
</style>
