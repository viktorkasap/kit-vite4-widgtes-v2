/* eslint-disable no-new, @typescript-eslint/ban-ts-comment, no-unused-vars */

import './index.css';

import { log } from 'shared/lib';

import {
  $loanTermMonth,
  $loanTermYear,
  $loanAmount,
  $interestRate,
  setLoanAmount,
  setInterestRate,
  setLoanTermMonth,
  setLoanTermYear,
  $monthlyPayments,
  $principalPaid,
  $interestPaid,
  setMonthlyPayments,
  setPrincipalPaid,
  setInterestPaid,
} from './model';

const watchers = (
  form: HTMLFormElement,
  monthlyPaymentsEl: HTMLSpanElement,
  principalPaidEl: HTMLSpanElement,
  interestPaidEl: HTMLSpanElement,
) => {
  $loanTermYear.watch((state) => {
    form['loan-term-year'].value = state;
  });

  $loanTermMonth.watch((state) => {
    form['loan-term-month'].value = state;
  });

  $monthlyPayments.watch((state) => {
    log('$monthlyPayments', state);
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

const formHandleChange = (form: HTMLFormElement) => {
  form.addEventListener('input', (e) => {
    const el = e.target as HTMLInputElement;

    switch (el.name) {
      case 'loan-amount':
        setLoanAmount(Number(el.value));
        break;
      case 'loan-term-year':
        setLoanTermYear(Number(el.value));
        setLoanTermMonth(Number(el.value) * 12);
        break;
      case 'loan-term-month':
        setLoanTermMonth(Number(el.value));
        setLoanTermYear(Number(el.value) / 12);
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
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const P = $loanAmount.getState();
    const yearlyInterestRate = $interestRate.getState() / 100;
    const r = yearlyInterestRate / 12;
    const n = $loanTermYear.getState() * 12;

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

  setMonthlyPayments(Number(monthlyPaymentsEl.textContent));
  setPrincipalPaid(Number(principalPaidEl.textContent));
  setInterestPaid(Number(interestPaidEl.textContent));
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
  formSubmitHandle(form);
  setInitialStateData(form, monthlyPaymentsEl, principalPaidEl, interestPaidEl);
  watchers(form, monthlyPaymentsEl, principalPaidEl, interestPaidEl);

  return true;
};

// init
calculator();
