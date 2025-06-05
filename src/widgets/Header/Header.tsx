import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoImage from "@shared/assets/icon/logo.png";
import { getHeaderInfo } from "@shared/Apis/header";
import { UserModal } from "@widgets/Modal/UserModal/UserModal";
import { useNavigate } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
    const [user, setUser] = useState<getHeaderInfo>({
        name: "",
        type: "",
        score: "",
    });
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getHeaderInfo();
            console.log(data);
            setUser(data);
        };
        fetchData();
    }, []);

    return (
        <HeaderWrapper>
            <Logo
                src={logoImage}
                alt="로고"
                onClick={() => navigate("/home")}
            />
            <UserInfo>
                <LogoutButton onClick={() => alert("로그아웃 처리 예정")}>
                    로그아웃
                </LogoutButton>
                <InfoText>{user.name}</InfoText>
                <InfoText>{user.type}</InfoText>
                <InfoText>{user.score}</InfoText>
                <ButtonWrapper>
                    <StyledChevron
                        $active={isModalOpen}
                        onClick={() => setModalOpen(!isModalOpen)}
                    />
                    <UserModal
                        isOpen={isModalOpen}
                        onClose={() => setModalOpen(false)}
                    />
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
    background-color: #f0efec;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
`;

const Logo = styled.img`
    width: 145px;
    height: 71px;
    object-fit: cover;

    &:hover {
        cursor: pointer;
    }
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    height: 70%;
`;

const InfoText = styled.div`
    background-color: white;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 15px;
    color: #333;
`;

const LogoutButton = styled.button`
    background-color: white;
    border: 1px solid #fff;
    border-radius: 6px;
    padding: 4px 10px;
    cursor: pointer;
    font-size: 13px;
    color: red;
    height: 36px;

    &:hover {
        background-color: red;
        color: white;
    }
`;

const StyledChevron = styled(IoChevronDown)<{ $active: boolean }>`
  font-size: 24px;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "orange" : "black")};

  &:hover {
    color: orange;
  }
`;

export default Header;
