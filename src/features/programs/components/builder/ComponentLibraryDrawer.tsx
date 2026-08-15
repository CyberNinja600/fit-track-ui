import type { LibraryItem } from './programBuilderData'

interface ComponentLibraryDrawerProps {
  workouts: LibraryItem[]
  nutrition: LibraryItem[]
  isOpen: boolean
  onFilterClick: () => void
}

const LibraryCard = ({ item }: { item: LibraryItem }) => (
  <div
    className={`bg-surface-elevated p-3 border border-surface-stroke rounded cursor-grab transition-all ${
      item.color === 'tertiary' ? 'hover:border-tertiary' : 'hover:border-primary'
    }`}
  >
    <div className="flex items-center gap-2 mb-2">
      <span className={`material-symbols-outlined text-[16px] ${item.color === 'tertiary' ? 'text-tertiary' : 'text-primary'}`}>
        {item.icon}
      </span>
      <span className="font-label-sm text-xs">{item.title}</span>
    </div>
    {item.progress && (
      <div className="h-1 bg-surface-container rounded overflow-hidden">
        <div className={`h-full bg-primary ${item.progress}`} />
      </div>
    )}
    {item.meta && <p className="text-[10px] text-on-surface-variant">{item.meta}</p>}
  </div>
)

export const ComponentLibraryDrawer = ({ workouts, nutrition, isOpen, onFilterClick }: ComponentLibraryDrawerProps) => (
  <div
    className={`fixed right-0 top-16 bottom-16 w-80 bg-surface-container border-l border-outline-variant z-40 transform transition-transform duration-300 flex flex-col ${
      isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
    }`}
  >
    <div className="p-6 border-b border-outline-variant flex items-center justify-between">
      <h3 className="font-data-mono text-xs font-bold text-primary tracking-widest">COMPONENT_LIB</h3>
      <button type="button" onClick={onFilterClick} className="material-symbols-outlined text-[18px] text-on-surface-variant">
        filter_list
      </button>
    </div>
    <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
      <div>
        <span className="text-[10px] font-data-mono text-on-surface-variant opacity-50 block mb-3">WORKOUTS_V3</span>
        <div className="grid grid-cols-1 gap-2">
          {workouts.map((item) => (
            <LibraryCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div>
        <span className="text-[10px] font-data-mono text-on-surface-variant opacity-50 block mb-3">NUTRITION_PROFILES</span>
        <div className="grid grid-cols-1 gap-2">
          {nutrition.map((item) => (
            <LibraryCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-8 border border-outline-variant/20 rounded-lg p-4 bg-surface-container-lowest overflow-hidden relative">
        <span className="absolute top-2 right-2 font-data-mono text-[8px] text-on-surface-variant opacity-30">SYS_MONITOR</span>
        <h4 className="text-[10px] font-data-mono text-on-surface-variant mb-4">VOLUME_ACCUMULATION</h4>
        <div className="flex items-end gap-1 h-20">
          <div className="flex-1 bg-primary/20 h-[30%] rounded-t-sm" />
          <div className="flex-1 bg-primary/40 h-[45%] rounded-t-sm" />
          <div className="flex-1 bg-primary/60 h-[60%] rounded-t-sm" />
          <div className="flex-1 bg-primary/80 h-[85%] rounded-t-sm" />
          <div className="flex-1 bg-primary h-[95%] rounded-t-sm shadow-[0_0_10px_rgba(162,201,255,0.3)]" />
          <div className="flex-1 bg-primary/20 h-[20%] rounded-t-sm" />
          <div className="flex-1 bg-primary/20 h-[10%] rounded-t-sm" />
        </div>
      </div>
    </div>
  </div>
)
