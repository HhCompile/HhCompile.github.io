<script setup lang="ts">
import type { Experience } from '../data/profile'
defineProps<{ experiences: Experience[] }>()
</script>

<template>
  <section id="experience">
    <h2>经历</h2>
    <div v-for="(exp, i) in experiences" :key="i" class="card" style="margin-bottom: 14px">
      <div class="head">
        <h3>{{ exp.role }} · {{ exp.company }}</h3>
        <span class="period">{{ exp.period }}</span>
      </div>
      <ul>
        <li v-for="(pt, j) in exp.points" :key="j">{{ pt }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}
.period { color: var(--fg-muted); font-size: 13px; }
ul { margin: 8px 0 0; }
</style>
