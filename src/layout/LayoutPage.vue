<template>
  <div>
    <HeaderLayout />
    <main class="mx-auto w-full md:max-w-7xl sm:px-6 lg:px-8">
      <HomePage />
      <ProjectsPage />
      <ExperiencePage />
      <SkillsPage />
      <ContactPage />
    </main>
    <FooterLayout />
  </div>
</template>
<script setup>
import { FooterLayout, HeaderLayout } from '../layout'
import { ExperiencePage, HomePage, ProjectsPage, SkillsPage, ContactPage } from '../pages'
</script>
