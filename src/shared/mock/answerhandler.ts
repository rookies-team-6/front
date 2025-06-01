interface AnswerSearch {
    id: number;
    content: string;
    questionId?: number;
}


    http.get('/api/answer', () => {
    const answers: AnswerSearch[] = [
        { id: 1, content: '답변 정리 1' },
        { id: 2, content: '답변 정리 2' },
        ];
        return HttpResponse.json(answers, {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }),
