import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import Form from "./components/Form";
import './App.css';

const initialFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    termsOfService: false
};

const initialFormErrors = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
};

const initialUsers = [];
const initialDisabled = true;


function App() {
    const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors] = useState((initialFormErrors));
    const [disabled, setDisabled] = useState(initialDisabled);


  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
