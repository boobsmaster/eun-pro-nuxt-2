<script>
import Icon from '~/components/common/icon/Icon.vue'
export default {
  name: 'WorthTimeline',
  components: { Icon },
  data() {
    const items = [
      {
        year: '2010 год',
        yearAttr: '2010',
        iconName: 'flag',
        title: 'Создание компании',
        description:
          'С каждым годом требования к качеству и безопасности строительных объектов становятся все жестче. Для обеспечения безопасности зданий и сооружений разрабатываемая проектная документация подлежит экспертной оценке на соответствие требованиям Федерального закона "О техническом регламенте в строительстве".',
      },
      {
        year: '2018 год',
        yearAttr: '2018',
        iconName: 'book',
        title: 'Расширение до 120 сотрудников',
        description:
          'С каждым годом требования к качеству и безопасности строительных объектов становятся все жестче. Для обеспечения безопасности зданий и сооружений разрабатываемая проектная документация подлежит экспертной оценке на соответствие требованиям Федерального закона "О техническом регламенте в строительстве".',
      },
      {
        year: '2021 год',
        yearAttr: '2021',
        iconName: 'lightning',
        title: 'Выход на международные рынки',
        description:
          'С каждым годом требования к качеству и безопасности строительных объектов становятся все жестче. Для обеспечения безопасности зданий и сооружений разрабатываемая проектная документация подлежит экспертной оценке на соответствие требованиям Федерального закона "О техническом регламенте в строительстве".',
      },
    ]

    return {
      items,
    }
  },
}
</script>

<template>
  <section class="timeline">
    <div class="timeline__aside">
      <div class="timeline__aside-list">
        <div v-for="item in items" :data-year="item.yearAttr" class="timeline__aside-item">{{ item.year }}</div>
      </div>

      <img src="~/assets/images/timeline-line.png" alt="" class="timeline__aside-img" />
    </div>

    <div class="timeline__content">
      <div v-for="item in items" class="timeline__item">
        <span :data-year="item.yearAttr" class="timeline__item-year">{{ item.year }}</span>
        <div class="timeline__item-head">
          <Icon :name="item.iconName" class="timeline__item-icon" />
          <span class="timeline__item-title">{{ item.title }}</span>
        </div>
        <p class="timeline__item-description">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;
.timeline {
  display: flex;

  padding: 30px 0;

  @include mx.tablet {
    gap: 20px;

    padding: 58px 0;
  }

  @include mx.desktop {
    padding: 120px 0 50px 0;

    gap: 60px;
  }

  &__aside {
    position: relative;

    display: none;

    @include mx.tablet {
      display: flex;
    }

    @include mx.desktop {
      padding: 62px 0;

      gap: 119px;
    }
  }

  &__aside-list {
    display: flex;
    flex-direction: column;
  }

  &__aside-item {
    position: relative;

    opacity: 1;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    white-space: nowrap;
    flex: 0 0 auto;

    color: var(--yellow, #ffb701);

    &:nth-of-type(2) {
      margin-top: 170px;
      font-size: 36px;

      @include mx.desktop {
        font-size: 48px;
      }

      &::before {
        font-size: 96px;
        margin: 0 0 -16px 0;

        @include mx.desktop {
          margin: 0 0 -23px 1px;
          font-size: 120px;
        }
      }
    }

    &:nth-of-type(3) {
      margin-top: 144px;

      @include mx.desktop {
        margin-top: 130px;
      }
    }

    &::before {
      content: attr(data-year);
      position: absolute;
      bottom: 0;
      left: 0;

      font-size: 64px;
      font-weight: 700;
      font-style: normal;
      line-height: normal;

      color: var(--black-light, #898088);
      opacity: 0.05;

      @include mx.desktop {
        font-size: 96px;
      }
    }
  }

  &__aside-img {
    height: 409px;

    margin: 3px 0 0 -5px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @include mx.tablet {
      gap: 50px;
    }

    @include mx.desktop {
      gap: 51px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;

    &:nth-of-type(2) {
      @include mx.tablet {
        margin-left: 83px;
      }

      @include mx.desktop {
        margin-left: 70px;
      }
    }

    &:nth-of-type(3) {
      @include mx.tablet {
        .timeline__item-icon {
          width: 24px;
          height: 24px;
        }
      }
    }

    &:first-child {
      margin-top: -10px;
    }
  }

  &__item-year {
    position: relative;

    opacity: 1;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    color: var(--yellow, #ffb701);

    @include mx.tablet {
      display: none;
    }

    &::before {
      content: attr(data-year);
      position: absolute;
      bottom: 0;
      left: 0;

      font-size: 64px;
      font-weight: 700;
      font-style: normal;
      line-height: normal;

      color: var(--black-light, #898088);
      opacity: 0.05;
    }
  }

  &__item-head {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__item-icon {
    width: 30px;
    height: 30px;

    color: var(--yellow, #ffb701);
  }

  &__item-title {
    font-size: 14px;
    font-weight: 700;
    line-height: 143%;
    font-style: normal;

    color: var(--black, #342633);

    @include mx.desktop {
      font-size: 16px;
    }
  }

  &__item-description {
    margin-top: 10px;

    font-size: 14px;
    font-weight: 500;
    line-height: 143%;
    font-style: normal;

    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    text-overflow: clip;
    overflow: hidden;

    color: var(--black-light, #898088);

    @include mx.tablet {
      max-width: 410px;

      -webkit-line-clamp: 4;
    }

    @include mx.desktop {
      font-size: 16px;
      max-width: 625px;

      -webkit-line-clamp: unset;
    }
  }
}
</style>
