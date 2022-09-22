import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../Common/Form/Form';
import CardContainer from '../Layout/CardContainer';
import leaveDb from '../../data/leaveDB.json';
import axios from 'axios';
const inputs = [
  {
    label: 'Expense Type Name',
    name: 'name',
    type: 'text',
    value: '',
  },
  {
    label: 'Allowed Amount',
    name: 'allowed_amount',
    type: 'number',
    value: '',
  },
];

const ExpensesTypeForm = () => {
  const [state, setState] = useState(inputs);
  /* eslint-disable */
  const [id, setId] = useState(0);
  const navigate = useNavigate();

  const items = JSON.parse(localStorage.getItem('loginData'));

  const handleChange = (e) => {
    const config = [...state];
    const index = config.findIndex((el) => el.name === e.target.name);
    config[index] = { ...config[index], value: e.target.value };
    setState(config);
  };

  useEffect(() => {
    if (leaveDb.length > 0) {
      let id = leaveDb.length + 1;
      setId(id);
    }
    // eslint-disable-next-line
  }, [leaveDb]);

  const handleSubmit = (e) => {
    const expenseTypeData = {
      active: '1',
      name: state[0].value,
      allowed_amount: state[1].value,
    };

    axios
      .post(
        'http://savvy.developerpro.co/api/expense_type/add',
        expenseTypeData,
        {
          headers: {
            Authorization: 'Bearer ' + items.token,
            Accept: 'application/json',
          },
        }
      )
      .then((res) => console.log(res));
    e.preventDefault();
    navigate('/dashboard/home', { replace: true });
  };

  return (
    <CardContainer title="Create New Expenses Type" onClick={handleSubmit} form>
      <Form inputs={state} onChange={handleChange} />
    </CardContainer>
  );
};

export default ExpensesTypeForm;
