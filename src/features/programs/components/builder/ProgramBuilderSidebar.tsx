import { sidebarFooterItems, sidebarItems, type BuilderNavKey } from './programBuilderData'

interface ProgramBuilderSidebarProps {
  activeItem: BuilderNavKey
  onNavigate: (key: BuilderNavKey) => void
  onNewProgram: () => void
}

export const ProgramBuilderSidebar = ({ activeItem, onNavigate, onNewProgram }: ProgramBuilderSidebarProps) => {
  const itemClassName = (key: BuilderNavKey) =>
    activeItem === key
      ? 'text-primary bg-primary-container/10 border-l-2 border-primary pl-4 py-3 font-data-mono text-data-mono uppercase transition-all flex items-center gap-3 cursor-pointer rounded'
      : 'text-on-surface-variant pl-4 py-3 font-data-mono text-data-mono uppercase hover:text-primary hover:bg-surface-container-highest transition-all flex items-center gap-3 cursor-pointer rounded'

  return (
    <aside className="fixed left-0 top-0 h-full w-64 hidden lg:flex flex-col bg-surface-container border-r border-outline-variant pt-24 pb-8 flat no shadows">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[20px]">architecture</span>
          </div>
          <div>
            <h2 className="font-display-lg text-[18px] font-bold text-primary leading-none">BIO_KERNEL</h2>
            <p className="font-data-mono text-[10px] text-on-surface-variant opacity-60">V2.4.0_STABLE</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {sidebarItems.map((item) => (
          <button key={item.key} type="button" onClick={() => onNavigate(item.key)} className={itemClassName(item.key)}>
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="px-4 mt-auto space-y-1">
        <button
          type="button"
          onClick={onNewProgram}
          className="w-full bg-primary text-on-primary font-bold py-3 rounded-lg mb-4 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-[0.98]"
        >
          <span className="material-symbols-outlined">add</span>
          NEW_PROGRAM
        </button>
        {sidebarFooterItems.map((item) => (
          <button key={item.key} type="button" onClick={() => onNavigate(item.key)} className={itemClassName(item.key)}>
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  )
}
