<template>
  <div class="flex flex-col flex-initial bg-gray-50 rounded-t-3xl pb-10">
    <slot name="header"></slot>
    <slot name="main"></slot>
    <slot name="footer" class="mb-10"></slot>
  </div>
</template>

<script>
export default {
  name: 'Canvas'
}
</script>

<style scoped>
</style>
