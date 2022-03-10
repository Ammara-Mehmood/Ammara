
import React, { useState } from 'react';
import './index.css';
import { Navigate, useNavigate } from 'react-router';

function Login() {
  const Form = {
    UserName: "",
    Password: "",
    ConfirmPassword: ""
  }
  const Navigate = useNavigate()
  const [FormData, UpdatedData] = useState(Form)
  const [Pagerendering, setPagerendering] = useState(true)

  function onChangeHandler(e) {
    const newValue = e.target.value;
    const name = e.target.name
    if (name === "UserName")
      UpdatedData({
        ...FormData,
        UserName: newValue
      })
    if (name === "Password")
      UpdatedData({
        ...FormData,
        Password: newValue
      })
    if (name === "ConfirmPassword")
      UpdatedData({
        ...FormData,
        ConfirmPassword: newValue
      })
    // console.log(FormData)
  }

  const navigation1 = () => {
    Navigate('/home')
  }
  const navigation2 = () => {
    setPagerendering(true)
    Navigate('/login')
  }

  const SubmitHandle = (e) => {
    e.preventDefault()
    let forAlert = false;
    if (FormData.Password !== FormData.ConfirmPassword) {
      return alert("Password Didn't Match");
    }
    for (let obj in FormData) {
      if (FormData[obj] === "") {
        forAlert = true;
      }
    }
    if (forAlert === true) {
      alert("Fill the form first");
    }
    if (forAlert === false && FormData.Password === FormData.ConfirmPassword) {
      setPagerendering(false)
      navigation1()
    }
    console.log(FormData);
  };
  return Pagerendering ? <div>
    <form onSubmit={SubmitHandle}>
      <div className="Login-form">
        <div className="User-name">
          <label for="html">UserName</label>
          <input type="text" name="UserName" onChange={onChangeHandler}></input>
        </div>
        <div className="User-name">
          <label for="html">Password</label>
          <input type="password" name="Password" onChange={onChangeHandler} ></input>
        </div>
        <div className="User-name">
          <label for="html">C.Password</label>
          <input type="password" name="ConfirmPassword" onChange={onChangeHandler} ></input>
        </div>
        <div className="Submit-form">
          <button>Submit</button>
        </div>
      </div>
    </form>
    <home />

  </div>
    : <button onClick={() => navigation2()}>LOGOUT</button>
}
export default Login;
