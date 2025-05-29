import styled, {keyframes} from "styled-components";

interface ModalProps {
    isOpen: boolean;
    onCLose: () => void; 
}


export const UserModal: React.FC<ModalProps> = ({ isOpen, onCLose, children }) => {
    if (!isOpen) return null;

    const onBtnClick = () =>{

    }

    return (
        <ModalWrapper  isOpen={isOpen}>
        <ModalContainer isOpen={isOpen} onClick={() => onCLose()}>
            {children}
            <button onClick={onBtnClick}>버튼</button>
        </ModalContainer>
        </ModalWrapper>
    );
};

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
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: clamp(240px, 50vw, 400px); 
  animation: ${({ isOpen }) => (isOpen ? fadeSlideIn : fadeSlideOut)} 0.3s ease-out forwards;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const ModalContainer = styled.div<{ isOpen: boolean }>`
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 400px;
  animation: ${({ isOpen }) => (isOpen ? fadeSlideIn : fadeSlideOut)} 0.3s ease-out forwards;
`;