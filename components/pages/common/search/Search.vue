<script>
import Button from "~/components/common/button/Button.vue";
import Icon from "~/components/common/icon/Icon.vue";
import Autocomplete from "~/components/common/autocomplete/Autocomplete.vue";

export default {
  name: "SearchBlock",
  components: { Button, Icon, Autocomplete },
  props: {
    title: { type: String, required: true },
  },
};
</script>

<template>
  <div class="search">
    <div class="search__container">
      <h2 class="search__title">{{ title }}</h2>
      <div class="search__input">
        <div class="search__field">
          <Autocomplete />
        </div>
        <div class="search__button">
          <Button>
            <Icon name="search" class="search__button-icon" />
          </Button>

          <template class="search__button-text"> </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background: #f3f3f3;

  padding: 40px 0;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;
    max-width: 320px;
  }

  &__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;

    color: #342633;
  }

  &__input {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__field {
  }

  &__button {
    width: 40px;
    height: 40px;
  }

  &__button-icon {
  }

  &__button-text {
  }
}
</style>
