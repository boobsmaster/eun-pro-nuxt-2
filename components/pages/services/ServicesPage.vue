<script>
import Section from "~/components/common/section/Section.vue";
import SearchBlock from "~/components/pages/common/search/Search.vue";
import Breadcrumbs from "~/components/common/breadcrumbs/Breadcrumbs.vue";

import OptionContainer from "~/components/pages/services/variants/OptionContainer.vue";
import AppConsultation from "~/components/pages/main/consultation/AppConsultation.vue";
import ConsultationForm from "~/components/pages/common/consultationForm/ConsultationForm.vue";
import AppServicesMenu from "../main/services-menu/AppServicesMenu.vue";

export default {
  name: "Services",
  components: {
    Breadcrumbs,
    Section,
    SearchBlock,
    OptionContainer,
    AppConsultation,
    ConsultationForm,
    AppServicesMenu,
  },
  data() {
    const containersList = [
      {
        number: "0.1",
        title: "Экспертиза",
        list: [
          {
            title: "Строительная экспертиза",
            list: [
              {
                name: "Строительная экспертиза для суда	",
                path: "/",
              },
              {
                name: "Рецензия на строительную экспертизу",
                path: "/",
              },
              {
                name: "Экспертиза перекрытий",
                path: "/",
              },
              {
                name: "Экспертиза фундамента",
                path: "/",
              },
              {
                name: "Экспертиза строительных материалов",
                path: "/",
              },
              {
                name: "Экспертиза песка",
                path: "/",
              },
              {
                name: "Экспертиза кирпича",
                path: "/",
              },
              {
                name: "Экспертиза бетона",
                path: "/",
              },
              {
                name: "Испытание арматуры",
                path: "/",
              },
              {
                name: "Экспертиза стяжки пола",
                path: "/",
              },
              {
                name: "Экспертиза парковки",
                path: "/",
              },
              {
                name: "Экспертиза дымовых труб",
                path: "/",
              },
              {
                name: "Экспертиза стен",
                path: "/",
              },

              {
                name: "Экспертиза окон",
                path: "/",
              },
              {
                name: "Экспертиза дверей",
                path: "/",
              },
              {
                name: "Экспертиза фасадов",
                path: "/",
              },
              {
                name: "Экспертиза балкона (частота за год)",
                path: "/",
              },
              {
                name: "Экспертиза лестницы",
                path: "/",
              },
              {
                name: "Инженерно техническая экспертиза",
                path: "/",
              },
            ],
          },

          {
            title: "Экспертиза зданий и сооружений",
            list: [
              {
                name: "Тепловизионное обследование",
                path: "/",
              },
              {
                name: "Экспертиза капитальности",
                path: "/",
              },
              {
                name: "Экспертиза промышленной безопасности",
                path: "/",
              },
              {
                name: "Экспертиза колонн",
                path: "/",
              },
              {
                name: "Экспертиза металлоконструкций",
                path: "/",
              },
              {
                name: "Экспертиза подвала",
                path: "/",
              },
              {
                name: "Экспертиза железобетонных конструкций",
                path: "/",
              },
              {
                name: "Проект перепланировки нежилого помещения",
                path: "/",
              },
              {
                name: "Проектирование зданий и сооружений",
                path: "/",
              },
              {
                name: "Экспертиза светильников",
                path: "/",
              },
              {
                name: "Экспертиза промышленной безопасности зданий и сооружений",
                path: "/",
              },
            ],
          },
          {
            title: "Экспертиза инженерных коммуникаций",
            list: [
              {
                name: "Экспертиза системы отопления",
                path: "/",
              },
              {
                name: "Экспертиза канализации",
                path: "/",
              },
              {
                name: "Экспертиза трубопроводов",
                path: "/",
              },
              {
                name: "Экспертиза водоснабжения",
                path: "/",
              },
              {
                name: "Экспертиза вентиляции",
                path: "/",
              },
              {
                name: "Видеодиагностика канализации",
                path: "/",
              },
            ],
          },
          {
            title: "Экспертиза квартиры для суда",
            list: [
              {
                name: "Экспертиза после залива квартиры",
                path: "/",
              },
              {
                name: "Экспертиза горячей воды",
                path: "/",
              },
              {
                name: "Экспертиза сантехники",
                path: "/",
              },
              {
                name: "Экспертиза электросчетчика",
                path: "/",
              },
              {
                name: "Экспертиза перепланировки квартиры",
                path: "/",
              },
              {
                name: "Экспертиза пола в квартире",
                path: "/",
              },
              {
                name: "Микологическая экспертиза",
                path: "/",
              },
              {
                name: "Экспертиза счетчиков воды",
                path: "/",
              },
              {
                name: "Экспертиза счетчика газа",
                path: "/",
              },
              {
                name: "Замер радиации в квартире",
                path: "/",
              },
              {
                name: "Экспертиза электромагнитного излучения",
                path: "/",
              },
              {
                name: "Экспертиза шума",
                path: "/",
              },
              {
                name: "Экспертиза ремонта квартиры",
                path: "/",
              },
              {
                name: "Экспертиза шумоизоляции",
                path: "/",
              },
              {
                name: "Экспертиза квартиры в новостройке",
                path: "/",
              },
              {
                name: "Экологическая экспертиза квартиры",
                path: "/",
              },
              {
                name: "Согласование перепланировки квартиры под ключ",
                path: "/",
              },
              {
                name: "Экспертиза натяжных потолков",
                path: "/",
              },
              {
                name: "Экспертиза электропроводки",
                path: "/",
              },
            ],
          },
          {
            title: "Экспертиза дома",
            list: [
              {
                name: "Экспертиза деревянного дома",
                path: "/",
              },
              {
                name: "Экспертиза каркасного дома",
                path: "/",
              },
              {
                name: "Экспертиза кровли крыши",
                path: "/",
              },
              {
                name: "Экспертиза кирпичной кладки",
                path: "/",
              },
            ],
          },
          {
            title: "Землеустроительная экспертиза",
            list: [
              {
                name: "Геология участка под строительство",
                path: "/",
              },
              {
                name: "Геотехнический мониторинг",
                path: "/",
              },
              {
                name: "Инженерно экологические изыскания",
                path: "/",
              },
              {
                name: "Инженерно геологические изыскания",
                path: "/",
              },
            ],
          },
          {
            title: "Геодезические работы",
            list: [
              {
                name: "Геология участка под строительство",
                path: "/",
              },
              {
                name: "Геотехнический мониторинг",
                path: "/",
              },
              {
                name: "Инженерно экологические изыскания",
                path: "/",
              },
              {
                name: "Инженерно геологические изыскания",
                path: "/",
              },
            ],
          },
          {
            title: "Пожарная экспертиза",
            list: [
              {
                name: "	Расчет пожарных рисков",
                path: "/",
              },
            ],
          },
          {
            title: "Экологическая экспертиза",
            list: [
              // {
              //   name: "	Расчет пожарных рисков",
              //   path: "/",
              // },
            ],
          },
          {
            title: "Бухгалтерская экспертиза",
            list: [
              {
                name: "Финансово экономическая экспертиза",
                path: "/",
              },
            ],
          },
          {
            title: "Техническая экспертиза",
            list: [
              {
                name: "Экспертиза оборудования",
                path: "/",
              },
            ],
          },
          {
            title: "Техническая экспертиза",
            list: [
              {
                name: "Экспертиза оборудования",
                path: "/",
              },
            ],
          },
          {
            title: "Экспертиза рекламных конструкций",
            list: [],
          },
          {
            title: "Экспертиза дорог и дорожных покрытий",
            list: [],
          },
          {
            title: "Экспертиза бани (Частота за год)",
            list: [],
          },
          {
            title: "Искусствоведческая экспертиза",
            list: [],
          },
          {
            title: "Электротехническая экспертиза",
            list: [],
          },
        ],
      },
      {
        number: "0.2",
        title: "Оценка",
        list: [
          {
            title: "Независимая оценка квартиры",
            list: [
              {
                name: "Обмер квартир и помещений",
                path: "/",
              },
              {
                name: "Приемка квартиры в новостройке",
                path: "/",
              },
            ],
          },
          {
            title: "Оценка ущерба после пожара",
            list: [],
          },
          {
            title: "Оценка стоимости земельного участка",
            list: [],
          },
          {
            title: "Оценка ноу хау",
            list: [],
          },
          {
            title: "Оценка патента",
            list: [],
          },
          {
            title: "Оценка товарного знака",
            list: [],
          },
          {
            title: "Оценка стоимости бизнеса",
            list: [],
          },
          {
            title: "Оценка стоимости недвижимости",
            list: [],
          },
          {
            title: "Оценка оборудования",
            list: [],
          },
          {
            title: "Оценка коммерческой недвижимости",
            list: [],
          },
          {
            title: "Оценка аренды недвижимости",
            list: [],
          },
        ],
      },
      {
        number: "0.3",
        title: "Аудит",
        list: [
          {
            title: "Пожарный аудит",
            list: [],
          },
          {
            title: "Строительный аудит",
            list: [],
          },
          {
            title: "Экологический аудит",
            list: [],
          },
          {
            title: "Юридические услуги",
            list: [],
          },
          {
            title: "Оспаривание кадастровой стоимости",
            list: [],
          },
          {
            title: "Юридическая экспертиза договора",
            list: [],
          },
          {
            title: "Рецензия на экспертизу",
            list: [],
          },
        ],
      },
    ];

    const results = [];
    const isTouched = false;
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
      results,
      isTouched,
      containersList,
      breadcrumbsArray,
    };
  },
  methods: {
    searchFilter(value) {
      this.isTouched = true;

      if (value === "") {
        this.results = this.containersList;
      } else {
        const filteredArray = this.containersList.map((element1) => {
          const filtered = element1.list.map((item) => {
            const filtered2 = item.list.filter((item) =>
              item.name.includes(value)
            );

            if (filtered2) {
              return { title: item.title, list: filtered2 };
            }
          });

          if (filtered) {
            return {
              list: filtered,
              title: element1.title,
              number: element1.number,
            };
          }
        });

        this.results = filteredArray
          .map((item) => {
            return {
              title: item.title,
              number: item.number,
              list: item.list.filter((item) => item.list.length > 0),
            };
          })
          .filter((item) => item.list.length > 0);
      }
    },
  },
};
</script>

