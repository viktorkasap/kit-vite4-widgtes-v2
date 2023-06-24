/* eslint-disable no-new, @typescript-eslint/ban-ts-comment, no-unused-vars */

import './index.css';

import { log } from 'shared/lib';

import {
  $principalPaid,
  $interestPaid,
  $interestRate,
  $loanAmount,
  $loanTermMonth,
  $loanTermYear,
  $monthlyPayments,
  setLoanAmount,
  setInterestRate,
  setInterestPaid,
  setLoanTermMonth,
  setLoanTermYear,
  setMonthlyPayments,
  setPrincipalPaid,
} from './model';

$loanTermYear.watch((state) => {
  log('$loanTermYear', state);
  // el.value = `${$loanTermYear.getState() * 12}`;
});

$loanTermMonth.watch((state) => {
  log('$loanTermMonth', state);
  // el.value = `${$loanTermYear.getState() * 12}`;
});

const formHandleChange = (form: HTMLFormElement) => {
  form.addEventListener('input', (e) => {
    const el = e.target as HTMLInputElement;

    switch (true) {
      case el.name === 'loan-amount':
        setLoanAmount(Number(el.value));
        break;
      case el.name === 'loan-term-year':
        setLoanTermYear(Number(el.value));
        setLoanTermMonth(Number(el.value) * 12);
        break;
      case el.name === 'loan-term-month':
        setLoanTermMonth(Number(el.value));
        setLoanTermYear(Number(el.value) / 12);
        break;
      case el.name === 'interest-rate':
        setLoanTermMonth(Number(el.value));
        break;
      default:
        return false;
    }
  });
};

const formSubmitHandler = (form: HTMLFormElement) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
};

const setInitialStateData = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  for (const [key, value] of formData) {
    switch (true) {
      case key === 'loan-amount':
        setLoanAmount(Number(value));
        break;

      case key === 'loan-term-year':
        setLoanTermYear(Number(value));
        break;

      case key === 'loan-term-month':
        setLoanTermMonth(Number(value));
        break;

      case key === 'interest-rate':
        setInterestRate(Number(value));
        break;

      default:
        return false;
    }
  }
};

const calculator = () => {
  const calculator = document.getElementById('calculator');
  const form = calculator?.querySelector<HTMLFormElement>('[data-calc="form"]');
  const result = calculator?.querySelector<HTMLDivElement>('[data-calc="result"]');

  if (!calculator || !form || !result) {
    return false;
  }

  formHandleChange(form);
  formSubmitHandler(form);
  setInitialStateData(form);

  return true;
};

// init
calculator();
