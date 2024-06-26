<template>
  <!-- bg-white dark:bg-gray-900 -->
  <header class="dark:bg-gray-900/80 bg-white/80 fixed w-full z-[99999]">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Lewis Noguera Portfolio</span>
        <IconLogo class="text-black dark:text-white" />
      </a>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <IconMenu class="text-black dark:text-white" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <router-link :to="{ name: 'home', hash: '#home' }">
          <span class="flex w-full bg-transparent text-black dark:text-white"> About me </span>
          <div class="active"></div>
        </router-link>
        <router-link :to="{ name: 'projects', hash: '#projects' }">
          <span class="flex w-full bg-transparent text-black dark:text-white"> Projects </span>
          <div class="active"></div>
        </router-link>
        <router-link :to="{ name: 'experience', hash: '#experience' }">
          <span class="flex w-full bg-transparent text-black dark:text-white"> Experience </span>
          <div class="active"></div>
        </router-link>
        <router-link :to="{ name: 'skills', hash: '#skills' }">
          <span class="flex w-full bg-transparent text-black dark:text-white"> Skills </span>
          <div class="active"></div>
        </router-link>
        <router-link :to="{ name: 'achievements', hash: '#achievements' }">
          <span class="flex w-full bg-transparent text-black dark:text-white"> Achievements </span>
          <div class="active"></div>
        </router-link>
        <router-link :to="{ name: 'contact', hash: '#contact' }">
          <span class="flex w-full bg-transparent text-black dark:text-white"> Contact </span>
          <div class="active"></div>
        </router-link>
        <div class="hidden lg:flex lg:gap-x-4">
          <a
            target="_blank"
            href="https://github.com/LewisFNoguera"
            class="decoration-none transition-all duration-200 hover:scale-110"
          >
            <IconGithub class="text-black dark:text-white h-5" />
          </a>

          <IconLinkedin class="text-black dark:text-white h-5" v-if="false" />
          <IconDark
            v-if="!isDark"
            @click="toggleDark()"
            class="text-black dark:text-white cursor-pointer transition-all duration-200 hover:scale-110"
          />
          <IconLight
            v-else
            @click="toggleDark()"
            class="text-black dark:text-white cursor-pointer transition-all duration-200 hover:animate-spin"
          />
        </div>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto dark:bg-gray-900 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Lewis Noguera Portfolio</span>
            <IconLogo class="text-black dark:text-white" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <!-- <XMarkIcon class="h-6 w-6" aria-hidden="true" /> -->
          </button>
        </div>
        <div class="mt-6 flex justify-center items-center h-[calc(100%-44px)]">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6 flex flex-col items-center gap-y-24">
              <router-link :to="{ name: 'home', hash: '#home' }">
                <span class="flex w-full bg-transparent text-black dark:text-white">
                  About me
                </span>
                <div class="active"></div>
              </router-link>
              <router-link :to="{ name: 'projects', hash: '#projects' }">
                <span class="flex w-full bg-transparent text-black dark:text-white">
                  Projects
                </span>
                <div class="active"></div>
              </router-link>
              <router-link :to="{ name: 'experience', hash: '#experience' }">
                <span class="flex w-full bg-transparent text-black dark:text-white">
                  Experience
                </span>
                <div class="active"></div>
              </router-link>
              <router-link :to="{ name: 'skills', hash: '#skills' }">
                <span class="flex w-full bg-transparent text-black dark:text-white"> Skills </span>
                <div class="active"></div>
              </router-link>
              <router-link :to="{ name: 'achievements', hash: '#achievements' }">
                <span class="flex w-full bg-transparent text-black dark:text-white">
                  Achievements
                </span>
                <div class="active"></div>
              </router-link>
              <router-link :to="{ name: 'contact', hash: '#contact' }">
                <span class="flex w-full bg-transparent text-black dark:text-white"> Contact </span>
                <div class="active"></div>
              </router-link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { IconLinkedin, IconGithub, IconDark, IconLogo, IconLight, IconMenu } from '@/components/'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const mobileMenuOpen = ref(false)
</script>

<style>
.router-link-exact-active .active {
  height: 3px;
  width: 100%;
  @apply bg-gradient-to-r from-[#4AB1F1] from-0% via-[#566CEC] via-35% via-[#D749AF] via-75% to-[#FF7C51] to-100% font-bold;
  background-size: 200% auto;
  animation: gradientAnimation 3s linear infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
