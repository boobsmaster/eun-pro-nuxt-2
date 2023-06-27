<script>
import Services from '~/components/pages/services/ServicesPage.vue'
import CookiesToast from '~/components/common/toasts/CookiesToast.vue'

export default {
  name: 'ServicesPage',
  components: { Services, CookiesToast },
  layout: 'default',
}
</script>

<template>
  <div>
    <Services />
    <CookiesToast />
  </div>
</template>

<style lang="scss" scoped></style>
