/* eslint-disable no-new, @typescript-eslint/ban-ts-comment, no-unused-vars */

import './index.css';

import {
  $loanTermMonth,
  $loanTermYear,
  $loanAmount,
  $interestRate,
  setLoanAmount,
  setInterestRate,
  setLoanTermMonth,
  setLoanTermYear,
} from './model';

const watchers = (form: HTMLFormElement) => {
  $loanTermYear.watch((state) => {
    form['loan-term-year'].value = state;
  });

  $loanTermMonth.watch((state) => {
    form['loan-term-month'].value = state;
  });
};

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

const formSubmitHandle = (
  form: HTMLFormElement,
  monthlyPaymentsEl: HTMLSpanElement,
  principalPaidEl: HTMLSpanElement,
  interestPaidEl: HTMLSpanElement,
) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const P = $loanAmount.getState();
    const yearlyInterestRate = $interestRate.getState() / 100;
    const r = yearlyInterestRate / 12;
    const n = $loanTermYear.getState() * 12;

    const M = (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    const totalPrincipalPaid = M * n;
    const totalInterestPaid = totalPrincipalPaid - P;

    monthlyPaymentsEl.textContent = `$${M.toFixed(2)}`;
    principalPaidEl.textContent = `$${totalPrincipalPaid.toFixed(2)}`;
    interestPaidEl.textContent = `$${totalInterestPaid.toFixed(2)}`;
  });

  // TODO calculate result
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

  const monthlyPaymentsEl = result.querySelector<HTMLSpanElement>('[data-calc="monthly-payments"]');
  const principalPaidEl = result.querySelector<HTMLSpanElement>('[data-calc="principal-paid"]');
  const interestPaidEl = result.querySelector<HTMLSpanElement>('[data-calc="interest-paid"]');

  if (!monthlyPaymentsEl || !principalPaidEl || !interestPaidEl) {
    return false;
  }

  formHandleChange(form);
  formSubmitHandle(form, monthlyPaymentsEl, principalPaidEl, interestPaidEl);
  setInitialStateData(form);
  watchers(form);

  return true;
};

// init
calculator();
