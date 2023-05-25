<template>
  <div class="about-expertise">
    <div v-for="expertise in expertises" class="about-expertise-item col-3">
      <div class="about-expertise-item__value">
        {{expertise.value}}
      </div>
      <div class="about-expertise-item__title">
        {{expertise.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutLeftExpertises",
  data() {
    return {
      expertises: [
        {
          title: 'Выполненные экспертизы',
          value: 1327
        },
        {
          title: 'Судебных экспертиз',
          value: 124
        },
        {
          title: 'Выполненные экспертизы',
          value: 1327
        },
        {
          title: 'Довольных клиентов',
          value: 285
        },
        {
          title: 'Обследование зданий',
          value: 48
        },
        {
          title: 'Довольных клиентов',
          value: 285
        },
        {
          title: 'Выполненные экспертизы',
          value: 1327
        },
        {
          title: 'Судебных экспертиз',
          value: 124
        },
        {
          title: 'Выполненные экспертизы',
          value: 1327
        }
      ]
    }
  }
}
</script>

<style scoped>
.about-left-title__line:after {
  content: "";
  width: 40px;
  height: 0;

  border: 5px solid #C2D2DF;
}
.about-expertise-item__value{

}
</style>
