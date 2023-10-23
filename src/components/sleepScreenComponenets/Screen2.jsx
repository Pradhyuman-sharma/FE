import React, { useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { updateSleepFormData } from "../../services/apiService";
import { toast } from "react-toastify";

export const Screen2 = ({ formStep, setFormStep }) => {
  const [value, setValue] = useState({ from: "", to: "" });
  const token = localStorage.getItem("wysa-token");

  const handleChange = (e) => {
    const option = e.target.value;
    if (option === "1") {
      const data = {
        from: "0",
        to: "2",
      };
      setValue(data);
    } else if (option === "2") {
      const data = {
        from: "2",
        to: "8",
      };
      setValue(data);
    } else {
      const data = {
        from: "8",
        to: "more",
      };
      setValue(data);
    }
  };
  const updateFormDataApiCall = () => {
    const data = {
      updateValue: {
        strugglingInSleep: {
          weeks: value,
        },
        formStep: 2,
      },
    };
    updateSleepFormData(token, data).then((res) => {
      if (res?.success) {
        setFormStep(formStep + 1);
      } else {
        toast.error(res?.message, { position: "top-center" });
      }
    });
  };
  return (
    <div>
      <p style={{ fontWeight: "600", fontSize: "18px" }}>
        That's a great goal.How long have you been struggling with your sleep?
      </p>
      <div className="">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value={"1"}
            style={{ boxShadow: "none" }}
            onChange={(e) => handleChange(e)}
          />
          <label
            style={{
              fontWeight: "400",
              fontSize: "14px",
              fontFamily: "fantasy",
            }}
            class="form-check-label"
            for="exampleRadios1"
          >
            Less than 2 weeks
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="2"
            style={{ boxShadow: "none" }}
            onChange={(e) => handleChange(e)}
          />
          <label
            style={{
              fontWeight: "400",
              fontSize: "14px",
              fontFamily: "fantasy",
            }}
            class="form-check-label"
            for="exampleRadios2"
          >
            2 to 8 weeks
          </label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="3"
            style={{ boxShadow: "none" }}
            onChange={(e) => handleChange(e)}
          />
          <label
            style={{
              fontWeight: "400",
              fontSize: "14px",
              fontFamily: "fantasy",
            }}
            class="form-check-label"
            for="exampleRadios2"
          >
            More than 8 weeks{" "}
          </label>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <ArrowCircleRightIcon
          style={{ cursor: "pointer" }}
          onClick={updateFormDataApiCall}
        ></ArrowCircleRightIcon>
      </div>
    </div>
  );
};
