<script lang="ts">
import { PropType } from "vue";
import Breadcrumb, { BreadcrumbType } from "./Breadcrumb.vue";

export type BreadcrumbsListType = BreadcrumbType[];

export interface BB {
  links: BreadcrumbsListType;
}

export default {
  name: "Breadcrumbs",
  props: {
    links: { type: Array as PropType<BreadcrumbsListType>, required: true },
  },
  data() {
    // console.log("AAAAAA", this.props);

    // const linksList = this.$props.links;
    // const activeLink: BreadcrumbType = linksList[linksList.length - 1];

    return {
      // activeLink,
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

    <!-- <h2 class="breadcrumbs__title">{{ activeLink.name }}</h2> -->
  </div>
</template>

<style lang="scss" scoped></style>
