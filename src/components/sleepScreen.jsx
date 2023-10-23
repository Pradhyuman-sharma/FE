import React, { useEffect, useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { getSleepFormData } from "../services/apiService";
import { Screen1 } from "./sleepScreenComponenets/Screen1";
import { Screen2 } from "./sleepScreenComponenets/Screen2";
import { Screen3 } from "./sleepScreenComponenets/Screen3";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Screen4 } from "./sleepScreenComponenets/Screen4";
import { Screen5 } from "./sleepScreenComponenets/Screen5";
import { FinalScreen } from "./sleepScreenComponenets/FinalScreen";
import { useSelector } from "react-redux";


const SleepScreen = () => {
  const [formStep, setFormStep] = useState(6);
  const  token  = useSelector((state) => state.authToken.value);


  useEffect(() => {
    getSleepFormData(token).then((res) => {
      if (res?.result?.formStep) {
        setFormStep(res?.result?.formStep);
      } else {
        setFormStep(0);
      }
    });
  }, []);

  return (
    <>
      {formStep === 0 && (
        <div>
          <p style={{ fontWeight: "600", fontSize: "18px" }}>
            Let's start by calculating your sleep efficiency and examining your
            concerns.
          </p>
          <p style={{ fontWeight: "600", fontSize: "16px" }}>
            Over time we will work togeather to improve these.
          </p>

          <div className="d-flex justify-content-end">
            <ArrowCircleRightIcon
              style={{ cursor: "pointer" }}
              onClick={()=>setFormStep(1)}
            ></ArrowCircleRightIcon>
          </div>
        </div>
      )}

      {formStep === 1 && (
        <Screen1 formStep={formStep} setFormStep={setFormStep}></Screen1>
      )}
      {formStep === 2 && (
        <Screen2 formStep={formStep} setFormStep={setFormStep}></Screen2>
      )}
      {formStep === 3 && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {" "}
          <Screen3 formStep={formStep} setFormStep={setFormStep}></Screen3>
        </LocalizationProvider>
      )}
      {formStep === 4 && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {" "}
          <Screen4 formStep={formStep} setFormStep={setFormStep}></Screen4>
        </LocalizationProvider>
      )}
      {formStep === 5 && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {" "}
          <Screen5 formStep={formStep} setFormStep={setFormStep}></Screen5>
        </LocalizationProvider>
      )}
      {formStep === 6  && <FinalScreen setFormStep={setFormStep}></FinalScreen>}
    </>
  );
};

export default SleepScreen;
