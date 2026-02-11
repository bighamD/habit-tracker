<template>
  <section class="mb-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="font-display text-[20px] font-bold text-white">Habits</h2>
      <div class="flex items-center gap-1.5">
        <div class="w-2 h-2 rounded-full bg-nyc-accent"></div>
        <span class="font-mono text-[12px] font-medium text-neutral-500">{{ progressText }}</span>
      </div>
    </div>

    <div class="card rounded-3xl overflow-hidden">
      <div
        v-for="(habit, index) in habits"
        :key="habit.id"
        class="flex items-center gap-[14px] px-4 py-4 cursor-pointer hover:bg-nyc-border transition-smooth press-effect"
        :class="{ 'border-t border-nyc-border': index > 0 }"
        @click="$emit('toggle-habit', habit.id)"
      >
        <!-- 状态图标 -->
        <div
          class="w-7 h-7 rounded-[14px] flex items-center justify-center flex-shrink-0 transition-smooth"
          :class="getStatusClasses(habit.status)"
        >
          <Check v-if="habit.status === 'completed'" :size="16" class="text-[#0A0A0A]" />
          <div v-else-if="habit.status === 'in-progress'" class="w-2 h-2 rounded-full bg-nyc-progress"></div>
        </div>

        <!-- 内容 -->
        <div class="flex-1 min-w-0">
          <p
            class="text-[15px] font-semibold truncate"
            :class="habit.status === 'scheduled' ? 'text-neutral-600' : 'text-white'"
          >
            {{ habit.title }}
          </p>
          <p
            class="text-[13px] truncate"
            :class="habit.status === 'in-progress' ? 'text-nyc-progress font-medium' : 'text-neutral-500'"
          >
            {{ habit.meta }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Check } from 'lucide-vue-next'
import type { Habit } from '@/types'

const props = defineProps<{
  habits: Habit[]
}>()

defineEmits<{
  toggleHabit: [id: string]
}>()

const progressText = computed(() => {
  const completed = props.habits.filter(h => h.status === 'completed').length
  return `${completed} of ${props.habits.length} done`
})

const getStatusClasses = (status: Habit['status']) => {
  switch (status) {
    case 'completed':
      return 'bg-nyc-accent'
    case 'in-progress':
      return 'bg-nyc-card border-2 border-nyc-progress'
    case 'scheduled':
      return 'bg-nyc-card border-2 border-neutral-700'
    default:
      return 'bg-nyc-card border-2 border-neutral-700'
  }
}
</script>
