import { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../../style/Theme";
import Button from "../Button/Button";

const ModalContaniner = styled.div`
  position: fixed;
  ${theme.shadow.elevation3};
  z-index: 99;
  background-color: white;

`;

const CloseButton = styled(Button)`
    position: absolute;
    top: 0;
    right: 0;

    width: 30px;
    height: 30px;
`;

interface ModalProps {
    /**
     * The function to be called when the modal is closed
     */ 
    onClose?: () => void;
    className?: string;
}
 
const Modal: FunctionComponent<ModalProps> = ({children, onClose, className}) => {
    return ( 
        <ModalContaniner className={className} aria-modal={true} role={"dialog"} aria-labelledby="Modal">
            <CloseButton customType="primary" onClick={onClose}>X</CloseButton>
            <div className="modal-body">
                {children}
            </div>
        </ModalContaniner>
     );
}
 
export default Modal;

