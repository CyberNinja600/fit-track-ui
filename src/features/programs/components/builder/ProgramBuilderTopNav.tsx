import type { TopNavKey } from './programBuilderData'

interface ProgramBuilderTopNavProps {
  activeTab: TopNavKey
  searchValue: string
  onSearchChange: (value: string) => void
  onTabChange: (tab: TopNavKey) => void
}

export const ProgramBuilderTopNav = ({ activeTab, searchValue, onSearchChange, onTabChange }: ProgramBuilderTopNavProps) => {
  const tabs: Array<{ key: TopNavKey; label: string }> = [
    { key: 'builder', label: 'BUILDER' },
    { key: 'library', label: 'LIBRARY' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant flat no shadows">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full max-w-max-width mx-auto">
        <div className="flex items-center gap-4">
          <span className="font-display-lg text-headline-lg-mobile md:text-display-lg font-black tracking-tighter text-primary">
            FitTrack
          </span>
          <div className="hidden md:flex gap-6 ml-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => onTabChange(tab.key)}
                className={`font-label-sm cursor-pointer hover:bg-surface-container-highest transition-colors px-3 py-1 rounded ${
                  activeTab === tab.key ? 'text-primary font-bold' : 'text-on-surface-variant'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
              search
            </span>
            <input
              className="bg-surface-container-low border border-outline-variant rounded-lg pl-10 pr-4 py-1.5 text-label-sm focus:border-primary focus:ring-0 w-64 transition-all"
              placeholder="Search components..."
              type="text"
              value={searchValue}
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </div>
          <button
            type="button"
            className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-highest p-2 rounded-full transition-colors active:scale-95"
          >
            notifications
          </button>
          <button
            type="button"
            className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-highest p-2 rounded-full transition-colors active:scale-95"
          >
            settings
          </button>
          <img
            alt="Trainer Profile"
            className="w-8 h-8 rounded-full border border-primary/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAERnc6TDGyPN8qi7hX9aq1FsgJLGofHi8RTsVc1BKG1UlwVrsuw47O-vmLAtfPuR-IuB19mZRJhNHOMvKTps7oY_TIGTmJMGlvx_glbK0Ac1OdMEr2FWhL7lMVqbB6ZHWOLa5B_fxzTn9cNZYCugI4qLu6fAlHeM-x0ixgJxHcJfRW85pDGhZpiy9RP9RXqy9rSv5t_FaIrRyu7cYtNS2BRBV1x69u0wgPmj9qwgCPS1InQK6E9raPWI5Jnx4gbTa7XsyOUv3w7Ls"
          />
        </div>
      </div>
    </header>
  )
}
