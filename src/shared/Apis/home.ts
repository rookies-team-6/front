import { devServerInstance } from "@shared/apiInstance";

const postQuestionData = async(query: string) => {
    const res = await devServerInstance.post(
        "/api/questions",
        {
            data:{
                query: query
            }
        }
    )

    // const results = res.data.results;
    console.log(res.data)
}

export {postQuestionData}