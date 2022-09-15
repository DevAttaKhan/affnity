import React, { useEffect, useState } from "react";
import Form from "../Common/Form/Form";
import CardContainer from "../Layout/CardContainer";
import leaveDb from '../../data/leaveDB.json'
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
  const [id, setId] = useState(0);

  const handleChange = (e) => {
    const config = [...state];
    const index = config.findIndex((el) => el.name === e.target.name);
    config[index] = { ...config[index], value: e.target.value };
    setState(config);
  };

  useEffect(()=>{
    if(leaveDb.length>0){
      let id = leaveDb.length+1;
      setId(id)
    }
    // eslint-disable-next-line
  },[leaveDb])

  const handleSubmit = (e) => {
    leaveDb.push({
      "id": id,
      "categoryName": state[0].value,
      "allowedLeaves": state[1].value,
      "appliedTo": state[2].value,
      "empType": state[3].value,
      "status": state[4].value
    })
    e.preventDefault();
    //navigate("/dashboard/home", { replace: true });
  };

  return (
    <CardContainer
      title="Leave Category Configuration Form"
      onClick={handleSubmit}
      form
    >
      <Form inputs={state} onChange={handleChange} />
    </CardContainer>
  );
};

export default LeaveCategoryForm;
