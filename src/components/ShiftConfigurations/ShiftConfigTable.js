import React from "react";
import CardContainer from "../Layout/CardContainer";
import Table from "../Table/Table";
import EditeIcon from "../../assets/Icons/EditeIcon";

const columns = [
  { path: "no", lable: "S.NO" },
  {
    path: "name",
    lable: "Shift Name",
  },
  {
    path: "starts",
    lable: "Shift Starts",
  },
  {
    path: "ends",
    lable: "Shift Ends",
  },
  {
    path: "edit",
    lable: "Edit",
    content: (leave) => (
      <button>
        <EditeIcon width={16} />
      </button>
    ),
  },
];

const data = [
  {
    no: 1,
    name: "Housing",
    starts: "07:000",
    ends: "21:00",
  },
  {
    no: 2,
    name: "Housing",
    starts: "07:000",
    ends: "21:00",
  },
];

const ShiftConfigTable = () => {
  return (
    <CardContainer title="Shifts List">
      <Table data={data} columns={columns} />
    </CardContainer>
  );
};

export default ShiftConfigTable;
