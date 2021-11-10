import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import Form from "./components/Form";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";

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

    const postUsers = (newUser) => {
        axios.post(`https://reqres.in/api/users`, newUser)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            })


    }



  return (
    <div className="App">
        <Header/>
        <header className="App-header">
            <Home/>
        </header>
    </div>
  );
}

export default App;
