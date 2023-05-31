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
  data(props) {
    const linksList = props.links;

    const activeLink: BreadcrumbType = linksList[linksList.length - 1];

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

    <h2 class="breadcrumbs__title">{{ activeLink.name }}</h2>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as mx;
@use "@/assets/scss/styles/variables" as vars;

.breadcrumbs {
  display: flex;
  flex-direction: column;

  gap: 5px;

  @include mx.desktop {
    gap: 8px;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__title {
    width: fit-content;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    color: #342633;

    @include mx.tablet {
      font-size: 30px;
      line-height: 36px;
    }

    @include mx.desktop {
      font-size: 40px;
      line-height: 48px;
    }
  }
}
</style>
