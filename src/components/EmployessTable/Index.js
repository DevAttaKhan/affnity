import React from "react";
import CardContainer from "../Layout/CardContainer";
import Table from "../Table/Table";
import Avatar from "../Avatar/Index";

const columns = [
  { path: "no", lable: "S.NO" },
  {
    path: "name",
    lable: "Name",
    content: (emp) => (
      <Avatar name={emp.name} designation={emp.designation} img={emp.src} />
    ),
  },
  {
    path: "department",
    lable: "Department",
  },
];

const data = [
  {
    no: 1,
    name: " Barry Cuda",
    department: "HR",
    src: "https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/profiles/avatar-19.jpg",
  },
  {
    no: 2,
    name: " Barry Cuda",
    department: "HR",
    src: "https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/profiles/avatar-10.jpg",
  },
];

const EmployeesTable = () => {
  return (
    <CardContainer title="Employees">
      <Table data={data} columns={columns} />
    </CardContainer>
  );
};

export default EmployeesTable;
