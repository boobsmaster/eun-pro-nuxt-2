<script>
import Icon from '~/components/common/icon/Icon.vue'
import AccordionFirstLevel from './AccordionFirstLevel.vue'
import AccordionSecondLevel from './AccordionSecondLevel.vue'

export default {
  name: 'AppServicesMenu',
  data() {
    const mobileAccordionList = [
      {
        number: '0.1',
        title: 'Экспертиза',
        list: [
          {
            title: 'Строительная экспертиза',
            list: [
              {
                name: 'Строительная экспертиза для суда	',
                path: '/',
              },
              {
                name: 'Рецензия на строительную экспертизу',
                path: '/',
              },
              {
                name: 'Экспертиза перекрытий',
                path: '/',
              },
              {
                name: 'Экспертиза фундамента',
                path: '/',
              },
              {
                name: 'Экспертиза строительных материалов',
                path: '/',
              },
              {
                name: 'Экспертиза песка',
                path: '/',
              },
              {
                name: 'Экспертиза кирпича',
                path: '/',
              },
              {
                name: 'Экспертиза бетона',
                path: '/',
              },
              {
                name: 'Испытание арматуры',
                path: '/',
              },
              {
                name: 'Экспертиза стяжки пола',
                path: '/',
              },
              {
                name: 'Экспертиза парковки',
                path: '/',
              },
              {
                name: 'Экспертиза дымовых труб',
                path: '/',
              },
              {
                name: 'Экспертиза стен',
                path: '/',
              },

              {
                name: 'Экспертиза окон',
                path: '/',
              },
              {
                name: 'Экспертиза дверей',
                path: '/',
              },
              {
                name: 'Экспертиза фасадов',
                path: '/',
              },
              {
                name: 'Экспертиза балкона (частота за год)',
                path: '/',
              },
              {
                name: 'Экспертиза лестницы',
                path: '/',
              },
              {
                name: 'Инженерно техническая экспертиза',
                path: '/',
              },
            ],
          },

          {
            title: 'Экспертиза зданий и сооружений',
            list: [
              {
                name: 'Тепловизионное обследование',
                path: '/',
              },
              {
                name: 'Экспертиза капитальности',
                path: '/',
              },
              {
                name: 'Экспертиза промышленной безопасности',
                path: '/',
              },
              {
                name: 'Экспертиза колонн',
                path: '/',
              },
              {
                name: 'Экспертиза металлоконструкций',
                path: '/',
              },
              {
                name: 'Экспертиза подвала',
                path: '/',
              },
              {
                name: 'Экспертиза железобетонных конструкций',
                path: '/',
              },
              {
                name: 'Проект перепланировки нежилого помещения',
                path: '/',
              },
              {
                name: 'Проектирование зданий и сооружений',
                path: '/',
              },
              {
                name: 'Экспертиза светильников',
                path: '/',
              },
              {
                name: 'Экспертиза промышленной безопасности зданий и сооружений',
                path: '/',
              },
            ],
          },
          {
            title: 'Экспертиза инженерных коммуникаций',
            list: [
              {
                name: 'Экспертиза системы отопления',
                path: '/',
              },
              {
                name: 'Экспертиза канализации',
                path: '/',
              },
              {
                name: 'Экспертиза трубопроводов',
                path: '/',
              },
              {
                name: 'Экспертиза водоснабжения',
                path: '/',
              },
              {
                name: 'Экспертиза вентиляции',
                path: '/',
              },
              {
                name: 'Видеодиагностика канализации',
                path: '/',
              },
            ],
          },
          {
            title: 'Экспертиза квартиры для суда',
            list: [
              {
                name: 'Экспертиза после залива квартиры',
                path: '/',
              },
              {
                name: 'Экспертиза горячей воды',
                path: '/',
              },
              {
                name: 'Экспертиза сантехники',
                path: '/',
              },
              {
                name: 'Экспертиза электросчетчика',
                path: '/',
              },
              {
                name: 'Экспертиза перепланировки квартиры',
                path: '/',
              },
              {
                name: 'Экспертиза пола в квартире',
                path: '/',
              },
              {
                name: 'Микологическая экспертиза',
                path: '/',
              },
              {
                name: 'Экспертиза счетчиков воды',
                path: '/',
              },
              {
                name: 'Экспертиза счетчика газа',
                path: '/',
              },
              {
                name: 'Замер радиации в квартире',
                path: '/',
              },
              {
                name: 'Экспертиза электромагнитного излучения',
                path: '/',
              },
              {
                name: 'Экспертиза шума',
                path: '/',
              },
              {
                name: 'Экспертиза ремонта квартиры',
                path: '/',
              },
              {
                name: 'Экспертиза шумоизоляции',
                path: '/',
              },
              {
                name: 'Экспертиза квартиры в новостройке',
                path: '/',
              },
              {
                name: 'Экологическая экспертиза квартиры',
                path: '/',
              },
              {
                name: 'Согласование перепланировки квартиры под ключ',
                path: '/',
              },
              {
                name: 'Экспертиза натяжных потолков',
                path: '/',
              },
              {
                name: 'Экспертиза электропроводки',
                path: '/',
              },
            ],
          },
          {
            title: 'Экспертиза дома',
            list: [
              {
                name: 'Экспертиза деревянного дома',
                path: '/',
              },
              {
                name: 'Экспертиза каркасного дома',
                path: '/',
              },
              {
                name: 'Экспертиза кровли крыши',
                path: '/',
              },
              {
                name: 'Экспертиза кирпичной кладки',
                path: '/',
              },
            ],
          },
          {
            title: 'Землеустроительная экспертиза',
            list: [
              {
                name: 'Геология участка под строительство',
                path: '/',
              },
              {
                name: 'Геотехнический мониторинг',
                path: '/',
              },
              {
                name: 'Инженерно экологические изыскания',
                path: '/',
              },
              {
                name: 'Инженерно геологические изыскания',
                path: '/',
              },
            ],
          },
          {
            title: 'Геодезические работы',
            list: [
              {
                name: 'Геология участка под строительство',
                path: '/',
              },
              {
                name: 'Геотехнический мониторинг',
                path: '/',
              },
              {
                name: 'Инженерно экологические изыскания',
                path: '/',
              },
              {
                name: 'Инженерно геологические изыскания',
                path: '/',
              },
            ],
          },
          {
            title: 'Пожарная экспертиза',
            list: [
              {
                name: '	Расчет пожарных рисков',
                path: '/',
              },
            ],
          },
          {
            title: 'Экологическая экспертиза',
            list: [
              // {
              //   name: "	Расчет пожарных рисков",
              //   path: "/",
              // },
            ],
          },
          {
            title: 'Бухгалтерская экспертиза',
            list: [
              {
                name: 'Финансово экономическая экспертиза',
                path: '/',
              },
            ],
          },
          {
            title: 'Техническая экспертиза',
            list: [
              {
                name: 'Экспертиза оборудования',
                path: '/',
              },
            ],
          },
          {
            title: 'Техническая экспертиза',
            list: [
              {
                name: 'Экспертиза оборудования',
                path: '/',
              },
            ],
          },
          {
            title: 'Экспертиза рекламных конструкций',
            list: [],
          },
          {
            title: 'Экспертиза дорог и дорожных покрытий',
            list: [],
          },
          {
            title: 'Экспертиза бани (Частота за год)',
            list: [],
          },
          {
            title: 'Искусствоведческая экспертиза',
            list: [],
          },
          {
            title: 'Электротехническая экспертиза',
            list: [],
          },
        ],
      },
      {
        number: '0.2',
        title: 'Оценка',
        list: [
          {
            title: 'Независимая оценка квартиры',
            list: [
              {
                name: 'Обмер квартир и помещений',
                path: '/',
              },
              {
                name: 'Приемка квартиры в новостройке',
                path: '/',
              },
            ],
          },
          {
            title: 'Оценка ущерба после пожара',
            list: [],
          },
          {
            title: 'Оценка стоимости земельного участка',
            list: [],
          },
          {
            title: 'Оценка ноу хау',
            list: [],
          },
          {
            title: 'Оценка патента',
            list: [],
          },
          {
            title: 'Оценка товарного знака',
            list: [],
          },
          {
            title: 'Оценка стоимости бизнеса',
            list: [],
          },
          {
            title: 'Оценка стоимости недвижимости',
            list: [],
          },
          {
            title: 'Оценка оборудования',
            list: [],
          },
          {
            title: 'Оценка коммерческой недвижимости',
            list: [],
          },
          {
            title: 'Оценка аренды недвижимости',
            list: [],
          },
        ],
      },
      {
        number: '0.3',
        title: 'Аудит',
        list: [
          {
            title: 'Пожарный аудит',
            list: [],
          },
          {
            title: 'Строительный аудит',
            list: [],
          },
          {
            title: 'Экологический аудит',
            list: [],
          },
          {
            title: 'Юридические услуги',
            list: [],
          },
          {
            title: 'Оспаривание кадастровой стоимости',
            list: [],
          },
          {
            title: 'Юридическая экспертиза договора',
            list: [],
          },
          {
            title: 'Рецензия на экспертизу',
            list: [],
          },
        ],
      },
    ]

    const menuLinks = [
      {
        name: 'Прайс-лист',
        link: '/',
      },
      {
        name: 'O компании',
        link: '/',
      },
      {
        name: 'Блог',
        link: '/',
      },
      {
        name: 'Вакансии',
        link: '/',
      },
      {
        name: 'Вопрос/ответ',
        link: '/',
      },
      {
        name: 'Наши работы',
        link: '/',
      },
      {
        name: 'Наши сотрудники',
        link: '/',
      },
      {
        name: 'Наши реквизиты',
        link: '/',
      },
      {
        name: 'Оборудование',
        link: '/',
      },
      {
        name: 'Контакты',
        link: '/',
      },
      {
        name: 'Отзывы',
        link: '/',
      },
      {
        name: 'Наши сертификаты',
        link: '',
      },
      {
        name: 'Гарантии',
        link: '',
      },
      {
        name: 'Оплата',
        link: '',
      },
      {
        name: 'Мы в СМИ',
        link: '',
      },
    ]
    return {
      mobileAccordionList,
      menuLinks,
    }
  },
  components: { Icon, AccordionFirstLevel, AccordionSecondLevel },
}
</script>

