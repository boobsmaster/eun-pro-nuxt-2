<script>
import Input from '../input/Input.vue'
import Button from '../button/Button.vue'
import FormWrapper from './FormWrapper.vue'
import Agreement from './components/Agreement.vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { max, min, required, regex } from 'vee-validate/dist/rules'

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

extend('email', {
  ...regex,
  message: 'Введите корректный email',
})

export default {
  name: 'ContactsForm3',
  components: { FormWrapper, Button, Input, Agreement, ValidationObserver, ValidationProvider },
  emits: ['close'],
  data() {
    const formValues = {
      name: '',
      email: '',
      question: '',
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
  <FormWrapper
    @close="$emit('close')"
    title="Мы вам напишем"
    description="Оставьте ваши данные и мы свяжемся с вами. Мы не занимаемся рассылкой рекламных сообщений, а так же не передаем контактные данные третьим лицам"
  >
    <ValidationObserver v-slot="{ handleSubmit }" tag="div">
      <form @submit.prevent="handleSubmit(save)" class="form">
        <div class="form__content">
          <ValidationProvider rules="required|min:5|max:255" v-slot="{ errors, valid, failed }">
            <Input
              label="Имя"
              placeholder="Иван Иванов"
              :errors="errors"
              :valid="valid"
              :failed="failed"
              v-model="formValues.name"
              id="name"
              class="form__input form__input_name"
            />
          </ValidationProvider>
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
          <ValidationProvider rules="required|min:5|max:255" v-slot="{ errors, valid, failed }" class="form__textarea">
            <Input
              label="Вопрос"
              placeholder="Введите текст..."
              :errors="errors"
              :valid="valid"
              :failed="failed"
              type="textarea"
              v-model="formValues.question"
              class="form__textarea"
              id="question"
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
      flex-wrap: wrap;
    }
  }

  &__input {
    @include mx.tablet {
      width: 330px;
    }
    &_name {
      @include mx.tablet {
        /* order: 1; */
      }
    }
  }

  &__textarea {
    width: 100%;
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
