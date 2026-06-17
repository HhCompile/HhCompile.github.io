<script setup lang="ts">
import type { Project } from '../data/profile'
defineProps<{ projects: Project[] }>()
</script>

<template>
  <section id="projects">
    <h2>作品</h2>
    <div class="grid">
      <div v-for="(p, i) in projects" :key="i" class="card">
        <h3>{{ p.name }}</h3>
        <p>{{ p.desc }}</p>
        <div v-if="p.highlight" class="hl">⭐ {{ p.highlight }}</div>
        <div>
          <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
        </div>
        <div v-if="p.repo || p.url" class="links">
          <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener" class="btn">源码</a>
          <a v-if="p.url" :href="p.url" target="_blank" rel="noopener" class="btn">演示</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hl {
  font-size: 13px;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 6px 10px;
  border-radius: 6px;
  margin: 8px 0;
}
.links { margin-top: 12px; display: flex; gap: 8px; }
</style>
