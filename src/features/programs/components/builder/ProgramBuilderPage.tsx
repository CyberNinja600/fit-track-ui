import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../../constants'
import { useAuthStore } from '../../../../store/authStore'
import { ComponentLibraryDrawer } from './ComponentLibraryDrawer'
import { ProgramBuilderMobileNav } from './ProgramBuilderMobileNav'
import { ProgramBuilderSidebar } from './ProgramBuilderSidebar'
import { ProgramBuilderToolbar } from './ProgramBuilderToolbar'
import { ProgramBuilderTopNav } from './ProgramBuilderTopNav'
import { ProgramDayGrid } from './ProgramDayGrid'
import { WeekSelector } from './WeekSelector'
import {
  builderDays,
  nutritionLibrary,
  weeks as initialWeeks,
  workoutLibrary,
  type BuilderNavKey,
  type MobileNavKey,
  type TopNavKey,
} from './programBuilderData'

export const ProgramBuilderPage = () => {
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)
  const [activeSidebarItem, setActiveSidebarItem] = useState<BuilderNavKey>('programs')
  const [activeMobileItem, setActiveMobileItem] = useState<MobileNavKey>('build')
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

  const handleSidebarNavigate = (key: BuilderNavKey) => {
    setActiveSidebarItem(key)
    console.log(`Program builder navigation: ${key}`)

    if (key === 'dashboard') navigate(ROUTES.DASHBOARD)
    if (key === 'programs') navigate(ROUTES.PROGRAMS)
    if (key === 'calendar') console.log('Calendar needs a selected program id before routing to /programs/:id/calendar')
    if (key === 'clients') console.log('Clients route is not registered yet')
    if (key === 'analytics') console.log('Analytics route is not registered yet')
    if (key === 'support') console.log('Support route is not registered yet')
    if (key === 'logout') {
      logout()
      navigate(ROUTES.LOGIN)
    }
  }

  const handleMobileNavigate = (key: MobileNavKey) => {
    setActiveMobileItem(key)
    console.log(`Program builder mobile navigation: ${key}`)

    if (key === 'home') navigate(ROUTES.DASHBOARD)
    if (key === 'build') navigate(ROUTES.CREATE_PROGRAM)
    if (key === 'schedule') console.log('Schedule route needs a selected program id before routing')
    if (key === 'profile') console.log('Profile route is not registered yet')
  }

  const handleTopTabChange = (tab: TopNavKey) => {
    setActiveTopTab(tab)
    setIsLibraryOpen(tab === 'library')
    console.log(`Program builder top navigation: ${tab}`)
  }

  const handleNewProgram = () => {
    setActiveSidebarItem('programs')
    console.log('Program builder navigation: new_program')
    navigate(ROUTES.CREATE_PROGRAM)
  }

  const handleAddWeek = () => {
    const nextWeek = `WEEK_${String(weeks.length + 1).padStart(2, '0')}`
    setWeeks((currentWeeks) => [...currentWeeks, nextWeek])
    setActiveWeek(weeks.length)
    console.log(`Program builder added ${nextWeek}`)
  }

  return (
    <div className="bg-background text-on-background font-body-md overflow-hidden">
      <ProgramBuilderTopNav
        activeTab={activeTopTab}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onTabChange={handleTopTabChange}
      />
      <ProgramBuilderSidebar activeItem={activeSidebarItem} onNavigate={handleSidebarNavigate} onNewProgram={handleNewProgram} />

      <main className="lg:ml-64 pt-16 h-screen flex flex-col bg-background">
        <ProgramBuilderToolbar
          onSaveDraft={() => console.log('Program builder action: save draft')}
          onDeploy={() => console.log('Program builder action: deploy')}
        />
        <div className="flex-1 flex overflow-hidden">
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
      <ProgramBuilderMobileNav activeItem={activeMobileItem} onNavigate={handleMobileNavigate} />
    </div>
  )
}
