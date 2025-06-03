import { create } from "zustand";

interface TeamState {
  teamDict: { [key: string]: string }; // teamNumber → teamDict
  setTeamDict: (val: { [key: string]: string }) => void;
}

const useTeamStore = create<TeamState>((set) => ({
  teamDict: {}, // 초기값은 빈 객체
  setTeamDict: (val) => set({ teamDict: val }),
}));

export default useTeamStore;