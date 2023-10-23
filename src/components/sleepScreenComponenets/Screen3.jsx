import React, { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { updateSleepFormData } from "../../services/apiService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export const Screen3 = ({ formStep, setFormStep }) => {
  const  token  = useSelector((state) => state.authToken.value);
  const [selectedTime, setSelectedTime] = useState("");
  const updateFormDataApiCall = () => {
    const data = {
      updateValue: {
        bedTime: selectedTime,
        formStep: 3,
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
        What time do you go to bed for sleep?
      </p>
      <div>
        <TimePicker
          label="Select time"
          onAccept={(value) => {
            const time = value["$d"].toLocaleTimeString();
            setSelectedTime(time);
          }}
          onChange={(value) => {
            const time = value["$d"].toLocaleTimeString();
            setSelectedTime(time);
          }}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
          }}
        />
      </div>
      <div className="d-flex justify-content-end">
        <ArrowCircleRightIcon
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (selectedTime !== "") {
              updateFormDataApiCall();
            } else {
              toast.error("Please select a time", { position: "top-center" });
            }
          }}
        ></ArrowCircleRightIcon>
      </div>
    </div>
  );
};
