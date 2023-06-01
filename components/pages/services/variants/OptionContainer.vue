<script lang="ts">
export default {
  name: "OptionContainer",
  props: {
    list: { type: Array, required: true },
    title: { type: String, required: true },
    number: { type: String, required: true },
  },
};
</script>

<template>
  <div class="container">
    <div class="container__header">
      <span class="container__header-number">{{ number }}</span>
      <h2 class="container__header-title">{{ title }}</h2>
    </div>

    <div class="container__list">
      <OptionItem v-for="item in list" key="12" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
