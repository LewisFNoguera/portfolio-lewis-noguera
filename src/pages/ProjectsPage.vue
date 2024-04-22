<template>
  <section id="projects" class="mx-auto w-full md:max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
    <h2
      class="text-center text-3xl font-bold tracking-tight dark:text-white text-black sm:text-4xl"
    >
      What I've worked on.
    </h2>

    <div class="py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-4">
          <ProjectCard
            v-for="project in Projects"
            :project="project"
            :key="project.id"
            @open-modal="setProjectDetail"
          />
        </div>
      </div>
    </div>
  </section>

  <ModalView :open-modal="openModal" :is-modal-visible="isModalVisible" :project="currentProject" />
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import useModal from '@/composables/useModal'
import Projects from './data/projects.json'
import { ref } from 'vue'

const currentProject = ref(null)

const setProjectDetail = (project: any) => {
  currentProject.value = project
  openModal()
}

const { onToggle: openModal, isModalVisible } = useModal()
</script>

<style scoped>
.gradient-bg {
  @apply bg-gradient-to-r from-[#4AB1F1]/10 from-0% via-[#566CEC]/10 via-35% via-[#D749AF]/10 via-75% to-[#FF7C51]/10 to-100%;
}
</style>
