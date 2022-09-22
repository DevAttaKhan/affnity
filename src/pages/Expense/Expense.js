import React from 'react';
import ExpenseConfigTable from '../../components/ExpenseConfigurations/ExpenseConfigTable';

import './style.scss';
import AdminHeading from '../../components/AdminHeading/AdminHeading';
import ExpensesTypeForm from '../../components/ExpensesConfigForm/ExpensesTypeForm';

const Expense = () => {
  return (
    <>
      <AdminHeading title="Expense Type" />
      <ExpensesTypeForm />
      <ExpenseConfigTable />
    </>
  );
};

export default Expense;
