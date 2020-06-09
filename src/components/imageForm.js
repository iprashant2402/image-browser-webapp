import React, { useState } from "react";
import "../css/imageForm.css";

const ImageForm = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");

  const handleTextChange = (event) => {
    let value = event.target.value;
    event.target.name === "name" ? setName(value) : setDesc(value);
  };

  const validateInputs = () => {
    if (name && desc) {
        props.addData(name, desc);
        setName("");
        setDesc("");
        setError("");
    } else {
      setError("One or more fields are empty");
    }
  };

  return (
    <div id="image-form" className="modal">
      <div className="modalContent">
        <span
          onClick={() => {
            document.getElementById("image-form").style.display = "none";
          }}
          className="close"
        >
          &times;
        </span>
        <div className="input-wrapper">
        <h6 className="form-title"><b>Add Data</b></h6>
        </div>
        <div className="input-wrapper">
        <input
          name="name"
          value={name}
          className="sf-input"
          onChange={(e) => handleTextChange(e)}
          placeholder="Enter image name"
        />
        </div>
        <div className="input-wrapper">
        <input
          name="desc"
          value={desc}
          className="sf-input"
          onChange={(e) => handleTextChange(e)}
          placeholder="Enter image description"
        />
        </div>
        <h6 className={"error"}>{error}</h6>
        <div className="input-wrapper">
        <button className="sf-btn" type="button" onClick={()=>validateInputs()}>
          <b>SAVE</b>
        </button>
        </div>
      </div>
    </div>
  );
};

export default ImageForm;
