import React from "react";


const Form = (props) => {
    const {values, change, submit, disabled, formErrors} = props;

    const onChange = evt => {
        const {name, value, checked, type} = evt.target;
        const realValue = type === "checkbox" ? checked : value;
        change(name, realValue);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <label>First Name:&nbsp;
                    <input
                        type="text"
                        name="first_name"
                        value={values.first_name}
                        onChange={onChange}
                    />
                </label>
                <label>&nbsp;Last Name:&nbsp;
                    <input
                        type="text"
                        name="last_name"
                        value={values.last_name}
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
                <br/>
                <label>Terms of Service&nbsp;
                    <input
                        type="checkbox"
                        name="termsOfService"
                        checked={values.termsOfService}
                        onChange={onChange}
                    />
                </label>
                <div className="submit-button">
                    <button disabled={disabled}>Submit</button>
                </div>
                <div className="errors">
                    <div>{formErrors.first_name}</div>
                    <div>{formErrors.last_name}</div>
                    <div>{formErrors.password}</div>
                    <div>{formErrors.termsOfService}</div>
                </div>
            </form>
        </div>
    )
}


export default Form;









































