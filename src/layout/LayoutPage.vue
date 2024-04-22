<template>
  <HeaderLayout />
  <main class="mx-auto w-full md:max-w-7xl sm:px-6 lg:px-8">
    <HomePage />
    <ProjectsPage />
    <ExperiencePage />
    <SkillsPage />
    <AchievementsPage />
    <ContactPage />
  </main>
  <FooterLayout />
  <ButtonScrollToTop />
</template>
<script setup>
import { FooterLayout, HeaderLayout } from '../layout'
import {
  ExperiencePage,
  HomePage,
  ProjectsPage,
  SkillsPage,
  ContactPage,
  AchievementsPage
} from '../pages'
import ButtonScrollToTop from '@/components/ButtonScrollToTop.vue'
</script>
