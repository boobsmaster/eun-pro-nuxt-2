<script>
import Input from '../input/Input.vue'
import Button from '../button/Button.vue'
import FormWrapper from './FormWrapper.vue'
import Agreement from './components/Agreement.vue'

export default {
  name: 'ContactsForm3',
  components: { FormWrapper, Button, Input, Agreement },
}
</script>

<template>
  <FormWrapper
    title="Мы вам напишем"
    description="Оставьте ваши данные и мы свяжемся с вами. Мы не занимаемся рассылкой рекламных сообщений, а так же не передаем контактные данные третьим лицам"
  >
    <div class="form">
      <div class="form__content">
        <Input label="Имя" placeholder="Иван Иванов" class="form__input form__input_name" />
        <Input label="Почта" placeholder="example@mail.ru" class="form__input" />
        <Input label="Вопрос" placeholder="Введите текст..." type="textarea" class="form__textarea" />
      </div>
      <div class="form__control">
        <Agreement class="form__agreement" />
        <div class="form__button">
          <Button>Задать вопрос</Button>
        </div>
      </div>
    </div>
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
