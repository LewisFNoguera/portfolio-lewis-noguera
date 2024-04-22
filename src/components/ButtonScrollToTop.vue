<template>
  <button
    v-if="showScrollButton"
    @click="scrollToTop"
    class="fixed flex bottom-0 pb-3 pr-5 lg:pr-16 transition-all justify-end w-full animate-bounce"
  >
    <IconArrow class="text-black dark:text-white -rotate-90 border" />
  </button>
</template>

<script setup lang="ts">
import useScrollToTop from '@/composables/useScrollToTop'
import { IconArrow } from '@/components/'

const { scrollToTop, showScrollButton } = useScrollToTop()
</script>

<style scoped></style>
