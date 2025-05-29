import { http, HttpResponse } from "msw";

interface EmployeeInfo {
  employeeNumber: string;
}

export const emHandler = [
  http.get("/api/emregister", () => {
    const mockEmployee: EmployeeInfo = {
      employeeNumber: "12345678"
    };

    return HttpResponse.json(mockEmployee, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  })
];
