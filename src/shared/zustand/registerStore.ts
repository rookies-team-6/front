import {create} from "zustand";

interface RegisterState {
    employeeNumber: string
    employeeName: string
    setEmployeeNumber: (val: string) => void
    setEmployeeName: (val: string) => void
}

const useRegisterStore = create<RegisterState>((set)=>({
    employeeNumber: '',
    employeeName: '',
    setEmployeeNumber: (val) => set({employeeNumber: val}),
    setEmployeeName: (val) => set({employeeName: val})
}))

export default useRegisterStore;