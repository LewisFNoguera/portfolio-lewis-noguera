<template>
  <section
    id="contact"
    class="mx-auto w-full md:max-w-5xl px-6 py-24 sm:py-32 lg:px-8 lg:py-60 gradient-bg rounded-lg z-10"
  >
    <h3 class="text-center text-3xl font-thin text-black dark:text-white mb-5">hey!</h3>
    <h2
      class="text-center text-3xl font-bold tracking-tight dark:text-white text-black sm:text-4xl mb-20"
    >
      Got a questions or proposal, or just want to say hello? Send an email to
      <a
        href="mailto:lewisnoguera@gmail.com"
        class="text-indigo-600 decoration-none hover:text-indigo-200"
        >lewisnoguera@gmail.com</a
      >
      or find me on my social networks.
    </h2>

    <div class="flex gap-5 text-center justify-center">
      <a
        target="_blank"
        href="https://github.com/LewisFNoguera"
        class="decoration-none transition-all duration-200 hover:scale-110"
      >
        <IconGithub class="text-black dark:text-white" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/lewisnoguera/"
        class="decoration-none transition-all duration-200 hover:scale-110"
      >
        <IconLinkedin class="text-black dark:text-white" />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/lewisfnoguera/"
        class="decoration-none transition-all duration-200 hover:scale-110"
      >
        <IconInstagram class="text-black dark:text-white" />
      </a>
      <a
        href="mailto:lewisnoguera@gmail.com"
        class="decoration-none transition-all duration-200 hover:scale-110"
      >
        <IconEmail class="text-black dark:text-white" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IconEmail, IconInstagram, IconGithub, IconLinkedin } from '@/components/'
</script>

<style scoped></style>
