<template>
  <div :class="`py-5 px-5 gradient-bg rounded-lg ${css}`" @click="openModal">
    <a
      href="Javascript:void(0)"
      :class="`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 mb-5 ${css}`"
    >
      <img
        :src="imageURL"
        loading="lazy"
        :alt="title"
        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />
    </a>
    <span class="font-bold dark:text-white text-black">{{ title }}</span>

    <p class="font-ligh dark:text-white text-black text-sm pt-2">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Project {
  project: {
    id?: number
    title: string
    description: string
    descriptionLarge: string
    css: string
    imageURL: string
    repository: string
    liveDemoUrl: string
    skills: string[]
  }
}
const { project } = defineProps<Project>()
const { title, description, imageURL, css } = project

const emit = defineEmits(['open-modal'])
const openModal = () => {
  emit('open-modal', project)
}
</script>

<style scoped>
.gradient-bg {
  @apply bg-gradient-to-r from-[#4AB1F1]/10 from-0% via-[#566CEC]/10 via-35% via-[#D749AF]/10 via-75% to-[#FF7C51]/10 to-100%;
}
</style>
