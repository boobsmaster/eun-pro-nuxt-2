<script>
import AppWork from '../main/work/AppWork.vue'
import SeoText from './components/SeoText.vue'
import AppTrust from '../main/trust/AppTrust.vue'
import AppAbout from '../main/about/AppAbout.vue'
import AppVideos from '../main/videos/AppVideos.vue'
import AppStages from '../main/stages/AppStages.vue'
import AppPreview from '../main/preview/AppPreview.vue'
import AppReviews from '../main/reviews/AppReviews.vue'
import AppLicenses from '../main/licenses/AppLicenses.vue'
import Worth from '@/components/pages/about/worth/Worth.vue'
import PreviewContent from './components/PreviewContent.vue'
import Section from '~/components/common/section/Section.vue'
import AppQuestions from '../main/questions/AppQuestions.vue'
import AppAdvantages from '../main/advantages/AppAdvantages.vue'
import AppConsultation from '../main/consultation/AppConsultation.vue'
import AppCollaborators from '../main/collaborators/AppCollaborators.vue'
import Breadcrumbs from '~/components/common/breadcrumbs/Breadcrumbs.vue'
import ConsultationForm from '../common/consultationForm/ConsultationForm.vue'

export default {
  name: 'AboutPageContainer',
  components: {
    Worth,
    AppWork,
    Section,
    AppTrust,
    AppAbout,
    AppVideos,
    AppStages,
    AppPreview,
    AppReviews,
    AppLicenses,
    Breadcrumbs,
    AppQuestions,
    AppAdvantages,
    PreviewContent,
    AppConsultation,
    ConsultationForm,
    AppCollaborators,
  },
}
</script>

<template>
  <div class="favor">
    <AppPreview>
      <template v-slot:content>
        <PreviewContent />
      </template>
      <template v-slot:footer></template>
    </AppPreview>

    <AppAbout />
    <AppAdvantages />
    <AppStages />
    <AppWork />
    <AppTrust />
    <AppCollaborators />
    <AppConsultation />
    <AppLicenses />
    <SeoText />
    <AppReviews />
    <AppVideos />
    <AppQuestions />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;
</style>
