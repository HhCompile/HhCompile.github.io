<script setup lang="ts">
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import SkillsSection from './sections/SkillsSection.vue'
import ExperienceSection from './sections/ExperienceSection.vue'
import ProjectsSection from './sections/ProjectsSection.vue'
import ContactSection from './sections/ContactSection.vue'
import NavBar from './components/NavBar.vue'
import { profile } from './data/profile'

const sections = [
  { id: 'about', label: '关于' },
  { id: 'skills', label: '技能' },
  { id: 'experience', label: '经历' },
  { id: 'projects', label: '作品' },
  { id: 'contact', label: '联系' }
]
</script>

<template>
  <NavBar :sections="sections" :name="profile.name" />
  <main class="container">
    <HeroSection :name="profile.name" :title="profile.title" :location="profile.location" />
    <AboutSection :bio="profile.bio" />
    <SkillsSection :skills="profile.skills" />
    <ExperienceSection :experiences="profile.experiences" />
    <ProjectsSection :projects="profile.projects" />
    <ContactSection :contact="profile.contact" />
  </main>
  <footer class="container footer">
    <span>© {{ new Date().getFullYear() }} {{ profile.name }}</span>
    <span>Built with Vue 3 + Vite · Deployed on GitHub Pages</span>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 24px;
  font-size: 13px;
  color: var(--fg-muted);
  border-top: 1px solid var(--border);
}
@media (max-width: 640px) {
  .footer { flex-direction: column; gap: 6px; text-align: center; }
}
</style>
