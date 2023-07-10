<script>
import WorthVideo from './components/WorthVideo.vue'
import WorthTimeline from './components/WorthTimeline.vue'
import Section from '~/components/common/section/Section.vue'
import WorthAdvantages from './components/WorthAdvantages.vue'

export default {
  name: 'CompanyWorth',
  components: { Section, WorthVideo, WorthTimeline, WorthAdvantages },
}
</script>

<template>
  <Section class="worth">
    <div class="worth__head">
      <span class="worth__head-title">
        <span class="worth__head-title worth__head-title_highlighted">Наша цель: </span>
        Экспертизу проводят для объектов нового строительства, реконструкции, реставрации, модернизации и капитального
        ремонта.
      </span>
    </div>
    <WorthAdvantages />
    <WorthVideo />
    <WorthTimeline />
  </Section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;

.worth {
  display: flex;
  flex-direction: column;

  &__head {
    display: flex;
    justify-content: center;

    width: 100%;
    border-bottom: 2px solid #c2d2df;

    padding: 20px 0;

    @include mx.tablet {
      padding: 30px 0;
    }

    @include mx.desktop {
      padding: 50px 0;
    }
  }

  &__head-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 143%;
    font-style: normal;
    font-family: 'Gilroy';

    color: var(--black-light-2, #433142);

    @include mx.tablet {
      font-size: 20px;

      width: 598px;
    }

    @include mx.desktop {
      font-size: 24px;

      width: 994px;
    }

    &_highlighted {
      font-weight: 700;
    }
  }
}
</style>
