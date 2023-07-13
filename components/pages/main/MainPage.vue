<script>
import PreviewForm from './preview/PreviewForm.vue'
import PreviewServices from './preview/PreviewServices.vue'
import PreviewBenefits from './preview/PreviewBenefits.vue'
import AppWork from '~/components/pages/main/work/AppWork.vue'
import AppTrust from '~/components/pages/main/trust/AppTrust.vue'
import AppAbout from '~/components/pages/main/about/AppAbout.vue'
import AppVideos from '~/components/pages/main/videos/AppVideos.vue'
import AppStages from '~/components/pages/main/stages/AppStages.vue'
import AppPreview from '~/components/pages/main/preview/AppPreview.vue'
import AppReviews from '~/components/pages/main/reviews/AppReviews.vue'
import AppLicenses from '~/components/pages/main/licenses/AppLicenses.vue'
import AppServices from '~/components/pages/main/services/AppServices.vue'
import AppQuestions from '~/components/pages/main/questions/AppQuestions.vue'
import AppEquipment from '~/components/pages/main/equipment/AppEquipment.vue'
import AppAdvantages from '~/components/pages/main/advantages/AppAdvantages.vue'
import AppContactMenu from '~/components/pages/main/contact-menu/AppContactMenu.vue'
import AppConsultation from '~/components/pages/main/consultation/AppConsultation.vue'
import AppServicesMenu from '~/components/pages/main/services-menu/AppServicesMenu.vue'
import AppCollaborators from '~/components/pages/main/collaborators/AppCollaborators.vue'

export default {
  name: 'MainPage',
  components: {
    AppWork,
    AppAbout,
    AppTrust,
    AppVideos,
    AppStages,
    AppPreview,
    AppReviews,
    AppServices,
    AppLicenses,
    PreviewForm,
    AppEquipment,
    AppQuestions,
    AppAdvantages,
    AppContactMenu,
    AppServicesMenu,
    PreviewBenefits,
    AppConsultation,
    PreviewServices,
    AppCollaborators,
  },
}
</script>

<template>
  <div>
    <AppPreview>
      <template v-slot:content>
        <PreviewBenefits />
        <PreviewForm />
      </template>
      <template v-slot:footer>
        <PreviewServices />
      </template>
    </AppPreview>

    <AppAbout />
    <AppAdvantages />
    <AppServices />
    <AppConsultation />
    <AppStages />
    <AppWork />
    <AppTrust />
    <AppCollaborators />
    <AppConsultation />
    <AppLicenses />
    <AppEquipment />
    <AppReviews />
    <AppVideos />
    <AppQuestions />
    <AppContactMenu />
    <AppServicesMenu />
  </div>
</template>

<style lang="scss" scoped></style>
