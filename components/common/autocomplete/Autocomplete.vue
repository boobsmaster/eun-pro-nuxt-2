<script>
export default {
  name: "Autocomplete",
};
</script>

<template>
  <div class="autocomplete">
    <input placeholder="Найти услугу" class="autocomplete__input" type="text" />
    <ul class="autocomplete__options">
      <li class="autocomplete__options-item">azaza</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.autocomplete {
  position: relative;

  &__input {
    width: 260px;
    height: 40px;
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
