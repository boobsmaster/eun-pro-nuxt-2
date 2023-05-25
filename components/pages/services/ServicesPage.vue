<script>
import Section from "~/components/common/section/Section.vue";
import Breadcrumbs from "~/components/common/breadcrumbs/Breadcrumbs.vue";

export default {
  name: "Services",
  components: { Breadcrumbs },
  data() {
    const breadcrumbsArray = ["главная", "все услуги"];

    return {
      breadcrumbsArray,
    };
  },
};
</script>

<template>
  <div class="services">
    <Section>
      <Breadcrumbs :links="breadcrumbsArray" />
    </Section>
  </div>
</template>

<style lang="scss" scoped></style>
