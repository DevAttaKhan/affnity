import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardContainer from '../Layout/CardContainer';
import Table from '../Table/Table';
// import Avatar from "../Avatar/Index";
import Portal from '../Portal/Portal';
import EmployeeModalForm from './EmployeeModalForm';

import { useDispatch, useSelector } from 'react-redux';
import { getEmployee } from '../../store/feature/employee/employee';

const columns = [
  { path: 'id', lable: 'S.NO' },
  {
    path: 'first_name',
    lable: 'Name',
    // content: (emp) => (
    //   <Avatar name={emp.name} designation={emp.designation} img={emp.src} />
    // ),
  },
  {
    path: 'last_name',
    lable: 'Last Name',
  },
  {
    path: 'birthdate',
    lable: 'DoB',
  },
  {
    path: 'contact_date',
    lable: 'Contract Date',
  },
  {
    path: 'phone',
    lable: 'Cell NO.',
  },
];

const EmployeesTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [empState, setEmpState] = useState([]);

  const emp = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(getEmployee());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (emp) setEmpState(emp.data);
  }, [emp]);

  const hideModal = () => {
    setModal(false);
  };

  const addEmployee = () => {
    navigate('addEmployee');
  };

  return (
    <>
      <CardContainer title="Employees" add addOnClick={addEmployee}>
        {empState.length > 0 ? (
          <Table data={empState} columns={columns} />
        ) : (
          <></>
        )}
      </CardContainer>

      {modal && (
        <Portal>
          <div className="modal">
            <EmployeeModalForm />
          </div>
          <div className="overlay" onClick={hideModal}></div>
        </Portal>
      )}
    </>
  );
};

export default EmployeesTable;
