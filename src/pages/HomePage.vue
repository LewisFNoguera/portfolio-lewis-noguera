<template>
  <!-- <IconHero class="absolute inset-0 -z-10 h-full w-full" /> -->
  <!-- bg-hero bg-bottom bg-no-repeat bg-cover -->
  <!-- <div class="relative isolate pt-14"> -->

  <div
    id="home"
    class="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40 z-50"
  >
    <div class="gradient absolute"></div>
    <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
      <!-- text-3xl -->
      <span class="font-bold tracking-tight text-gray-900 dark:text-white text-4xl md:text-[64px]"
        >I'm</span
      >
      <!-- typewriter-carousel flex min-h-10 -->
      <div class="">
        <!-- <span v-for="(word, index) in words" :key="index"> -->
        <!-- text-4xl  sm:text-6xl-->
        <h1
          class="font-bold leading-[0.9] tracking-tight text-gray-900 dark:text-white gradient-text text-6xl md:text-[110px]"
        >
          <!-- {{ typedWords[index] }} -->
          Frontend
          <!-- <span
                class="text-6xl text-black dark:text-white font-bold"
                v-if="currentWordIndex === index && showCaret"
                >|</span
              > -->
        </h1>
        <!-- <span :style="{ fontSize: word.size + 'px' }">{{ typedWords[index] }}</span> -->
        <!-- </span> -->
      </div>

      <p class="mt-6 text-lg leading-8 text-black dark:text-white">
        +6 years of experience. I am a FullStack Developer, with focus on Frontend and UI Design.
        Skills in <b>HTML/CSS/JS</b>, development tools like
        <b>Angular, React, React-Native & NestJS</b>.
      </p>
      <div class="mt-10 flex items-center gap-x-6">
        <a
          href="#"
          class="rounded-full bg-gray-900 dark:bg-white px-3.5 py-1.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
          >Check Resume <IconArrow class="dark:text-black text-white"
        /></a>
      </div>
    </div>
    <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
      <IconProfile class="w-full" />
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup lang="ts">
import { IconArrow, IconProfile } from '@/components/'

import { ref, onMounted } from 'vue'

const words: any = [
  { text: 'UI Designer', size: 24 },
  { text: 'Frontend', size: 32 },
  { text: 'Backend', size: 28 }
  // Agrega más palabras según sea necesario
]

const typedWords = ref(Array(words.length).fill(''))
const currentWordIndex = ref(0)
const showCaret = ref(true)

const typeWriterEffect = (word: any, index: number) => {
  let charIndex = 0
  const interval = setInterval(() => {
    typedWords.value[index] = word.text.substring(0, charIndex + 1)
    charIndex++
    if (charIndex === word.text.length) {
      clearInterval(interval)
      setTimeout(() => {
        eraseEffect(word, index)
      }, 1000) // Tiempo de espera antes de borrar la palabra
    }
  }, 150) // Velocidad de escritura, puedes ajustarla según tu preferencia
}

const eraseEffect = (word: any, index: number) => {
  let charIndex = word.text.length
  const interval = setInterval(() => {
    typedWords.value[index] = word.text.substring(0, charIndex)
    charIndex--
    if (charIndex === -1) {
      clearInterval(interval)
      // Pasar a la siguiente palabra después de borrar
      if (index < words.length - 1) {
        setTimeout(() => {
          typeWriterEffect(words[index + 1], index + 1)
          currentWordIndex.value = index + 1
        }, 500) // Tiempo de espera antes de empezar a escribir la siguiente palabra
      } else {
        setTimeout(() => {
          restartEffect()
        }, 500) // Tiempo de espera antes de reiniciar el efecto
      }
    }
  }, 50) // Velocidad de borrado, puedes ajustarla según tu preferencia
}

const restartEffect = () => {
  typedWords.value = Array(words.length).fill('')
  typeWriterEffect(words[0], 0)
  currentWordIndex.value = 0
}

onMounted(() => {
  typeWriterEffect(words[0], 0)
  setInterval(() => {
    showCaret.value = !showCaret.value
  }, 500) // Cambiar la visibilidad del caret cada 500ms para simular el parpadeo
})
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
  /* background-image: linear-gradient(hsl(158, 82, 57, 85%), hsl(252, 82, 57)); */
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
/* 
body {
  background-color: #222;
  position: absolute;
  inset: 0;
  display: flex;
  place-content: center;
  align-items: center;
  overflow: hidden;
} */

/* This is just to transition when you change the viewport size. */
* {
  transition: all 0.25s ease-out;
}
</style>
