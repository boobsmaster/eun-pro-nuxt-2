<script>
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
import Content from '~/components/layout/Content.vue'
import CookiesToast from '~/components/common/toasts/CookiesToast.vue'

export default {
  name: 'default',
  components: {
    Footer,
    Header,
    Content,
    CookiesToast,
  },

  // async asyncData({ $dataApi }) {
  //   return {
  //     menu: (await $dataApi.getMenu()).json,
  //   };
  // },
}
</script>

<template>
  <section class="root-container">
    <Header />
    <Content>
      <Nuxt />
    </Content>
    <Footer />
    <CookiesToast />
  </section>
</template>

<style scoped></style>
