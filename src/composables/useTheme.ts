import { ref, watch, onMounted } from 'vue'

export type Theme = 'light' | 'dark' | 'system'
export type Resolved = 'light' | 'dark'

const STORAGE_KEY = 'hhcompile-theme'

// 模块级单例：跨组件共享同一份主题状态
const theme = ref<Theme>('system')
const resolved = ref<Resolved>('dark')

function systemPref(): Resolved {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function applyTheme(t: Theme) {
  const root = document.documentElement
  if (t === 'system') {
    root.removeAttribute('data-theme')
    resolved.value = systemPref()
  } else {
    root.setAttribute('data-theme', t)
    resolved.value = t
  }

  // 同步 PWA theme-color（Safari 状态栏 + 桌面 dock）
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', resolved.value === 'light' ? '#ffffff' : '#0b0d12')
  }
}

let initialized = false

export function useTheme() {
  onMounted(() => {
    if (initialized) return
    initialized = true

    // 读取持久化选择
    const saved = (localStorage.getItem(STORAGE_KEY) as Theme) || 'system'
    theme.value = saved
    applyTheme(saved)

    // 监听系统主题变化（仅在 'system' 模式下生效）
    const mql = window.matchMedia('(prefers-color-scheme: light)')
    mql.addEventListener('change', () => {
      if (theme.value === 'system') applyTheme('system')
    })
  })

  watch(theme, (t) => {
    if (!initialized) return // 避免 onMounted 前误触发
    localStorage.setItem(STORAGE_KEY, t)
    applyTheme(t)
  })

  function cycle() {
    const order: Theme[] = ['dark', 'light', 'system']
    const idx = order.indexOf(theme.value)
    theme.value = order[(idx + 1) % order.length]
  }

  function setTheme(t: Theme) {
    theme.value = t
  }

  return { theme, resolved, cycle, setTheme }
}
