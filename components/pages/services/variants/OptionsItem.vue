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
      <Icon name="arrow-right-test" class="item__header-icon" />
      <h3 class="item__header-title">{{ title }}</h3>
    </div>

    <ul v-if="list?.length > 0" class="item__list">
      <li v-for="item in list" class="item__container">
        <Icon name="arrow-right-test" class="item__container-icon" />
        <NuxtLink :to="item.path" class="item__container-text">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as mx;
@use "@/assets/scss/styles/variables" as vars;

.item {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__header {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__header-icon {
    width: 16px;
    height: 16px;

    color: #898088;
    fill: transparent;
  }

  &__header-title {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: #898088;
  }

  &__list {
    /* display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 10px;
    flex-flow: wrap; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: repeat(6, 1fr); */
    grid-column-gap: 30px;
    grid-row-gap: 10px;

    @include mx.desktop {
      /* column-gap: 30px; */
      max-height: 172px;
    }
  }

  &__container {
    display: flex;
    align-items: center;

    gap: 5px;
    width: 360px;

    @include mx.desktop {
      width: 378px;
    }
  }

  &__container-icon {
    width: 16px;
    height: 16px;

    color: #c2d2df;
    fill: transparent;
  }

  &__container-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #898088;
  }
}
</style>
