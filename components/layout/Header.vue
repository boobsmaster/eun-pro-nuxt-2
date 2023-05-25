<template>
  <header class="header">
    <div class="header__content">
      <button class="header__button header__button_menu">
        <img
          class="header__button-icon header__button-icon_menu_close"
          src="~/assets/icons/header-menu.svg"
          alt=""
        /><img
          class="header__button-icon header__button-icon_menu_open"
          src="~/assets/icons/close-yellow.svg"
          alt=""
        />
      </button>
      <div class="header__logo">
        <img src="~/assets/images/header-logo.png" alt="" />
      </div>
      <button class="header__button header__button_contacts">
        <img
          class="header__button-icon header__button-icon_contacts_close"
          src="~/assets/icons/header-contacts.svg"
          alt=""
        /><img
          class="header__button-icon header__button-icon_contacts_open"
          src="~/assets/icons/close-grey.svg"
          alt=""
        />
      </button>
      <div class="header__info">
        <div class="header__info-item header__info-item_mail">
          <div class="header__info-icon">
            <img src="~/assets/icons/mail.svg" alt="" />
          </div>
          <div class="header__info-content">
            <span class="header__info-title">info@eunpro.ru</span
            ><span class="header__info-subtitle">Мы на связи!</span>
          </div>
        </div>
        <div class="header__info-item header__info-item_phone">
          <div class="header__info-icon">
            <img src="~/assets/icons/phone-grey.svg" alt="" />
          </div>
          <div class="header__info-content">
            <span class="header__info-title">8 800 419-25-30</span
            ><span class="header__info-subtitle">+7 (495) 419-25-30</span>
          </div>
        </div>
        <div class="header__info-item header__info-item_address">
          <div class="header__info-item">
            <div class="header__info-icon">
              <img src="~/assets/icons/location.svg" alt="" />
            </div>
            <div class="header__info-content">
              <span class="header__info-title">ул. Октябрьская, 4к2</span
              ><span class="header__info-subtitle">Пн-Пт с 9:00 до 18:00</span>
            </div>
          </div>
        </div>
      </div>
      <button class="header__button header__button_call">
        <span class="header__button-text">Обратный звонок</span>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
export class headerHandler {
  mainContainer: HTMLElement | null = null;
  menuButton: HTMLButtonElement | null = null;
  contactsButton: HTMLElement | null = null;

  menuIconOpen: HTMLElement | null = null;
  menuIconClose: HTMLElement | null = null;
  contactsIconOpen: HTMLElement | null = null;
  contactsIconClose: HTMLElement | null = null;

  states = {
    menuIsOpen: false,
    contactsIsOpen: false,
  };

  constructor(element: HTMLElement) {
    this.mainContainer = element;

    this.menuIconOpen = this.mainContainer.querySelector(
      ".header__button-icon_menu_open"
    );

    this.menuIconClose = this.mainContainer.querySelector(
      ".header__button-icon_menu_close"
    );

    this.contactsIconOpen = this.mainContainer.querySelector(
      ".header__button-icon_contacts_open"
    );

    this.contactsIconClose = this.mainContainer.querySelector(
      ".header__button-icon_contacts_close"
    );

    this.menuButton = this.mainContainer.querySelector(".header__button_menu");

    this.contactsButton = this.mainContainer.querySelector(
      ".header__button_contacts"
    );

    this.addListeners();

    return this;
  }

  private addListeners() {
    this.contactsButton?.addEventListener(
      "click",
      this.setOpenContacts.bind(this)
    );

    this.menuButton?.addEventListener("click", this.setOpenMenu.bind(this));
  }

  private hideMenuIcon() {
    if (this.menuIconClose && this.menuIconOpen) {
      this.menuIconClose.style.display = "flex";
      this.menuIconOpen.style.display = "none";
    }
  }

  private openMenuIcon() {
    if (this.menuIconClose && this.menuIconOpen) {
      this.menuIconClose.style.display = "none";
      this.menuIconOpen.style.display = "flex";
    }
  }

  private hideContactsIcon() {
    if (this.contactsIconClose && this.contactsIconOpen) {
      this.contactsIconClose.style.display = "flex";
      this.contactsIconOpen.style.display = "none";
    }
  }

  private openContactsIcon() {
    if (this.contactsIconClose && this.contactsIconOpen) {
      this.contactsIconClose.style.display = "none";
      this.contactsIconOpen.style.display = "flex";
    }
  }

  private setOpenMenu() {
    const menu = document.querySelector(".services-menu") as HTMLElement;
    const contacts = document.querySelector(".contacts") as HTMLElement;

    this.states.menuIsOpen = !this.states.menuIsOpen;

    if (this.states.contactsIsOpen) {
      contacts.classList.remove("contacts_active");
      document.body.style.overflow = "auto";

      this.states.contactsIsOpen = false;
      this.hideContactsIcon();
    }

    if (this.states.menuIsOpen) {
      menu.classList.add("services-menu_active");

      this.openMenuIcon();

      document.body.style.overflow = "hidden";
    } else {
      menu.classList.remove("services-menu_active");

      this.hideMenuIcon();

      document.body.style.overflow = "auto";
    }
  }

