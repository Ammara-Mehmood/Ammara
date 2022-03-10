import React, { useState } from 'react';
import './index.css';

function Contact() {
  const Form = {
    UserName: "",
    Message: ""
  }

  const [FormData, UpdatedData] = useState(Form)
  function onChangeHandler(e) {
    const newValue = e.target.value;
    const name = e.target.name
    if (name === "UserName")
      UpdatedData({
        ...FormData,
        UserName: newValue
      })
    if (name === "Message")
      UpdatedData({
        ...FormData,
        Message: newValue
      })
    // console.log(FormData)
  }
  const SubmitHandle = (e) => {
    e.preventDefault()
    let forAlert = false;
    for (let obj in FormData) {
      if (FormData[obj] === "") {
        forAlert = true;
      }
    }
    if (forAlert === true) {
      alert("Fill the form first");
    }
    if (forAlert === false) {
      console.log(FormData);
    }
  };
  return <div>
    <form onSubmit={SubmitHandle}>
      <div className="Contact-us">
        <div className="ContactForm">
          <label for="html">UserName</label>
          <input type="text" name="UserName" onChange={onChangeHandler}></input>
        </div>
        <div className="Text-info">
          <label for="Html">Message</label>
          <textarea name="Message" onChange={onChangeHandler}></textarea><br />
          <button>Click Me</button>
        </div>
      </div>
    </form>

  </div>
}
export default Contact;
