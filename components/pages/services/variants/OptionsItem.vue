<script lang="ts">
import { PropType } from "vue";
import Icon from "~/components/common/icon/Icon.vue";

export type OptionLinkType = {
  name: string;
  path: string;
};

export default {
  name: "OptionItem",
  components: { Icon },
  props: {
    title: { type: String, required: true },
    list: { type: Array as PropType<OptionLinkType[]>, required: false },
  },
};
</script>

<template>
  <div class="item">
    <div class="item__header">
      <Icon name="chevron" class="item__header-icon" />
      <h3 class="item__header-title"></h3>
    </div>
    <ul class="item__list">
      <div v-for="item in list" class="item__container">
        <Icon name="chevron" class="item__container-icon" />
        <NuxtLink :to="item.path" class="item__container-text">
          {{ item.name }}
        </NuxtLink>
      </div>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.item {
  &__header {
  }
  &__header-icon {
  }
  &__header-title {
  }

  &__list {
  }
  &__container {
  }
  &__container-icon {
  }
  &__container-text {
  }
}
</style>
