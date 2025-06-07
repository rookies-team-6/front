import { create } from "zustand";

interface UserInfo {
  userId: number;
  name: string;
  groupNum: number;
  employeeType: string;
  personalScore: number;
}

interface GroupScore {
  groupNum: number;
  groupScore: number;
}

interface HomeStoreState {
  user: UserInfo | null;
  groupScores: GroupScore[];
  selectedGroupNum: number | null; 
  setUser: (user: UserInfo) => void;
  setGroupScores: (scores: GroupScore[]) => void;
  setSelectedGroupNum: (num: number) => void; 
}

const useHomeStore = create<HomeStoreState>((set) => ({
  user: null,
  groupScores: [],
  selectedGroupNum: null,
  setUser: (user) => set({ user }),
  setGroupScores: (scores) => set({ groupScores: scores }),
  setSelectedGroupNum: (num) => set({ selectedGroupNum: num }),
}));

export default useHomeStore;