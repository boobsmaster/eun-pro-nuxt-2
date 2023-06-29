<script>
import AppWork from '~/components/pages/main/work/AppWork.vue'
import AppAbout from '~/components/pages/main/about/AppAbout.vue'
import AppTrust from '~/components/pages/main/trust/AppTrust.vue'
import AppStages from '~/components/pages/main/stages/AppStages.vue'
import AppVideos from '~/components/pages/main/videos/AppVideos.vue'
import AppReviews from '~/components/pages/main/reviews/AppReviews.vue'
import AppPreview from '~/components/pages/main/preview/AppPreview.vue'
import AppServices from '~/components/pages/main/services/AppServices.vue'
import AppLicenses from '~/components/pages/main/licenses/AppLicenses.vue'
import AppEquipment from '~/components/pages/main/equipment/AppEquipment.vue'
import AppQuestions from '~/components/pages/main/questions/AppQuestions.vue'
import AppAdvantages from '~/components/pages/main/advantages/AppAdvantages.vue'
import AppContactMenu from '~/components/pages/main/contact-menu/AppContactMenu.vue'
import AppConsultation from '~/components/pages/main/consultation/AppConsultation.vue'
import AppServicesMenu from '~/components/pages/main/services-menu/AppServicesMenu.vue'
import AppCollaborators from '~/components/pages/main/collaborators/AppCollaborators.vue'

export default {
  name: 'MainPage',
  components: {
    AppWork,
    AppTrust,
    AppAbout,
    AppStages,
    AppVideos,
    AppReviews,
    AppPreview,
    AppLicenses,
    AppServices,
    AppEquipment,
    AppQuestions,
    AppAdvantages,
    AppContactMenu,
    AppServicesMenu,
    AppConsultation,
    AppCollaborators,
  },
}
</script>

<template>
  <div>
    <AppPreview />
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
