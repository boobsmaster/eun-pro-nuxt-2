<script>
import Icon from '~/components/common/icon/Icon.vue'

export default {
  name: 'ContactsInfo',
  components: { Icon },
  data() {
    const leftColumn = [
      {
        iconName: 'phone-grey',
        title: '+7 (495) 419-25-30',
        subtitle: 'Оставить заявку',
      },
      {
        iconName: 'phone-grey',
        title: '+7 (495) 419-25-30',
        subtitle: 'Оставить заявку',
      },
    ]

    const rightColumn = [
      {
        iconName: 'mail',
        title: 'info@eunpro.ru',
        subtitle: 'Мы на связи!',
      },
      {
        iconName: 'time',
        title: 'с 9:00 по 18:00',
        subtitle: 'Сб-Вс - выходной',
      },
    ]

    const contacts = [leftColumn, rightColumn]

    return {
      contacts,
    }
  },
}
</script>

<template>
  <div class="contacts">
    <div v-for="column in contacts" class="contacts__column">
      <div v-for="item in column" class="contacts__item">
        <Icon :name="item.iconName" class="contacts__item-icon" />
        <div class="contacts__item-info">
          <span class="contacts__item-title">{{ item.title }}</span>
          <span class="contacts__item-subtitle">{{ item.subtitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;
.contacts {
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 30px;
  width: 170px;

  @include mx.tablet {
    margin-top: 0;
  }

  @include mx.desktop {
    width: 359px;
    grid-area: 2 / 1 / 3 / 2;

    flex-direction: row;
    gap: 35px;
  }

  &__column {
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 20px;

    @include mx.desktop {
      gap: 30px;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__item-icon {
    width: 24px;
    height: 24px;
  }

  &__item-info {
    display: flex;
    flex-direction: column;
  }

  &__item-title {
    color: var(--black, #342633);
    font-size: 16px;

    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__item-subtitle {
    color: var(--black-light, #898088);
    font-size: 14px;

    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
</style>
