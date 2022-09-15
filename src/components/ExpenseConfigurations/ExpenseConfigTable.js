import React, { useState,useEffect } from "react";
import CardContainer from "../Layout/CardContainer";
import Table from "../Table/Table";
import EditeIcon from "../../assets/Icons/EditeIcon";
import Portal from "../Portal/Portal";
import Button from "../Button/Index";
import expensesDB from '../../data/expensesDB.json'



const ExpenseConfigTable = () => {
  const [empExpense, setEmpExpense] = useState({});
  const [popupState, setPopupState] = useState(false);
  let tableData = [];

  const columns = [
    { path: "id", lable: "S.NO" },
    {
      path: "name",
      lable: "Name",
      // content: (emp) => (
      //   <Avatar name={emp.name} designation={emp.designation} img={emp.src} />
      // ),
    },
    {
      path: "dept",
      lable: "Department",
    },
    {
      path: "date",
      lable: "Date",
    },
    {
      path: "amount",
      lable: "Amount",
    },
    {
      path: "category",
      lable: "Category",
    },
    {
      path: "edit",
      lable: "Edit",
      content: (emp) => (
        <button onClick={() => handleClick(emp)}>
          <EditeIcon width={16} />
        </button>
      ),
    },
  ];

  useEffect(() => {
    if (expensesDB.length > 0) {
      // eslint-disable-next-line
      tableData = expensesDB.map(dataItem => {
        const { id, name, dept, date, amount, category } = dataItem;
        return { id, name, dept, date, amount, category }

      });
      setEmpExpense(tableData)
    }
    // eslint-disable-next-line
  }, [expensesDB])


  function handleClick(emp) {
    setEmpExpense(emp);
    setPopupState(true);
  }
  return (
    <>
      <CardContainer title="Expenses List">
      {empExpense.length > 0 ? (<Table data={empExpense} columns={columns} />
      ) : (<></>)}
      </CardContainer>

      {popupState && (
        <Portal>
          <div className="overlay" onClick={() => setPopupState(false)}></div>
          <div className="modal w-25">
            <div className="mb-3 fs-6 ">
              <span className="me-4">Name:</span>
              <span>{empExpense.name}</span>
            </div>
            <div className="mb-3 fs-6">
              <span className="me-4">Department:</span>
              <span>{empExpense.department}</span>
            </div>
            <div className="mb-3">
              <span className="form-label d-inline">Date:</span>
              <input type="date" className="form-control d-inline" />
            </div>
            <div className="mb-3">
              <span className="form-label d-inline">Time In:</span>
              <input type="time" className="form-control d-inline" />
            </div>
            <div className="mb-3">
              <span className="form-label d-inline">Time Out:</span>
              <input type="time" className="form-control d-inline" />
            </div>
            <Button btnText="Update" onClick={() => setPopupState(false)} />
          </div>
        </Portal>
      )}
    </>
  );
};

export default ExpenseConfigTable;
