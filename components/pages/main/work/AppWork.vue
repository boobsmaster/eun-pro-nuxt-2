<template>
  <section class="work">
    <div class="work__container">
      <header class="work__header">
        <div class="work__header-container">
          <div class="work__header-appendix"></div>
          <h2 class="work__header-title">Примеры наших работ</h2>
        </div>
        <div class="work__header-wrapper">
          <div class="swiper work__header-tabs">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <button
                  class="work__header-tab work__header-tab_active"
                  data-content="firstSlider"
                >
                  Все работы
                </button>
              </div>
              <div class="swiper-slide">
                <button class="work__header-tab" data-content="secondSlider">
                  Экспертиза
                </button>
              </div>
              <div class="swiper-slide">
                <button class="work__header-tab" data-content="thirdSlider">
                  Экологическая
                </button>
              </div>
              <div class="swiper-slide">
                <button class="work__header-tab" data-content="fourSlider">
                  Землеустройство
                </button>
              </div>
              <div class="swiper-slide">
                <button class="work__header-tab" data-content="fiveSlider">
                  Обследование
                </button>
              </div>
              <div class="swiper-slide">
                <button class="work__header-tab" data-content="sixSlider">
                  Землеустройство
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="work__content">
        <div
          class="swiper work__slider work__tab-content"
          data-target="firstSlider"
        >
          <div class="swiper-wrapper work__slider-wrapper">
            <div class="swiper-slide work__slider-slide">
              <div class="work__advanced-item">
                <div class="work__advanced-item-preview">
                  <div class="work__advanced-item-preview-overlay"></div>
                  <img
                    class="work__advanced-item-preview-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__advanced-item-preview-title"
                    >Общество с ограниченной ответственностью «Финмаркт»</span
                  >
                  <div class="work__advanced-item-preview-link">
                    <img
                      class="work__advanced-item-preview-link-icon"
                      src="~/assets/icons/arrow-right.svg"
                      alt=""
                    />
                    <div class="work__advanced-item-preview-link-text">
                      Подробнее
                    </div>
                    <a
                      class="work__advanced-item-preview-link-source"
                      href=""
                    ></a>
                  </div>
                </div>
                <div class="work__advanced-item-details">
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Объект:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Здание многофункционального комплекса "Орбион",
                      расположенный по адресу: г. Москва, Инновационный центр
                      Сколково, ул. Нобеля
                    </p>
                  </div>
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Вид экспертизы:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Строительно-техническая экспертиза. Кадастровые работы.
                      Геодезические работы.
                    </p>
                  </div>
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Результат экспертизы:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Объект введен в эксплуатацию. Поставлен на кадастровый
                      учет. Объект беспрепятственно функционирует.
                    </p>
                  </div>
                  <button class="work__advanced-item-details-button">
                    Хочу так же!<a
                      class="work__advanced-item-details-button-link"
                      href=""
                    ></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/work-item-first-1.jpg"
                    alt=""
                  /><span class="work__item-title"
                    >Общество с ограниченной ответственностью «Финмаркт»</span
                  >
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/work-item-first-2.jpg"
                    alt=""
                  /><span class="work__item-title"
                    >Общество с ограниченной ответственностью «Финмаркт»</span
                  >
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/work-item-first-1.jpg"
                    alt=""
                  /><span class="work__item-title"
                    >Общество с ограниченной ответственностью «Финмаркт»</span
                  >
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/work-item-first-2.jpg"
                    alt=""
                  /><span class="work__item-title"
                    >Общество с ограниченной ответственностью «Финмаркт»</span
                  >
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/work-item-first-1.jpg"
                    alt=""
                  /><span class="work__item-title"
                    >Общество с ограниченной ответственностью «Финмаркт»</span
                  >
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/work-item-first-2.jpg"
                    alt=""
                  /><span class="work__item-title"
                    >Общество с ограниченной ответственностью «Финмаркт»</span
                  >
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-scrollbar"></div>
          <div class="slider-after"></div>
          <div class="slider-after slider-after_mobile"></div>
        </div>
        <div
          class="swiper work__slider work__tab-content"
          data-target="secondSlider"
        >
          <div class="swiper-wrapper work__slider-wrapper">
            <div class="swiper-slide work__slider-slide">
              <div class="work__advanced-item">
                <div class="work__advanced-item-preview">
                  <div class="work__advanced-item-preview-overlay"></div>
                  <img
                    class="work__advanced-item-preview-image"
                    src="~/assets/images/advanced-item-second.jpeg"
                    alt=""
                  /><span class="work__advanced-item-preview-title"
                    >Общество с ограниченной ответственностью «Финмаркт»</span
                  >
                  <div class="work__advanced-item-preview-link">
                    <img
                      class="work__advanced-item-preview-link-icon"
                      src="~/assets/icons/arrow-right.svg"
                      alt=""
                    />
                    <div class="work__advanced-item-preview-link-text">
                      Подробнее
                    </div>
                    <a
                      class="work__advanced-item-preview-link-source"
                      href=""
                    ></a>
                  </div>
                </div>
                <div class="work__advanced-item-details">
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Объект:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Здание многофункционального комплекса "Орбион",
                      расположенный по адресу: г. Москва, Инновационный центр
                      Сколково, ул. Нобеля
                    </p>
                  </div>
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Вид экспертизы:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Строительно-техническая экспертиза. Кадастровые работы.
                      Геодезические работы.
                    </p>
                  </div>
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Результат экспертизы:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Объект введен в эксплуатацию. Поставлен на кадастровый
                      учет. Объект беспрепятственно функционирует.
                    </p>
                  </div>
                  <button class="work__advanced-item-details-button">
                    Хочу так же!<a
                      class="work__advanced-item-details-button-link"
                      href=""
                    ></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-second.jpeg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-scrollbar"></div>
          <div class="slider-after"></div>
          <div class="slider-after slider-after_mobile"></div>
        </div>
        <div
          class="swiper work__slider work__tab-content"
          data-target="thirdSlider"
        >
          <div class="swiper-wrapper work__slider-wrapper">
            <div class="swiper-slide work__slider-slide">
              <div class="work__advanced-item">
                <div class="work__advanced-item-preview">
                  <div class="work__advanced-item-preview-overlay"></div>
                  <img
                    class="work__advanced-item-preview-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__advanced-item-preview-title"
                    >Общество с ограниченной ответственностью «Финмаркт»</span
                  >
                  <div class="work__advanced-item-preview-link">
                    <img
                      class="work__advanced-item-preview-link-icon"
                      src="~/assets/icons/arrow-right.svg"
                      alt=""
                    />
                    <div class="work__advanced-item-preview-link-text">
                      Подробнее
                    </div>
                    <a
                      class="work__advanced-item-preview-link-source"
                      href=""
                    ></a>
                  </div>
                </div>
                <div class="work__advanced-item-details">
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Объект:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Здание многофункционального комплекса "Орбион",
                      расположенный по адресу: г. Москва, Инновационный центр
                      Сколково, ул. Нобеля
                    </p>
                  </div>
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Вид экспертизы:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Строительно-техническая экспертиза. Кадастровые работы.
                      Геодезические работы.
                    </p>
                  </div>
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Результат экспертизы:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Объект введен в эксплуатацию. Поставлен на кадастровый
                      учет. Объект беспрепятственно функционирует.
                    </p>
                  </div>
                  <button class="work__advanced-item-details-button">
                    Хочу так же!<a
                      class="work__advanced-item-details-button-link"
                      href=""
                    ></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-scrollbar"></div>
          <div class="slider-after"></div>
          <div class="slider-after slider-after_mobile"></div>
        </div>
        <div
          class="swiper work__slider work__tab-content"
          data-target="fourSlider"
        >
          <div class="swiper-wrapper work__slider-wrapper">
            <div class="swiper-slide work__slider-slide">
              <div class="work__advanced-item">
                <div class="work__advanced-item-preview">
                  <div class="work__advanced-item-preview-overlay"></div>
                  <img
                    class="work__advanced-item-preview-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__advanced-item-preview-title"
                    >Общество с ограниченной ответственностью «Финмаркт»</span
                  >
                  <div class="work__advanced-item-preview-link">
                    <img
                      class="work__advanced-item-preview-link-icon"
                      src="~/assets/icons/arrow-right.svg"
                      alt=""
                    />
                    <div class="work__advanced-item-preview-link-text">
                      Подробнее
                    </div>
                    <a
                      class="work__advanced-item-preview-link-source"
                      href=""
                    ></a>
                  </div>
                </div>
                <div class="work__advanced-item-details">
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Объект:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Здание многофункционального комплекса "Орбион",
                      расположенный по адресу: г. Москва, Инновационный центр
                      Сколково, ул. Нобеля
                    </p>
                  </div>
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Вид экспертизы:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Строительно-техническая экспертиза. Кадастровые работы.
                      Геодезические работы.
                    </p>
                  </div>
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Результат экспертизы:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Объект введен в эксплуатацию. Поставлен на кадастровый
                      учет. Объект беспрепятственно функционирует.
                    </p>
                  </div>
                  <button class="work__advanced-item-details-button">
                    Хочу так же!<a
                      class="work__advanced-item-details-button-link"
                      href=""
                    ></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-scrollbar"></div>
          <div class="slider-after"></div>
          <div class="slider-after slider-after_mobile"></div>
        </div>
        <div
          class="swiper work__slider work__tab-content"
          data-target="fiveSlider"
        >
          <div class="swiper-wrapper work__slider-wrapper">
            <div class="swiper-slide work__slider-slide">
              <div class="work__advanced-item">
                <div class="work__advanced-item-preview">
                  <div class="work__advanced-item-preview-overlay"></div>
                  <img
                    class="work__advanced-item-preview-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__advanced-item-preview-title"
                    >Общество с ограниченной ответственностью «Финмаркт»</span
                  >
                  <div class="work__advanced-item-preview-link">
                    <img
                      class="work__advanced-item-preview-link-icon"
                      src="~/assets/icons/arrow-right.svg"
                      alt=""
                    />
                    <div class="work__advanced-item-preview-link-text">
                      Подробнее
                    </div>
                    <a
                      class="work__advanced-item-preview-link-source"
                      href=""
                    ></a>
                  </div>
                </div>
                <div class="work__advanced-item-details">
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Объект:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Здание многофункционального комплекса "Орбион",
                      расположенный по адресу: г. Москва, Инновационный центр
                      Сколково, ул. Нобеля
                    </p>
                  </div>
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Вид экспертизы:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Строительно-техническая экспертиза. Кадастровые работы.
                      Геодезические работы.
                    </p>
                  </div>
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Результат экспертизы:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Объект введен в эксплуатацию. Поставлен на кадастровый
                      учет. Объект беспрепятственно функционирует.
                    </p>
                  </div>
                  <button class="work__advanced-item-details-button">
                    Хочу так же!<a
                      class="work__advanced-item-details-button-link"
                      href=""
                    ></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-scrollbar"></div>
          <div class="slider-after"></div>
          <div class="slider-after slider-after_mobile"></div>
        </div>
        <div
          class="swiper work__slider work__tab-content"
          data-target="sixSlider"
        >
          <div class="swiper-wrapper work__slider-wrapper">
            <div class="swiper-slide work__slider-slide">
              <div class="work__advanced-item">
                <div class="work__advanced-item-preview">
                  <div class="work__advanced-item-preview-overlay"></div>
                  <img
                    class="work__advanced-item-preview-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__advanced-item-preview-title"
                    >Общество с ограниченной ответственностью «Финмаркт»</span
                  >
                  <div class="work__advanced-item-preview-link">
                    <img
                      class="work__advanced-item-preview-link-icon"
                      src="~/assets/icons/arrow-right.svg"
                      alt=""
                    />
                    <div class="work__advanced-item-preview-link-text">
                      Подробнее
                    </div>
                    <a
                      class="work__advanced-item-preview-link-source"
                      href=""
                    ></a>
                  </div>
                </div>
                <div class="work__advanced-item-details">
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Объект:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Здание многофункционального комплекса "Орбион",
                      расположенный по адресу: г. Москва, Инновационный центр
                      Сколково, ул. Нобеля
                    </p>
                  </div>
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Вид экспертизы:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Строительно-техническая экспертиза. Кадастровые работы.
                      Геодезические работы.
                    </p>
                  </div>
                  <div class="work__advanced-item-details-info">
                    <span class="work__advanced-item-details-info-title"
                      >Результат экспертизы:</span
                    >
                    <p class="work__advanced-item-details-info-description">
                      Объект введен в эксплуатацию. Поставлен на кадастровый
                      учет. Объект беспрепятственно функционирует.
                    </p>
                  </div>
                  <button class="work__advanced-item-details-button">
                    Хочу так же!<a
                      class="work__advanced-item-details-button-link"
                      href=""
                    ></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
            <div class="swiper-slide work__slider-slide">
              <div class="work__slide-container">
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
                <div class="work__item">
                  <img
                    class="work__item-image"
                    src="~/assets/images/advanced-item-first.jpg"
                    alt=""
                  /><span class="work__item-title"></span>
                  <div class="work__item-overlay"></div>
                  <a class="work__item-link" href=""></a>
                  <button class="work__item-button">
                    Хочу так же <a class="work__item-button-link" href=""></a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-scrollbar"></div>
          <div class="slider-after"></div>
          <div class="slider-after slider-after_mobile"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Swiper, FreeMode, Scrollbar } from "swiper";
