<template>
  <div class="tab-bar-gradient">
    <div class="glass rounded-[100px] border border-nyc-border bg-nyc-card h-16 flex items-center justify-around px-1 py-1">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="$emit('tabChange', tab.id)"
        class="flex flex-col items-center gap-1 px-4 py-2 transition-smooth press-effect"
        :class="tab.active ? 'text-nyc-accent' : 'text-neutral-600 hover:text-neutral-500'"
      >
        <component :is="tab.icon" :size="20" />
        <span class="text-[11px] font-semibold">{{ tab.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Component } from 'vue'

export interface TabItem {
  id: string
  label: string
  icon: Component
  active: boolean
}

defineProps<{
  tabs: TabItem[]
}>()

defineEmits<{
  tabChange: [id: string]
}>()
</script>

<style scoped>
.tab-bar-gradient {
  background: linear-gradient(to bottom, rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 0.3) 30%, #0A0A0A 100%);
}
</style>
