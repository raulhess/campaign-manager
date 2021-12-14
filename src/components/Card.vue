<template>
  <div class="bg-white q-pa-md rounded-borders bg-grey-2">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",

  props: {},
});
</script>

<style lang="scss" scoped>
</style>