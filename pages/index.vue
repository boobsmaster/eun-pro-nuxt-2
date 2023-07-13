<template>
  <div>
    <NuxtLink to="/main">Главная</NuxtLink>
    <NuxtLink to="/services">Услуги</NuxtLink>
    <NuxtLink to="/forms">Формы</NuxtLink>
    <NuxtLink to="/requisites">Реквизиты</NuxtLink>
    <NuxtLink to="/contacts">Контакты</NuxtLink>
    <NuxtLink to="/about">О компании</NuxtLink>
    <NuxtLink to="/favor">Страница услуг</NuxtLink>
  </div>
</template>

<script>
import MainPage from '~/components/pages/main/MainPage.vue'

export default {
  name: 'IndexPage',
  layout: 'links',
  components: { MainPage },
  // async asyncData({ $dataApi }) {
  //   return {
  //     menu: (await $dataApi.getMenu()).json,
  //   };
  // },
}
</script>
