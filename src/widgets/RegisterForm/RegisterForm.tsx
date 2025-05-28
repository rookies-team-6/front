import styled from "styled-components";
import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { postRegisterData } from "@shared/Apis/auth";


// 최상위 Container 스타일 정의
const Container = styled.div`
  width: 57.22%;
  height: 80.47%;
  margin: auto;
  background-color: #ffffff;
`;

const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 40px;
  color: #000000;
  text-align: center;
`;

// 폼 스타일
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

// 라벨
const Label = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  color: #000000;
`;

// 입력 필드
const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #999999;
  border-radius: 10px;
`;

// 버튼
const Button = styled.button`
  padding: 10px 0;
  font-size: 16px;
  color: #ffffff;
  background-color: #ffaf2e;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const NavigationText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #000000;
  text-align: center;
`;

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  // 입력 필드 변경 핸들러
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 유효성 검사
  const validate = () => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "사용자 이름을 입력하세요.";
    }

    if (!formData.email) {
      newErrors.email = "이메일을 입력하세요.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "유효하지 않은 이메일 형식입니다.";
    }

    if (!formData.password) {
      newErrors.password = "비밀번호를 입력하세요.";
    } else if (formData.password.length < 6) {
      newErrors.password = "비밀번호는 최소 6자 이상이어야 합니다.";
    }

    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // 유효성 검사 통과 여부 확인
    if (validate()) {
      try {
        // 서버로 데이터 전송
        await postRegisterData(formData);
        alert("회원가입이 완료되었습니다!");
        setFormData({
          name: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }); // 폼 초기화
      } catch (error) {
        console.error("서버 오류:", error);
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } else {
      alert("입력값을 확인해주세요.");
    }
  };


  return (
    <Container>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <Label htmlFor="passwordConfirm">Password Confirm</Label>
        <Input
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          value={formData.passwordConfirm}
          onChange={handleChange}
        />
        {errors.passwordConfirm && (
          <p style={{ color: "red" }}>{errors.passwordConfirm}</p>
        )}

        <Button type="submit">Sign up</Button>
      </Form>
      <NavigationText>
        <Link to="/login">로그인으로 돌아가기</Link>
      </NavigationText>
    </Container>
  );
};

export default RegisterForm;
