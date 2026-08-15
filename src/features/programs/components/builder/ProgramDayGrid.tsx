import { useState } from 'react'
import type { BuilderDay, BuilderTask, SlotKind } from './programBuilderData'

interface ProgramDayGridProps {
  days: BuilderDay[]
}

const getTaskAccentClassName = (kind: BuilderTask['kind']) => {
  if (kind === 'nutrition') return 'text-tertiary'
  return 'text-primary'
}

const getTaskBorderClassName = (kind: BuilderTask['kind']) => {
  if (kind === 'nutrition') return 'hover:border-tertiary'
  return 'hover:border-primary'
}

const TaskCard = ({ task }: { task: BuilderTask }) => {
  const [isDragging, setIsDragging] = useState(false)

  if (task.kind === 'rest') {
    return (
      <div className="bg-surface/50 p-3 border border-surface-stroke border-dashed rounded-lg flex items-center justify-center h-24 grayscale">
        <span className="font-data-mono text-[10px] text-outline">{task.title}</span>
      </div>
    )
  }

  return (
    <div
      className={`bg-surface p-3 border border-surface-stroke rounded-lg group ${getTaskBorderClassName(
        task.kind,
      )} transition-all cursor-grab active:cursor-grabbing ${isDragging ? 'drag-preview -rotate-1 scale-[0.98]' : ''}`}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      <div className="flex justify-between items-start mb-2">
        <span className={`font-label-sm uppercase text-[10px] ${getTaskAccentClassName(task.kind)}`}>
          {task.kind === 'nutrition' ? 'Nutrition' : 'Workout'}
        </span>
        <span className="material-symbols-outlined text-[16px] text-on-surface-variant">more_vert</span>
      </div>
      <h4 className="font-headline-lg-mobile text-sm mb-1">{task.title}</h4>
      <p className="text-on-surface-variant text-[11px] font-data-mono">{task.meta}</p>
      {task.tags && (
        <div className="mt-3 flex gap-1">
          {task.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-surface-container-highest text-[9px] rounded font-data-mono">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

const DropSlot = ({ kind }: { kind: SlotKind }) => {
  const isDiet = kind === 'diet'

  return (
    <button
      type="button"
      className={`w-full border-2 border-dashed border-outline-variant/30 rounded-lg p-4 flex flex-col items-center justify-center gap-2 transition-all cursor-pointer group ${
        isDiet ? 'hover:border-tertiary/50 hover:bg-tertiary/5' : 'hover:border-primary/50 hover:bg-primary/5'
      }`}
    >
      <span className={`material-symbols-outlined text-outline ${isDiet ? 'group-hover:text-tertiary' : 'group-hover:text-primary'}`}>
        {isDiet ? 'restaurant' : 'add_circle'}
      </span>
      <span className={`font-data-mono text-[10px] text-outline ${isDiet ? 'group-hover:text-tertiary' : 'group-hover:text-primary'}`}>
        {isDiet ? 'ASSIGN_DIET' : 'ASSIGN_TASK'}
      </span>
    </button>
  )
}

export const ProgramDayGrid = ({ days }: ProgramDayGridProps) => (
  <div className="flex-1 overflow-x-auto overflow-y-hidden custom-scrollbar bg-background flex flex-col">
    <div className="flex h-full min-w-max p-gutter gap-4">
      {days.map((day) => (
        <div key={day.id} className={`w-72 flex flex-col h-full ${day.faded ? 'opacity-80' : ''}`}>
          <div className="mb-4 flex items-center justify-between px-2">
            <span className="font-data-mono text-xs font-bold text-on-surface-variant tracking-widest uppercase">
              {day.label}
            </span>
            <span
              className={`text-[10px] font-data-mono bg-surface-container-highest px-1.5 py-0.5 rounded ${
                day.faded ? 'text-on-surface-variant' : 'text-primary'
              }`}
            >
              {day.dayNumber}
            </span>
          </div>
          <div className="flex-1 bg-surface-container-low border border-surface-stroke rounded-xl p-3 space-y-3 overflow-y-auto custom-scrollbar shadow-sm">
            {day.tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
            {day.slots.map((slot, index) => (
              <DropSlot key={`${day.id}-${slot}-${index}`} kind={slot} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)
