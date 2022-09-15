import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardContainer from '../Layout/CardContainer';
import Table from '../Table/Table';
// import Avatar from "../Avatar/Index";
import Portal from '../Portal/Portal';
import EmployeeModalForm from './EmployeeModalForm';
import empData from '../../data/empDB.json';
import axios from 'axios';

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
  const [modal, setModal] = useState(false);

  const [empState, setEmpState] = useState([]);
  let tableData = [];

  const items = JSON.parse(localStorage.getItem('loginData'));

  useEffect(() => {
    axios
      .get('http://savvy.developerpro.co/api/employee/get', {
        headers: {
          Authorization: 'Bearer ' + items.token,
        },
      })
      .then((data) => {
        /* eslint-disable */
        tableData = data.data.response.map((item) => {
          const { id, first_name, last_name, birthdate, contract_date, phone } =
            item;
          return { id, first_name, last_name, birthdate, contract_date, phone };
        });
        setEmpState(tableData);
      });
  }, [empData]);

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
