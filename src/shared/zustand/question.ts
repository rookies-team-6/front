import { create } from 'zustand'

type Question = {
  id: number
  question: string
  canSolve: boolean
}

type QuestionStore = {
  question: Question
  setQuestion: (newQuestion: Question) => void
}

const initialQuestion: Question = {
  id: 0,
  question: '',
  canSolve: false,
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  question: initialQuestion,
  setQuestion: (newQuestion) => set({ question: newQuestion })
}))