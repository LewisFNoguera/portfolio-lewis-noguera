<template>
  <div id="projects" class="mx-auto w-full md:max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
    <h1 class="text-center uppercase text-black dark:text-white">What I've worked on.</h1>
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-4">
          <!-- image - start -->
          <div class="py-5 px-5 gradient-bg rounded-lg">
            <a
              href="#"
              class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 mb-5"
            >
              <img
                src="../assets/MONBIT.png"
                loading="lazy"
                alt="Photo by Minh Pham"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <span class="font-bold dark:text-white text-black">Monbit</span>
            <p class="font-ligh dark:text-white text-black text-sm pt-2">
              Mobile application in React Native and CMS in React and Backend in NestJS to control
              personal finances.
            </p>
          </div>
          <!-- image - end -->

          <!-- image - start -->
          <div class="py-5 px-5 gradient-bg rounded-lg md:col-span-2">
            <a
              href="#"
              class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 mb-5"
            >
              <img
                src="../assets/DAVIVIENDA.png"
                loading="lazy"
                alt="Photo by Magicle"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
            <span class="font-bold dark:text-white text-black">Davivienda Map</span>
            <p class="font-ligh dark:text-white text-black text-sm pt-2">
              Map of services for clients, I participated in the implementation of modules and
              functionalities such as filters in Angular.
            </p>
          </div>
          <!-- image - end -->

          <!-- image - start -->
          <div class="py-5 px-5 gradient-bg rounded-lg md:col-span-2">
            <a
              href="#"
              class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 mb-5"
            >
              <img
                src="../assets/MDINTELLIGENCE.png"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
            <span class="font-bold dark:text-white text-black">MDIntelligence</span>
            <p class="font-ligh dark:text-white text-black text-sm pt-2">
              Landing page design and coding for a software development company.
            </p>
          </div>
          <!-- image - end -->

          <!-- image - start -->
          <div class="py-5 px-5 gradient-bg rounded-lg">
            <a
              href="#"
              class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 mb-5"
            >
              <img
                src="../assets/MONETTA.png"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
            <span class="font-bold dark:text-white text-black">Monetta</span>
            <p class="font-ligh dark:text-white text-black text-sm pt-2">
              Partial UI design in Figma, components development in React-Native and CMS development
              in React. Support Backend in NestJS making services..
            </p>
          </div>
          <!-- image - end -->

          <!-- image - start -->
          <div class="py-5 px-5 gradient-bg rounded-lg">
            <a
              href="#"
              class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 mb-5"
            >
              <img
                src="../assets/OWO.jpeg"
                loading="lazy"
                alt="Photo by Minh Pham"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <span class="font-bold dark:text-white text-black">OWO tech</span>
            <p class="font-ligh dark:text-white text-black text-sm pt-2">
              I participated in the total frontend creation of the OWO CMS in Angular for the
              management of the whole system. OWO is a mobile services tool with Web
              administration..
            </p>
          </div>
          <!-- image - end -->

          <!-- image - start -->
          <div class="py-5 px-5 gradient-bg rounded-lg md:col-span-2">
            <a
              href="#"
              class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 mb-5"
            >
              <img
                src="../assets/DAVIPLATA.png"
                loading="lazy"
                alt="Photo by Magicle"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
            <span class="font-bold dark:text-white text-black">Daviplata Map</span>
            <p class="font-ligh dark:text-white text-black text-sm pt-2">
              Map of services for clients, I participated in the implementation of modules and
              functionalities such as filters in Angular.
            </p>
          </div>
          <!-- image - end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.gradient-bg {
  @apply bg-gradient-to-r from-[#4AB1F1]/10 from-0% via-[#566CEC]/10 via-35% via-[#D749AF]/10 via-75% to-[#FF7C51]/10 to-100%;
}
</style>
