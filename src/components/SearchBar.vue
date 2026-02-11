<template>
  <div class="mb-6">
    <div class="h-[52px] rounded-2xl bg-nyc-card flex items-center gap-3 px-4 transition-smooth">
      <Search :size="20" class="text-neutral-600 flex-shrink-0" />
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        type="text"
        placeholder="Search habits, activities..."
        class="flex-1 bg-transparent outline-none text-base font-medium placeholder:text-neutral-600 text-white"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'

defineProps<{
  modelValue: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
