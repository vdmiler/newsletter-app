import React from 'react';
import './Modal.scss';

const Modal = ({ isActive, handleClick, children }) => {
   return (
      <div className={isActive ? "modal _active" : "modal"} onClick={handleClick}>
         <div className="modal__body" onClick={e => e.stopPropagation()}>
            <div className="modal__close-btn" onClick={handleClick}>X</div>
            <div className="modal__content">
               {children}
            </div>
         </div>
      </div>
   );
}

export default Modal;