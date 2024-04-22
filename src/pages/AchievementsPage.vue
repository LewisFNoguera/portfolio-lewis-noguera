<template>
  <div id="achievements" class="mx-auto w-full md:max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight dark:text-white text-black sm:text-4xl">
          Achievements
        </h2>
        <p class="mt-2 text-lg leading-8 dark:text-white text-black">
          These are some achievements and certifications, I fully believe in constant learning helps
          to improve our skills.
        </p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="post in posts"
          :key="post.id"
          class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
        >
          <img
            :src="post.imageUrl"
            alt=""
            class="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

          <div
            class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"
          >
            <time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
          </div>
          <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
            <a target="_blank" :href="post.href">
              <span class="absolute inset-0" />
              {{ post.title }}
            </a>
          </h3>
          <a
            :href="post.href"
            target="_blank"
            class="w-[100px] p-0 text-center mt-3 font-semibold select-none rounded-md text-blue-600 border border-white bg-white hover:bg-gray-50"
            >View</a
          >
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: 'TypeScript',
    href: 'https://www.udemy.com/certificate/UC-691ddc5e-d67f-488a-83bb-087a85b71386/',
    imageUrl: 'https://cdn-bgp.bluestacks.com/BGP/us/gametiles_com.udemy.android.jpg',
    date: 'Mar 07, 2024',
    datetime: '2024-03-07'
  },
  {
    id: 2,
    title: 'Vuejs: Cero to Expert',
    href: 'https://cursos.devtalles.com/certificates/oahz2ngbgw',
    imageUrl: 'https://pbs.twimg.com/profile_images/1587916895143043073/DMpsgyZ4_400x400.jpg',
    date: 'Mar 30, 2024',
    datetime: '2024-03-30'
  },
  {
    id: 3,
    title: 'Vuejs - Intermediate',
    href: 'https://cursos.devtalles.com/certificates/dhtzf1hnih',
    imageUrl: 'https://pbs.twimg.com/profile_images/1587916895143043073/DMpsgyZ4_400x400.jpg',
    date: 'Apr 10, 2024',
    datetime: '2024-04-10'
  },
  {
    id: 4,
    title: 'Dart - Cero to Expert',
    href: 'https://cursos.devtalles.com/certificates/ydaio7f4lg',
    imageUrl: 'https://pbs.twimg.com/profile_images/1587916895143043073/DMpsgyZ4_400x400.jpg',
    date: 'Apr 10, 2024',
    datetime: '2024-04-10'
  }
]
</script>
