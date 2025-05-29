import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoImage from "@shared/assets/icon/logo.png";
import theme from "@app/styles/theme";
import { getEmployeeInfo } from "@shared/Apis/emregister";
import type { EmployeeInfo } from "@shared/Apis/emregister";
import { useNavigate } from "react-router-dom";

const EmRegister = () => {
    const [employee, setEmployee] = useState<EmployeeInfo>({ employeeNumber: "" });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getEmployeeInfo();
            setEmployee(data);
        };
        fetchData();
    }, []);

    const handleSearch = () => {
        if (!employee.employeeNumber) {
            alert("사원이 아닙니다.");
            return;
        }
        alert("확인 완료!");
        navigate("/register"); // ✅ 회원가입 페이지로 이동
    };

    return (
        <PageWrapper>
            <Container>
                <Logo src={logoImage} alt="제대로 보안니 로고" />
                <Title>사원번호 조회</Title>
                <InputGroup>
                    <Label htmlFor="employee-number">사원 번호</Label>
                    <Input
                        id="employee-number"
                        type="text"
                        placeholder="사원 번호"
                        value={employee.employeeNumber}
                        onChange={(e) =>
                            setEmployee({ ...employee, employeeNumber: e.target.value })
                        }
                    />
                    <Button onClick={handleSearch}>조회하기</Button>
                </InputGroup>
            </Container>
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${theme.yellow.y100};
`;

const Logo = styled.img`
    width: 200%;
    max-width: 200px;
`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
`;

const Container = styled.div`
    width: 120%;
    height: 80%;
    background-color: ${theme.yellow.y100};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 40px 20px;
    box-sizing: border-box;
    transform: translateY(-5%);
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 120%;
    max-width: 300px;
    margin-bottom: 25px;
    align-items: flex-start;
`;

const Label = styled.label`
    font-size: 13px;
    color: black;
    margin-bottom: 3px;
    text-align: left;
    width: 100%;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 0;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 12px;
    box-sizing: border-box;
`;

const Button = styled.button`
    width: 100%;
    margin-top: 30px;
    padding: 10px 15px;
    background-color: ${theme.orange.o500};
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: Regular;
    font-size: 12px;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        background-color: #e0a800;
    }
`;

export default EmRegister;
