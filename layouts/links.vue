<template>
  <section class="root-container">
    <div class="container">
      <h1 class="container__title">EUN PRO</h1>

      <p class="container__text">доступные страницы:</p>

      <div class="container__list">
        <Nuxt />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "links",
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 20px;

  width: 100%;
  height: 100vh;

  &__title {
    font-size: 33px;
    line-height: 35px;
  }

  &__text {
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
