<script>
import Icon from '~/components/common/icon/Icon.vue'
export default {
  name: 'WorthVideo',
  components: { Icon },
}
</script>

<template>
  <div class="video">
    <img src="~/assets/images/about-video-overlay.png" alt="" class="video__img" />
    <a href="https://youtube.com" target="_blank" class="video__link" />

    <div class="video__content">
      <Icon name="play-button-video" class="video__icon" />
      <span class="video__text">История нашей компании</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as mx;
@use '@/assets/scss/styles/variables' as vars;

.video {
  position: relative;

  width: 100%;
  height: 181px;

  overflow: hidden;
  border-radius: 5px;

  @include mx.tablet {
    height: 405px;
  }

  @include mx.desktop {
    height: 502px;
    max-width: 892px;
    margin: 0 auto;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;

    display: flex;
    align-items: center;

    gap: 20px;

    transform: translateX(-50%) translateY(-50%);
  }

  &__icon {
    width: 60px;
    height: 60px;

    flex: 0 0 auto;
  }

  &__text {
    font-size: 16px;
    font-weight: 500;
    line-height: 143%;
    font-style: normal;

    color: var(--white, #f3f3f3);

    width: 140px;
  }
}
</style>
