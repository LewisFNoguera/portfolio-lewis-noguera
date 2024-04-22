<template>
  <transition name="modal-fade">
    <div
      v-if="isModalVisible"
      class="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/80 z-[99999]"
    >
      <div
        class="bg-white dark:bg-gray-900 shadow-lg overflow-x-auto flex flex-col rounded-lg max-w-2xl"
      >
        <div>
          <div class="text-center flex-auto justify-center leading-6">
            <div
              class="group flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:h-80 mb-5 md:col-span-2"
            >
              <img
                :src="project?.imageURL || ''"
                loading="lazy"
                :alt="project?.title"
                class="inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 md:col-span-2"
              />
            </div>
          </div>
          <div class="text-left p-5">
            <div
              v-for="(skill, index) in project?.skills"
              :key="index"
              class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full mr-2"
            >
              {{ skill }}
            </div>
            <br />

            <h2 class="mt-4 text-2xl font-bold py-2 gradient-text">
              {{ project?.title }}
            </h2>

            <p class="text-md dark:text-white text-black">
              {{ project?.description }}
            </p>
            <br />

            <p class="text-md dark:text-white text-black">
              {{ project?.descriptionLarge }}
            </p>

            <div class="mt-8">
              <a
                :href="project?.repository"
                v-if="project?.repository !== ''"
                target="_blank"
                class="mr-4 flex-1 px-6 py-2 font-semibold select-none rounded-md text-[#E85F87] border border-white bg-white hover:bg-indigo-50"
                >Code</a
              >

              <a
                v-if="project?.liveDemoUrl !== ''"
                :href="project?.liveDemoUrl"
                target="_blank"
                class="flex-1 px-6 py-2 font-semibold select-none rounded-md text-blue-600 border border-white bg-white hover:bg-gray-50"
                >Live Project</a
              >
            </div>
          </div>

          <div class="p-3 mt-2 text-right space-x-4 md:block">
            <hr class="py-4 border-gray-50/10" />
            <button
              @click="openModal"
              class="mb-2 md:mb-0 bg-black dark:bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white dark:text-black rounded-md hover:shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
interface Project {
  id?: number
  title: string
  description: string
  descriptionLarge: string
  css: string
  imageURL: string
  skills: string[]
  repository: string
  imagesContent: string[]
  liveDemoUrl: string
}
interface Props {
  openModal: () => void
  project?: Project
  isModalVisible: boolean
}
const { isModalVisible = false, openModal, project } = defineProps<Props>()
</script>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.gradient-text {
  @apply bg-gradient-to-r from-[#4AB1F1] from-0% via-[#566CEC] via-35% via-[#D749AF] via-75% to-[#FF7C51] to-100%  text-transparent inline-block bg-clip-text;
}
</style>
