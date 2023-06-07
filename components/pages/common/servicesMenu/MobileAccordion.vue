<script>
// title: [
//   {
//     title: '',
//     list: [
//       {''}
//     ]
//   }
// ]
import Icon from "~/components/common/icon/Icon.vue";

export default {
  name: "MobileAccordion",
  props: {
    number: { type: String, required: true },
    title: { type: String, required: true },
    list: { type: Array, required: true },
  },
  components: {
    Icon,
  },
  data() {
    const isOpen = false;

    return {
      isOpen,
    };
  },
};
</script>

<template>
  <div class="accordion">
    <div class="accordion__header">
      <span class="accordion__header-number">
        {{ number }}
      </span>
      <span class="accordion__header-title">
        {{ title }}
      </span>
      <Icon name="accordion-arrow" class="accordion__header-icon" />
    </div>

    <div class="accordion__list">
      <!-- level 3 accordion -->
      <div class="accordion__item">
        <Icon name="link-arrow-right" class="accordion__item-icon" />
        <a class="accordion__item-link" href="">Строительная экспертиза</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as ut;
@use "@/assets/scss/styles/variables" as vars;
.accordion {
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 10px;

  &__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    gap: 13px;

    width: 280px;
    height: 59px;
    background: #342633;
    border-radius: 5px;

    @include ut.tablet {
      width: 100%;
    }
  }

  &__header-number {
    font-style: normal;
    font-weight: 250;
    font-size: 16px;
    line-height: 18px;

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    color: #898088;
  }

  &__header-title {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: #f3f3f3;
  }

  &__header-icon {
    width: 8px;
    height: 12px;

    margin-left: auto;

    transition: all 0.3s ease-in-out;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 14px;

    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    overflow-x: hidden;
    scrollbar-color: #ffb701 transparent;

    &::after {
      display: none;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;

      z-index: 3;
      width: 100%;
      max-width: 276px;
      height: 100px;
      pointer-events: none;

      @include ut.tablet {
        max-width: 437px;
        background: linear-gradient(
          180deg,
          rgba(41, 31, 41, 0) 0%,
          #291f29 100%
        );
      }

      @include ut.desktop {
        display: none;
      }

      background: linear-gradient(180deg, rgba(67, 49, 66, 0) 0%, #433142 100%);
    }

    &::-webkit-scrollbar {
      width: 4px;
      height: 15px;
    }

    &::-webkit-scrollbar-track-piece {
      background: #898088;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:vertical {
      height: 78px;
      background: #ffb701;
      border-radius: 5px;
    }
  }
}
</style>
