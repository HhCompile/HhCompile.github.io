<script setup lang="ts">
defineProps<{ skills: string[] }>()
</script>

<template>
  <section id="skills">
    <h2>技能</h2>
    <div>
      <span v-for="s in skills" :key="s" class="tag">{{ s }}</span>
    </div>
  </section>
</template>
