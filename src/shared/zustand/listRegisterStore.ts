import { create } from 'zustand';

interface Answer {
    id: number;
    title: string;
    content: string;
    date: string;
    score: number;
}

interface ListRegisterState {
    answers: Answer[];
    setAnswers: (questions: Answer[]) => void;
}

const useListRegisterStore = create<ListRegisterState>((set) => ({
    answers: [],
    setAnswers: (answers) => set({ answers }),
}));

export default useListRegisterStore;