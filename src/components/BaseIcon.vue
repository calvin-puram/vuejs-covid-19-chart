<template>
  <div class="mr-3">
    <i :class="icon"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['icon']
}
</script>
