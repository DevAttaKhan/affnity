import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import CirclePlus from "../../assets/Icons/CirclePlus";
// import Input from "../../components/Common/Input/Input";
import empData from '../../data/empDB.json';
import './styles.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeType } from '../../store/feature/employee/employee';
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
    axios
      .post('http://savvy.developerpro.co/api/employee/add', state, {
        headers: {
          Authorization: 'Bearer ' + items.token,
          Accept: 'application/json',
        },
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

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
                  <h4 className="card-title">Personal Information</h4>

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
                    <label className="form-label">Date of Birth:</label>
                    <input
                      className="form-control"
                      type="date"
                      name="birthdate"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contact Date</label>
                    <input
                      className="form-control"
                      type="date"
                      name="contract_date"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3"></div>
                  <div className="mb-3"></div>
                  <div className="mb-3">
                    <label className="form-label">Address:</label>
                    <textarea
                      className="form-control"
                      name="address"
                      onChange={handleChange}
                    ></textarea>
                  </div>
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
