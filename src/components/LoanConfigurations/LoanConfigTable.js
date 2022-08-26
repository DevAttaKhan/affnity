import React from "react";
import CardContainer from "../Layout/CardContainer";
import Table from "../Table/Table";
import EditeIcon from "../../assets/Icons/EditeIcon";

const columns = [
  { path: "no", lable: "S.NO" },
  {
    path: "name",
    lable: "Loan Category",
  },
  {
    path: "allowedAmount",
    lable: "Allowed Amount",
  },
  {
    path: "maxInstallments",
    lable: "Max Installments",
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
    maxInstallments: "36",
    employeeType: "New",
    status: "Active",
  },
  {
    no: 2,
    name: "Housing",
    allowedAmount: 120000000,
    maxInstallments: "36",
    employeeType: "New",
    status: "Active",
  },
];

const LoanConfigTable = () => {
  return (
    <CardContainer title="Loan Category">
      <Table data={data} columns={columns} />
    </CardContainer>
  );
};

export default LoanConfigTable;
