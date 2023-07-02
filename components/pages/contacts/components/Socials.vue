<script>
import Icon from '~/components/common/icon/Icon.vue'
export default {
  name: 'ContactsSocials',
  components: { Icon },
  data() {
    const leftColumn = [
      {
        iconName: 'contacts-youtube',
        title: '/eunru',
        url: '/contacts',
      },
      {
        iconName: 'contacts-twitter',
        title: '/eunru',
        url: '/contacts',
      },
    ]

    const rightColumn = [
      {
        iconName: 'contacts-google',
        title: '/eunru',
        url: '/contacts',
      },
      {
        iconName: 'contacts-skype',
        title: '/eunru',
        url: '/contacts',
      },
    ]

    const socials = [leftColumn, rightColumn]

    return {
      socials,
    }
  },
}
</script>

<template>
  <div class="socials">
    <h3 class="socials__title">Напишите нам в социальных сетях и мессенджерах</h3>
    <div class="socials__list">
      <div v-for="column in socials" class="socials__column">
        <div v-for="item in column" class="socials__item">
          <Icon :name="item.iconName" class="socials__item-icon" />
          <span class="socials__item-text">{{ item.title }}</span>
          <NuxtLink class="socials__item-link" :to="item.url"></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;
.socials {
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 20px;
  background: var(--white, #f3f3f3);

  @include mx.tablet {
    width: 227px;
    height: fit-content;
  }

  @include mx.desktop {
    width: 380px;
    gap: 61px;

    padding: 40px;
  }

  &__title {
    font-size: 16px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    color: var(--black, #342633);

    @include mx.desktop {
      font-size: 18px;
    }
  }

  &__list {
    display: flex;
    gap: 70px;

    @include mx.tablet {
      gap: 20px;
      flex-direction: column;
    }

    @include mx.desktop {
      gap: 80px;
      flex-direction: row;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__item {
    position: relative;

    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__item-icon {
    width: 24px;
    height: 24px;
  }

  &__item-text {
    color: var(--unnamed, #4f4f4f);
    text-align: center;
    /* Text Vanila */
    font-size: 16px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    line-height: 143%;
  }

  &__item-link {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }
}
</style>
