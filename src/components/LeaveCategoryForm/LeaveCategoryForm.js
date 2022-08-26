import React, { useState } from "react";
import Form from "../Common/Form/Form";
import CardContainer from "../Layout/CardContainer";

const inputs = [
  {
    label: "Category Name",
    name: "categoryName",
    type: "text",
    value: "",
  },
  {
    label: "Allowed Leaves",
    name: "allowedLeaves",
    type: "text",
    value: "",
  },
  {
    label: "Applied To",
    name: "appliedTo",
    type: "text",
    value: "",
  },
  {
    label: "Employee Type",
    name: "employeeType",
    type: "text",
    value: "",
  },
  {
    label: "Status",
    name: "status",
    type: "text",
    value: "",
  },
];

const LeaveCategoryForm = () => {
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
    <CardContainer
      title="Leave Category Confiuration Form"
      onClick={handleSubmit}
      form
    >
      <Form inputs={state} onChange={handleChange} />
    </CardContainer>
  );
};

export default LeaveCategoryForm;
