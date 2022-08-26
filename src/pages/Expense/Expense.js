import React from "react";
import ExpenseConfigTable from "../../components/ExpenseConfigurations/ExpenseConfigTable";

import "./style.scss";
import AdminHeading from "../../components/AdminHeading/AdminHeading";
import SelectDropDown from "../../components/SelectDropdown/SelectDropDown";

const Expense = () => {
  return (
    <>
      <AdminHeading title="Expenses" />

      <div className="expense-category mb-4">
        <span>Expese Category:</span>
        <SelectDropDown list={["Patrol", "Food"]} />
      </div>

      <ExpenseConfigTable />
    </>
  );
};

export default Expense;
