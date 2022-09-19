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

  const [state, setState] = useState({
    user_id: items.empData.id,
    office_id: '',
    department_id: '',
    shift_id: '1',
    employee_type_id: '',
    first_name: '',
    last_name: '',
    birthdate: '',
    contract_date: '',
    address: '',
    phone: '',
    is_active: '1',
  });

  useEffect(() => {
    dispatch(getEmployeeType());
    dispatch(getDepartments());
    dispatch(getOffices());
    // eslint-disable-next-line
  }, []);

  const empType = useSelector((state) => state.employeeType);
  const departments = useSelector((state) => state.departments);
  const office = useSelector((state) => state.offices);

  useEffect(() => {
    if (empType) setEmpTypes(empType.data);
    if (departments) setDepts(departments.data);
    if (office) setOffices(office.data);
    // eslint-disable-next-line
  }, [empType, departments, office]);

  const handleSubmit = (e) => {
    dispatch(postEmployee(state));

    e.preventDefault();
    navigate('/dashboard/employees/', { replace: true });
  };

  useEffect(() => {
    if (empData.length > 0) {
      const id = empData.length + 1;
      setState({ ...state, id: id });
    }
    // eslint-disable-next-line
  }, [empData]);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
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
                  <h4 className="card-title">Official Information</h4>
                  <div className="mb-3">
                    <label className="form-label"> First Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="first_name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Last Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="last_name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Official Email:</label>
                    <input
                      className="form-control"
                      type="email"
                      name="official_email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date of Birth:</label>
                    <input
                      className="form-control"
                      type="date"
                      name="birthdate"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contract Date</label>
                    <input
                      className="form-control"
                      type="date"
                      name="contract_date"
                      onChange={handleChange}
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
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Employment Type:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="employment_type"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Grade:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="grade"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Designation:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="designation"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Division:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="division"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Location:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="location"
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Resign Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      name="resign_date"
                      onChange={handleChange}
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
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contract End Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      name="contract_end_date"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Service End Date:</label>
                    <input
                      className="form-control"
                      type="date"
                      name="service_end_date"
                      onChange={handleChange}
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
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Mother Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="mother_name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div className="dropdown">
                      <select name="gender" className="form-control">
                        <option disabled selected>
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
                      <select name="marital_status" className="form-control">
                        <option disabled selected>
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
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <br></br>
                  <div className="mb-3">
                    <label className="form-label">Permanent Address:</label>
                    <textarea
                      className="form-control"
                      name="permanent_address"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Present Address:</label>
                    <textarea
                      className="form-control"
                      name="present_ddress"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> City:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="city"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Blood Group</label>
                    <div className="dropdown">
                      <select name="gender" className="form-control">
                        <option disabled selected>
                          Select Blood Group
                        </option>
                        <option>A Positive</option>
                        <option value="male">A Negative</option>
                        <option value="male">A Unknown</option>
                        <option value="male">B Positive</option>
                        <option value="male">B Negative</option>
                        <option value="male">B Unknown</option>
                        <option value="male">AB Positive</option>
                        <option value="male">AB Negative</option>
                        <option value="male">AB Unknown</option>
                        <option value="male">O Positive</option>
                        <option value="male">O Negative</option>
                        <option value="male">O Unknown</option>
                        <option value="male">Unknown</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Religon</label>
                    <div className="dropdown">
                      <select name="gender" className="form-control">
                        <option disabled selected>
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
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Bank Account Number:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="bank_acc_num"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Bank Branch Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="bank_branch_name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Service Status:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="service_status"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"> Service Period:</label>
                    <input
                      className="form-control"
                      type="number"
                      name="service_period"
                      onChange={handleChange}
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
                                setState({ ...state, office_id: item.id });
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
                                setState({ ...state, department_id: item.id });
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
                                setState({
                                  ...state,
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
                      <select name="marital_status" className="form-control">
                        <option disabled selected>
                          Select Shift
                        </option>
                        <option value="first">First</option>
                        <option value="second">Second</option>
                        <option value="third">Third</option>
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
