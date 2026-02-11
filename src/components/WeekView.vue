<template>
  <section class="mb-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="font-display text-[20px] font-bold text-white">This week</h2>
      <div class="flex items-center gap-1.5">
        <span class="font-display text-[18px] font-bold text-nyc-accent">{{ completionPercent }}</span>
        <span class="font-mono text-[12px] font-medium text-neutral-500">complete</span>
      </div>
    </div>

    <div class="card rounded-[20px] px-5 py-5 flex justify-between items-center">
      <div
        v-for="day in weekDays"
        :key="day.letter"
        class="flex flex-col items-center gap-2"
      >
        <span class="font-mono text-[12px] font-semibold" :class="getDayTextColor(day)">{{ day.letter }}</span>
        <div
          class="w-9 h-9 rounded-[18px] flex items-center justify-center transition-smooth"
          :class="getDayClasses(day)"
        >
          <Check v-if="day.status === 'completed'" :size="18" class="text-[#0A0A0A]" />
          <div v-else-if="day.status === 'current'" class="w-2 h-2 rounded-full bg-nyc-accent"></div>
          <span v-else-if="day.date" class="font-display text-[14px] font-bold text-[#0A0A0A]">{{ day.date }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Check } from 'lucide-vue-next'
import type { WeekDay } from '@/types'

const props = defineProps<{
  weekDays: WeekDay[]
}>()

const completionPercent = computed(() => {
  const completed = props.weekDays.filter(d => d.status === 'completed').length
  const total = props.weekDays.length
  return `${Math.round((completed / total) * 100)}%`
})

const getDayClasses = (day: WeekDay) => {
  switch (day.status) {
    case 'completed':
      return 'bg-nyc-accent shadow-[0_0_12px_rgba(255,255,255,0.3)]'
    case 'current':
      return 'bg-nyc-card border-2 border-nyc-accent'
    case 'upcoming':
      return 'bg-white shadow-[0_0_12px_rgba(255,255,255,0.2)]'
    case 'skipped':
      return 'bg-nyc-card border-2 border-neutral-700'
    default:
      return 'bg-nyc-card border-2 border-neutral-700'
  }
}

const getDayTextColor = (day: WeekDay) => {
  if (day.status === 'upcoming' && day.isCurrent) return 'text-white'
  if (day.status === 'skipped') return 'text-neutral-600'
  return 'text-neutral-500'
}
</script>
