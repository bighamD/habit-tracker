<template>
  <section class="mb-6">
    <h2 class="font-display text-[20px] font-bold text-white mb-4">Help & Tips</h2>

    <div class="card rounded-[20px] overflow-hidden">
      <div
        v-for="(item, index) in helpItems"
        :key="item.id"
      >
        <!-- 头部 -->
        <button
          class="w-full flex items-center justify-between px-[18px] py-[18px] hover:bg-nyc-border transition-smooth"
          @click="$emit('toggle-expand', item.id)"
        >
          <span class="text-[15px] font-semibold text-white">{{ item.text }}</span>
          <ChevronDown
            :size="20"
            class="transition-transform duration-300"
            :class="item.expanded ? 'text-neutral-500 rotate-180' : 'text-neutral-600'"
          />
        </button>

        <!-- 展开内容 -->
        <div
          v-if="item.expanded"
          class="px-[18px] pb-[18px]"
        >
          <p class="text-[14px] text-neutral-400 leading-[1.5]">{{ item.content }}</p>
        </div>

        <!-- 分割线 -->
        <div
          v-if="index < helpItems.length - 1"
          class="h-px bg-nyc-border"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import type { HelpItem } from '@/types'

defineProps<{
  helpItems: HelpItem[]
}>()

defineEmits<{
  toggleExpand: [id: string]
}>()
</script>
