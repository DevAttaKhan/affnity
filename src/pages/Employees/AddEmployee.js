import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CirclePlus from "../../assets/Icons/CirclePlus";
import Input from "../../components/Common/Input/Input";
import "./styles.scss";

const allowance = [
  {
    label: "Marital Allowance",
    name: "maritalAllowance",
    type: "text",
    value: "",
  },
  {
    label: "Health Allowance",
    name: "healthAllowance",
    type: "text",
    value: "",
  },
];

const AddEmployee = () => {
  const [state, setState] = useState(allowance);
  const [newAllowanceValue, setNewAllowanceValue] = useState("");
  const [showAllowanceInput, setShowAllowanceInput] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard/employees/", { replace: true });
  };

  const handleChange = (e) => {
    const config = [...state];
    const index = config.findIndex((el) => el.name === e.target.name);
    config[index] = { ...config[index], value: e.target.value };
    setState(config);
  };

  const addAllowanceInput = (e) => {
    e.preventDefault();
    setShowAllowanceInput(true);
  };

  const handleNewAllowance = (e) => {
    if (e.key === "Enter") {
      setState((pre) => [
        ...pre,
        {
          label: newAllowanceValue,
          name: newAllowanceValue.split(" ")[0],
          type: "text",
          value: "",
        },
      ]);
      setShowAllowanceInput(false);
    }
  };

  const setValue = (e) => {
    setNewAllowanceValue(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title mb-0">Add Employee Data</h4>
          </div>

          <div className="card-body">
            <form className="w-100" onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-grid">
                  <h4 className="card-title">Personal Information</h4>

                  <div className="mb-3">
                    <label className="form-label"> Father Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="fatherName"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Mother Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="motherName"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Gender:</label>
                    <input className="form-control" type="text" name="gender" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Marital Status:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="MaritalStatus"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">CNIC:</label>
                    <input className="form-control" type="text" name="cnic" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date of Birth:</label>
                    <input className="form-control" type="date" name="dob" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input className="form-control" type="text" name="age" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Permanent Address:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="permanentAddress"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Present Address:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="presentAddress"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> City:</label>
                    <input className="form-control" type="text" name="city" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Blood Group:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="bloodGroup"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Religion:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="religion"
                    />
                  </div>
                </div>
                <div className="input-grid">
                  <h4 className="card-title">Work Information</h4>

                  <div className="mb-3">
                    <label className="form-label"> Service Start Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      name="serviceStartDate"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Joining Confirmation Date:
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      name="joiningConfirmationDate"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Resign Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      name="resignDate"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Leaving Confirmation Date:
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      name="leavingConfirmationDate"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Contract End Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      name="contractEndDate"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Service End Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      name="serviceEndDate"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Bank:</label>
                    <input className="form-control" type="text" name="bank" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Bank Account No:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="bankAccountNo"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Bank Branch Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="bankBranchName"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Service Status:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="serviceStatus"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Service Period:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="servicePeriod"
                    />
                  </div>
                </div>
                <div className="input-grid">
                  <h4 className="card-title">General Information</h4>

                  <div className="mb-3">
                    <label className="form-label"> Employee Name:</label>
                    <input className="form-control" type="text" name="name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Official Email:</label>
                    <input className="form-control" type="email" name="email" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Cell No:</label>
                    <input className="form-control" type="text" name="cell" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Employment Type:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="empType"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Grad:</label>
                    <input className="form-control" type="text" name="name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Designation:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Designation"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Department</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Department"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Location:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="location"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Division:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="division"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Cost Center:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="constCenter"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Unit:</label>
                    <input className="form-control" type="text" name="unit" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Line Manager I.D:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="lineManagerId"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Line Manager:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="lineManger"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h4 className="card-title">Salary and Allowances</h4>
                  <div className="mb-3">
                    <label className="form-label"> Basic Salary:</label>
                    <input className="form-control" type="text" name="salary" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Gross Salary:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="grossSalary"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label"> Allowance:</label>
                    <div className="allowance-dropdown">
                      {state.map((el, i) => (
                        <Input
                          key={i}
                          name={el.name}
                          type={el.type}
                          label={el.label}
                          value={el.value}
                          onChange={handleChange}
                        />
                      ))}

                      {showAllowanceInput && (
                        <div className="mb-3">
                          <label>Add New Allowance</label>
                          <input
                            type="text"
                            name="newAllowance"
                            className="form-control"
                            onKeyDown={handleNewAllowance}
                            onChange={setValue}
                            value={newAllowanceValue}
                          />
                        </div>
                      )}

                      <div className="add-allowance  text-center">
                        <button onClick={addAllowanceInput}>
                          <CirclePlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <button type="submit" className=" float-end generic_buttn">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
