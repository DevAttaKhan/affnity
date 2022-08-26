import React, { useState } from "react";
import { handleLogIn } from "../../store/auth-slice";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import SplashArt from "../../assets/Icons/SplashArt";

import "./style.scss";

const Intro = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.email === "admin@gmail.com" &&
      credentials.password === "admin"
    ) {
      dispatch(handleLogIn())
      navigate("/dashboard/home");
    }
  };

  const handleChange = (e) => {
    const input = { ...credentials };
    input[e.target.name] = e.target.value;
    setCredentials(input);
  };
  return (
    <section className="splash">
      <div className="splash__content">
        <h1 className="splash__heading">Welcome to Affinity Payroll</h1>

        <div className="splash__paragraph">
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                className="form-control"
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={credentials.password}
                name="password"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>

      <SplashArt />
    </section>
  );
};

export default Intro;
