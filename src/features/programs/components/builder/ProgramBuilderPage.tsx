import { useMemo, useState } from 'react'
import { ComponentLibraryDrawer } from './ComponentLibraryDrawer'
import { ProgramBuilderToolbar } from './ProgramBuilderToolbar'
import { ProgramDayGrid } from './ProgramDayGrid'
import { WeekSelector } from './WeekSelector'
import {
  builderDays,
  nutritionLibrary,
  weeks as initialWeeks,
  workoutLibrary,
  type TopNavKey,
} from './programBuilderData'

export const ProgramBuilderPage = () => {
  const [activeTopTab, setActiveTopTab] = useState<TopNavKey>('builder')
  const [activeWeek, setActiveWeek] = useState(0)
  const [weeks, setWeeks] = useState(initialWeeks)
  const [searchValue, setSearchValue] = useState('')
  const [isLibraryOpen, setIsLibraryOpen] = useState(false)

  const filteredWorkouts = useMemo(() => {
    return workoutLibrary.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue])

  const filteredNutrition = useMemo(() => {
    return nutritionLibrary.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue])

  const handleTopTabChange = (tab: TopNavKey) => {
    setActiveTopTab(tab)
    setIsLibraryOpen(tab === 'library')
    console.log(`Program builder top navigation: ${tab}`)
  }

  const handleAddWeek = () => {
    const nextWeek = `WEEK_${String(weeks.length + 1).padStart(2, '0')}`
    setWeeks((currentWeeks) => [...currentWeeks, nextWeek])
    setActiveWeek(weeks.length)
    console.log(`Program builder added ${nextWeek}`)
  }

  return (
    <div className="h-full min-h-0 overflow-hidden bg-background text-on-background font-body-md">
      <main className="flex h-full min-h-0 flex-col overflow-hidden bg-background">
        <ProgramBuilderToolbar
          onSaveDraft={() => console.log('Program builder action: save draft')}
          onDeploy={() => console.log('Program builder action: deploy')}
        />
        <div className="flex min-h-0 flex-1 overflow-hidden">
          <WeekSelector weeks={weeks} activeWeek={activeWeek} onWeekChange={setActiveWeek} onAddWeek={handleAddWeek} />
          <ProgramDayGrid days={builderDays} />
        </div>
      </main>

      <ComponentLibraryDrawer
        workouts={filteredWorkouts}
        nutrition={filteredNutrition}
        isOpen={isLibraryOpen}
        onFilterClick={() => console.log('Program builder action: filter library')}
      />
    </div>
  )
}
