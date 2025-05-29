import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoImage from "@shared/assets/icon/logo.png";
import theme from "@app/styles/theme";
import { getEmployeeInfo } from "@shared/Apis/emregister";
import type { EmployeeInfo } from "@shared/Apis/emregister";

const EmRegister = () => {
    const [employee, setEmployee] = useState<EmployeeInfo>({ employeeNumber: "" });

    useEffect(() => {
        const fetchData = async () => {
            const data = await getEmployeeInfo();
            setEmployee(data);
        };
        fetchData();
    }, []);

    const handleSearch = () => {
        if (!employee.employeeNumber) {
            alert("사원번호를 입력해주세요.");
            return;
        }
        alert(`사원번호 ${employee.employeeNumber} 조회 중...`);
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
                </InputGroup>
                <Button onClick={handleSearch}>조회하기</Button>
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
    width: 25%;
    max-width: 100px;
    margin-bottom: 5%;
`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
`;

const Container = styled.div`
    width: 57.22%;
    height: 80.47%;
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
    width: 80%;
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
    width: 80%;
    max-width: 300px;
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
