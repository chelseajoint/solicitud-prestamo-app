import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import './FormFields.scss';


const FormFields = ({ formik }) => {
  return (
    <div>
      <div className='name'>
      <div>
        <TextField
          id="name"
          name="name"
          label="Nombre"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          required
        />
      </div>
      <div>
        <TextField
          id="surname"
          name="surname"
          label="Apellidos"
          value={formik.values.surname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.surname && Boolean(formik.errors.surname)}
          helperText={formik.touched.surname && formik.errors.surname}
          required
        />
      </div>
      </div>
      <div className='contacts'>
      <div>
        <TextField
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          required
        />
      </div>
      <div>
        <TextField
          id="phone"
          name="phone"
          label="Teléfono"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          required
        />
      </div>
      </div>
      <div>
        <TextField
          id="age"
          name="age"
          label="Edad"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
          required
        />
      </div>
      <div>
        <TextField
          id="loan_amount"
          name="loan_amount"
          label="Importe Préstamo"
          value={formik.values.loan_amount}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.loan_amount && Boolean(formik.errors.loan_amount)}
          helperText={formik.touched.loan_amount && formik.errors.loan_amount}
          required
        />
      </div>
      <div className='times'>
      <div>
      <TextField
          id="loan_date"
          name="loan_date"
          label="Fecha Préstamo"
          className="loan_date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={formik.values.loan_date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.loan_date && Boolean(formik.errors.loan_date)}
          helperText={formik.touched.loan_date && formik.errors.loan_date}
          required
        />
      </div>
      <div>
        <TextField
          id="loan_weeks"
          name="loan_weeks"
          label="Tiempo a Devolver (años)"
          value={formik.values.loan_weeks}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.loan_weeks && Boolean(formik.errors.loan_weeks)}
          helperText={formik.touched.loan_weeks && formik.errors.loan_weeks}
          required
        />
      </div>
      </div>
      <div>
      <FormControlLabel
          control={
            <Checkbox
              id="check"
              name="check"
              checked={formik.values.check}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="primary"
              required
            />
          }
          label={
            <span className="check">
              Aceptar términos y condiciones
              <a href="https://cloudframework.io/terminos-y-condiciones/"> Términos y Condiciones</a>
            </span>
          }
        />
      </div>
    </div>
  );
};

export default FormFields;
