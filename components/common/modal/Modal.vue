<script>
export default {
  name: 'Modal',
}
</script>

<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 0 20px;

  background-color: rgba(0, 0, 0, 0.4);

  z-index: 99999;
}
</style>
