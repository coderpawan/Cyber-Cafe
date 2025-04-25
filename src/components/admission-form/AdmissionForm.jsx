import React from "react";
import "./admission.css"

const AdmissionForm = ({ onClose }) => {
  return (
   <div className="formContainer">
    <div className="modal-content">
        <div className="header">
            <span onClick={onClose} className="close-modal-icon">&times;</span>
            <h1 className="pt-3 font-bold text-xl">Admission Form : </h1>
        </div>
        <form className="formContent">
            <input type="text" placeholder="Enter Your Name" />
        </form>
       
    </div>
   </div>
  );
};

export default AdmissionForm;
