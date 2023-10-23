import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {

  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import SignUp from "./components/signup";
import Login from "./components/login";
import SleepScreen from "./components/sleepScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "./redux/reducers";

function App() {
  const navigate = useNavigate();

  const  token  = useSelector((state) => state.authToken.value);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeToken());
    navigate("/");
  };
  return (
    <>
      <ToastContainer></ToastContainer>

   
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>
                Wysa Sleep
              </Link>
              {token ? (
                <div style={{ cursor: "pointer" }} onClick={handleClick}>
                  <Link className="navbar-brand" to={"/sign-in"}>
                    Logout
                  </Link>
                </div>
              ) : (
                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo02"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-in"}>
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-up"}>
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<Login></Login>} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route
                  path="/sleepForm"
                  element={<SleepScreen></SleepScreen>}
                />
              </Routes>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
