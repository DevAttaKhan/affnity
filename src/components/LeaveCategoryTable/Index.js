import React from "react";
import CardContainer from "../Layout/CardContainer";
import Table from "../Table/Table";
import EditeIcon from "../../assets/Icons/EditeIcon";

const columns = [
  { path: "no", lable: "S.NO" },
  {
    path: "name",
    lable: "Category Name",
  },
  {
    path: "allowedLeaves",
    lable: "Allowed Leaves",
  },
  {
    path: "appliedTo",
    lable: "Applied To",
  },
  {
    path: "employeeType",
    lable: "Employee Type",
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
    name: "Health",
    allowedLeaves: 12,
    appliedTo: "Mangers",
    employeeType: "New",
    status: "Active",
  },
  {
    no: 2,
    name: "Health",
    allowedLeaves: 12,
    appliedTo: "Mangers",
    employeeType: "New",
    status: "Active",
  },
];

const EmployeesTable = () => {
  return (
    <CardContainer title="Leaves Category">
      <Table data={data} columns={columns} />
    </CardContainer>
  );
};

export default EmployeesTable;
