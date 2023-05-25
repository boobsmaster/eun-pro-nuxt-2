<template>
  <div class="header-address row">
    <div class="header-address__icon col-3">
      <MenuAddressIcon/>
    </div>
    <div class="header-address-text col-9">
      <div class="header-address-text__link">
        <a href="/qwe">ул. Октябрьская, 4к2</a>
      </div>
      <div class="header-address-text__description">
        Пн-Пт с 9:00 до 18:00
      </div>
    </div>
  </div>
</template>

<script>
import MenuAddressIcon from "~/static/address.svg?inline";

export default {
  name: "HeaderAddress",
  components: { MenuAddressIcon },

}
</script>

<style scoped>
.header-address-text__link a{
}
.header-address-text__description{
  color: #898088;
}
</style>
