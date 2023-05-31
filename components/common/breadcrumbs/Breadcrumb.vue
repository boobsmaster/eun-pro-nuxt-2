<script lang="ts">
export type BreadcrumbType = {
  id: string;
  name: string;
  path: string;
};

import { PropType } from "vue";
import Icon from "../icon/Icon.vue";
export default {
  name: "BreadcrumbItem",
  props: {
    item: { type: Object as PropType<BreadcrumbType>, required: true },
  },
  components: { Icon },
};
</script>

<template>
  <div class="item">
    <NuxtLink :to="item.path" class="item__link">{{ item?.name }}</NuxtLink>
    <Icon name="double-arrow" class="item__icon" />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as mx;
@use "@/assets/scss/styles/variables" as vars;
.item {
  display: flex;
  align-items: center;
  gap: 10px;

  &:last-child {
    .item__icon {
      display: none;
    }

    .item__link {
      color: #898088;
    }
  }

  &__link {
    font-weight: 500;

    font-size: 14px;
    line-height: 20px;

    color: #342633;

    @include mx.desktop {
      font-size: 16px;
      line-height: 23px;
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 12px;
    height: 12px;
  }
}
</style>