export class workHandler {
  mainContainer: HTMLElement | null = null;
  workSliders: NodeList | null = null;
  tabsSlider: HTMLElement | null = null;
  tabs: NodeList | null = null;
  tabsContent: NodeList | null = null;
  mobileOffset: number | null | undefined = null;
  slider: Swiper | null;

  constructor(element: HTMLElement) {
    this.mainContainer = element;

    this.tabsSlider = this.mainContainer.querySelector(".work__header-tabs");
    this.tabs = this.mainContainer.querySelectorAll(".work__header-tab");
    this.tabsContent =
      this.mainContainer.querySelectorAll(".work__tab-content");
    this.mobileOffset = this.getOffset();
    this.slider = null;

    this.addTabsListeners();
    this.initWorkSlider();
    this.initTabsSlider();
    this.initTabs();

    return this;
  }

  private getOffset() {
    const container = document.querySelector(".work__header-container");
    const containerRect = container?.getBoundingClientRect();

    return containerRect?.x;
  }

  private setOffset() {
    return (this.getOffset() as number) - 20;
  }

  private initWorkSlider() {
    if (this.mainContainer) {
      this.workSliders = this.mainContainer.querySelectorAll(".work__slider");

      this.workSliders.forEach((element) => {
        const slider = element as HTMLElement;

        const swiper = new Swiper(slider, {
          direction: "horizontal",
          touchEventsTarget: "container",
          slidesPerView: "auto",
          slidesOffsetBefore: this.setOffset() as number,
          spaceBetween: 20,
          observer: true,
          observeParents: true,
          freeMode: true,

          modules: [Scrollbar, FreeMode],
          scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 65,
            hide: false,
          },

          breakpoints: {
            990: {
              slidesOffsetBefore: 0,
              scrollbar: {
                dragSize: 65,
              },
            },
            1601: {
              slidesOffsetBefore: 0,
              spaceBetween: 30,
              scrollbar: {
                dragSize: 275,
              },
            },
          },
        });

        const tabs = document.querySelector(
          ".work__header-wrapper"
        ) as HTMLElement;

        if (window.innerWidth <= 990) {
          tabs.style.marginLeft = `${this.setOffset() as number}px`;
        }

        window.addEventListener(
          "resize",
          () => {
            if (window.innerWidth <= 990) {
              tabs.style.marginLeft = `${this.setOffset() as number}px`;
              swiper.params.slidesOffsetBefore = this.setOffset() as number;

              swiper.updateSize();
              swiper.updateProgress();
              swiper.update();
            } else {
              tabs.style.marginLeft = "0px";

              swiper.params.slidesOffsetBefore = 0;
              swiper.update();
            }
          },
          false
        );

        return swiper;
      });
    }

