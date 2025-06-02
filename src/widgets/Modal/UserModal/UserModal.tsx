import styled, {keyframes} from "styled-components";

interface ModalProps {
    isOpen: boolean;
    onCLose: () => void; 
}


export const UserModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const onBookMarkClick = () =>{

    }

    const onMySolvedClick = () => {

    }

    return (
      <>
        <Overlay onClick={onClose} />
        <ModalWrapper  isOpen={isOpen} onClick={onClose}>
        <ModalContainer isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
            <OrangeButton onClick={onBookMarkClick}>북마크</OrangeButton>
            <OrangeButton onClick={onMySolvedClick}>푼 문제 조회</OrangeButton>
        </ModalContainer>
        </ModalWrapper>
      </>

    );
};

const OrangeButton = styled.button`
  width: 120px; /* 고정된 너비 */
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 0; /* 좌우 padding 제거, 세로만 적용 */
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
  background: transparent; // 배경 시각 효과 없애기
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

const ModalWrapper  = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%; /* 버튼 아래 */
  right: 0;
  margin-top: 8px;
  z-index: 999;
  animation: ${({ isOpen }) => (isOpen ? fadeSlideIn : fadeSlideOut)} 0.3s ease-out forwards;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const ModalContainer = styled.div<{ isOpen: boolean }>`
  background: white;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 200px; /* 더 작고 보기 좋게 */
  animation: ${({ isOpen }) => (isOpen ? fadeSlideIn : fadeSlideOut)} 0.3s ease-out forwards;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px; /* 요소들 사이 간격 */
`;