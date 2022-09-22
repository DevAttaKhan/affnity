import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Common/Form/Form';
import CardContainer from '../Layout/CardContainer';
import { getOffices } from '../../store/feature/office/office';
import { postOffice } from '../../store/feature/office/office';

const inputs = [
  {
    label: 'Office Name',
    name: 'name',
    type: 'text',
    value: '',
  },
  {
    label: 'Offices',
    name: 'office_id',
    type: 'dropdown',
    value: '',
    options: [],
  },
];

const OfficeConfigForm = () => {
  const dispatch = useDispatch();

  const [officeState, setOfficeState] = useState();
  const { data } = useSelector((state) => state.offices);

  useEffect(() => {
    if (data) inputs[inputs.length - 1].options = data;
  }, [data]);
  if (officeState) {
    dispatch(postOffice(officeState));
  }

  useEffect(() => {
    dispatch(getOffices());
    // eslint-disable-next-line
  }, []);

  return (
    <CardContainer title="Offices Configurations" form>
      {data && <Form inputs={inputs} setState={setOfficeState} />}
    </CardContainer>
  );
};

export default OfficeConfigForm;
