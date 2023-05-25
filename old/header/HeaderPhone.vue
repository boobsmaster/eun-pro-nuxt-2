<template>
  <div class="header-phone row">
    <div class="header-phone__icon col-3">
      <MenuPhoneIcon/>
    </div>
    <div class="header-phone-text col-9">
      <div class="header-phone-text__link">
        <a href="phone:+7(495)4192530">+7 (495) 419-25-30</a>
      </div>
      <div class="header-phone-text__description">
        +7 (495) 419-25-30
      </div>
    </div>
  </div>
</template>

<script>
import MenuPhoneIcon from "~/static/phone.svg?inline";

export default {
  name: "HeaderPhone",
  components: { MenuPhoneIcon },

}
</script>

<style scoped>
.header-phone-text__link a{
}
.header-phone-text__description{
  color: #898088;
}
</style>
