import { serverInstance } from "@shared/apiInstance";

interface BoardCreateRequestType {
    title: string;
    contents: string;
}

interface PutBoardRequestType {
    title: string;
    contents: string;
}

const getAllPosts = async (page: number) => {
    const res = await serverInstance.get('/api/board/?page=${page}&size=10');

    return res.data;
};

const getPostDetail = async (id: number) => {
    const res = await serverInstance.get('/api/board/${id}');

    return res.data;
};

const getTotalPages = async () => {
    const res = await serverInstance.get("/board/total-pages");
    return res.data;
};

const postBoardCreate = async (body: BoardCreateRequestType) => {
    const res = await serverInstance.post("/board", body);
};

const deleteBoard = async (id: number) => {
    const res = await serverInstance.delete('/board/${id}');
};

const putBoard = async (id: number, body: PutBoardRequestType) => {
    const res = await serverInstance.put('/board/${id}, body');
};

export { getAllPosts, getPostDetail, getTotalPages, postBoardCreate, deleteBoard, putBoard };