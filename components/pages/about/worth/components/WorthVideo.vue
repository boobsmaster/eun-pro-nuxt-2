<script>
import Icon from '~/components/common/icon/Icon.vue'
export default {
  name: 'WorthVideo',
  components: { Icon },
}
</script>

<template>
  <div class="video">
    <div class="video__overlay">
      <Icon name="play-button-video" class="video__overlay-icon" />
      <span class="video__overlay-text">История нашей компании</span>
    </div>

    <iframe
      frameborder="0"
      allowfullscreen
      title="YouTube video player"
      class="video__frame"
      src="https://www.youtube.com/embed/d1gmuWdZzkw"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  </div>
</template>

<style lang="scss" scoped>
.video {
  position: relative;
  height: auto;

  overflow: hidden;
  border-radius: 5px;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
  }

  &__overlay-icon {
    width: 60px;
    height: 60px;
  }

  &__overlay-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 143%;
    font-style: normal;

    color: var(--white, #f3f3f3);
  }

  &__frame {
    width: 100%;
    height: 181px;
  }
}
</style>
