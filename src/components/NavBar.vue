<script setup lang="ts">
defineProps<{
  sections: Array<{ id: string; label: string }>
  name: string
}>()
</script>

<template>
  <header class="navbar">
    <div class="container nav-inner">
      <a href="#top" class="brand">{{ name }}</a>
      <nav>
        <a v-for="s in sections" :key="s.id" :href="`#${s.id}`">{{ s.label }}</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(12px);
  background: rgba(11, 13, 18, 0.7);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
}
.brand {
  font-weight: 600;
  color: var(--fg);
  font-size: 15px;
}
nav {
  display: flex;
  gap: 22px;
}
nav a {
  font-size: 14px;
  color: var(--fg-muted);
  transition: color 0.2s ease-out;
}
nav a:hover { color: var(--fg); text-decoration: none; }
@media (max-width: 640px) {
  nav { gap: 14px; }
  nav a { font-size: 13px; }
}
</style>
