<template>
  <section class="mb-6">
    <h2 class="font-display text-[20px] font-bold text-white mb-4">Today</h2>

    <div class="grid grid-cols-2 gap-3">
      <!-- 霓虹黄绿色卡片 - 带阴影 -->
      <div
        class="rounded-[20px] bg-nyc-accent p-5 gap-2 flex flex-col shadow-[0_4px_24px_rgba(196,248,42,0.15)]"
      >
        <span class="font-display text-[32px] font-extrabold leading-none text-[#0A0A0A]">{{ metrics[0].value }}</span>
        <span class="text-[14px] font-semibold text-[#0A0A0A]">{{ metrics[0].label }}</span>
        <div class="flex items-center gap-1">
          <span class="text-[12px] font-medium text-[#0A0A0A] opacity-70">{{ metrics[0].change }}</span>
        </div>
      </div>

      <!-- 深灰卡片 -->
      <div class="card rounded-[20px] p-5 gap-2 flex flex-col">
        <span class="font-display text-[32px] font-extrabold leading-none text-white">{{ metrics[1].value }}</span>
        <span class="text-[14px] font-semibold text-neutral-400">{{ metrics[1].label }}</span>
        <div class="flex items-center gap-1">
          <span class="text-[12px] font-medium text-neutral-500">{{ metrics[1].change }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Metric } from '@/types'

defineProps<{
  metrics: Metric[]
}>()
</script>
