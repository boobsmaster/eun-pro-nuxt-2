<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({$dataApi}){
    return {
      menu:(await $dataApi.getMenu()).json
    }
  }
}
</script>
