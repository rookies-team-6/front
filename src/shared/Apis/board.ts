import { devServerInstance } from "@shared/apiInstance";


const getAllPosts = async (page: number) => {
  const res = await devServerInstance.get(`/api/board/?page=${page}&size=10`);

  return res.data;
};


const getPostDetail = async(id: number) =>{
  const res = await devServerInstance.get(`/api/board/${id}`)

  return res.data;
}


export {getAllPosts, getPostDetail}