<template>
  <section class="trust">
    <div class="trust__container">
      <header class="trust__header">
        <div class="trust__header-appendix"></div>
        <h2 class="trust__header-title">Нам доверяют</h2>
      </header>
      <div class="trust__content">
        <div class="trust__item">
          <img
            class="trust__item-image"
            src="~/assets/images/trust-dirs.png"
            alt=""
          />
        </div>
        <div class="trust__item">
          <img
            class="trust__item-image"
            src="~/assets/images/trust-aps.png"
            alt=""
          />
        </div>
        <div class="trust__item">
          <img
            class="trust__item-image"
            src="~/assets/images/trust-rider.png"
            alt=""
          />
        </div>
        <div class="trust__item">
          <img
            class="trust__item-image"
            src="~/assets/images/trust-rustan.png"
            alt=""
          />
        </div>
        <div class="trust__item">
          <img
            class="trust__item-image"
            src="~/assets/images/trust-optik.png"
            alt=""
          />
        </div>
        <div class="trust__item">
          <img
            class="trust__item-image"
            src="~/assets/images/trust-resulting.png"
            alt=""
          />
        </div>
        <div class="trust__item">
          <img
            class="trust__item-image"
            src="~/assets/images/trust-med.png"
            alt=""
          />
        </div>
        <div class="trust__item">
          <img
            class="trust__item-image"
            src="~/assets/images/trust-dmt.png"
            alt=""
          />
        </div>
        <div class="trust__item">
          <img
            class="trust__item-image"
            src="~/assets/images/trust-sor.png"
            alt=""
          />
        </div>
        <div class="trust__item trust__item_tablet">
          <img
            class="trust__item-image"
            src="~/assets/images/trust-mot.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppTrust",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/styles/mixins" as ut;
@use "@/assets/scss/styles/variables" as vars;

.trust {
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 2rem;

  border-bottom: 2px solid rgba(#c2d2df, 0.1);

  @include ut.tablet {
    padding: 3rem;
  }

  @include ut.desktop {
    padding: 7.2rem 0 7rem 0;
  }

  &__container {
    display: flex;
    flex-direction: column;

    width: 320px;
    gap: 2rem;

    @include ut.tablet {
      width: 726px;
      gap: 2.8rem;
    }

    @include ut.desktop {
      width: 1200px;
      gap: 5rem;
    }
  }

  &__header {
    display: flex;

    @include ut.tablet {
      gap: 3rem;
    }

    @include ut.desktop {
      gap: 6.3rem;
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
      color: #342633;

      @include ut.tablet {
        font-size: 2.4rem;
        line-height: 2.9rem;
      }

      @include ut.desktop {
        font-style: normal;
        font-weight: 400;
        font-size: 2.8rem;
        line-height: 3.2rem;
        color: #342633;
      }
    }
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    row-gap: 3rem;

    @include ut.tablet {
      row-gap: 3.4rem;
    }

    @include ut.desktop {
      row-gap: 6rem;
    }
  }

  &__item {
    &:nth-child(1) {
      @include ut.tablet {
        order: 1;
      }
      @include ut.desktop {
        width: 138px;
        height: 44px;
      }
    }
    &:nth-child(2) {
      margin: 0 0px 0 16px;

      @include ut.tablet {
        order: 2;
        margin: 0 0px 0 89px;
      }

      @include ut.desktop {
        width: 160px;
        height: 44px;
        margin: 0 0px 0 147px;
      }
    }
    &:nth-child(3) {
      margin: 0 0 0 15px;

      @include ut.tablet {
        order: 3;
        margin: 0 0 0 52px;
      }

      @include ut.desktop {
        width: 186px;
        height: 44px;
        margin: 0 0 0 84px;
      }
    }
    &:nth-child(4) {
      margin: 0 0 0 0;

      @include ut.tablet {
        order: 6;
      }

      @include ut.desktop {
        width: 131px;
        height: 44px;
      }
    }
    &:nth-child(5) {
      margin: 0 0 0 46px;

      @include ut.tablet {
        order: 4;
      }

      @include ut.desktop {
        width: 132px;
        height: 44px;
        margin: 0 0 0 95px;
      }
    }

    &:nth-child(6) {
      margin: 0 0 0 45px;

      @include ut.tablet {
        order: 5;
        margin: 0 0 0 83px;
      }

      @include ut.desktop {
        width: 120px;
        height: 44px;
        margin: 0 0 0 137px;
      }
    }

    &:nth-child(7) {
      margin: 0 0 0 0;

      @include ut.tablet {
        margin: 0 0 0 89px;
        order: 7;
      }

      @include ut.desktop {
        width: 174px;
        height: 44px;

        margin: 0 0 0 146px;
      }
    }

    &:nth-child(8) {
      margin: 0 0 0 40px;

      @include ut.tablet {
        order: 8;
        margin: 0 0 0 69px;
      }

      @include ut.desktop {
        width: 110px;
        height: 45px;
        margin: 0 0 0 117px;
      }
    }

    &:nth-child(9) {
      margin: 0 0 0 39px;
      @include ut.tablet {
        margin: 0 0 0 84px;
        order: 9;
      }

      @include ut.desktop {
        width: 120px;
        height: 44px;
        margin: 0 0 0 138px;
      }
    }

    &_tablet {
      display: none;

      @include ut.tablet {
        order: 10;
        display: block;
        margin: 0 0 0 103px;
      }

      @include ut.desktop {
        width: 93px;
        height: 44px;
        margin: 0 0 0 170px;
      }
    }

    &-image {
      @include ut.desktop {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
