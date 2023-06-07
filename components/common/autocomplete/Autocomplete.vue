<script>
import { ref } from "vue";
import Icon from "../icon/Icon.vue";

export default {
  name: "Autocomplete",
  props: {
    options: { type: Array, required: true },
  },
  emits: ["update", "search"],
  data(props) {
    const currentOptions = props.options;
    const value = "";
    const isOpen = false;
    const inputRef = ref(null);
    const results = currentOptions;

    return {
      value,
      isOpen,
      results,
      inputRef,
      currentOptions,
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    onEnterKeyPress() {
      this.isOpen = false;

      this.$refs.inputRef.blur();

      this.$emit("search");
    },
    filterResults() {
      this.results = this.currentOptions.filter((item) => {
        return item.name.toLowerCase().indexOf(this.value.toLowerCase()) > -1;
      });
    },
    onChange() {
      this.filterResults();

      this.$emit("update", this.value);
    },
  },
  components: { Icon },
};
</script>

<template>
  <div class="autocomplete" v-click-outside="close">
    <input
      ref="inputRef"
      placeholder="Найти услугу"
      class="autocomplete__input"
      type="text"
      v-on:keyup.enter="onEnterKeyPress"
      @input="onChange"
      @focus="open"
      v-model="value"
    />
    <ul
      :class="[
        'autocomplete__options',
        { ['autocomplete__options_active']: isOpen },
      ]"
    >
      <li
        v-if="results"
        v-for="item in results"
        class="autocomplete__options-item"
      >
        <Icon name="arrow-right-test" class="autocomplete__options-item-icon" />
        <span class="autocomplete__options-item-text">
          {{ item.name }}
        </span>
        <NuxtLink :to="item.path" class="autocomplete__options-item-link" />
      </li>

      <li v-if="results.length === 0" class="autocomplete__options-item">
        <span class="autocomplete__options-item-text">ничего не найдено</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as mx;
@use "@/assets/scss/styles/variables" as vars;

.autocomplete {
  position: relative;

  width: 100%;
  height: 100%;

  &__input {
    position: relative;

    width: 100%;
    height: 100%;

    padding: 12px;
    z-index: 2;

    border-radius: 4px;
    background: #ffffff;
    border: 1px solid #e2e1f2;

    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;

      color: #828282;
    }
  }

  &__options {
    display: none;

    @include mx.desktop {
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      flex-direction: column;
      gap: 10px;

      width: 100%;
      height: auto;
      max-height: 303px;

      padding: 55px 20px 16px 20px;
      opacity: 0;
      visibility: 0;
      z-index: -1;

      overflow-y: auto;

      width: 100%;

      border-radius: 4px;
      background: #ffffff;
      border: 1px solid #e2e1f2;
    }

    &_active {
      opacity: 1;
      visibility: visible;
      z-index: 1;

      transition: all vars.$transition-duration ease-in-out;
    }
  }

  &__options-item {
    position: relative;

    display: flex;
    align-items: center;
    gap: 5px;

    width: 100%;

    padding-bottom: 10px;
    border-bottom: 1px solid #f3f3f3;

    &:last-child {
      border: none;
      padding-bottom: 0;
    }
  }

  &__options-item-icon {
    width: 16px;
    height: 16px;

    color: #c2d2df;
    fill: transparent;
  }

  &__options-item-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #898088;
  }
  &__options-item-link {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }
}
</style>
