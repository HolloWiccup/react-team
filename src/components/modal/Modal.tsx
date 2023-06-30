import './modal.css'
import { FC, ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({children}) => {
  return (
    <div className="modal">
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Modal;