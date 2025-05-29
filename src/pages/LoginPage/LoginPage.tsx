import React from "react";
import AuthBackground from "@shared/ui/AuthBackground";
import LoginForm from "@widgets/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <AuthBackground>
            <LoginForm />
        </AuthBackground>
    )
}

export default LoginPage;