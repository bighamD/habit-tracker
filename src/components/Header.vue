<template>
  <header class="flex justify-between items-center mb-6">
    <div class="flex-1">
      <h1 class="font-display text-[32px] font-bold leading-[1.1] text-white">
        Rise & grind!
      </h1>
    </div>

    <button
      class="w-11 h-11 rounded-3xl bg-nyc-card flex items-center justify-center hover:bg-nyc-border transition-smooth press-effect"
      aria-label="Notifications"
    >
      <Bell :size="22" class="text-white" />
    </button>
  </header>
</template>

<script setup lang="ts">
import { Bell } from 'lucide-vue-next'
</script>
