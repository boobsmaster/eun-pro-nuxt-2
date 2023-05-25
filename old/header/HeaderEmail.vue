<template>
  <div class="header-email row">
    <div class="header-email__icon col-3">
      <MenuEmailIcon/>
    </div>
    <div class="header-email-text col-9">
      <div class="header-email-text__link">
        <a href="mailto:info@eunpro.ru">info@eunpro.ru</a>
      </div>
      <div class="header-email-text__description">
        Мы на связи!
      </div>
    </div>
  </div>
</template>

<script>
import MenuEmailIcon from "~/static/e-mail.svg?inline";

export default {
  name: "HeaderEmail",
  components: { MenuEmailIcon },

}
</script>

<style scoped>
.header-email-text__link a{
}
.header-email-text__description{
  color: #898088;
}
</style>
