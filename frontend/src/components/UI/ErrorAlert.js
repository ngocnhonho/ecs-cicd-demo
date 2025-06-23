import React from 'react';

import './ErrorAlert.css';

function ErrorAlert(props) {
  return (
    <section className='error-alert'>
      <h2>Something went wrong!! To CI/CD</h2>
      <p>{props.errorText}</p>
    </section>
  );
}

export default ErrorAlert;
