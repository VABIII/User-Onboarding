import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import Form from "./components/Form";
import Home from "./components/Home";
import './App.css';
import Users from "./components/Users";
import schema from "./validation/formSchema";



const initialFormValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    termsOfService: false
};

const initialFormErrors = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    termsOfService: ""
};

const initialUsers = [];
const initialDisabled = true;


function App() {
    const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    const getUsers =() =>{
        axios.get(`https://reqres.in/api/users`)
            .then(res => {
                const users = res.data.data;
                setUsers(users);
            })
            .catch(err => {
                console.error(err);
            })
    }

    const postUsers = (newUser) => {
        axios.post(`https://reqres.in/api/users`, newUser)
            .then(res => {
                setUsers([newUser, ...users])
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setFormValues(initialFormValues);
            })
    }

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => {
                setFormErrors({...formErrors, [name]: ""})
            })
            .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }

    const inputChange = (name, value) => {
        validate(name, value);
        setFormValues({
            ...formValues,
            [name]:value
        })
    }

    const formSubmit = () => {
        const newUser ={
            first_name: formValues.first_name.trim(),
            last_name: formValues.last_name.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
            termsOfService: formValues.termsOfService
        }
        postUsers(newUser);
    }

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid))
    },[formValues])

  return (

    <div className="App">
        <header className="App-header">
            <div className="add-user-form">
                <Form
                    values={formValues}
                    change={inputChange}
                    submit={formSubmit}
                    disabled={disabled}
                    formErrors={formErrors}
                />
            </div>
            <div className="home">
                <Home/>
            </div>
            <div className="users-container">
                <Users users={users}/>
            </div>
        </header>
    </div>

  );
}

export default App;



