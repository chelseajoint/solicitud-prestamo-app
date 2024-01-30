import React from 'react';

const ThankYou = ({ data }) => {
  return (
    <div>
      <h2>¡Gracias!</h2>
      <p>Resumen de los datos enviados:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ThankYou;
