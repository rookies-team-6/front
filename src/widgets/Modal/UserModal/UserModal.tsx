import styled, {keyframes} from "styled-components";

interface ModalProps {
    isOpen: boolean;
    onCLose: () => void; 
}


export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <Backdrop isOpen={isOpen} onClick={onClose}>
        <ModalContainer isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
            {children}
            <button onClick={onClose}>닫기</button>
        </ModalContainer>
        </Backdrop>
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

const Backdrop = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div<{ isOpen: boolean }>`
  background: white;
  padding: 20px;
  border-radius: 12px;
  width: 400px;
  animation: ${({ isOpen }) => (isOpen ? fadeSlideIn : fadeSlideOut)} 0.3s ease-out forwards;
`;