    return false;
  }

  private initTabsSlider() {
    const swiper = new Swiper(this.tabsSlider as HTMLElement, {
      direction: "horizontal",
      slidesPerView: "auto",
      spaceBetween: 20,
      freeMode: true,

      breakpoints: {
        990: {
          spaceBetween: 46,
        },
        1600: {
          spaceBetween: 30,
        },
      },

      modules: [FreeMode],
    });

    return swiper;
  }

  private initTabs() {
    const activeTab = this.tabsSlider?.querySelector(
      ".work__header-tab_active"
    ) as HTMLElement;

    if (activeTab) {
      const targetAttribute = activeTab.getAttribute("data-content");

      if (targetAttribute) {
        const activeContent = this.mainContainer?.querySelector(
          `[data-target=${targetAttribute}]`
        ) as HTMLElement;

        activeContent.classList.add("work__tab-content_active");
      }
    }
  }

  private addTabsListeners() {
    this.tabs?.forEach((element) => {
      element.addEventListener("click", this.onClick.bind(this));
    });
  }

  private onClick(event: Event) {
    this.initWorkSlider();
    const target = event.target as HTMLElement;

    const targetAttribute = target.getAttribute("data-content");

    this.tabs?.forEach((element) => {
      const tab = element as HTMLElement;

      tab.classList.remove("work__header-tab_active");
    });

    target.classList.add("work__header-tab_active");

    if (targetAttribute) {
      this.tabsContent?.forEach((Element) => {
        const content = Element as HTMLElement;

        content.classList.add("work__tab-content");
        content.classList.remove("work__tab-content_active");
      });

      const activeContent = this.mainContainer?.querySelector(
        `[data-target=${targetAttribute}]`
      ) as HTMLElement;

      activeContent.classList.add("work__tab-content_active");
    }
  }
}

