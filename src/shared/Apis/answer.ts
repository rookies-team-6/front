import { serverInstance } from "@shared/apiInstance";



const postAnswerData = async(query: string) => {
    const res = await serverInstance.post(
        "/api/chat/gpt",
        {
            data:{
                query: query
            }
        }
    )

    // const results = res.data.results;
    console.log(res.data)
}

const getAnswerData = async(id: number) => {
    const res = await serverInstance.get(
        `/api/answer/${id}`
    )

    return res.data

}



const getMyQuestion = async() => {
    return await serverInstance.get(
        '/api/questions/me'
    )

    
}

export {getAnswerData, getMyQuestion, postAnswerData}