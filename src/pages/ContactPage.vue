<template>
  <div
    id="contact"
    class="mx-auto w-full md:max-w-5xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 gradient-bg rounded-lg"
  >
    <h3 class="text-center font-thin uppercase text-black dark:text-white">hey!</h3>
    <h2 class="text-center text-2xl uppercase text-black dark:text-white mb-20">
      Got a question or proposal, or just want<br />
      to say hello? Go ahead.
    </h2>
    <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label
            for="full-name"
            class="block text-sm font-semibold leading-6 text-black dark:text-white"
            >Full Name</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="full-name"
              id="full-name"
              autocomplete="given-name"
              class="block w-full rounded-none border-b-2 px-3.5 py-2 text-black dark:text-white bg-transparent text-black dark:text-white bg-transparent"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label
            for="email"
            class="block text-sm font-semibold leading-6 text-black dark:text-white"
            >Email</label
          >
          <div class="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-none border-b-2 px-3.5 py-2 text-black dark:text-white bg-transparent"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm font-semibold leading-6 text-black dark:text-white"
            >Message</label
          >
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="1"
              class="block w-full rounded-none border-b-2 px-3.5 py-2 text-black dark:text-white bg-transparent"
            />
          </div>
        </div>
      </div>
      <div class="mt-10">
        <button
          type="submit"
          class="rounded-full bg-gray-900 dark:bg-white px-3.5 py-1.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
        >
          Here we go! <IconArrow class="dark:text-black text-white" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { IconArrow } from '@/components/'
</script>

<style scoped></style>
