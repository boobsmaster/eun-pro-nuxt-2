<script>
import Icon from '~/components/common/icon/Icon.vue'

export default {
  name: 'AccordionFirstLevel',
  props: {
    title: { type: String, required: true },
    list: { type: Array, required: true },
  },
  components: { Icon },
  data() {
    const isOpenLevel2 = false

    return {
      isOpenLevel2,
    }
  },
  methods: {
    changeIsOpen() {
      this.isOpenLevel2 = !this.isOpenLevel2
    },
    placeholderFunction() {
      return
    },
  },
}
</script>

<template>
  <div :class="['accordion', { ['accordion_active']: isOpenLevel2 }]">
    <div @click="list.length > 0 ? changeIsOpen() : placeholderFunction()" class="accordion__header">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="accordion__header-icon"
      >
        <path d="M6 4L10 8L6 12" stroke="#C2D2DF" />
      </svg>
      <span class="accordion__header-title">{{ title }}</span>
    </div>

    <div v-if="list.length > 0" class="accordion__list">
      <div v-for="item in list" class="accordion__item">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="accordion__item-icon"
        >
          <path d="M6 4L10 8L6 12" stroke="#C2D2DF" />
        </svg>
        <a :href="item.path" class="accordion__item-title">{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as ut;
@use '@/assets/scss/styles/variables' as vars;
.accordion {
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 10px;

  &_active {
    .accordion__header-icon {
      transform: rotate(90deg);
      transition: all 0.3s ease-in-out;
    }

    .accordion__list {
      max-height: 214px;
      overflow-y: auto;
      overflow-x: hidden;
      padding-bottom: 40px;
      transition: all 0.3s ease-in-out, background-color 0.3s ease-in-out;

      &::after {
        display: flex;
      }
    }
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    z-index: 2;
    cursor: pointer;

    @include ut.desktop {
      &:hover {
        .accordion__header-icon {
          path {
            stroke: #ffb701;

            transition: stroke 0.3s ease-in-out;
          }
        }

        .accordion__header-title {
          color: white;

          transition: color 0.3s ease-in-out;
        }
      }
    }
  }

  &__header-icon {
    width: 1.6rem;
    height: 1.6rem;
  }

  &__header-title {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #898088;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 14px;

    padding-left: 10px;
    margin-right: 10px;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    overflow-x: hidden;
    scrollbar-color: #ffb701 transparent;

    &::after {
      display: none;
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;

      z-index: 3;
      width: 100%;
      max-width: 276px;
      height: 100px;
      pointer-events: none;

      @include ut.tablet {
        max-width: 437px;
        background: linear-gradient(180deg, rgba(41, 31, 41, 0) 0%, #291f29 100%);
      }

      @include ut.desktop {
        display: none;
      }

      background: linear-gradient(180deg, rgba(67, 49, 66, 0) 0%, #433142 100%);
    }

    &::-webkit-scrollbar {
      width: 4px;
      height: 15px;
    }

    &::-webkit-scrollbar-track-piece {
      background: #898088;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:vertical {
      height: 78px;
      background: #ffb701;
      border-radius: 5px;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    z-index: 2;

    &:hover {
      .accordion__item-icon {
        path {
          stroke: #ffb701;

          transition: stroke 0.3s ease-in-out;
        }
      }
      .accordion__item-title {
        color: white;

        transition: color 0.3s ease-in-out;
      }
    }
  }

  &__item-icon {
    width: 1.6rem;
    height: 1.6rem;
  }

  &__item-title {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #898088;

    transition: color 0.3s ease-in-out;
  }
}
</style>
