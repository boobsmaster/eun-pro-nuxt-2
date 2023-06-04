<script>
export default {
  name: "Autocomplete",
};
</script>

<template>
  <div class="autocomplete">
    <input placeholder="Найти услугу" class="autocomplete__input" type="text" />
    <ul class="autocomplete__options">
      <!-- <li class="autocomplete__options-item">azaza</li> -->
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.autocomplete {
  position: relative;

  width: 100%;
  height: 100%;

  &__input {
    width: 100%;
    height: 100%;

    padding: 12px;

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
    position: absolute;
    top: 100%;
    left: 0;

    width: 100%;
  }

  &__options-item {
  }
}
</style>
