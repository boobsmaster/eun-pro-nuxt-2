<script>
import Section from '~/components/common/section/Section.vue'
import Breadcrumbs from '~/components/common/breadcrumbs/Breadcrumbs.vue'

import ConsultationForm from '../common/consultationForm/ConsultationForm.vue'
export default {
  name: 'Requisites',
  components: { Section, Breadcrumbs, ConsultationForm },
  data() {
    const breadcrumbsArray = [
      {
        id: '1',
        path: '/',
        name: 'Главная',
      },
      {
        id: '2',
        path: '/',
        name: 'Наши реквизиты',
      },
    ]

    const requisites = [
      {
        title: 'Полное наименование:',
        description: 'Общество с ограниченной ответственностью «СК Стройизоляция»',
      },
      {
        title: 'Сокращенное наименование:',
        description: 'ООО «СК Стройизоляция»',
      },
      {
        title: 'ИНН/КПП:',
        description: '9715379753/771501001',
      },
      {
        title: 'ОРГН:',
        description: '1207700096185',
      },
      {
        title: 'Юридический адрес:',
        description: '127018, г. Москва, ул. Складочная, д.1, строение 15, офис 618',
      },
      {
        title: 'Фактический адрес:',
        description: '127018, г. Москва, ул. Складочная, д.1, строение 15, офис 618',
      },
      {
        title: 'Телефон, факс:',
        description: '8 800 419-25-30/+7 (495) 419-25-30',
      },
      {
        title: 'Электронная почта:',
        description: 'info@eunpro.ru',
      },
      {
        title: 'Банковские реквизиты:',
        description: 'БИК 044525225 <br>Р/с №40702810938000255982 в ПАО Сбербанк,<br>Кор/счет 30101810400000000225',
      },
    ]

    return {
      requisites,
      breadcrumbsArray,
    }
  },
}
</script>

<template>
  <Section class="requisites">
    <Breadcrumbs :links="breadcrumbsArray" />

    <div class="requisites__grid">
      <div v-for="item in requisites" class="requisites__item">
        <span class="requisites__item-text">{{ item.title }}</span>
        <span v-html="item.description" class="requisites__item-text requisites__item-text_dark" />
      </div>
    </div>

    <ConsultationForm />
  </Section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;
.requisites {
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px 0 0 0;

  @include mx.tablet {
    padding: 30px 0 0 0;
    gap: 30px;
  }

  @include mx.desktop {
    gap: 50px;
    padding: 49px 0 0 0;
  }

  &__grid {
    display: flex;
    flex-direction: column;

    @include mx.tablet {
      padding-bottom: 30px;
    }

    @include mx.desktop {
      padding: 0;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;

    padding: 10px 0;
    border-bottom: 1px dotted #c2d2df;

    &:first-child {
      padding: 0 0 10px 0;

      @include mx.tablet {
        padding: 0 0 13px 0;
      }

      @include mx.desktop {
        padding: 0 0 10px 0;
      }
    }

    &:last-child {
      padding: 10px 0 0 0;
      border: none;

      @include mx.tablet {
        padding: 20px 0;

        border-bottom: 1px dotted #c2d2df;
      }

      @include mx.desktop {
        padding: 23px 0;
      }
    }

    @include mx.tablet {
      flex-direction: row;
      padding: 13px 0;
    }

    @include mx.desktop {
      padding: 17px 0 11px 0;
    }
  }

  &__item-text {
    font-size: 14px;
    font-weight: 500;
    line-height: 143%;

    color: var(--black-light, #898088);

    @include mx.tablet {
      &:first-child {
        width: 247px;
        flex: 0 0 auto;
      }

      width: 100%;
    }
    @include mx.desktop {
      font-size: 16px;

      &:first-child {
        width: 308px;
      }
    }

    &_dark {
      color: var(--black, #342633);

      @include mx.tablet {
        color: var(--black-light, #898088);
      }
    }
  }
}
</style>
