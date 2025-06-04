import { devServerInstance } from "@shared/apiInstance";
import axios from "axios";


const getAllPosts = async () => {
  const res = await devServerInstance.get("/api/board");

  return res.data;
};


export {getAllPosts}