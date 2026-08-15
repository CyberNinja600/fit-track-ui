import { mobileNavItems, type MobileNavKey } from './programBuilderData'

interface ProgramBuilderMobileNavProps {
  activeItem: MobileNavKey
  onNavigate: (key: MobileNavKey) => void
}

export const ProgramBuilderMobileNav = ({ activeItem, onNavigate }: ProgramBuilderMobileNavProps) => (
  <nav className="fixed bottom-0 w-full lg:hidden z-50 bg-surface/80 backdrop-blur-md border-t border-outline-variant flex justify-around items-center h-16 px-4">
    {mobileNavItems.map((item) => (
      <button
        key={item.key}
        type="button"
        onClick={() => onNavigate(item.key)}
        className={`flex flex-col items-center justify-center font-label-sm text-label-sm cursor-pointer active:bg-surface-container-high p-2 rounded transition-all ${
          activeItem === item.key ? 'text-primary' : 'text-on-surface-variant'
        }`}
      >
        <span className="material-symbols-outlined">{item.icon}</span>
        {item.label}
      </button>
    ))}
  </nav>
)
