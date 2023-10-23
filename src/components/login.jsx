import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../services/apiService";
import { useDispatch } from "react-redux";
import { addToken } from "../redux/reducers";

const Login = () => {
  const navigate = useNavigate();
  const [uniqueName, setUniqueName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginUserApiCall = () => {
    const data = {
      uniqueName: uniqueName,
      password: password,
    };
    loginUser(data).then((res) => {
      if (res?.success) {

        dispatch(addToken(res?.token));
        toast.success(res?.message, { position: "top-center" });
        navigate("/sleepForm");
      } else {
        toast.error(res?.message, { position: "top-center" });
      }
    });
  };

  return (
    <form>
      <h3>Log In</h3>

      <div className="mb-3">
        <label>Unique Name</label>
        <input
          className="form-control"
          placeholder="Enter here"
          value={uniqueName}
          onChange={(e) => {
            setUniqueName(e.target.value);
          }}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className="d-grid">
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            if (uniqueName !== "" && password !== "") {
              loginUserApiCall();
            } else {
              toast.error("Feilds can't be empty", { position: "center" });
            }
          }}
        >
          Login
        </button>
      </div>
      <p className="forgot-password text-right">
        No account? <a href="/sign-up">SignUp</a>
      </p>
    </form>
  );
};

export default Login;
