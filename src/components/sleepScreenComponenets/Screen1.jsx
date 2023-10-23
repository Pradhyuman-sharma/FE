import React, { useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { updateSleepFormData } from "../../services/apiService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";


export const Screen1 = ({formStep,setFormStep}) => {
  const [values, setValues] = useState([]);
  const  token  = useSelector((state) => state.authToken.value);
  const updateFormDataApiCall = ()=>{
    const data={
        updateValue:{
            sleepingWellChanges:values,
            formStep:1
        }
    }
    updateSleepFormData(token,data).then((res)=>{
        if(res?.success){
            setFormStep(formStep+1);
        }else{
            toast.error(res?.message,{position:"top-center"});
        }
    })
  }

  const handleChange = (e) => {
    if (e.target.checked) {
      setValues((prev) => {
        return [...prev, e.target.value];
      });
    } else {
      const newArr = values.filter((item) => item !== e.target.value);
      setValues(newArr);
    }
  };

  return (
    <div>
      <p style={{ fontWeight: "600", fontSize: "18px" }}>
        Let's say in few weeks, you're sleeping well. What would change?
      </p>
      <p style={{ fontWeight: "400", fontSize: "12px", marginTop: "-15px" }}>
        Select all the changes you would like to see
      </p>
      <div className="">
        <div>
          <input
            type="checkbox"
            value={"Go to sleep easily"}
            style={{ marginRight: "10px" }}
            onChange={(e) => handleChange(e)}
          />
          <label
            style={{
              fontWeight: "400",
              fontSize: "14px",
              fontFamily: "fantasy",
            }}
          >
            {" "}
            I would go to sleep easily.
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"sleep through night"}
            style={{ marginRight: "10px" }}
            onChange={(e) => handleChange(e)}
          />
          <label
            style={{
              fontWeight: "400",
              fontSize: "14px",
              fontFamily: "fantasy",
            }}
          >
            {" "}
            I would sleep through the night.
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"wake up refresh"}
            style={{ marginRight: "10px" }}
            onChange={(e) => handleChange(e)}
          />
          <label
            style={{
              fontWeight: "400",
              fontSize: "14px",
              fontFamily: "fantasy",
            }}
          >
            {" "}
            I'd wake up on time,refreshed.
          </label>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <ArrowCircleRightIcon
          style={{ cursor: "pointer" }}
          onClick={()=>{
            if(values.length <= 0){
                toast.error("Please select options",{position:"top-center"});
            }else{
                updateFormDataApiCall();
            }
          }}
        ></ArrowCircleRightIcon>
      </div>
    </div>
  );
};