<template>
  <section class="services-menu">
    <!-- MOBILE -->
    <div class="services-menu__container services-menu__container_mobile">
      <div class="services-menu__title">Меню</div>
      <div class="services-menu__links-list">
        <div class="services-menu__accordion">
          <label class="services-menu__accordion-label" for="services"></label>
          <input class="services-menu__accordion-input" type="checkbox" id="services" />
          <header class="services-menu__accordion-header">
            <div class="services-menu__accordion-header-text">Наши услуги</div>
            <img class="services-menu__accordion-header-icon" src="~/assets/icons/accordion-arrow.svg" alt="" />
          </header>

          <div class="services-menu__accordion-content">
            <header class="services-menu__accordion-content-header">
              <h4 class="services-menu__accordion-content-header-title">Наши услуги</h4>

              <div class="services-menu__accordion-content-header-link">
                <img
                  class="services-menu__accordion-content-header-link-icon"
                  src="~/assets/icons/accordion-arrow.svg"
                  alt=""
                />
                <span class="services-menu__accordion-content-header-link-text">Все услуги</span>
                <a class="services-menu__accordion-content-header-link-source" href=""></a>
              </div>
            </header>

            <AccordionFirstLevel
              v-for="item in mobileAccordionList"
              :list="item.list"
              :title="item.title"
              :number="item.number"
              :key="item.number"
            />
          </div>
        </div>

        <a v-for="item in menuLinks" class="services-menu__link" :href="item.link">
          {{ item.name }}
        </a>
      </div>
    </div>

    <!-- TABLET -->
    <div class="services-menu__container services-menu__container_tablet">
      <!-- SIDEBAR -->
      <div class="services-menu__sidebar">
        <h3 class="services-menu__sidebar-title">Меню</h3>
        <div class="services-menu__sidebar-appendix"></div>

        <div class="services-menu__sidebar-list">
          <a v-for="item in menuLinks" class="services-menu__sidebar-list-link" :href="item.link">{{ item.name }}</a>
        </div>
        <button class="services-menu__sidebar-button">
          Консультация<a class="services-menu__sidebar-button-link" href=""></a>
        </button>
      </div>
      <!-- SIDEBAR END -->

      <div class="services-menu__content">
        <header class="services-menu__accordion-content-header">
          <h4 class="services-menu__accordion-content-header-title">Наши услуги</h4>
          <div class="services-menu__accordion-content-header-link">
            <Icon name="accordion-arrow" class="services-menu__accordion-content-header-link-icon" />
            <span class="services-menu__accordion-content-header-link-text">Все услуги</span>
            <a class="services-menu__accordion-content-header-link-source" href=""></a>
          </div>
        </header>

        <AccordionFirstLevel
          v-for="item in mobileAccordionList"
          :list="item.list"
          :title="item.title"
          :number="item.number"
          :key="item.number"
        />
      </div>

      <!-- DESKTOP -->
      <div class="services-menu__grid">
        <header class="services-menu__accordion-content-header">
          <h4 class="services-menu__accordion-content-header-title">Наши услуги</h4>
          <div class="services-menu__accordion-content-header-link">
            <img
              class="services-menu__accordion-content-header-link-icon"
              src="~/assets/icons/accordion-arrow.svg"
              alt=""
            /><span class="services-menu__accordion-content-header-link-text">Все услуги</span
            ><a class="services-menu__accordion-content-header-link-source" href=""></a>
          </div>
        </header>

        <div class="services-menu__grid-content">
          <div v-for="item in mobileAccordionList" class="services-menu__grid-column">
            <header class="services-menu__grid-column-header">
              <span class="services-menu__grid-column-header-number">{{ item.number }}</span
              ><span class="services-menu__grid-column-header-title">{{ item.title }}</span>
            </header>
            <div class="services-menu__grid-column-list">
              <AccordionSecondLevel v-for="item in item.list" :key="item.name" :list="item.list" :title="item.title" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/styles/mixins' as ut;
