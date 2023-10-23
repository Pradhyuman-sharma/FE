import React from "react";
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
export const FinalScreen = ({setFormStep}) => {
    const rndInt = randomIntFromInterval(30, 100)

  return (
    <div>
      <p style={{ fontWeight: "600",fontFamily:"fantasy", fontSize: "18px" }}>
        You seem to have a sleep efficiency of {rndInt}%
        That's good..<br>
        </br>
        A higher sleep efficiency score means a more refreshing sleep.
    
      </p>
      <div className="d-flex justify-content-end">
      <button
          type="submit"
          className="btn btn-primary"
          onClick={(e)=>{
            e.preventDefault();
           setFormStep(0);
          }}
        >
          Reset Data
        </button>
    </div>
    </div>
  );
};
