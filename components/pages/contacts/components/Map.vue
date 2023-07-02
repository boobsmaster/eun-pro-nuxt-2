<script>
import { computed } from 'vue'

export default {
  name: 'ContactsMap',
  props: {
    activeKey: { type: String, required: true },
  },
  data(props) {
    const height = null
    const mapLinks = {
      moscow:
        'https://yandex.ru/map-widget/v1/?um=constructor%3Ab89c3f109212d819f4fe0e729814d896ece135a1211b7f996f15f251342441dd&amp;source=constructor',
      saintPetersburg:
        'https://yandex.ru/map-widget/v1/?um=constructor%3A549c0fcaaf5c957c2ea8e608328154411d2c305f5ff4c26ff5ac79554a16e062&amp;source=constructor',
    }

    return {
      height,
      mapLinks,
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.onResize()
    })

    window.addEventListener('resize', this.onResize)
  },
  computed: {
    activeMapLink() {
      return this.mapLinks[this.$props.activeKey]
    },
  },
  methods: {
    setMapHeight(value) {
      this.height = value
    },

    onResize() {
      if (window.innerWidth < 1600) {
        this.setMapHeight(448)
      }
      if (window.innerWidth >= 1600) {
        this.setMapHeight(760)
      }
    },
  },
}
</script>

<template>
  <iframe :src="activeMapLink" width="100%" :height="height" frameborder="0" />
</template>

<style lang="scss" scoped></style>
