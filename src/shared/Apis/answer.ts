import { serverInstance } from "@shared/apiInstance";


const postAnswerData = async(questionId:number, userAnswer: string) => {
    return await serverInstance.post(
        "/api/record",
        {
            questionId: questionId,
            userAnswer: userAnswer
        }
    )

}

const postGptResult = async() => {
    return await serverInstance.post(
        "/api/chat/gpt"
    )
}


const getMyQuestion = async() => {
    return await serverInstance.get(
        '/api/questions/me'
    )
    
}

export {getMyQuestion, postAnswerData, postGptResult}