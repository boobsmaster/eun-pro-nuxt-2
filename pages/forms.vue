<script>
import Input from '@/components/common/input/Input.vue'
import WriteOne from '~/components/common/forms/WriteOne.vue'
import CookiesToast from '~/components/common/toasts/CookiesToast.vue'
import WriteTwo from '~/components/common/forms/WriteTwo.vue'
import Toast from '~/components/common/toasts/Toast.vue'

import WriteThird from '~/components/common/forms/WriteThird.vue'
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'FormsPage',
  components: { Input, WriteOne, CookiesToast, Toast, WriteTwo, WriteThird, ValidationProvider },
}
</script>

<template>
  <div class="test">
    <WriteTwo />
    <WriteThird />
    <WriteOne />
    <CookiesToast />
    <Toast title="Заявка принята" message="Наш менеджер свяжется с Вами в ближайшее время!" />
    <Toast title="Спасибо за подписку!" message="Вы будете получать самые свежие новости первым!" />
  </div>
</template>

<style lang="scss" scoped>
.test {
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: gray;

  width: 100%;
  min-height: 2000px;
  padding: 100px 0;

  &__input {
    width: 233px;
    height: 40px;
  }
}
</style>
