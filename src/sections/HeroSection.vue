<script setup lang="ts">
defineProps<{ name: string; title: string; location: string }>()
</script>

<template>
  <section id="top" class="hero">
    <p class="hi">👋 你好，我是</p>
    <h1>{{ name }}</h1>
    <p class="title">{{ title }} · {{ location }}</p>
    <div class="cta">
      <a class="btn primary" href="#projects">查看作品</a>
      <a class="btn" href="#contact">联系方式</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 96px 0 56px;
  border-bottom: 1px solid var(--border);
}
.hi { color: var(--fg-muted); margin-bottom: 8px; font-size: 14px; }
.title { font-size: 1.1rem; color: var(--fg-muted); margin-bottom: 24px; }
.cta { display: flex; gap: 12px; flex-wrap: wrap; }
</style>
