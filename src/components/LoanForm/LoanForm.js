import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import FormFields from '../FormFields/FormFields';
import { getUserData, submitLoanData } from '../../services/api';
import Button from '@mui/material/Button';

import './LoanForm.scss'

const LoanForm = ({ match }) => {
  const [error, setError] = useState(null);

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      age: '',
      loan_amount: '',
      loan_date: '',
      loan_weeks: '',
      check: false,
    },
    validationSchema: yup.object({
      name: yup.string().required('Este campo es obligatorio'),
      surname: yup.string().required('Este campo es obligatorio'),
      email: yup.string().email('Formato de correo electrónico no válido').required('Este campo es obligatorio'),
      phone: yup.string().matches(phoneRegExp, 'Formato de telefono no válido').required('Este campo es obligatorio'),
      age: yup.number().typeError('Debes introducir un número').required('Este campo es obligatorio').min(18, 'Debes ser mayor de 18 años'),
      loan_amount: yup.number().typeError('Debes introducir un número').required('Este campo es obligatorio').min(10, 'Importe mínimo es 10').max(1000, 'Importe máximo es 1000'),
      loan_date: yup.string().required('Este campo es obligatorio'),
      loan_weeks: yup.number().typeError('Debes introducir un número').required('Este campo es obligatorio').min(1, 'Mínimo 1 año').max(20, 'Máximo 20 años'),
      check: yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await submitLoanData(match.params.id, values);
        console.log(response);

        if (response.status === 200) {
          return <Navigate to="/thank-you" replace />;
        } else {
          setError('Hubo un problema al enviar los datos');
        }
      } catch (error) {
        setError(error);
      }
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (match && match.params) {
          const userDataFromApi = await getUserData(match.params.id);

          if (userDataFromApi) {
            formik.setValues({
              name: userDataFromApi.name,
              surname: userDataFromApi.surname,
              email: userDataFromApi.email,
              phone: userDataFromApi.phone,
              age: userDataFromApi.age,
              loan_amount: 0,
              loan_date: '',
              loan_weeks: 1,
              check: false,
            });
          }
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [match]);

  return (
    <div className='box'>
      <h2>Formulario</h2>
      {error && <p>{error}</p>}
      <form className='form' onSubmit={formik.handleSubmit}>
        <FormFields formik={formik} />
        <Button type="submit">Enviar Solicitud</Button>
      </form>
    </div>
  );
};

export default LoanForm;
