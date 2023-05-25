<template>
  <section class="root-container">
    <Header />
    <Content>
      <Nuxt />
    </Content>
    <Footer />
  </section>
</template>

<script>
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
import Content from "~/components/layout/Content.vue";

export default {
  name: "default",
  components: {
    Footer,
    Header,
    Content,
  },

  // async asyncData({ $dataApi }) {
  //   return {
  //     menu: (await $dataApi.getMenu()).json,
  //   };
  // },
};
</script>

<style scoped></style>