const initWork = () => {
  const work = document.querySelectorAll(".work");

  work.forEach((element) => {
    new workHandler(element as HTMLElement);
  });
};
if (process.browser) {
  window.addEventListener("load", initWork);
}

export default {
  name: "AppWork",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/styles/utils" as ut;
@use "@/assets/scss/styles/variables" as vars;

.slider-after {
  display: none;

  @include ut.tablet {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    float: right;
    width: 173px;
    height: 100%;

    transition: all 0.3s ease-in-out;

    background: linear-gradient(
      270deg,
      #342633 0%,
      rgba(52, 38, 51, 0.8) 52.6%,
      rgba(52, 38, 51, 0) 100%
    );
    content: "";
    z-index: 4;

    button {
      margin: -59px -66px 0px 0px;
    }
  }

  @include ut.desktop {
    margin: 0 -2px 0 0px;
  }
}

.slider-after_mobile {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  float: right;
  width: 100px;
  height: 100%;

  transition: all 0.3s ease-in-out;

  background: linear-gradient(
    270deg,
    #342633 0%,
    rgba(52, 38, 51, 0.8) 52.6%,
    rgba(52, 38, 51, 0) 100%
  );
  content: "";
  z-index: 4;

  @include ut.tablet {
    display: none;
  }
}
.work {
  display: flex;
  /* justify-content: flex-end; */
  padding: 2rem;

  width: 100%;
  background: #342633;

  @media only screen and (min-width: 600px) {
    justify-content: center;
  }

  @include ut.tablet {
    justify-content: center;
    padding: 3rem 0 0 0;
  }

  @include ut.desktop {
    padding: 7.2rem 0 3.3rem 0;
    .swiper-scrollbar {
      background: #433142;
    }
  }

  &__container {
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    /* max-width: 440px; */
    gap: 2rem;

    @include ut.tablet {
      width: 727px;
      max-width: unset;
      gap: 3rem;
    }

    @include ut.desktop {
      gap: 4.8rem;
      width: 1201px;
    }
  }

  &__content {
    width: 100%;
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 1.6rem;

    width: 100%;

    @include ut.tablet {
      width: 100%;
      gap: 2.4rem;
      max-width: unset;
    }

    @include ut.desktop {
      flex-direction: row;
      gap: 8rem;
    }
    &-wrapper {
      @include ut.desktop {
        width: 100%;
        overflow: hidden;
      }
    }

    &-container {
      display: flex;
      width: 320px;
      align-self: center;

      @include ut.tablet {
        width: unset;
        align-self: unset;
        gap: 3rem;
      }

      @include ut.desktop {
        gap: 6.3rem;
      }
    }

    &-appendix {
      display: none;

      @include ut.tablet {
        display: block;
        width: 40px;
        height: 5px;

        background-color: #c2d2df;

        margin-top: 1.1rem;
      }

      @include ut.desktop {
        margin-top: 1.9rem;
      }
    }

    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.4rem;

      color: #f3f3f3;

      @include ut.tablet {
        font-size: 2.4rem;
        line-height: 2.9rem;
      }

      @include ut.desktop {
        width: 330px;
        font-size: 2.8rem;
        line-height: 3.4rem;
      }
    }

    &-tabs {
      width: 100%;

      border-bottom: 2px solid #433142;
      .swiper-slide {
        width: auto;
      }
      @include ut.tablet {
        width: 100%;
      }

      @include ut.desktop {
        margin: 0.4rem 0 0 0;
      }
    }

    &-tab {
      flex: 0 0 auto;
      padding: 0;
      outline: none;
      border: none;
      background-color: transparent;
      font-family: "Gilroy";
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.7rem;
      text-transform: uppercase;

      color: #898088;

      &_active {
        color: #ffb701;
        padding-bottom: 3px;
        border-bottom: 2px solid #ffb701;

        &::after {
          display: block;
          content: "";
        }
      }
    }
  }

  &__tab-content {
    display: none;

    &_active {
      display: block;
    }
  }

  &__content-wrapper {
    position: relative;
    width: 100%;
    height: 1000px;
  }

  &__slide-container {
    display: flex;
    flex-direction: column;

    gap: 2rem;
  }

  &__slider {
    width: 100%;
    height: 418px;

    @include ut.tablet {
      width: 100%;
    }

    .swiper-slide {
      width: auto;
    }

    .swiper-wrapper {
    }

    .swiper-scrollbar-horizontal {
      height: 5px;
      width: 320px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      @include ut.desktop {
        transform: unset;
        left: 0;
        width: 100%;
      }
    }
    .swiper-scrollbar {
      display: block;

      @include ut.tablet {
        display: none;
      }

      @include ut.desktop {
        display: block;
      }
    }

    @include ut.tablet {
      height: 458px;
      width: 861px;
    }

    @include ut.desktop {
      height: 613px;
      width: 100%;
    }

    &-wrapper.swiper-wrapper {
      scroll-snap-type: none;
    }

    &-slide {
      &-container {
        display: flex;
        flex-direction: column;
      }
    }
  }

  &__advanced-item {
    display: flex;

    &-preview {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      padding: 2rem;

      transition: all 0.3s ease-in-out;

      @include ut.desktop {
        &:hover {
          .work__advanced-item-preview-title {
            opacity: 0;
            transition: all 0.2s ease-in-out;
          }

          .work__advanced-item-preview-image {
            transform: scale(1.3);
            transition: all 0.3s ease-in-out;
          }

          .work__advanced-item-preview-overlay {
            transition: all 0.3s ease-in-out;
            background: linear-gradient(
              0deg,
              rgba(52, 38, 51, 0),
              rgba(52, 38, 51, 0)
            );
          }

          .work__advanced-item-preview-link-text {
            // opacity: 0;
            // pointer-events: none;
            color: #f3f3f3;
            transition: all 0.3s ease-in-out;
          }
        }
      }

      border-radius: 0.5rem;
      overflow: hidden;

      width: 320px;
      height: 392px;

      z-index: 2;

      @include ut.tablet {
        padding: 3rem;
        width: 350px;
        height: 430px;
        border-radius: 0.5rem 0 0 0.5rem;
      }

      @include ut.desktop {
        justify-content: space-between;
        width: 380px;
        height: 576px;
        padding: 3rem 3rem 2rem 3rem;
      }

      &-title {
        z-index: 2;
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.4rem;

        width: 265px;

        color: #ffffff;
        transition: all 0.3s ease-in-out;
        @include ut.desktop {
          width: 327px;
          font-size: 2.4rem;
          line-height: 2.9rem;
        }
      }

      &-image {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        transition: all 0.3s ease-in-out;
      }

      &-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        transition: all 0.3s ease-in-out;

        background: linear-gradient(
          0deg,
          rgba(52, 38, 51, 0.8),
          rgba(52, 38, 51, 0.8)
        );
      }

      &-link {
        position: relative;
        transition: all 0.3s ease-in-out;

        display: flex;
        gap: 0.5rem;
        z-index: 6;

        &-icon {
          width: 1.6rem;
          height: 1.6rem;
        }

        &-text {
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 1.6rem;

          color: #898088;
          transition: all 0.3s ease-in-out;
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

    &-details {
      display: none;

      @include ut.tablet {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 3rem;

        width: 370px;
        height: 430px;

        background: #433142;
        padding: 3rem 2rem;

        border-radius: 0 0.5rem 0.5rem 0;
      }

      @include ut.desktop {
        width: 308px;
        height: 576px;
        padding: 3rem;
      }

      &-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &-title {
          font-size: 1.2rem;
          line-height: 1.7rem;

          letter-spacing: 0.2em;
          text-transform: uppercase;

          color: #f3f3f3;
        }

        &-description {
          font-weight: 500;
          font-size: 1.4rem;
          line-height: 2rem;
          color: #898088;
          word-break: break-all;

          @include ut.desktop {
            font-size: 1.6rem;
            line-height: 2.3rem;
          }
        }
      }

      &-button {
        position: relative;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 248px;
        height: 4rem;

        padding: 1.8rem 4rem;

        outline: none;
        border: none;

        font-family: "Gilroy";
        font-style: normal;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.5rem;
        text-transform: uppercase;

        color: #342633;

        background: #ffb701;
        border-radius: 5px;

        transition: background-color 0.3s ease-in-out;

        &:hover {
          background: #ffca45;

          transition: background-color 0.3s ease-in-out;
        }

        @include ut.desktop {
          width: 248px;
          height: 54px;
          margin: 1.5rem 0 0 0;
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
  }

  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 2rem;

    width: 185px;
    height: 185px;

    border-radius: 0.5rem;
    overflow: hidden;

    &:hover {
      .work__item-button {
        opacity: 1;
        transition: all 0.3s ease-in-out;
      }

      .work__item-overlay {
        background: transparent;
        transition: all 0.3s ease-in-out;
      }

      .work__item-image {
        transform: scale(1.2);
        transition: all 0.3s ease-in-out;
      }
    }

    @include ut.tablet {
      width: 205px;
      height: 205px;
    }

    @include ut.desktop {
      width: 278px;
      height: 273px;
    }

    &-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    &-title {
      font-style: normal;
      font-weight: 700;
      z-index: 3;
      font-size: 1.2rem;
      line-height: 1.5rem;

      color: #ffffff;

      @include ut.desktop {
        font-size: 1.6rem;
        line-height: 1.9rem;
      }
    }

    &-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;

      background: linear-gradient(
        0deg,
        rgba(52, 38, 51, 0.8),
        rgba(52, 38, 51, 0.8)
      );
    }

    &-link {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
      z-index: 3;
    }

    &-button {
      display: none;

      @include ut.desktop {
        position: relative;

        opacity: 0;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 18px 40px;
        gap: 10px;

        border: none;
        outline: none;

        width: 238px;
        height: 50px;

        font-family: "Gilroy";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;

        text-transform: uppercase;
        color: #342633;

        background: #ffb701;
        border-radius: 5px;
        z-index: 4;

        transition: background-color 0.3s ease-in-out;

        &:hover {
          background: #ffca45;

          transition: background-color 0.3s ease-in-out;
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
  }
}
</style>
