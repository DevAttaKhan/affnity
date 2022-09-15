import React, { useState } from "react";
import Form from "../Common/Form/Form";
import CardContainer from "../Layout/CardContainer";

const inputs = [
  {
    label: "Shift Name",
    name: "name",
    type: "text",
    value: "",
  },
  {
    label: "Shift Starts",
    name: "start",
    type: "text",
    value: "",
  },
  {
    label: "Shift Ends",
    name: "end",
    type: "text",
    value: "",
  },
];

const ShiftConfigForm = () => {
  const [state, setState] = useState(inputs);

  const handleChange = (e) => {
    const config = [...state];
    const index = config.findIndex((el) => el.name === e.target.name);
    config[index] = { ...config[index], value: e.target.value };
    setState(config);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <CardContainer title="Shifts Configurations" onClick={handleSubmit} form>
      <Form inputs={state} onChange={handleChange} />
    </CardContainer>
  );
};

export default ShiftConfigForm;