@use '@/assets/scss/styles/variables' as vars;

.services-menu {
  position: fixed;
  top: 87px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #342633;
  overflow: auto;
  z-index: 999;

  display: flex;
  justify-content: center;

  @include ut.tablet {
    top: 84px;
    background-color: #291f29;
  }

  &_active {
    display: flex;
    justify-content: center;
  }

  &__container {
    display: flex;
    flex-direction: column;

    &_mobile {
      gap: 26px;
      padding: 17px 0 20px 0;
      width: 320px;

      @include ut.tablet {
        display: none;
      }
    }

    &_tablet {
      display: none;

      @include ut.tablet {
        display: flex;
        flex-direction: row;
        width: 729px;
      }

      @include ut.desktop {
        width: 1200px;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    padding: 2.2rem 2rem;

    @include ut.tablet {
      padding-bottom: 2rem;
    }

    @include ut.desktop {
      display: none;
    }
  }

  &__grid {
    display: none;
    @include ut.desktop {
      display: flex;
    }

    flex-direction: column;

    padding: 3rem;
    gap: 32px;

    &-content {
      display: flex;
    }

    &-column {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      &:nth-child(2) {
        margin-left: 52px;
      }

      &:nth-child(3) {
        margin-left: 45px;
      }

      &-header {
        display: flex;
        gap: 1rem;

        &-number {
          font-style: normal;
          font-weight: 250;
          font-size: 1.6rem;
          line-height: 1.8rem;

          display: flex;
          align-items: center;
          text-transform: uppercase;

          color: #898088;
        }
        &-title {
          font-weight: 700;
          font-size: 1.4rem;
          line-height: 1.7rem;

          letter-spacing: 0.2em;
          text-transform: uppercase;

          color: #f3f3f3;
        }
      }
      &-list {
        display: flex;
        flex-direction: column;
        gap: 14px;
        margin-top: 5px;
      }
    }
  }

  &__sidebar {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 27px;
    width: 227px;
    height: 516px;
    background: #433142;
    padding: 2rem;

    @include ut.desktop {
      padding: 3rem;
      gap: 46px;
      height: 695px;
      width: 302px;
      flex-shrink: 1;
    }

    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.2em;
      text-transform: uppercase;

      color: #898088;
    }

    &-appendix {
      position: absolute;
      width: 16px;
      height: 16px;
      top: 20px;
      right: 0;
      margin: 2px -7px 0 0px;

      background: #433142;
      transform: rotate(45deg);

      @include ut.desktop {
        margin: 0px -8px 0 0px;
        top: 32px;
      }
    }

    &-list {
      display: flex;
      flex-direction: column;
      gap: 2px;

      @include ut.desktop {
        gap: 6px;
      }

      &-link {
        width: 227px;
        height: 25px;

        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.5rem;

        letter-spacing: 0.2em;
        text-transform: uppercase;

        color: #f3f3f3;

        transition: color 0.3s ease-in-out;

        &:hover {
          color: #ffb701;

          transition: color 0.3s ease-in-out;
        }

        @include ut.desktop {
          font-weight: 700;
          font-size: 1.4rem;
          line-height: 1.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;

          color: #f3f3f3;
        }
      }
    }

    &-button {
      display: none;

      @include ut.desktop {
        position: relative;

        margin: -23px 0 0px 0;

        outline: none;
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        padding: 18px 40px;
        gap: 10px;

        width: 241px;
        height: 54px;

        background: #ffb701;
        border-radius: 5px;

        transition: background-color 0.3s ease-in-out;

        &:hover {
          background: #ffca45;

          transition: background-color 0.3s ease-in-out;
        }

        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.7rem;
        text-transform: uppercase;
        color: #342633;
      }

      &-link {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
      }
    }
  }

  &__links-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__link {
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5rem;

    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: #f3f3f3;
    padding: 5px 0px;

    width: 320px;
    height: 25px;

    border-bottom: 1px solid #433142;
  }

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: #898088;
  }

  &__accordion {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2px;

    &-label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 20px;
    }

    &-input {
      display: none;

      &:checked ~ .services-menu__accordion-content {
        max-height: 100%;
        padding: 20px;
        transition: max-height 0.3s ease-in-out, background-color 0.3s ease-in-out, padding 0.3s ease-in-out;
      }

      &:checked ~ .question__item-header .question__item-header-text {
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.1rem;

        transition: all 0.3s ease-in-out;
      }

      &:checked ~ .services-menu__accordion-header .services-menu__accordion-header-icon {
        transform: rotate(-90deg);
        transition: all 0.3s ease-in-out;
      }
    }

    &-header {
      display: flex;
      justify-content: space-between;

      padding-bottom: 5px;
      border-bottom: 1px solid #433142;
      padding-right: 5px;

      &-text {
        font-style: normal;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.5rem;

        letter-spacing: 0.2em;
        text-transform: uppercase;

        color: #f3f3f3;
      }

      &-icon {
        transition: all 0.3s ease-in-out;
      }
    }

    &-content {
      max-height: 0;
      overflow: hidden;
      background: #433142;
      display: flex;
      flex-direction: column;
      gap: 10px;
      transition: max-height 0.3s ease-in-out, padding 0.3s 0.2s ease-in-out;

      &-header {
        display: flex;
        justify-content: space-between;
        padding: 0 0 10px 0;

        @include ut.desktop {
          justify-content: flex-start;
        }

        &-title {
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #898088;

          @include ut.tablet {
            font-style: normal;
            font-weight: 700;
            font-size: 1.6rem;
            line-height: 1.9rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
          }

          @include ut.desktop {
            font-weight: 700;
            font-size: 2rem;
            line-height: 2.4rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #898088;
          }
        }

        &-link {
          position: relative;
          display: flex;

          align-items: center;
          gap: 10px;

          @include ut.tablet {
            margin: 1px -11px 0px 0;
          }

          @include ut.desktop {
            margin: 2px 0 0 42px;
          }

          &-icon {
            width: 5px;
            height: 12px;
            transform: rotate(180deg);
          }

          &-text {
            flex: 0 0 auto;
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            text-transform: uppercase;
            color: #898088;
          }

          &-source {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }
      }

      &-accordion {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;

        &-label {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
        }

        &-input {
          display: none;

          &:checked ~ .services-menu__accordion-content-accordion-list {
            max-height: 214px;
            overflow-y: scroll;
            overflow-x: hidden;
            padding-bottom: 40px;
            transition: max-height 0.3s ease-in-out, background-color 0.3s ease-in-out;
          }

          &:checked ~ .services-menu__accordion-content-accordion-list::after {
            display: flex;
          }

          &:checked
            ~ .services-menu__accordion-content-accordion-header
            .services-menu__accordion-content-accordion-header-icon {
            transform: rotate(-90deg);
            transition: all 0.3s ease-in-out;
          }
        }

        &-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 20px;
          gap: 13px;

          width: 280px;
          height: 59px;
          background: #342633;
          border-radius: 5px;

          @include ut.tablet {
            width: 100%;
          }

          &-number {
            font-style: normal;
            font-weight: 250;
            font-size: 16px;
            line-height: 18px;

            display: flex;
            align-items: center;
            text-align: center;
            text-transform: uppercase;

            color: #898088;
          }
          &-title {
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;

            letter-spacing: 0.2em;
            text-transform: uppercase;

            color: #f3f3f3;
          }

          &-icon {
            transition: all 0.3s ease-in-out;
            margin-left: auto;
            width: 8px;
            height: 12px;
          }
        }

        &-list {
          display: flex;
          flex-direction: column;
          gap: 14px;

          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
          overflow-x: hidden;
          scrollbar-color: #ffb701 transparent;

          &::after {
            display: none;
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;

            z-index: 3;
            width: 100%;
            max-width: 276px;
            height: 100px;
            pointer-events: none;

            @include ut.tablet {
              max-width: 437px;
              background: linear-gradient(180deg, rgba(41, 31, 41, 0) 0%, #291f29 100%);
            }

            @include ut.desktop {
              display: none;
            }

            background: linear-gradient(180deg, rgba(67, 49, 66, 0) 0%, #433142 100%);
          }

          &::-webkit-scrollbar {
            width: 4px;
            height: 15px;
          }

          &::-webkit-scrollbar-track-piece {
            background: #898088;
            border-radius: 5px;
          }

          &::-webkit-scrollbar-thumb:vertical {
            height: 78px;
            background: #ffb701;
            border-radius: 5px;
          }

          &-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            z-index: 2;

            &-icon {
              width: 1.6rem;
              height: 1.6rem;
            }

            &-link {
              font-family: 'Gilroy';
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 16px;

              /* Black light */

              color: #898088;
            }
          }
        }
      }
    }
  }
}
</style>
