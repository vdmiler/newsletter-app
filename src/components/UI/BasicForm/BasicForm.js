/* eslint 'no-unused-vars': ['error', { argsIgnorePattern: '^_' }] */   
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchFormData } from '../../../store/slices/formDataSlice';
import './BasicForm.scss';
import Button from '../Button/Button';

const BasicFormSchema = Yup.object().shape({
   email: Yup.string()
      .email("Неверный адрес электронной почты")
      .required("Обязательное поле"),
   name: Yup.string()
      .min(2, "Минимум 2 символа")
      .max(20, "Максимум 20 символов")
      .required("Обязательное поле"),
   message: Yup.string()
      .min(15, "Минимум 15 символов")
      .max(120, "Максимум 120 символов")
      .required("Обязательное поле")
});

const initialValues = {
   email: "",
   name: "",
   message: ""
}

const BasicForm = ({ closeForm, openThanks }) => {
   const dispatch = useDispatch();
   const { formData } = useSelector(state => state.formData)
   return (
      <>
         <Formik

            initialValues={initialValues}

            validationSchema={BasicFormSchema}

            onSubmit={(values, { resetForm }) => {
               dispatch(fetchFormData({ formData: values }))
               setTimeout(() => {
                  closeForm();
                  openThanks();
                  resetForm();
               }, 500);
            }}

            render={({ errors, touched, handleSubmit }) => (
               <Form className="feedback">

                  <h2 className="feedback__title">Форма обратной связи</h2>

                  <div className="feedback__item">
                     <Field
                        component="input"
                        name="email"
                        placeholder="E-mail"
                        type="email"
                        className="feedback__input"
                     />
                     {errors.email && touched.email && (<div className="feedback__error">{errors.email}</div>)}
                  </div>

                  <div className="feedback__item">
                     <Field
                        component="input"
                        name="name"
                        placeholder="Имя"
                        type="text"
                        className="feedback__input"
                     />
                     {errors.name && touched.name && (<div className="feedback__error">{errors.name}</div>)}
                  </div>

                  <div className="feedback__item feedback__item_textarea">
                     <Field
                        component="textarea"
                        name="message"
                        placeholder="Сообщение"
                        className="feedback__input feedback__input_textarea"
                     />
                     {errors.message && touched.message && (<div className="feedback__error">{errors.message}</div>)}

                  </div>

                  <Button
                     handleClick={handleSubmit}
                     cls="feedback__btn"
                     content="Отправить"
                  />

               </Form>
            )}
         />
      </>
   )
}
export default BasicForm;