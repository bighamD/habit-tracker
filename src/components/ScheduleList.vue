<template>
  <section class="mb-6">
    <!-- 分段控制器 -->
    <div class="mb-4">
      <div class="h-11 rounded-[14px] bg-nyc-card p-1 flex gap-1 border border-nyc-border">
        <button
          v-for="segment in segments"
          :key="segment"
          class="flex-1 rounded-[10px] text-[14px] font-semibold transition-smooth"
          :class="activeSegment === segment ? 'bg-nyc-accent text-[#0A0A0A]' : 'text-neutral-500 hover:text-neutral-400'"
          @click="$emit('segmentChange', segment)"
        >
          {{ segment }}
        </button>
      </div>
    </div>

    <!-- 头部 -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="font-display text-[20px] font-bold text-white">Schedule</h2>
      <button class="bg-nyc-border text-white px-3.5 py-2 rounded-[10px] flex items-center gap-1.5 text-[13px] font-semibold hover:bg-nyc-card transition-smooth">
        <Plus :size="16" />
        <span>Add</span>
      </button>
    </div>

    <!-- 日程卡片 -->
    <div class="flex flex-col gap-3">
      <div
        v-for="item in schedule"
        :key="item.id"
        class="card rounded-2xl flex items-center cursor-pointer hover:bg-nyc-border transition-smooth press-effect"
        @click="$emit('select-schedule', item.id)"
      >
        <div :class="item.accentColor" class="w-1 h-full flex-shrink-0 rounded-l-2xl"></div>
        <div class="flex-1 p-4 gap-1">
          <p class="text-[15px] font-semibold text-white">{{ item.time }}</p>
          <p class="text-[13px] font-medium text-neutral-400">{{ item.title }}</p>
          <p class="text-[12px] text-neutral-500">{{ item.meta }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import type { ScheduleItem } from '@/types'

defineProps<{
  schedule: ScheduleItem[]
  activeSegment: string
}>()

defineEmits<{
  segmentChange: [segment: string]
  selectSchedule: [id: string]
}>()

const segments = ['Today', 'Week', 'Month']
</script>
