<script>
import Icon from '~/components/common/icon/Icon.vue'
export default {
  name: 'ContactsTabs',
  components: { Icon },
  props: {
    tabs: { type: Array, required: true },
    activeTabKey: { type: String, required: true },
  },
  emits: ['update'],
  methods: {
    changeTab(key) {
      this.$emit('update', String(key))
    },
  },
}
</script>

<template>
  <div class="tabs">
    <div class="tabs__list">
      <span
        v-for="item in tabs"
        @click="changeTab(item.key)"
        :class="['tabs__item', { ['tabs__item_active']: item.key === activeTabKey }]"
      >
        {{ item.label }}
      </span>
    </div>

    <div class="tabs__value">
      <Icon name="location-pin" class="tabs__value-icon" />

      <span class="tabs__value-text">
        {{ tabs.find((item) => item.key === activeTabKey).value.city }},
        <span class="tabs__value-text tabs__value-text_bold">
          {{ tabs.find((item) => item.key === activeTabKey).value.address }}
        </span>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;

.tabs {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @include mx.tablet {
    grid-column-start: span 2;
  }

  @include mx.desktop {
    width: 430px;
    grid-area: 1 / 1 / 2 / 2;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 30px;

    width: fit-content;

    border-bottom: 2px solid var(--white, #f3f3f3);
  }

  &__item {
    position: relative;

    padding-bottom: 5px;

    font-size: 14px;
    font-weight: 700;

    font-style: normal;
    line-height: normal;
    text-transform: uppercase;

    cursor: pointer;
    user-select: none;
    color: var(--black-light, #898088);
    transition: color vars.$transition-duration ease-in-out;

    &_active {
      color: var(--yellow, #ffb701);

      transition: color vars.$transition-duration ease-in-out;

      &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;

        width: 100%;
        height: 2px;
        background-color: var(--yellow, #ffb701);
      }
    }
  }

  &__value {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__value-icon {
    width: 30px;
    height: 30px;

    color: var(--yellow, #ffb701);
  }

  &__value-text {
    font-size: 20px;
    font-weight: 400;

    font-style: normal;
    line-height: normal;

    color: var(--black, #342633);

    @include mx.desktop {
      font-size: 28px;
    }

    &_bold {
      font-weight: 600;
    }
  }
}
</style>
