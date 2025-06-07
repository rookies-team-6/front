import { devServerInstance } from "@shared/apiInstance";

interface EmployeeInfo {
    employeeNumber: string;
    employeeName: string;
}

const getEmployeeInfo = async (info: EmployeeInfo): Promise<any> => {
    const res = await devServerInstance.get("/auth/verify", {
        params: {
            username: info.employeeName,
            employeeNum: info.employeeNumber,
        },
    });

    return res.data;
};

export { getEmployeeInfo };
