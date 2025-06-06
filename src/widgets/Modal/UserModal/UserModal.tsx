import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const onBookMarkClick = () => {
    navigate("/bookmarked");
    onClose();
  };

  const onMySolvedClick = () => {
    navigate("/myanswerlist");
    onClose();
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalWrapper $isOpen={isOpen} onClick={onClose}>
        <ModalContainer $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
          <OrangeButton onClick={onBookMarkClick}>북마크</OrangeButton>
          <OrangeButton onClick={onMySolvedClick}>푼 문제 조회</OrangeButton>
        </ModalContainer>
      </ModalWrapper>
    </>
  );
};

const OrangeButton = styled.button`
  width: 120px;
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 0;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 8px;
  text-align: center;

  &:hover {
    background-color: darkorange;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 998;
  background: transparent;
`;

const fadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeSlideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const ModalWrapper = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  z-index: 999;
  animation: ${({ $isOpen }) =>
    $isOpen ? fadeSlideIn : fadeSlideOut} 0.3s ease-out forwards;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`;

const ModalContainer = styled.div<{ $isOpen: boolean }>`
  background: white;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 200px;
  animation: ${({ $isOpen }) =>
    $isOpen ? fadeSlideIn : fadeSlideOut} 0.3s ease-out forwards;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
