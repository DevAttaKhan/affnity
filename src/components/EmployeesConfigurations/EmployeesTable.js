import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardContainer from "../Layout/CardContainer";
import Table from "../Table/Table";
import Avatar from "../Avatar/Index";
import Portal from "../Portal/Portal";
import EmployeeModalForm from "./EmployeeModalForm";

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
  {
    path: "email",
    lable: "Email",
  },
  {
    path: "cellNO",
    lable: "Cell NO.",
  },
];

const data = [
  {
    no: 1,
    name: "Jack Sparrow",
    department: "Marketing",
    email: "examples@gmail.com",
    cellNO: +96589874455411,
    status: "Active",
    src: "https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/profiles/avatar-19.jpg",
  },
  {
    no: 1,
    name: "Jack Sparrow",
    department: "Marketing",
    email: "examples@gmail.com",
    cellNO: +96589874455411,
    status: "Active",
    src: "https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/profiles/avatar-19.jpg",
  },
];

const EmployeesTable = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  // const showModal = () => {
  //   setModal(true);
  // };

  const hideModal = () => {
    setModal(false);
  };

  const addEmployee = () => {
    navigate("addEmployee");
  };

  return (
    <>
      <CardContainer title="Employees" add addOnClick={addEmployee}>
        <Table data={data} columns={columns} />
      </CardContainer>

      {modal && (
        <Portal>
          <div className="modal">
            <EmployeeModalForm />
          </div>
          <div className="overlay" onClick={hideModal}></div>
        </Portal>
      )}
    </>
  );
};

export default EmployeesTable;
