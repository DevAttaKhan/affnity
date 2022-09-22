import React, { useState, useEffect } from 'react';
import CardContainer from '../Layout/CardContainer';
import Table from '../Table/Table';
import EditeIcon from '../../assets/Icons/EditeIcon';
// import Portal from '../Portal/Portal';
// import Button from '../Button/Index';
import { useDispatch, useSelector } from 'react-redux';
import { getExpenses } from '../../store/feature/expenses/expenses';
const columns = [
  { path: 'id', lable: 'S.NO' },
  {
    path: 'name',
    lable: 'Name',
    // content: (emp) => (
    //   <Avatar name={emp.name} designation={emp.designation} img={emp.src} />
    // ),
  },
  {
    path: 'allowed_amount',
    lable: 'Amount',
  },
  {
    path: 'edit',
    lable: 'Edit',
    content: (emp) => (
      <button>
        <EditeIcon width={16} />
      </button>
    ),
  },
];

const ExpenseConfigTable = () => {
  const dispatch = useDispatch();
  const [expenseState, setExpenseState] = useState([]);
  const expenseData = useSelector((state) => state.expenses);

  useEffect(() => {
    dispatch(getExpenses());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (expenseData) setExpenseState(expenseData.data);
  }, [expenseData]);
  return (
    <>
      <CardContainer title="Expenses List">
        {expenseState.length > 0 ? (
          <Table data={expenseState} columns={columns} />
        ) : (
          <></>
        )}
      </CardContainer>

      {/* {popupState && (
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
      )} */}
    </>
  );
};

export default ExpenseConfigTable;
