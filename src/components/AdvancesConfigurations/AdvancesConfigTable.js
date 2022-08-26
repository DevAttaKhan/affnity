import React from "react";
import CardContainer from "../Layout/CardContainer";
import Table from "../Table/Table";
import EditeIcon from "../../assets/Icons/EditeIcon";

const columns = [
  { path: "no", lable: "S.NO" },
  {
    path: "name",
    lable: "Advance Category",
  },
  {
    path: "allowedAmount",
    lable: "Allowed Amount",
  },

  {
    path: "status",
    lable: "Status",
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
    allowedAmount: 120000000,

    status: "Active",
  },
  {
    no: 2,
    name: "Housing",
    allowedAmount: 120000000,

    status: "Active",
  },
];

const AdvancesConfigTable = () => {
  return (
    <CardContainer title="Loan Category">
      <Table data={data} columns={columns} />
    </CardContainer>
  );
};

export default AdvancesConfigTable;
