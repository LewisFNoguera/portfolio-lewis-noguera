<template>
  <div id="experience" class="mx-auto w-full md:max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
    <h1 class="text-center uppercase text-black dark:text-white mb-20">Experience</h1>
    <div class="w-full max-w-3xl mx-auto">
      <div class="-my-6">
        <!-- Item #1 -->
        <div class="relative pl-8 sm:pl-32 py-6 group">
          <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
          <div
            class="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px bg-gradient-bar sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#E85F87] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
          >
            <time
              class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black dark:text-white"
              >2021 - At Present</time
            >
            <p class="text-2xl font-bold text-black dark:text-white">Monetta</p>
            <p class="text-md font-light mb-4 text-black dark:text-white">
              UI Designer, Frontend & React Native Developer
            </p>
          </div>
          <!-- Content -->
          <div class="text-black dark:text-white">
            Design graphical user interfaces for cell phones and websites, develop them in React and
            React-Native. Support in improving or creating backend services through NestJS.
          </div>
        </div>

        <!-- Item #2 -->
        <div class="relative pl-8 sm:pl-32 py-6 group">
          <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
          <div
            class="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px bg-gradient-bar sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#E85F87] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
          >
            <time
              class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black dark:text-white"
              >2020 - 2021</time
            >
            <p class="text-2xl font-bold text-black dark:text-white">Cetoco</p>
            <p class="text-md font-light mb-4 text-black dark:text-white">
              UI Designer & Frontend Developer
            </p>
          </div>
          <!-- Content -->
          <div class="text-black dark:text-white">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu
            neque aliquam vestibulum morbi blandit cursus risus.
          </div>
        </div>

        <!-- Item #3 -->
        <div class="relative pl-8 sm:pl-32 py-6 group">
          <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
          <div
            class="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px bg-gradient-bar sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#E85F87] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
          >
            <time
              class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black dark:text-white"
              >2015 - 2020</time
            >
            <p class="text-2xl font-bold text-black dark:text-white">Adatec S.A.S</p>
            <p class="text-md font-light mb-4 text-black dark:text-white">
              UI Designer & Frontend Developer
            </p>
          </div>
          <!-- Content -->
          <div class="text-black dark:text-white">
            Designing graphical user interfaces for cell phones and websites, UI implementation in
            React and Sencha Touch. Design and Development of business websites such as product page
            and homepage based on Wordpress. Generation of graphic pieces for social networks,
            design and development of pieces for Mailchimp. Modification and use of ticketing tools
            such as OSTicket.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg-gradient-bar:before {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #4ab1f1 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(74 177 241 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-from-position: 0%;
  --tw-gradient-to: rgb(86 108 236 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #566cec var(--tw-gradient-via-position),
    var(--tw-gradient-to);
  --tw-gradient-to: rgb(215 73 175 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #d749af var(--tw-gradient-via-position),
    var(--tw-gradient-to);
  --tw-gradient-via-position: 75%;
  --tw-gradient-to: #ff7c51 var(--tw-gradient-to-position);
  --tw-gradient-to-position: 100%;
}
</style>
