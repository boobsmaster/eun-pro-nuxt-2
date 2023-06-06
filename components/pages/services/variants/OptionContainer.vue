<script lang="ts">
import { PropType } from "vue";
import OptionsItemVue, { OptionLinkType } from "./OptionsItem.vue";

import OptionContainer from "./OptionContainer.vue";
import AppConsultation from "../../main/consultation/AppConsultation.vue";
import ConsultationForm from "~/components/pages/common/consultationForm/ConsultationForm.vue";

export type OptionItemType = {
  title: string;
  list: OptionLinkType[];
};

export default {
  name: "OptionContainer",
  props: {
    list: { type: Array as PropType<OptionItemType[]>, required: true },
    title: { type: String, required: true },
    number: { type: String, required: true },
  },
  components: {
    OptionContainer,
    AppConsultation,
    ConsultationForm,
    OptionsItemVue,
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
      <OptionsItemVue
        v-for="item in list"
        :key="item.title"
        :list="item.list"
        :title="item.title"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as mx;
@use "@/assets/scss/styles/variables" as vars;

.container {
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 100%;

  &__header {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__header-number {
    font-weight: 250;
    font-size: 16px;
    line-height: 18px;

    color: #433142;
  }

  &__header-title {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: #342633;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}
</style>
