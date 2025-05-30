import React, { useState } from "react";
import styled from "styled-components";
import logoImage from "@shared/assets/icon/logo.png";
import theme from "@app/styles/theme";
import { getEmployeeInfo } from "@shared/Apis/emregister";
import type { EmployeeInfo } from "@shared/Apis/emregister";
import { useNavigate } from "react-router-dom";

const EmRegister = () => {
    const [inputData, setInputData] = useState<EmployeeInfo>({
        employeeNumber: "",
        employeeName: ""
    });
    const navigate = useNavigate();

    const handleSearch = async () => {
        if (!inputData.employeeNumber || !inputData.employeeName) {
            alert("사원 번호와 이름을 모두 입력해주세요.");
            return;
        }

        try {
            const data = await getEmployeeInfo(); // 💡 서버에서 가져온 mock data
            if (
                inputData.employeeNumber === data.employeeNumber &&
                inputData.employeeName === data.employeeName
            ) {
                alert("확인 완료!");
                navigate("/register", {
                    state: {
                        employeeNumber: inputData.employeeNumber,
                        employeeName: inputData.employeeName,
                    },
                });
            } else {
                alert("사원이 아닙니다.");
            }
        } catch (error) {
            console.error("사원 조회 실패:", error);
            alert("오류가 발생했습니다.");
        }
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
                        value={inputData.employeeNumber}
                        onChange={(e) =>
                            setInputData({ ...inputData, employeeNumber: e.target.value })
                        }
                    />
                    <Label htmlFor="employee-name">사원 이름</Label>
                    <Input
                        id="employee-name"
                        type="text"
                        placeholder="사원 이름"
                        value={inputData.employeeName}
                        onChange={(e) =>
                            setInputData({ ...inputData, employeeName: e.target.value })
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
    margin-bottom: 20px;
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
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 12px;
    box-sizing: border-box;
`;

const Button = styled.button`
    width: 100%;
    margin-top: 15px;
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
