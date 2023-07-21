import { ReactNode } from 'react';
import './Modal.css'

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
  }

const Modal = (props: ModalType) => {
    return (
        <div className='modal-overlay' onClick={props.toggle} >
        <div className='modal-box'>
            <h1 className='modal-text'>THIS IS MY MODAL {props.children}  </h1>
        </div>
        </div>
    )
}

export default Modal