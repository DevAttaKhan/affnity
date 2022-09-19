import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import empData from '../../data/empDB.json';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEmployeeType,
  postEmployee,
} from '../../store/feature/employee/employee';
import { getDepartments } from '../../store/feature/department/department';
import { getOffices } from '../../store/feature/office/office';

const AddEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [offices, setOffices] = useState([]);
  const [depts, setDepts] = useState([]);

  const [empTypes, setEmpTypes] = useState([]);
  const [offSelect, setOffSelect] = useState();
  const [deptSelect, setDeptSelect] = useState();
  const [empTypeSelect, setEmpTypeSelect] = useState();

  const items = JSON.parse(localStorage.getItem('loginData'));

  const [addEmp, setAddEmp] = useState({
    user_id: items.empData.id,
    office_id: '',
    department_id: '',
    shift_id: '',
    employee_type_id: '',
    first_name: '',
    last_name: '',
    contract_date: '',
    phone: '',
    is_active: '1',
  });

  const [empDetail, setEmpDetail] = useState({
    father_name: '',
    mother_name: '',
    gender: '',
    marital_status: '',
    cnic: '',
    dob: '',
    age: '',
    permanent_address: '',
    present_ddress: '',
    city: '',
    blood_group: '',
    religon: '',
    service_start_date: '',
    joining_confirmation_date: '',
    resign_date: '',
    leaving_confirmation_date: '',
    contract_end_date: '',
    service_end_date: '',
    bank: '',
    bank_acc_num: '',
    bank_branch_name: '',
    service_status: '',
    service_period: '',
    official_email: '',
    employment_type: '',
    grade: '',
    designation: '',
    location: '',
    division: '',
  });

  useEffect(() => {
    dispatch(getEmployeeType());
    dispatch(getDepartments());
    dispatch(getOffices());
    // eslint-disable-next-line
  }, []);

  const empType = useSelector((addEmp) => addEmp.employeeType);
  const departments = useSelector((addEmp) => addEmp.departments);
  const office = useSelector((addEmp) => addEmp.offices);

  useEffect(() => {
    if (empType) setEmpTypes(empType.data);
    if (departments) setDepts(departments.data);
    if (office) setOffices(office.data);
    // eslint-disable-next-line
  }, [empType, departments, office]);

  const handleSubmit = (e) => {
    dispatch(postEmployee({ addEmp, empDetail }));

    e.preventDefault();
    navigate('/dashboard/employees/', { replace: true });
  };

  useEffect(() => {
    if (empData.length > 0) {
      const id = empData.length + 1;
      setAddEmp({ ...addEmp, id: id });
    }
    // eslint-disable-next-line
  }, [empData]);

  const handleAddChange = (e) => {
    setAddEmp({ ...addEmp, [e.target.name]: e.target.value });
  };

  const handleDetailChange = (e) => {
    setEmpDetail({ ...empDetail, [e.target.name]: e.target.value });
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title mb-0">Add Employee Data</h4>
          </div>

          <div className="card-body">
            <form className="w-100" noValidate onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-grid">
                  <h4 className="card-title">Official Information</h4>
                  <div className="mb-3">
                    <label className="form-label"> First Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="first_name"
                      onChange={handleAddChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Last Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="last_name"
                      onChange={handleAddChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Official Email:</label>
                    <input
                      className="form-control"
                      type="email"
                      name="official_email"
                      onChange={handleDetailChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date of Birth:</label>
                    <input
                      className="form-control"
                      type="date"
                      name="dob"
                      onChange={handleDetailChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contract Date</label>
                    <input
                      className="form-control"
                      type="date"
                      name="contract_date"
                      onChange={handleAddChange}
                      required
                    />
                  </div>
                  <div className="mb-3"></div>
                  <div className="mb-3">
                    <label className="form-label">Contact</label>
                    <input
                      className="form-control"
                      type="text"
                      name="phone"
                      onChange={handleAddChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Employment Type:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="employment_type"
                      onChange={handleAddChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Grade:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="grade"
                      onChange={handleDetailChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Designation:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="designation"
                      onChange={handleDetailChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Division:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="division"
                      onChange={handleDetailChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Location:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="location"
                      onChange={handleDetailChange}
                      required
                    />
                  </div>
                  <div className="mb-3"></div>
                  <div className="mb-3"></div>
                  <div className="mb-3"></div>

                  <div className="mb-3">
                    <label className="form-label">Service Start Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      name="service_start_date"
                      onChange={handleDetailChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Joining Confirmation Date:
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      name="joining_confirmation_date"
                      onChange={handleDetailChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Resign Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      name="resign_date"
                      onChange={handleDetailChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Leaving Confirmation Date:
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      name="leaving_confirmation_date"
                      onChange={handleDetailChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contract End Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      name="contract_end_date"
                      onChange={handleDetailChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Service End Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      name="service_end_date"
                      onChange={handleDetailChange}
                    />
                  </div>
                </div>
                <div className="input-grid">
                  <h4 className="card-title">Personal Information</h4>
                  <div className="mb-3">
                    <label className="form-label"> Father Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="father_name"
                      onChange={handleDetailChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Mother Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="mother_name"
                      onChange={handleDetailChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div className="dropdown">
                      <select
                        name="gender"
                        className="form-control"
                        onChange={handleDetailChange}
                        defaultValue={'DEFAULT'}
                      >
                        <option value="DEFAULT" disabled>
                          Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="transgender">Transgender</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Marital Status</label>
                    <div className="dropdown">
                      <select
                        name="marital_status"
                        className="form-control"
                        onChange={handleDetailChange}
                        defaultValue={'DEFAULT'}
                      >
                        <option value="DEFAULT" disabled>
                          Select Marital Status
                        </option>
                        <option value="single">Single/Bachelor</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> CNIC:</label>
                    <input
                      className="form-control"
                      type="number"
                      name="cnic"
                      maxLength={13}
                      minLength={13}
                      onChange={handleDetailChange}
                      required
                    />
                  </div>
                  <br></br>
                  <div className="mb-3">
                    <label className="form-label">Permanent Address:</label>
                    <textarea
                      className="form-control"
                      name="permanent_address"
                      onChange={handleDetailChange}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Present Address:</label>
                    <textarea
                      className="form-control"
                      name="present_ddress"
                      onChange={handleDetailChange}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> City:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="city"
                      onChange={handleDetailChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Blood Group</label>
                    <div className="dropdown">
                      <select
                        name="blood_group"
                        className="form-control"
                        onChange={handleDetailChange}
                        defaultValue={'DEFAULT'}
                      >
                        <option value="DEFAULT" disabled>
                          Select Blood Group
                        </option>
                        <option>A Positive</option>
                        <option value="A Negative">A Negative</option>
                        <option value="A Unknown">A Unknown</option>
                        <option value="B Positive">B Positive</option>
                        <option value="B Negative">B Negative</option>
                        <option value="B Unknown">B Unknown</option>
                        <option value="AB Positive">AB Positive</option>
                        <option value="AB Negative">AB Negative</option>
                        <option value="AB Unknown">AB Unknown</option>
                        <option value="O Positive">O Positive</option>
                        <option value="O Negative">O Negative</option>
                        <option value="O Unknown">O Unknown</option>
                        <option value="Unknown">Unknown</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Religon</label>
                    <div className="dropdown">
                      <select
                        name="religon"
                        className="form-control"
                        onChange={handleDetailChange}
                        defaultValue={'DEFAULT'}
                      >
                        <option value="DEFAULT" disabled>
                          Select religon
                        </option>
                        <option value="Islam">Islam</option>
                        <option value="Christianity">Christianity</option>
                        <option value="Hinduism">Hinduism</option>
                        <option value="Sikhism">Sikhism</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="input-grid">
                  <h4 className="card-title">Accounts Information</h4>
                  <div className="mb-3">
                    <label className="form-label"> Bank:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="bank"
                      onChange={handleDetailChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Bank Account Number:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="bank_acc_num"
                      onChange={handleDetailChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Bank Branch Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="bank_branch_name"
                      onChange={handleDetailChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Service Status:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="service_status"
                      onChange={handleDetailChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Service Period:</label>
                    <input
                      className="form-control"
                      type="number"
                      name="service_period"
                      onChange={handleDetailChange}
                      required
                    />
                  </div>
                </div>
                <div className="input-grid">
                  <h4 className="card-title">Work Information</h4>
                  <div className="mb-3">
                    <label className="form-label">Office</label>
                    <div className="dropdown">
                      <button>
                        {offSelect ? offSelect.name : 'Select Office'}
                      </button>
                      <div className="dropdown-content">
                        {offices &&
                          offices.map((item) => (
                            <p
                              key={item.id}
                              onClick={() => {
                                setOffSelect(item);
                                setAddEmp({ ...addEmp, office_id: item.id });
                              }}
                            >
                              {item.name}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Departments</label>
                    <div className="dropdown">
                      <button>
                        {deptSelect ? deptSelect.name : 'Select Department'}
                      </button>
                      <div className="dropdown-content">
                        {depts &&
                          depts.map((item) => (
                            <p
                              key={item.id}
                              onClick={() => {
                                setDeptSelect(item);
                                setAddEmp({
                                  ...addEmp,
                                  department_id: item.id,
                                });
                              }}
                            >
                              {item.name}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Employee Types</label>
                    <div className="dropdown">
                      <button>
                        {empTypeSelect
                          ? empTypeSelect.type_name
                          : 'Select Employee Type'}
                      </button>
                      <div className="dropdown-content">
                        {empTypes &&
                          empTypes.map((item) => (
                            <p
                              key={item.id}
                              onClick={() => {
                                setEmpTypeSelect(item);
                                setAddEmp({
                                  ...addEmp,
                                  employee_type_id: item.id,
                                });
                              }}
                            >
                              {item.type_name}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3"></div>
                  <div className="mb-3">
                    <label className="form-label">Shift</label>
                    <div className="dropdown">
                      <select
                        name="shift_id"
                        className="form-control"
                        onChange={handleAddChange}
                        defaultValue={'DEFAULT'}
                      >
                        <option value="DEFAULT" disabled>
                          Select Shift
                        </option>
                        <option value="1">First</option>
                        <option value="1">Second</option>
                        <option value="1">Third</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <button type="submit" className=" float-end generic_buttn">
                    Add Employee
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