<template>
  <div class="services">
    <AppServicesMenu></AppServicesMenu>
    <Section>
      <Breadcrumbs :links="breadcrumbsArray" />
    </Section>

    <SearchBlock title="Поиск по услугам" @search="searchFilter" />

    <div class="options">
      <OptionContainer
        v-for="item in isTouched && results ? results : containersList"
        :key="item.number"
        :list="item.list"
        :title="item.title"
        :number="item.number"
      />
      <div
        v-if="isTouched && results.length === 0"
        class="options__placeholder"
      >
        <span class="options__placeholder-text">
          По вашему запросу не найдено результатов
        </span>
      </div>

      <div class="options__form">
        <ConsultationForm />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as mx;
@use "@/assets/scss/styles/variables" as vars;

.services {
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 20px 0;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 70px;

  width: 100%;

  margin-top: 20px;
  max-width: 320px;

  @include mx.tablet {
    margin-top: 40px;
    max-width: 720px;
  }

  @include mx.desktop {
    margin-top: 30px;
    max-width: 1200px;
  }

  &__placeholder {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 300px;
  }

  &__placeholder-text {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    text-align: center;

    color: #342633;
  }

  &__form {
    margin: 0 0 -20px 0;

    @include mx.tablet {
      margin: 0 0 -8px 0px;
    }

    @include mx.desktop {
      margin: 0 0 43px 0px;
    }
  }
}
</style>
