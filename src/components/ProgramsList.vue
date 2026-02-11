<template>
  <section class="mb-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="font-display text-[20px] font-bold text-white">Programs</h2>
      <button class="text-[14px] font-semibold text-nyc-accent hover:text-nyc-accent/80 transition-smooth">
        See all
      </button>
    </div>

    <div class="flex gap-3 overflow-x-auto scrollbar-hide -mx-6 px-6">
      <div
        v-for="program in programs"
        :key="program.id"
        class="card rounded-[20px] flex-shrink-0 w-[200px] cursor-pointer hover:bg-nyc-border transition-smooth press-effect"
        @click="$emit('select-program', program.id)"
      >
        <!-- 渐变图片区域 -->
        <div :class="program.gradient" class="h-[100px]"></div>

        <!-- 内容 -->
        <div class="p-4 gap-1.5 flex flex-col">
          <h3 class="text-[16px] font-bold text-white">{{ program.title }}</h3>
          <p class="text-[13px] text-neutral-400 leading-[1.4]">{{ program.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Program } from '@/types'

defineProps<{
  programs: Program[]
}>()

defineEmits<{
  selectProgram: [id: string]
}>()
</script>
