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
            <span class="search__button-text">Поиск</span>
            <!-- <template class="search__button-text">Поиск</template> -->
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as mx;
@use "@/assets/scss/styles/variables" as vars;

.search {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background: #f3f3f3;

  padding: 40px 0;
  margin-top: 20px;

  @include mx.tablet {
    margin-top: 30px;
    padding: 40px;

    max-width: 720px;
  }

  @include mx.desktop {
    margin-top: 46px;
    max-width: 1200px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;
    max-width: 320px;

    @include mx.tablet {
      max-width: unset;
    }
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

    @include mx.tablet {
      gap: 30px;
    }
  }

  &__field {
    width: 260px;
    height: 40px;

    @include mx.tablet {
      width: 433px;
    }

    @include mx.desktop {
      width: 853px;
    }
  }

  &__button {
    width: 40px;
    height: 40px;

    @include mx.tablet {
      width: 187px;
    }

    @include mx.desktop {
      width: 237px;
    }
  }

  &__button-icon {
    display: flex;

    @include mx.tablet {
      display: none;
    }
  }

  &__button-text {
    display: none;

    @include mx.tablet {
      display: flex;
    }
  }
}
</style>
