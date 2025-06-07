import { serverInstance } from "@shared/apiInstance";

// const dataFilter = (data) => {
//     if(data.success){

//     }else{

//     }
// }


const getAnswerData = async(id: number) => {
    const res = await serverInstance.get(
        `/api/answer/${id}`
    )

    return res.data

}


// const getQuestionData = async(id: number) => {
//     const res = await serverInstance.get(
//         `/api/question/${id}`
//     )

//     return res.data

// }


const getAllQuestionsData = async() => {
    return await serverInstance.get(
        '/api/questions/all'
    )

    
}

export {getAnswerData, getAllQuestionsData}