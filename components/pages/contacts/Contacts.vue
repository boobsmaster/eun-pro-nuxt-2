<script>
import Map from './components/Map.vue'
import Info from './components/Info.vue'
import Socials from './components/Socials.vue'
import Requisites from './components/Requisites.vue'
import ContactsTabs from './components/ContactsTabs.vue'
import Section from '~/components/common/section/Section.vue'
import Breadcrumbs from '~/components/common/breadcrumbs/Breadcrumbs.vue'
import ConsultationForm from '../common/consultationForm/ConsultationForm.vue'

export default {
  name: 'Contacts',
  components: { Section, Breadcrumbs, ContactsTabs, Info, Requisites, Socials, Map, ConsultationForm },
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
        name: 'Контакты',
      },
    ]

    const tabs = [
      {
        key: 'moscow',
        label: 'Москва',
        value: {
          city: 'Москва',
          address: 'ул. Октябрьская, 4к2',
        },
      },
      {
        key: 'saintPetersburg',
        label: 'Санкт-Петербург',
        value: {
          city: 'Санкт-Петербург',
          address: 'ул. Большая Конюшенная, 14',
        },
      },
    ]

    const activeTabKey = tabs[0].key

    return {
      tabs,
      activeTabKey,
      breadcrumbsArray,
    }
  },
  methods: {
    setActiveTabKey(key) {
      this.activeTabKey = key
    },
  },
  watch: {
    activeTabKey(newValue) {
      if (newValue) {
        this.$refs.map.key = newValue
      }
    },
  },
}
</script>

<template>
  <div>
    <Section class="contacts-page">
      <Breadcrumbs :links="breadcrumbsArray" />
      <div class="contacts-page__content">
        <div class="contacts-page__container">
          <ContactsTabs :tabs="tabs" @update="setActiveTabKey" :active-tab-key="activeTabKey" />
          <Info />
          <Requisites />
        </div>
        <Socials />
      </div>
    </Section>
    <div class="contacts-map">
      <Section>
        <ConsultationForm />
      </Section>
      <Map :key="activeTabKey" ref="map" :active-key="activeTabKey" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;
.contacts-page {
  display: flex;
  flex-direction: column;

  padding: 20px 0 0 0;

  @include mx.tablet {
    padding: 30px 0 0 0;
  }

  @include mx.desktop {
    padding: 50px 0 0 0;
  }

  &__content {
    display: flex;
    flex-direction: column;

    padding: 20px 0 30px 0;

    @include mx.tablet {
      flex-direction: row;
      justify-content: space-between;
      padding: 20px 0 40px 0;
    }

    @include mx.desktop {
      gap: 30px;
      justify-content: flex-start;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;

    @include mx.tablet {
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 473px;
      column-gap: 70px;
      row-gap: 43px;
    }

    @include mx.desktop {
      grid-template-columns: repeat(2, 1fr);

      max-width: unset;
      row-gap: 45px;
      column-gap: 83px;
    }
  }
}

.contacts-map {
  display: flex;
  flex-direction: column;
}
</style>
