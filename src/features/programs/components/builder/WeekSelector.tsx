interface WeekSelectorProps {
  weeks: string[]
  activeWeek: number
  onWeekChange: (weekIndex: number) => void
  onAddWeek: () => void
}

export const WeekSelector = ({ weeks, activeWeek, onWeekChange, onAddWeek }: WeekSelectorProps) => (
  <aside className="h-full min-h-0 w-16 overflow-y-auto border-r border-outline-variant bg-surface-container-low custom-scrollbar md:w-48">
    <div className="space-y-2 p-4">
      {weeks.map((week, index) => {
        const isActive = activeWeek === index

        return (
          <button
            key={week}
            type="button"
            onClick={() => onWeekChange(index)}
            className={
              isActive
                ? 'w-full flex items-center justify-between p-3 rounded-lg border border-primary bg-primary/5 text-primary group'
                : 'w-full flex items-center justify-between p-3 rounded-lg border border-transparent text-on-surface-variant hover:bg-surface-container-high group transition-all'
            }
          >
            <span className="hidden md:inline font-data-mono text-sm">{week}</span>
            <span className="md:hidden font-data-mono text-sm">W{index + 1}</span>
            <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity">
              drag_indicator
            </span>
          </button>
        )
      })}
      <button
        type="button"
        onClick={onAddWeek}
        className="w-full flex items-center justify-center p-3 rounded-lg border border-dashed border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all"
      >
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  </aside>
)
