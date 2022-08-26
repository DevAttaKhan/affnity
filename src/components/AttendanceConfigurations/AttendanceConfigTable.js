import React, { useState } from "react";
import CardContainer from "../Layout/CardContainer";
import Table from "../Table/Table";
import EditeIcon from "../../assets/Icons/EditeIcon";
import Avatar from "../Avatar/Index";
import Portal from "../Portal/Portal";
import Button from "../Button/Index";

const data = [
  {
    no: 1,
    name: "Housing",
    department: "Management",
    date: "30-12-2012",
    timeIn: "08:00",
    timeOut: "09:00",
    src: "https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/profiles/avatar-10.jpg",
  },
  {
    no: 2,
    name: "Housing",
    department: "Management",
    date: "30-12-2012",
    timeIn: "08:00",
    timeOut: "09:00",
    src: "https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/profiles/avatar-07.jpg",
  },
];

const AttendanceConfigTable = () => {
  const [empAttendance, setEmpAttendance] = useState({});
  const [popupState, setPopupState] = useState(false);

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
      path: "date",
      lable: "Date",
    },
    {
      path: "timeIn",
      lable: "Time In",
    },
    {
      path: "timeOut",
      lable: "Time Out",
    },

    {
      path: "edit",
      lable: "Edit",
      content: (emp) => (
        <button onClick={() => handleClick(emp)}>
          <EditeIcon width={16} />
        </button>
      ),
    },
  ];
  function handleClick(emp) {
    setEmpAttendance(emp);
    setPopupState(true);
  }
  return (
    <>
      <CardContainer title="Attandance List">
        <Table data={data} columns={columns} />
      </CardContainer>

      {popupState && (
        <Portal>
          <div className="overlay" onClick={() => setPopupState(false)}></div>
          <div className="modal w-25">
            <div className="mb-3 fs-6 ">
              <span className="me-4">Name:</span>
              <span>{empAttendance.name}</span>
            </div>
            <div className="mb-3 fs-6">
              <span className="me-4">Department:</span>
              <span>{empAttendance.department}</span>
            </div>
            <div className="mb-3">
              <span className="form-label d-inline">Date:</span>
              <input type="date" className="form-control d-inline" />
            </div>
            <div className="mb-3">
              <span className="form-label d-inline">Time In:</span>
              <input type="time" className="form-control d-inline" />
            </div>
            <div className="mb-3">
              <span className="form-label d-inline">Time Out:</span>
              <input type="time" className="form-control d-inline" />
            </div>
            <Button btnText="Update" onClick={() => setPopupState(false)} />
          </div>
        </Portal>
      )}
    </>
  );
};

export default AttendanceConfigTable;
