<script>
import Section from "~/components/common/section/Section.vue";
import Options from "~/components/pages/services/variants/Options.vue";
import SearchBlock from "~/components/pages/common/search/Search.vue";
import Breadcrumbs from "~/components/common/breadcrumbs/Breadcrumbs.vue";

export default {
  name: "Services",
  components: { Breadcrumbs, Section, SearchBlock, Options },
  data() {
    const breadcrumbsArray = [
      {
        id: "1",
        path: "/",
        name: "главная",
      },
      {
        id: "2",
        path: "/",
        name: "все услуги",
      },
    ];

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

    <SearchBlock title="Поиск по услугам" />

    <Options />
  </div>
</template>

<style lang="scss" scoped>
.services {
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 20px 0;
}
</style>
