import { devServerInstance } from "@shared/apiInstance";

interface HeaderInfo {
  name: string;
  type: string;
  score: string;
}

const getHeaderInfo = async (): Promise<HeaderInfo> => {
  const res = await devServerInstance.get("/api/header");
  return res.data;
};

export {getHeaderInfo}