  private setOpenContacts() {
    const menu = document.querySelector(".services-menu") as HTMLElement;
    const contacts = document.querySelector(".contacts") as HTMLElement;

    this.states.contactsIsOpen = !this.states.contactsIsOpen;

    if (this.states.menuIsOpen) {
      menu.classList.remove("services-menu_active");

      document.body.style.overflow = "auto";

      this.states.menuIsOpen = false;
      this.hideMenuIcon();

      if (this.states.contactsIsOpen) {
        contacts.classList.add("contacts_active");

        document.body.style.overflow = "hidden";

        this.openContactsIcon();
      } else {
        contacts.classList.remove("contacts_active");

        this.hideContactsIcon();

        document.body.style.overflow = "auto";
      }
    } else {
      if (this.states.contactsIsOpen) {
        contacts.classList.add("contacts_active");

        this.openContactsIcon();

        document.body.style.overflow = "hidden";
      } else {
        contacts.classList.remove("contacts_active");

        this.hideContactsIcon();

        document.body.style.overflow = "auto";
      }
    }
  }
}

const initHeader = () => {
  const header = document.querySelectorAll(".header");

  header.forEach((element) => {
    new headerHandler(element as HTMLElement);
  });
};
if (process.browser) {
  window.addEventListener("load", initHeader);
}
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as ut;
@use "@/assets/scss/styles/variables" as vars;

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  width: 100%;
  background-color: #342633;

  @include ut.tablet {
    background: #342633;
  }

  &__content {
    display: flex;

    gap: 7.6rem;

    padding: 2.2rem 0;
    max-width: 320px;

    @include ut.tablet {
      max-width: 720px;
      gap: 0;

      padding: 2rem 0;
      align-items: center;
    }

    @include ut.desktop {
      max-width: 1200px;

      padding: 2.4rem 0 2.6rem 0;
    }
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4rem;
    height: 4rem;

    outline: none;
    background-color: transparent;
    border-radius: 0.5rem;

    &-text {
      font-style: normal;
      font-weight: 700;

      font-size: 1.2rem;
      line-height: 1.5rem;
      font-family: vars.$default-font;

      text-transform: uppercase;

      color: #342633;

      @include ut.desktop {
        font-weight: 700;

        font-size: 1.4rem;

        line-height: 1.7rem;
      }
    }

    &_call {
      display: none;
      @include ut.tablet {
        display: flex;

        width: 165px;
        height: auto;

        padding: 12.5px 0;
        margin-left: 2.8rem;

        order: 4;
        border: none;
        background-color: #ffb701;
        transition: background-color 0.3s ease-in-out;

        &:hover {
          background: #ffca45;

          transition: background-color 0.3s ease-in-out;
        }

        @include ut.desktop {
          margin-left: 7.8rem;
          padding: 18.5px 0;
          width: 277px;
        }
      }
    }

    &-icon {
      &_menu {
        &_close {
        }

        &_open {
          display: none;
        }
      }

      &_contacts {
        &_close {
        }

        &_open {
          display: none;
        }
      }
    }

    &_menu {
      border: 2px solid #ffb701;

      @include ut.tablet {
        order: 2;

        margin-left: 3.8rem;
      }

      @include ut.desktop {
        margin-left: 4.7rem;
      }
    }

    &_contacts {
      border: none;
      background-color: #ffb701;

      @include ut.tablet {
        display: none;
      }

      @include ut.desktop {
        margin-left: 5.9rem;
      }
    }
  }

  &__logo {
    @include ut.tablet {
      order: 1;
      margin-left: -1rem;
    }
  }

  &__info {
    order: 3;
    display: none;

    @include ut.tablet {
      display: flex;
      gap: 3.9rem;

      margin-left: 2rem;
    }

    @include ut.desktop {
      margin-left: 5.9rem;
      gap: 0;
    }

    &-item {
      display: flex;
      gap: 1rem;

      &_phone {
        @include ut.desktop {
          margin-left: 4.8rem;
        }
      }

      &_address {
        @include ut.tablet {
          display: none;
        }
        @include ut.desktop {
          display: flex;
          margin-left: 6.8rem;
        }
      }
    }

    &-icon {
      width: 2.4rem;
      height: 2.4rem;
    }

    &-content {
      display: flex;
      flex-direction: column;
    }

    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 1.9rem;

      color: #f3f3f3;
    }

    &-subtitle {
      font-style: normal;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.6rem;

      color: #898088;
    }
  }

  &__contact-menu {
    position: fixed;
    background-color: red;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
