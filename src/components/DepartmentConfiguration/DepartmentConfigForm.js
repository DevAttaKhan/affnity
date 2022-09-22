import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Common/Form/Form';
import CardContainer from '../Layout/CardContainer';
import { getDepartments } from '../../store/feature/department/department';
import { postDepartment } from '../../store/feature/department/department';

const inputs = [
  {
    label: 'Department Name',
    name: 'name',
    type: 'text',
    value: '',
  },
  {
    label: 'Department',
    name: 'department_id',
    type: 'text',
    value: '',
  },
];

const DepartmentConfigForm = () => {
  const dispatch = useDispatch();

  const [departmentState, setDepartmentState] = useState();
  const { data } = useSelector((state) => state.departments);

  useEffect(() => {
    if (data) inputs[inputs.length - 1].options = data;
  }, [data]);
  if (departmentState) {
    dispatch(postDepartment(departmentState));
  }

  useEffect(() => {
    dispatch(getDepartments());
    // eslint-disable-next-line
  }, []);

  return (
    <CardContainer title="Departments Configurations" form>
      {data && <Form inputs={inputs} setState={setDepartmentState} />}
    </CardContainer>
  );
};

export default DepartmentConfigForm;
