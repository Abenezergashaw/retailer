<script setup>
import { computed } from "vue";
const props = defineProps({
  name: String,
  bg: String,
  hover: String,
});
console.log(props.bg, props.hover);
const buttonClasses = computed(() => [
  "h-[34px]",
  "px-3",
  "font-roboto",
  "flex",
  "justify-center",
  "items-center",
  "gap-2",
  "cursor-pointer",
  "text-[0.9em]",
  "rounded",
  "text-white",
  "transition-colors",
  "duration-200",
  `bg-[${props.bg}]`,
  `hover:bg-[${props.hover}]`,
]);
</script>

<template>
  <button :class="buttonClasses" style="color: white">
    {{ name }}
    <span v-if="name === 'Redeem'" class="glyphicon glyphicon-usd"></span>

    <span
      v-if="name === 'Cancel'"
      class="glyphicon glyphicon-ban-circle"
    ></span>
  </button>
</template>

<style scoped>
@import "bootstrap/dist/css/bootstrap.css";
</style>
