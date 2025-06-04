import { devServerInstance } from "@shared/apiInstance";

const getAnswerData = async(id: number) => {
    const res = await devServerInstance.get(
        `/api/answer/${id}`
    )

    return res.data

}


const getQuestionData = async(id: number) => {
    const res = await devServerInstance.get(
        `/api/question/${id}`
    )

    return res.data

}

export {getAnswerData, getQuestionData}