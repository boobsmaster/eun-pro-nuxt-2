<script>
import AppWork from '../main/work/AppWork.vue'
import AppTrust from '../main/trust/AppTrust.vue'
import AppAbout from '../main/about/AppAbout.vue'
import AppLicenses from '../main/licenses/AppLicenses.vue'
import Worth from '@/components/pages/about/worth/Worth.vue'
import Section from '~/components/common/section/Section.vue'
import AppAdvantages from '../main/advantages/AppAdvantages.vue'
import AppCollaborators from '../main/collaborators/AppCollaborators.vue'
import Breadcrumbs from '~/components/common/breadcrumbs/Breadcrumbs.vue'
import ConsultationForm from '../common/consultationForm/ConsultationForm.vue'

export default {
  name: 'AboutPageContainer',
  components: {
    Worth,
    AppWork,
    Section,
    AppAbout,
    Breadcrumbs,
    AppAdvantages,
    AppCollaborators,
    AppTrust,
    AppLicenses,
    ConsultationForm,
  },
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
        name: 'О компании',
      },
    ]

    return {
      breadcrumbsArray,
    }
  },
}
</script>

<template>
  <div class="about">
    <Section class="about__breadcrumbs">
      <Breadcrumbs :links="breadcrumbsArray" />
    </Section>
    <div class="about__content">
      <AppAbout :description="true" />
      <AppWork />
      <Worth />
      <AppAdvantages />
      <AppCollaborators />
      <AppTrust />
      <AppLicenses />
      <Section>
        <ConsultationForm />
      </Section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;
.about {
  padding-top: 20px;

  @include mx.tablet {
    padding-top: 30px;
  }

  @include mx.desktop {
    padding-top: 50px;
  }
}
</style>
