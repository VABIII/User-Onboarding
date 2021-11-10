import React from "react";


const Form = (props) => {
    const {values, change, submit} = props;

    const onChange = evt => {
        console.log(evt.target)
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









































