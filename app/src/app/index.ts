/* eslint-disable no-new, @typescript-eslint/ban-ts-comment, no-unused-vars */

import './index.css';

import {
  $loanTermMonth,
  $loanAmount,
  $interestRate,
  setLoanAmount,
  setInterestRate,
  setLoanTermMonth,
  $monthlyPayments,
  $principalPaid,
  $interestPaid,
  setMonthlyPayments,
  setPrincipalPaid,
  setInterestPaid,
} from './model'; // MODEL

// VIEW
const watchStateChanges = (
  form: HTMLFormElement,
  monthlyPaymentsEl: HTMLSpanElement,
  principalPaidEl: HTMLSpanElement,
  interestPaidEl: HTMLSpanElement,
) => {
  $loanTermMonth.watch((state) => {
    form['loan-term-month'].value = state;
  });

  $monthlyPayments.watch((state) => {
    monthlyPaymentsEl.textContent = `${state.toFixed(2)}`;
  });

  $principalPaid.watch((state) => {
    const newStateValue = state < 1000 ? state * 1000 : state;
    principalPaidEl.textContent = `${newStateValue.toLocaleString('en-US')}`;
  });

  $interestPaid.watch((state) => {
    interestPaidEl.textContent = `${state}`;
  });
};

// CONTROLLER
const formHandleChange = (form: HTMLFormElement) => {
  form.addEventListener('input', (e: Event) => {
    const el = e.target as HTMLInputElement;

    switch (el.name) {
      case 'loan-amount':
        setLoanAmount(Number(el.value));
        break;
      case 'loan-term-month':
        setLoanTermMonth(Number(el.value));
        break;
      case 'interest-rate':
        setInterestRate(Number(el.value));
        break;
      default:
        return false;
    }
  });
};

const formSubmitHandle = (form: HTMLFormElement) => {
  form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();

    const P = $loanAmount.getState();
    const yearlyInterestRate = $interestRate.getState() / 100;
    const r = yearlyInterestRate / 12;
    const n = $loanTermMonth.getState();

    const M = (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    const totalPrincipalPaid = P;
    const totalInterestPaid = M * n - P;

    setMonthlyPayments(Number(M.toFixed(2)));
    setPrincipalPaid(Number(totalPrincipalPaid.toFixed(3)));
    setInterestPaid(Number(totalInterestPaid.toFixed(2)));
  });
};

const setInitialStateData = (
  form: HTMLFormElement,
  monthlyPaymentsEl: HTMLSpanElement,
  principalPaidEl: HTMLSpanElement,
  interestPaidEl: HTMLSpanElement,
) => {
  const formData = new FormData(form);

  for (const [key, value] of formData) {
    switch (true) {
      case key === 'loan-amount':
        setLoanAmount(Number(value));
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

  setMonthlyPayments(Number(monthlyPaymentsEl.textContent || 0));
  setPrincipalPaid(Number(principalPaidEl.textContent || 0));
  setInterestPaid(Number(interestPaidEl.textContent || 0));
};

// INIT
const calculatorInit = (): boolean => {
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
  formSubmitHandle(form);
  setInitialStateData(form, monthlyPaymentsEl, principalPaidEl, interestPaidEl);
  watchStateChanges(form, monthlyPaymentsEl, principalPaidEl, interestPaidEl);

  return true;
};

// init
calculatorInit();
