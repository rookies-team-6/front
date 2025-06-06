import { create } from 'zustand'

type Question = {
  id: number
  question: string
  canSolve: boolean
}

type QuestionStore = {
  questions: Question[]
  setQuestions: (newQuestions: Question[]) => void
  reset: () => void
}


export const useQuestionStore = create<QuestionStore>((set) => ({
  questions: [],
  setQuestions: (newQuestions) => set({ questions: newQuestions }),
  reset: () => set({ questions: [] }),
}))