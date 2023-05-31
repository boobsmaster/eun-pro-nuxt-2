<script>
export default {
  name: "IconVue",
  props: {
    name: {
      type: String,
      default: "image",
    },
  },
};
</script>

<template>
  <component :is="require(`~/assets/icons/${name}.svg?inline`)" />
</template>
