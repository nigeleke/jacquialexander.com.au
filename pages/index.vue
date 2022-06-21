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

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Jacqui Alexander Singing Studio'
})
</script>