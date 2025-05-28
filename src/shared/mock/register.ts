interface RegisterFormContent {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}


http.post('/api/registerforms', async({request}) => {
            const body = (await request.json()) as RegisterFormContent;
    
            return HttpResponse.json(body, {
                status: 201,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),