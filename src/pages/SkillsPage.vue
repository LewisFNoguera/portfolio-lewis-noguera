<template>
  <div
    id="skills"
    class="mx-auto w-full md:max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 gradient-bg rounded-lg"
  >
    <h1 class="text-center uppercase text-black dark:text-white mb-20">Skills.</h1>

    <div class="flex flex-wrap gap-4 w-full items-center justify-center">
      <div
        class="w-1/4 sm:w-1/6 h-12 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <JavascriptLogo class="text-black dark:text-white w-1/3 sm:w-1/6 h-12" />
        <p class="text-xs text-black dark:text-white">Javascript</p>
      </div>

      <div
        class="w-1/4 sm:w-1/6 h-12 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <TypescriptLogo class="text-black dark:text-white w-1/3 sm:w-1/6 h-12" />
        <p class="text-xs text-black dark:text-white">Typescript</p>
      </div>

      <div
        class="w-1/4 sm:w-1/6 h-12 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <ReactLogo class="text-black dark:text-white w-1/3 sm:w-1/6 h-12" />
        <p class="text-xs text-black dark:text-white">React</p>
      </div>

      <div
        class="w-1/4 sm:w-1/6 h-12 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <ReactLogo class="text-black dark:text-white w-1/3 sm:w-1/6 h-12" />
        <p class="text-xs text-black dark:text-white">React Native</p>
      </div>

      <div
        class="w-1/4 sm:w-1/6 h-12 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <VueLogo class="text-black dark:text-white w-1/3 sm:w-1/6 h-12" />
        <p class="text-xs text-black dark:text-white">Vue</p>
      </div>

      <div
        class="w-1/4 sm:w-1/6 h-12 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <AngularLogo class="text-black dark:text-white w-1/3 sm:w-1/6 h-12" />
        <p class="text-xs text-black dark:text-white">Angular 7+</p>
      </div>

      <div
        class="w-1/4 sm:w-1/6 h-12 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <PiniaLogo class="text-black dark:text-white w-1/3 sm:w-1/6 h-12" />
        <p class="text-xs text-black dark:text-white">Pinia</p>
      </div>

      <div
        class="w-1/4 sm:w-1/6 h-12 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <TailwindLogo class="text-black dark:text-white w-1/3 sm:w-1/6 h-12" />
        <p class="text-xs text-black dark:text-white">Tailwind Css</p>
      </div>

      <div
        class="w-1/4 sm:w-1/6 h-12 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <SassLogo class="text-black dark:text-white w-1/3 sm:w-1/6 h-12" />
        <p class="text-xs text-black dark:text-white">Sass</p>
      </div>

      <div
        class="w-1/4 sm:w-1/6 h-12 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <JiraLogo class="text-black dark:text-white w-1/3 sm:w-1/6 h-12" />
        <p class="text-xs text-black dark:text-white">Jira</p>
      </div>

      <div
        class="w-1/4 sm:w-1/6 h-12 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <BitBucketLogo class="text-black dark:text-white w-1/3 sm:w-1/6 h-12" />
        <p class="text-xs text-black dark:text-white">BitBucket</p>
      </div>

      <div
        class="w-1/4 sm:w-1/6 h-12 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <GitLogo class="text-black dark:text-white w-1/3 sm:w-1/6 h-12" />
        <p class="text-xs text-black dark:text-white">Git</p>
      </div>

      <div
        class="w-1/4 sm:w-1/6 h-12 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <FigmaLogo class="text-black dark:text-white w-1/3 sm:w-1/6 h-12" />
        <p class="text-xs text-black dark:text-white">Figma</p>
      </div>

      <div
        class="w-1/4 sm:w-1/6 h-12 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <IllustratorLogo class="text-black dark:text-white w-1/3 sm:w-1/6 h-12" />
        <p class="text-xs text-black dark:text-white">Illustrator</p>
      </div>

      <div
        class="w-1/4 sm:w-1/6 h-12 flex flex-col items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <PhotoshopLogo class="text-black dark:text-white w-1/3 sm:w-1/6 h-12" />
        <p class="text-xs text-black dark:text-white">Photoshop</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  JavascriptLogo,
  ReactLogo,
  TailwindLogo,
  TypescriptLogo,
  VueLogo,
  AngularLogo,
  JiraLogo,
  BitBucketLogo,
  PiniaLogo,
  GitLogo,
  FigmaLogo,
  IllustratorLogo,
  PhotoshopLogo,
  SassLogo
} from '@/components/'
</script>

<style scoped>
.gradient-bg {
  @apply bg-gradient-to-r from-[#4AB1F1]/10 from-0% via-[#566CEC]/10 via-35% via-[#D749AF]/10 via-75% to-[#FF7C51]/10 to-100%;
}
</style>
