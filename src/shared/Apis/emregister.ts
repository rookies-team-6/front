import { devServerInstance } from "@shared/apiInstance";

interface EmployeeInfo {
  employeeNumber: string;
  employeeName: string;
}

const getEmployeeInfo = async (): Promise<EmployeeInfo> => {
    const res = await devServerInstance.get("/api/emregister");
    return res.data;
};

export {getEmployeeInfo}