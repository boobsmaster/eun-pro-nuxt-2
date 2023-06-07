<script>
import Button from "~/components/common/button/Button.vue";
import Icon from "~/components/common/icon/Icon.vue";
import Autocomplete from "~/components/common/autocomplete/Autocomplete.vue";

export default {
  name: "SearchBlock",
  components: { Button, Icon, Autocomplete },
  props: {
    title: { type: String, required: true },
  },
  emits: ["search"],
  data() {
    const options = [
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
        name: "Экспертиза сметной документации",
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
        name: "Экспертиза железобетонных конструкций",
        path: "/",
      },

      // "Проектирование зданий и сооружений",
      // "Экспертиза светильников",
      // "Экспертиза промышленной безопасности зданий и сооружений",
      // "Экспертиза системы отопления",
      // "Экспертиза канализации",
      // "Экспертиза трубопроводов",
      // "Экспертиза водоснабжения",
      // "Экспертиза вентиляции",
      // "Видеодиагностика канализации",
      // "Экспертиза после залива квартиры",
      // "Экспертиза горячей воды",
      // "Экспертиза сантехники",
      // "Экспертиза перепланировки квартиры",
      // "Экспертиза пола в квартире",
      // "Анализ воздуха в квартире",
      // "Микологическая экспертиза",
      // "Экспертиза счетчиков воды",
      // "Экспертиза счетчика газа",
      // "Замер радиации в квартире",
      // "Экспертиза электромагнитного излучения",
      // "Экспертиза шума",
      // "Экспертиза ремонта квартиры",
      // "Экспертиза шумоизоляции",
      // "Экспертиза квартиры в новостройке",
      // "Экологическая экспертиза квартиры",
      // "Согласование перепланировки квартиры под ключ",
      // "Экспертиза натяжных потолков",
      // "Экспертиза электропроводки",
      // "Экспертиза деревянного дома",
      // "Экспертиза каркасного дома",
      // "Экспертиза кровли крыши",
      // "Экспертиза кирпичной кладки",
      // "Геология участка под строительство",
      // "Геотехнический мониторинг",
      // "Инженерно экологические изыскания",
      // "Инженерно геологические изыскания",
      // "Геология участка под строительство",
      // "Геотехнический мониторинг",
      // "Инженерно экологические изыскания",
      // "Инженерно геологические изыскания",
      // "Расчет пожарных рисков",
      // "Финансово экономическая экспертиза",
      // "Экспертиза оборудования",
      // "Обмер квартир и помещений",
      // "Приемка квартиры в новостройке",
    ];
    const searchValue = "";

    return {
      options,
      searchValue,
    };
  },
  methods: {
    setSearchValue(value) {
      this.searchValue = value;
    },
  },
};
</script>

<template>
  <div class="search">
    <div class="search__container">
      <h2 class="search__title">
        {{ title }}
      </h2>

      <div class="search__input">
        <div class="search__field">
          <Autocomplete
            :options="options"
            @search="$emit('search', searchValue)"
            @update="setSearchValue"
          />
        </div>

        <div @click="$emit('search', searchValue)" class="search__button">
          <Button>
            <Icon name="search" class="search__button-icon" />
            <span class="search__button-text"> Поиск </span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as mx;
@use "@/assets/scss/styles/variables" as vars;

.search {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background: #f3f3f3;

  padding: 40px 0;
  margin-top: 20px;

  @include mx.tablet {
    margin-top: 30px;
    padding: 40px;

    max-width: 720px;
  }

  @include mx.desktop {
    margin-top: 46px;
    max-width: 1200px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;
    max-width: 320px;

    @include mx.tablet {
      max-width: unset;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;

    color: #342633;
  }

  &__input {
    display: flex;
    align-items: center;
    gap: 20px;

    @include mx.tablet {
      gap: 30px;
    }
  }

  &__field {
    width: 260px;
    height: 40px;

    @include mx.tablet {
      width: 433px;
    }

    @include mx.desktop {
      width: 853px;
    }
  }

  &__button {
    width: 40px;
    height: 40px;

    @include mx.tablet {
      width: 187px;
    }

    @include mx.desktop {
      width: 237px;
    }
  }

  &__button-icon {
    display: flex;

    @include mx.tablet {
      display: none;
    }
  }

  &__button-text {
    display: none;

    @include mx.tablet {
      display: flex;
    }
  }
}
</style>
