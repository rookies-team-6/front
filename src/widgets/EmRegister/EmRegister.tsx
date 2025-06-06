import styled from "styled-components";
import logoImage from "@shared/assets/icon/logo.png";
import theme from "@app/styles/theme";
import { getEmployeeInfo } from "@shared/Apis/emregister";
import { useNavigate } from "react-router-dom";
import useRegisterStore from "@shared/zustand/registerStore";

const EmRegister = () => {
  const { employeeNumber, employeeName, setEmployeeNumber, setEmployeeName } =
    useRegisterStore();
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!employeeNumber || !employeeName) {
      alert("사원 번호와 이름을 모두 입력해주세요.");
      return;
    }

    try {
      const res = await getEmployeeInfo({ employeeName, employeeNumber });

      if (res.success) {
        alert("확인 완료!");
        navigate("/register", {
          state: {
            employeeNumber,
            employeeName,
          },
        });
      } else {
        alert(res.error?.message || "조회 실패");
      }
    } catch (error: any) {
      const message = error?.response?.data?.error?.message;

      if (message === "존재하지 않는 사번이거나 가입 완료된 사번입니다.") {
        alert("이미 가입된 사번입니다. 로그인해주세요.");
      } else {
        alert("존재하지 않는 사번입니다.");
      }

      console.error("사원 조회 실패:", error);
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
            value={employeeNumber}
            onChange={(e) => setEmployeeNumber(e.target.value)}
          />
          <Label htmlFor="employee-name">사원 이름</Label>
          <Input
            id="employee-name"
            type="text"
            placeholder="사원 이름"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
          <Button onClick={handleSearch}>조회하기</Button>
        </InputGroup>
      </Container>
    </PageWrapper>
  );
};

// 스타일 컴포넌트

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
  justify-content: center;
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
