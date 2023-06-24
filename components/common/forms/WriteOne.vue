<script>
import Input from '../input/Input.vue'
import Icon from '~/components/common/icon/Icon.vue'
import FormWrapper from './FormWrapper.vue'
import Button from '../button/Button.vue'
import Agreement from './components/Agreement.vue'

export default {
  name: 'WriteFormOne',
  components: { Icon, Input, Button, FormWrapper, Agreement },
}
</script>

<template>
  <FormWrapper
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

      <form class="form__content">
        <Input label="Имя" placeholder="Иван Иванов" />
        <Input label="Телефон" placeholder="+7 (999) 999 99 99" />

        <Agreement />

        <Button type="submit">Перезвоните мне</Button>
      </form>
    </div>
  </FormWrapper>
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
