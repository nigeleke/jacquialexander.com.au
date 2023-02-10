<template>
  <div class="main">
    <HeroImage />
    <SiteTitle class="site-title" />
    <Menu />
  </div>
</template>

<style scoped>
.main {
  min-height: 100%;
}

.site-title {
  margin-top: -150px;
  padding-bottom: 25px;
}
</style>

<script setup lang="ts">
  const config = useRuntimeConfig()
</script>
