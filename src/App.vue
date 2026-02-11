<template>
  <div class="min-h-screen bg-[#0A0A0A] pb-6">
    <div class="max-w-md mx-auto">
      <!-- Home 页面 -->
      <div v-if="activeTab === '1'" class="px-6 pb-6">
        <Header />
        <SearchBar v-model="searchQuery" />
        <MetricsCard :metrics="metrics" />
        <HabitsList :habits="habits" @toggleHabit="toggleHabitStatus" />
        <WeekView :week-days="weekDays" />
        <ProgramsList :programs="programs" @selectProgram="selectProgram" />
        <ScheduleList
          :schedule="schedule"
          :active-segment="activeSegment"
          @segment-change="activeSegment = $event"
          @selectSchedule="selectSchedule"
        />
        <HelpSection
          :help-items="helpItems"
          @toggleExpand="toggleHelpExpand"
        />
      </div>

      <!-- Stats 页面 -->
      <div v-else-if="activeTab === '2'" class="px-6 pb-6">
        <h2 class="font-display text-2xl font-bold py-6 text-white">Statistics</h2>
        <div class="card rounded-2xl p-8 text-center">
          <ChartBar :size="64" class="mx-auto text-neutral-600 mb-4" />
          <p class="text-neutral-500">Statistics coming soon...</p>
        </div>
      </div>

      <!-- Discover 页面 -->
      <div v-else-if="activeTab === '3'" class="px-6 pb-6">
        <h2 class="font-display text-2xl font-bold py-6 text-white">Discover</h2>
        <div class="card rounded-2xl p-8 text-center">
          <Compass :size="64" class="mx-auto text-neutral-600 mb-4" />
          <p class="text-neutral-500">Explore new habits and programs...</p>
        </div>
      </div>

      <!-- Profile 页面 -->
      <div v-else-if="activeTab === '4'" class="px-6 pb-6">
        <h2 class="font-display text-2xl font-bold py-6 text-white">Profile</h2>
        <div class="card rounded-2xl p-8 text-center">
          <User :size="64" class="mx-auto text-neutral-600 mb-4" />
          <p class="text-neutral-500">Manage your account settings...</p>
        </div>
      </div>

      <!-- 底部导航栏 -->
      <div class="fixed bottom-0 left-0 right-0 px-6 pb-[21px] pt-3">
        <div class="max-w-md mx-auto">
          <TabBar :tabs="tabs" @tab-change="handleTabChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, markRaw } from 'vue'
import { House, ChartBar, Compass, User } from 'lucide-vue-next'
import Header from '@/components/Header.vue'
import SearchBar from '@/components/SearchBar.vue'
import MetricsCard from '@/components/MetricsCard.vue'
import HabitsList from '@/components/HabitsList.vue'
import WeekView from '@/components/WeekView.vue'
import ProgramsList from '@/components/ProgramsList.vue'
import ScheduleList from '@/components/ScheduleList.vue'
import HelpSection from '@/components/HelpSection.vue'
import TabBar, { type TabItem } from '@/components/TabBar.vue'
import {
  mockMetrics,
  mockHabits,
  mockWeekDays,
  mockPrograms,
  mockSchedule,
  mockHelpItems
} from '@/data/mockData'
import type { HelpItem, Habit } from '@/types'

const activeTab = ref('1')
const searchQuery = ref('')
const metrics = ref(mockMetrics)
const habits = ref<Habit[]>([...mockHabits])
const weekDays = ref(mockWeekDays)
const programs = ref(mockPrograms)
const schedule = ref(mockSchedule)
const helpItems = ref<HelpItem[]>([...mockHelpItems])
const activeSegment = ref('Today')

const tabs = ref<TabItem[]>([
  { id: '1', label: 'Home', icon: markRaw(House), active: true },
  { id: '2', label: 'Stats', icon: markRaw(ChartBar), active: false },
  { id: '3', label: 'Discover', icon: markRaw(Compass), active: false },
  { id: '4', label: 'Profile', icon: markRaw(User), active: false }
])

const handleTabChange = (id: string) => {
  activeTab.value = id
  tabs.value = tabs.value.map(tab => ({
    ...tab,
    active: tab.id === id
  }))
}

// 切换习惯状态
const toggleHabitStatus = (id: string) => {
  const habit = habits.value.find(h => h.id === id)
  if (habit) {
    const statusCycle: Record<string, Habit['status']> = {
      'completed': 'pending',
      'in-progress': 'completed',
      'pending': 'scheduled',
      'scheduled': 'completed'
    }
    habit.status = statusCycle[habit.status] || 'pending'
  }
}

// 选择程序
const selectProgram = (id: string) => {
  console.log('Selected program:', id)
  // TODO: 打开程序详情页
}

// 选择日程
const selectSchedule = (id: string) => {
  console.log('Selected schedule:', id)
  // TODO: 打开日程详情页
}

const toggleHelpExpand = (id: string) => {
  const item = helpItems.value.find(h => h.id === id)
  if (item) {
    item.expanded = !item.expanded
  }
}
</script>
