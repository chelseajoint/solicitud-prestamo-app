import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoanForm from './components/LoanForm/LoanForm';
import ThankYou from './components/ThankYou';
import ErrorScreen from './components/ErrorScreen';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoanForm />} />  {/* Cambiado 'render' por 'element' */}
          <Route path="/:id" element={<LoanForm />} />  {/* Cambiado 'component' por 'element' */}
          <Route path="/thank-you" element={<ThankYou data={{}} />} />  {/* Cambiado 'render' por 'element' */}
          <Route path="/error" element={<ErrorScreen error="Mensaje de error personalizado" />} />  {/* Cambiado 'render' por 'element' */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
