interface ProgramBuilderToolbarProps {
  onSaveDraft: () => void
  onDeploy: () => void
}

export const ProgramBuilderToolbar = ({ onSaveDraft, onDeploy }: ProgramBuilderToolbarProps) => (
  <section className="h-20 border-b border-outline-variant flex items-center justify-between px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
    <div>
      <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg flex items-center gap-3">
        Program Builder
        <span className="text-on-surface-variant font-data-mono text-sm border border-outline-variant px-2 py-0.5 rounded">
          ID: BK-772
        </span>
      </h1>
      <p className="text-on-surface-variant text-label-sm font-medium">Hypertrophy Block A: Phase 1</p>
    </div>
    <div className="flex gap-3">
      <button
        type="button"
        onClick={onSaveDraft}
        className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-label-sm font-bold hover:bg-surface-container-high transition-colors"
      >
        <span className="material-symbols-outlined text-[18px]">save</span>
        SAVE_DRAFT
      </button>
      <button
        type="button"
        onClick={onDeploy}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg text-label-sm font-bold hover:opacity-90 transition-opacity"
      >
        <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
        DEPLOY
      </button>
    </div>
  </section>
)
