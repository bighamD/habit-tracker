import type { Habit, Metric, WeekDay, Program, ScheduleItem, HelpItem, TabItemData, User } from '@/types'

// 用户信息
export const mockUser: User = {
  name: 'Paul'
}

// 指标数据
export const mockMetrics: Metric[] = [
  {
    value: '32',
    label: 'Day streak',
    change: '+12 this week',
    trend: 'up'
  },
  {
    value: '345',
    label: 'Points earned',
    change: '+45 today',
    trend: 'up'
  }
]

// 习惯列表
export const mockHabits: Habit[] = [
  {
    id: '1',
    title: 'Morning meditation',
    meta: '10 min · Completed 06:45',
    status: 'completed',
    icon: 'check'
  },
  {
    id: '2',
    title: 'Drink 8 glasses of water',
    meta: '8/8 · Done for today',
    status: 'completed',
    icon: 'check'
  },
  {
    id: '3',
    title: '30 min workout',
    meta: 'In progress · 18:32 remaining',
    status: 'in-progress'
  },
  {
    id: '4',
    title: 'Read 20 pages',
    meta: 'Scheduled for 20:00',
    status: 'scheduled'
  }
]

// 周视图数据
export const mockWeekDays: WeekDay[] = [
  { letter: 'M', status: 'completed', isCurrent: false },
  { letter: 'T', status: 'completed', isCurrent: false },
  { letter: 'W', status: 'completed', isCurrent: false },
  { letter: 'T', status: 'current', isCurrent: true },
  { letter: 'F', status: 'completed', isCurrent: false },
  { letter: 'S', status: 'upcoming', isCurrent: true, date: 4 },
  { letter: 'S', status: 'skipped', isCurrent: false }
]

// 程序推荐 - 使用渐变背景
export const mockPrograms: Program[] = [
  {
    id: '1',
    badge: '21 days',
    title: 'Morning Mastery',
    description: 'Build an unshakeable morning routine.',
    imageColor: 'bg-gradient-to-br from-[#7C3AED] to-[#2563EB]',
    imageBadgeColor: 'bg-white text-neutral-900',
    gradient: 'bg-gradient-to-br from-[#7C3AED] to-[#2563EB]'
  },
  {
    id: '2',
    badge: '30 days',
    title: 'Focus Protocol',
    description: 'Master deep work and mental clarity.',
    imageColor: 'bg-neutral-900',
    imageBadgeColor: 'bg-white text-neutral-900',
    gradient: 'bg-gradient-to-br from-[#DC2626] to-[#F97316]'
  }
]

// 日程安排
export const mockSchedule: ScheduleItem[] = [
  {
    id: '1',
    time: '07:00',
    title: 'Morning Run',
    meta: '45 min · Fitness',
    accentColor: 'bg-nyc-accent'
  },
  {
    id: '2',
    time: '12:30',
    title: 'Team Standup',
    meta: '15 min · Work',
    accentColor: 'bg-nyc-purple'
  }
]

// 帮助项
export const mockHelpItems: HelpItem[] = [
  {
    id: '1',
    text: 'How do streaks work?',
    icon: 'chevron-right',
    expanded: false,
    content: 'Complete habits consistently to build your streak. Missing a day resets the counter, so stay consistent!'
  },
  {
    id: '2',
    text: 'Setting up reminders',
    icon: 'chevron-down',
    expanded: true,
    content: "Tap on any habit and select 'Remind me' to set up custom notifications. You can choose specific times or smart reminders based on your routine."
  },
  {
    id: '3',
    text: 'Understanding your stats',
    icon: 'chevron-right',
    expanded: false,
    content: 'Track your progress with detailed analytics. View completion rates, streaks, and trends over time.'
  }
]

// 底部导航
export const mockTabs: TabItemData[] = [
  { id: '1', label: 'Home', icon: 'house', active: true },
  { id: '2', label: 'Stats', icon: 'chart-bar', active: false },
  { id: '3', label: 'Discover', icon: 'compass', active: false },
  { id: '4', label: 'Profile', icon: 'user', active: false }
]
