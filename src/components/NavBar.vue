<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

defineProps<{
  sections: Array<{ id: string; label: string }>
  name: string
}>()

const { theme, cycle } = useTheme()

const labelMap = {
  dark: '深色',
  light: '浅色',
  system: '跟随系统'
}
</script>

<template>
  <header class="navbar">
    <div class="container nav-inner">
      <a href="#top" class="brand">{{ name }}</a>
      <nav>
        <a v-for="s in sections" :key="s.id" :href="`#${s.id}`">{{ s.label }}</a>
        <button
          class="theme-toggle"
          @click="cycle"
          :aria-label="`切换主题，当前：${labelMap[theme]}`"
          :title="`当前：${labelMap[theme]}（点击切换）`"
        >
          <!-- 月亮（暗色） -->
          <svg
            v-if="theme === 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <!-- 太阳（亮色） -->
          <svg
            v-else-if="theme === 'light'"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <!-- 显示器（跟随系统） -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        </button>
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
  background: var(--navbar-bg);
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
  align-items: center;
  gap: 22px;
}
nav a {
  font-size: 14px;
  color: var(--fg-muted);
  transition: color 0.2s ease-out;
}
nav a:hover { color: var(--fg); text-decoration: none; }

.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: transparent;
  color: var(--fg-muted);
  cursor: pointer;
  transition: all 0.2s ease-out;
}
.theme-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-soft);
}

@media (max-width: 640px) {
  nav { gap: 14px; }
  nav a { font-size: 13px; }
}
</style>
