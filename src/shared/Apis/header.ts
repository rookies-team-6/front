import { serverInstance } from "@shared/apiInstance";

interface HeaderInfo {
  userId: number;
  name: string;
  employeeType: string;
  personalScore: string;
  groupNum: number;
}

const getHeaderInfo = async (): Promise<HeaderInfo> => {
  const res = await serverInstance.get("/api/home");
  return res.data;
};

export {getHeaderInfo}
