<template>
  <div class="header row">
    <div class="col-1">
      <NuxtLink to="/">
        <TheLogo/>
      </NuxtLink>
    </div>
    <div class="col-1">
      <HeaderMenu/>
    </div>
    <div class="col-2">
      <HeaderEmail/>
    </div>
    <div class="col-2">
      <HeaderPhone/>
    </div>
    <div class="col-3">
      <HeaderAddress/>
    </div>
    <div class="col-3">
      <HeaderCallme/>
    </div>
  </div>
</template>

<script>
import TheLogo from "~/static/logo.svg?inline";
import HeaderEmail from "@/components/header/HeaderEmail";
import HeaderMenu from "@/components/header/HeaderMenu";
import HeaderAddress from "@/components/header/HeaderAddress";

export default {
  name: "TheHeader",
  components: {HeaderAddress, HeaderMenu, HeaderEmail, TheLogo},
}
</script>

<style scoped>

</style>
