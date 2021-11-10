import React from "react";
import * as yup from "yup";


const Form = (props) => {
    const {values, change} = props;

    const onChange = evt => {
        const {name, value, checked, type} = evt.target;
        const realValue = type === "checkbox" ? checked : value;
        change(name, realValue);
    }

    return (
        <div>
            <form>
                <label>First Name:&nbsp;
                    <input
                        type="text"
                        name="firstname"
                        value={values.firstName}
                        onChange={onChange}
                    />
                </label>
                <label>&nbsp;Last Name:&nbsp;
                    <input
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={onChange}
                    />
                </label>
                <label>&nbsp;Password:&nbsp;
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service&nbsp;
                    <input
                        type="checkbox"
                        name="termsOfService"
                        checked={values.termsOfService}
                        onChange={onChange}
                    />
                </label>
                <div className="submit-button">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}


export default Form;









































