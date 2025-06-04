import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoImage from "@shared/assets/icon/logo.png";
import { getHeaderInfo } from "@shared/Apis/header";
import type { HeaderInfo } from "@shared/Apis/header";
import { UserModal } from "@widgets/Modal/UserModal/UserModal";

const Header = () => {
    const [user, setUser] = useState<HeaderInfo>({
        name: "",
        type: "",
        score: "",
    });
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        const data = await getHeaderInfo();
        console.log(data)
        setUser(data);
        };
        fetchData();
    }, []);

    return (
        <HeaderWrapper>
        {/* 로고 클릭 시 홈으로 이동 */}
        {/* <Link to="/">
            
        </Link> */}
        <Logo src={logoImage} alt="로고" />
        <UserInfo>
            <LogoutButton onClick={() => alert("로그아웃 처리 예정")}>
            로그아웃
            </LogoutButton>
            <InfoText>{user.name}</InfoText>
            <InfoText>{user.type}</InfoText>
            <InfoText>{user.score}</InfoText>
            <ButtonWrapper>
                <span
                style={{ fontSize: "20px", cursor: "pointer", marginBottom: "2px" }}
                onClick={() => isModalOpen ? setModalOpen(false) : setModalOpen(true)}
                >
                ▼
                </span>
                <UserModal isOpen={isModalOpen} onClose = {() => setModalOpen(false)} />
                    
            </ButtonWrapper>

        </UserInfo>
        </HeaderWrapper>
    );
    };

const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
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
`;

const UserInfo = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 12px;
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
        background-color: #f8f8f8;
    }
`;

export default Header;
