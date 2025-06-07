// Header.tsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoImage from "@shared/assets/icon/logo.png";
import { getHeaderInfo } from "@shared/Apis/header";
import { UserModal } from "@widgets/Modal/UserModal/UserModal";
import { useNavigate } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import theme from "@app/styles/theme";

interface HeaderInfo {
  userId: number;
  name: string;
  employeeType: string;
  personalScore: string;
  groupNum: number;
}

const Header = () => {
  const [user, setUser] = useState<HeaderInfo>({
    userId: 0,
    name: "",
    employeeType: "",
    personalScore: "0",
    groupNum: 0,
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getHeaderInfo();
        const data = res.data.user;

        setUser({
          userId: data.userId,
          name: data.name,
          employeeType: data.employeeType,
          personalScore: `점수: ${data.personalScore}`,
          groupNum: data.groupNum,
        });
      } catch (e) {
        console.error("헤더 정보 로딩 실패", e);
      }
    };
    fetchData();
  }, []);

  return (
    <HeaderWrapper>
      <Logo src={logoImage} alt="로고" onClick={() => navigate("/home")} />
      <UserInfo>
        <LogoutButton onClick={() => alert("로그아웃 처리 예정")}>로그아웃</LogoutButton>
        <InfoText>{user.name}</InfoText>
        <InfoText>{user.employeeType}</InfoText>
        <InfoText>{user.personalScore}</InfoText>
        <ButtonWrapper>
          <StyledChevron $active={isModalOpen} onClick={() => setModalOpen(!isModalOpen)} />
          <UserModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </ButtonWrapper>
      </UserInfo>
    </HeaderWrapper>
  );
};

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 71px;
  background-color:${theme.gray.g100};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const Logo = styled.img`
  width: 145px;
  height: 71px;
  object-fit: cover;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 70%;
`;

const InfoText = styled.div`
  background-color: ${theme.white.w500};
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 15px;
  color: ${theme.black.b500};
`;

const LogoutButton = styled.button`
  background-color: ${theme.white.w500};
  border: 1px solid ${theme.white.w500};
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 13px;
  color: ${theme.red.r500};
  height: 36px;

  &:hover {
    background-color: ${theme.red.r500};
    color: ${theme.white.w500};
  }
`;

const StyledChevron = styled(IoChevronDown)<{ $active: boolean }>`
  font-size: 24px;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "orange" : "black")};

  &:hover {
    color: ${theme.orange.o500};
  }
`;

export default Header;
