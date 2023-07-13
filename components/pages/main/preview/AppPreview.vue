<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { max, min, required, regex } from 'vee-validate/dist/rules'

import PreviewForm from './PreviewForm.vue'
import PreviewBenefits from './PreviewBenefits.vue'
import PreviewServices from './PreviewServices.vue'
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
  components: { ValidationProvider, ValidationObserver, Input, PreviewBenefits, PreviewForm, PreviewServices },
}
</script>

<template>
  <section class="preview">
    <div class="preview__container">
      <div class="preview__content">
        <slot name="content"></slot>
      </div>

      <slot name="footer"></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as ut;
@use '@/assets/scss/styles/variables' as vars;

.preview {
  position: relative;

  background: linear-gradient(180deg, #342633 25%, rgba(52, 38, 51, 0) 100%),
    linear-gradient(90deg, #342633 68.62%, rgba(52, 38, 51, 0) 100%),
    url('@/assets/images/draftsman.jpg') no-repeat bottom 158px right -334px;

  // background-position: -96% 170%;
  background-repeat: no-repeat;
  background-attachment: fixed;

  display: flex;
  justify-content: center;
  width: 100%;

  padding-top: 0.5rem;

  &::after {
    position: absolute;
    content: '';
    display: block;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  @include ut.tablet {
    padding-top: 2.3rem;
  }

  @include ut.desktop {
    padding-top: 8.2rem;
    background: linear-gradient(180deg, #342633 8%, rgba(52, 38, 51, 0) 100%),
      linear-gradient(90deg, #342633 68.62%, rgba(52, 38, 51, 0) 100%),
      url('@/assets/images/draftsman.jpg') no-repeat bottom 0px right 0;

    background-size: contain;
    background-position: right;
  }

  &__container {
    width: 320px;

    display: flex;
    flex-direction: column;

    @include ut.tablet {
      width: 720px;
      gap: 2rem;
    }

    @include ut.desktop {
      gap: 2.7rem;
      width: 1200px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @include ut.tablet {
      flex-direction: row;
    }

    @include ut.desktop {
      gap: 10.5rem;
    }
  }
}
</style>
