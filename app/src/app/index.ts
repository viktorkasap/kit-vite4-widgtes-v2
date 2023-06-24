/* eslint-disable no-new, @typescript-eslint/ban-ts-comment */

import './index.css';

const formHandler = (form: HTMLFormElement) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
};

const calculator = () => {
  const calculator = document.getElementById('calculator');
  const form = calculator?.querySelector<HTMLFormElement>('[data-calc="form"]');
  const result = calculator?.querySelector<HTMLDivElement>('[data-calc="result"]');

  if (!calculator || !form || !result) {
    return false;
  }

  // const formData = new FormData(form);
  // form['loan-amount']
  formHandler(form);

  return true;
};

// init
calculator();
