import React, { useState } from 'react';
import './Contacts.scss';
import frontend from '../../img/frontend.jpg';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import BasicForm from '../UI/BasicForm/BasicForm';

const Contacts = () => {
   const [formActive, setFormActive] = useState(false);
   const [thanksActive, setThanksActive] = useState(false);
   return (
      <div className="contacts">
         <div className="contacts__container _container">
            <div className="contacts__body">
               <div className="contacts__content content">
                  <h1 className="content__title">
                     <a href="tel:380963522919" className="content__phone">
                        +38(096)-352-29-19
                     </a>
                  </h1>
                  <p className="content__name">
                     Vadym Miler
                  </p>
                  <a href="mailto:vdmiler1985@gamil.com" className="content__email">
                     mail@domain.com
                  </a>
                  <p className="content__profession">
                     JavaScript разработчик
                  </p>
                  <p className="content__technologies">
                     ES5, ES6, <span>React</span>
                  </p>
                  <Button
                     content="Форма обратной связи"
                     handleClick={() => setFormActive(true)}
                  />
                  <Modal
                     isActive={formActive}
                     handleClick={() => setFormActive(false)}
                  >
                     <BasicForm
                        closeForm={() => setFormActive(false)}
                        openThanks={() => setThanksActive(true)}
                     />
                  </Modal>
                  <Modal
                     isActive={thanksActive}
                     handleClick={() => setThanksActive(false)}
                  >
                     <p style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                     }}
                     >
                        <strong>Форма отправлена!</strong>
                     </p>
                  </Modal>
               </div>
               <div className="contacts__picture">
                  <img src={frontend} alt="" className="contacts__img" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Contacts;