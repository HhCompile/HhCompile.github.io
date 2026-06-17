<script setup lang="ts">
import type { Profile } from '../data/profile'
defineProps<{ contact: Profile['contact'] }>()
</script>

<template>
  <section id="contact">
    <h2>联系方式</h2>
    <div class="row">
      <a class="btn" :href="contact.github" target="_blank" rel="noopener">GitHub</a>
      <a v-if="!contact.email.startsWith('<!--')" class="btn primary" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
      <a
        v-for="(o, i) in contact.others"
        :key="i"
        class="btn"
        :href="o.url"
        target="_blank"
        rel="noopener"
      >{{ o.label }}</a>
    </div>
    <p class="hint">想合作 / 招聘咨询 / 技术交流，欢迎通过以上方式联系。</p>
  </section>
</template>

<style scoped>
.row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.hint { font-size: 13px; margin-top: 8px; }
</style>
