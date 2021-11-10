import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import Form from "./components/Form";
import Header from "./components/Header";
import Home from "./components/Home";
import './App.css';
import Users from "./components/Users"


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

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers =() =>{
        axios.get(`https://reqres.in/api/users`)
            .then(res => {
                const users = res.data.data;
                setUsers(users)
            })
            .catch(err => {
                console.error(err)
            })
    }

    const postUsers = (newUser) => {
        axios.post(`https://reqres.in/api/users`, newUser)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setFormValues(initialFormValues);
            })
    }

    const inputChange = (name, value) => {
        setFormValues({
            ...formValues,
            [name]:value
        })
    }


  return (

    <div className="App">
        <Header/>
        <header className="App-header">
            <div className="add-user-form">
                <Form
                    values={formValues}
                    change={inputChange}
                />
            </div>
            <div className="home">
                <Home/>
            </div>
            <div className="users">
                <Users users={users}/>
            </div>
        </header>
    </div>

  );
}

export default App;
