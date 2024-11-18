<template>
  <section
    id="home"
    class="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40 z-50"
  >
    <div class="gradient absolute hidden lg:block"></div>
    <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">        
      <div >
        <span>          
          <h1 class="font-bold leading-[0.9] tracking-tight text-gray-900 dark:text-white gradient-text text-6xl md:text-[110px] min-h-28 p-0 m-0"
          >            FullStack Developer            
          </h1>
          
        </span>
      </div>
      <p class="mt-6 text-lg leading-8 text-black dark:text-white">
        +6 years of experience building web and mobile applications using
        <b>JavaScript, React, Angular, Vue, React Native, Astro, Node, Express</b> and other cutting-edge
        libraries and designs in <b>figma or AdobeXD.</b>
      </p>
      <div class="mt-10 flex items-center gap-x-6">
        <a
          href="./assets/CV/CV-Lewis_Noguera_Gomez.pdf"
          download
          class="rounded-full bg-gray-900 dark:bg-white px-3.5 py-1.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
          >Check Resume <IconArrow class="dark:text-black text-white"
        /></a>
      </div>
    </div>
    <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
      <IconProfile class="w-full" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { IconArrow, IconProfile } from '@/components/'
import useTypewriterEffect from '@/composables/useTypewriterEffect'

const words: any = [{ text: 'UI Designer' }, { text: 'Frontend' }, { text: 'Backend' }]

const { typedWords, currentWordIndex, showCaret } = useTypewriterEffect(words)
</script>

<style scoped>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.gradient-text {
  @apply bg-gradient-to-r from-[#4AB1F1] from-0% via-[#566CEC] via-35% via-[#D749AF] via-75% to-[#FF7C51] to-100%  text-transparent inline-block bg-clip-text;
}

.gradient {
  --size: 250px;
  --speed: 50s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 5));  
  @apply bg-gradient-to-r from-[#4AB1F1] from-0% via-[#566CEC] via-35% via-[#D749AF] via-75% to-[#FF7C51] to-100%;
  animation: rotate var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;

  left: 0;
  right: 0;
  width: 90%;
  height: 90%;
  z-index: -10;
  opacity: 0.4;
}

@media (min-width: 720px) {
  .gradient {
    --size: 500px;
  }
}

/* This is just to transition when you change the viewport size. */
* {
  transition: all 0.25s ease-out;
}
</style>
