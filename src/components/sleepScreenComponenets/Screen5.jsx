import React, { useState } from 'react';
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { toast } from 'react-toastify';
import { updateSleepFormData } from '../../services/apiService';

export const Screen5 = ({ formStep, setFormStep }) => {
    const token = localStorage.getItem("wysa-token");
    const [selectedTime, setSelectedTime] = useState("");
    const updateFormDataApiCall = () => {
      const data = {
        updateValue: {
          wakeUpTime: selectedTime,
          formStep: 5,
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
      Ok, How many hours sleep do you get in a typical night?
    </p>
    <div>
    <label>Enter hours</label>
        <TimePicker views={['hours']} onAccept={(value) => {
            const time = value["$H"];
            setSelectedTime(time);
          }}
          onChange={(value)=>{
            const time = value["$H"];
            setSelectedTime(time);          }}
          ampm={false}/>
      
    </div>
    <div className="d-flex justify-content-end">
      <ArrowCircleRightIcon
        style={{ cursor: "pointer" }}
        onClick={() => {
            if (selectedTime !== "") {
              updateFormDataApiCall();
            } else {
              toast.error("Please select hour", { position: "top-center" });
            }
          }}
      ></ArrowCircleRightIcon>
    </div>
  </div>  )
}
