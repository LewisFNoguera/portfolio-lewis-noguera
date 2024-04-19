<template>
  <footer class="bg-white dark:bg-gray-900 relative">
    <IconGrandientFooter class="absolute bottom-0 left-0 right-0 w-full hidden md:block" />
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <blockquote class="text-right font-bold text-black dark:text-white">
          “Good software, like wine, takes time”. <br /><span class="font-normal">
            Joel Spolsky
          </span>
        </blockquote>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-black dark:text-white">
          &copy; LewisNoguera - 2024
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import IconGrandientFooter from '@/components/icons/ui/IconGrandientFooter.vue'
</script>

<!-- <script setup lang="ts"></script>   -->

<style scoped></style>
