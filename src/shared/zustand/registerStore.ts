import {create} from "zustand";

interface RegisterState {
    employeeNumber: string;
    employeeName: string;
}

const useRegisterStore = create<RegisterState>((set)=>({
    employeeNumber: '',
    employeeName: '',
    setEmployeeNumber: (val) => set({employeeNumber: val}),
    setemployeeName: (val) => set({employeeName: val})
}))

export default useRegisterStore;