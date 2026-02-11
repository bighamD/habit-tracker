<template>
  <div class="flex items-center justify-between px-6 py-[21px] pb-[19px]">
    <!-- 时间 -->
    <div class="h-6 flex items-center justify-center flex-1">
      <span class="text-neutral-900 text-[17px] font-semibold leading-[22px] text-center">
        {{ currentTime }}
      </span>
    </div>

    <!-- 信号、WiFi、电池 -->
    <div class="h-6 flex items-center justify-center gap-[7px] flex-1 pt-1">
      <!-- 信号图标 -->
      <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 12C0.67 12 0 11.33 0 10.5V1.5C0 0.67 0.67 0 1.5 0H17.5C18.33 0 19 0.67 19 1.5V10.5C19 11.33 18.33 12 17.5 12H1.5ZM1.5 10.5V1.5H17.5V10.5H1.5Z" fill="#18181B"/>
        <path d="M3 4H5V9H3V4Z" fill="#18181B"/>
        <path d="M6 3H8V9H6V3Z" fill="#18181B"/>
        <path d="M9 2H11V9H9V2Z" fill="#18181B"/>
        <path d="M12 1H14V9H12V1Z" fill="#18181B"/>
      </svg>

      <!-- WiFi 图标 -->
      <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 12C7.67 12 7 11.33 7 10.5V1.5C7 0.67 7.67 0 8.5 0H15.5C16.33 0 17 0.67 17 1.5V10.5C17 11.33 16.33 12 15.5 12H8.5Z" fill="#18181B"/>
        <path d="M9 2H10V10H9V2ZM11 2H12V10H11V2ZM13 2H14V10H13V2Z" fill="white"/>
      </svg>

      <!-- 电池 -->
      <div class="relative w-[27px] h-[13px]">
        <div class="absolute inset-0 rounded-[4.3px] border border-neutral-900 opacity-35"></div>
        <svg class="absolute left-[26px] top-[4.5px]" width="2" height="4" viewBox="0 0 2 4" fill="none">
          <path d="M0 1C0 0.44772 0.44772 0 1 0H1C1.55228 0 2 0.44772 2 1V3C2 3.55228 1.55228 4 1 4H1C0.44772 4 0 3.55228 0 3V1Z" fill="#18181B" fill-opacity="0.4"/>
        </svg>
        <div class="absolute left-[2px] top-[2px] w-[21px] h-[9px] rounded-[2.5px] bg-neutral-900"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('9:41')

const updateTime = () => {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  currentTime.value = `${hours}:${minutes.toString().padStart(2, '0')}`
}

let intervalId: ReturnType<typeof setInterval>

onMounted(() => {
  updateTime()
  intervalId = setInterval(updateTime, 60000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>
