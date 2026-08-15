import { create } from 'zustand'
import type { Program } from '../types'

interface ProgramState {
  programs: Program[]
  selectedProgram: Program | null
  isLoading: boolean
  error: string | null
  setPrograms: (programs: Program[]) => void
  setSelectedProgram: (program: Program | null) => void
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  addProgram: (program: Program) => void
  updateProgram: (program: Program) => void
  removeProgram: (id: string) => void
}

export const useProgramStore = create<ProgramState>((set) => ({
  programs: [],
  selectedProgram: null,
  isLoading: false,
  error: null,

  setPrograms: (programs: Program[]) => {
    set({ programs })
  },

  setSelectedProgram: (program: Program | null) => {
    set({ selectedProgram: program })
  },

  setLoading: (isLoading: boolean) => {
    set({ isLoading })
  },

  setError: (error: string | null) => {
    set({ error })
  },

  addProgram: (program: Program) => {
    set((state) => ({
      programs: [...state.programs, program],
    }))
  },

  updateProgram: (program: Program) => {
    set((state) => ({
      programs: state.programs.map((p) => (p.id === program.id ? program : p)),
      selectedProgram: state.selectedProgram?.id === program.id ? program : state.selectedProgram,
    }))
  },

  removeProgram: (id: string) => {
    set((state) => ({
      programs: state.programs.filter((p) => p.id !== id),
      selectedProgram: state.selectedProgram?.id === id ? null : state.selectedProgram,
    }))
  },
}))
