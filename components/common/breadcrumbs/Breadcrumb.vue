<script lang="ts">
export type BreadcrumbType = {
  id: string;
  name: string;
  path: string;
};

import { PropType } from "vue";

export default {
  name: "BreadcrumbItem",
  props: {
    item: { type: Object as PropType<BreadcrumbType> },
  },
};
</script>

<template>
  <div class="item">
    <NuxtLink :to="item?.path">{{ item?.name }}</NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>
