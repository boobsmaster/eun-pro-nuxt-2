<script lang="ts">
import { PropType } from "vue";
import Breadcrumb, { BreadcrumbType } from "./Breadcrumb.vue";

export type BreadcrumbsListType = BreadcrumbType[];

export default {
  name: "Breadcrumbs",
  props: {
    links: { type: Array as PropType<BreadcrumbsListType>, required: true },
  },
  data(props) {
    const activeLink = props.links[props.links.length - 1];

    return {
      activeLink,
    };
  },

  components: { Breadcrumb },
};
</script>

<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__list">
      <Breadcrumb v-for="item in links" :key="item.id" :item="item" />
    </div>

    <h2 class="breadcrumbs__title">{{ activeLink }}</h2>
  </div>
</template>

<style lang="scss" scoped></style>
