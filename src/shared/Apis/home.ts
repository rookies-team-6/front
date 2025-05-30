import { devServerInstance } from "@shared/apiInstance";

const postAnswerData = async(query: string) => {
    const res = await devServerInstance.post(
        "/api/answer",
        {
            data:{
                query: query
            }
        }
    )

    // const results = res.data.results;
    console.log(res.data)
}

const getAllQuestionData = async() => {
    const res = await devServerInstance.get(
        "/api/questions"
    )

    return res.data

}

const getQuestionData = async(id: number) => {
    const res = await devServerInstance.get(
        `/api/question/${id}`
    )

    return res.data

}

export {postAnswerData, getAllQuestionData, getQuestionData}