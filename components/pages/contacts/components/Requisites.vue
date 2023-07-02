<script>
export default {
  name: 'ContactsRequisites',
  data() {
    const requisites = [
      {
        key: '1',
        label: 'ТОВ «Экспертиза и управление недвижемостью»',
        custom: false,
      },
      {
        key: '1',
        label: 'ИНН: 590586510793 ОГРН: 317595800040212',
        custom: true,
      },
    ]
    return {
      requisites,
    }
  },
}
</script>

<template>
  <div class="requisites">
    <h3 class="requisites__title">Реквизиты</h3>
    <div class="requisites__list">
      <span
        v-for="item in requisites"
        :key="item.key"
        :class="['requisites__text', { ['requisites__text_limited']: item.custom }]"
      >
        {{ item.label }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;
.requisites {
  display: flex;
  flex-direction: column;
  gap: 42px;
  width: 100%;

  margin-top: 30px;
  padding: 8px 23px 27px 23px;

  border-top: 1px solid #f3f3f3;

  @include mx.tablet {
    width: 226px;

    margin: 0;
    padding: 8px 0 27px 20px;

    border-top: none;
    border-left: 1px solid #f3f3f3;
  }

  @include mx.desktop {
    grid-area: 1 / 2 / 3 / 3;

    width: 277px;
    max-height: 196px;
    align-self: flex-end;
    padding: 6px 0 7px 30px;
  }

  &__title {
    color: var(--black, #342633);

    font-size: 16px;
    font-weight: 700;
    font-family: 'Gilroy';

    font-style: normal;
    line-height: normal;

    @include mx.desktop {
      font-size: 18px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__text {
    color: var(--black-light, #898088);
    font-size: 14px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    line-height: 143%;

    @include mx.desktop {
      font-size: 17px;
    }

    &_limited {
      width: 157px;

      @include mx.desktop {
        width: 190px;
      }
    }
  }
}
</style>
