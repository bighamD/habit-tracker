// 习惯状态类型
export type HabitStatus = 'completed' | 'in-progress' | 'pending' | 'scheduled'

// 周视图日期状态
export type DayStatus = 'completed' | 'current' | 'upcoming' | 'skipped'

// 习惯项
export interface Habit {
  id: string
  title: string
  meta: string
  status: HabitStatus
  icon?: string
}

// 指标数据
export interface Metric {
  value: string
  label: string
  change: string
  trend: 'up' | 'down' | 'neutral'
}

// 周视图日期
export interface WeekDay {
  letter: string
  status: DayStatus
  isCurrent: boolean
  date?: number
}

// 程序卡片
export interface Program {
  id: string
  badge: string
  title: string
  description: string
  imageColor: string
  imageBadgeColor: string
  gradient?: string
}

// 日程项
export interface ScheduleItem {
  id: string
  time: string
  title: string
  meta: string
  accentColor: string
}

// 帮助项
export interface HelpItem {
  id: string
  text: string
  expanded?: boolean
  content?: string
  icon: 'chevron-right' | 'chevron-down'
}

// 底部导航项（用于 mock 数据，icon 是字符串名称）
export interface TabItemData {
  id: string
  label: string
  icon: string
  active: boolean
}

// 搜索状态
export interface SearchState {
  query: string
  isFocused: boolean
}

// 用户信息
export interface User {
  name: string
  avatar?: string
}
