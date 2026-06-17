<script setup lang="ts">
defineProps<{ bio: string[] }>()
</script>

<template>
  <section id="about">
    <h2>关于我</h2>
    <p v-for="(p, i) in bio" :key="i">{{ p }}</p>
  </section>
</template>
