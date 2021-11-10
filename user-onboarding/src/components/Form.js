import React from "react";
import * as yup from "yup";


const Form = (props) => {
    const {values} = props;

    return (
        <div>
            <form>
                <label>First Name:&nbsp;
                    <input type="text"/>
                </label>
                <label>&nbsp;Last Name:&nbsp;
                    <input type="text"/>
                </label>
                <label>&nbsp;Password:&nbsp;
                    <input type="password"/>
                </label>
                <label>Terms of Service&nbsp;
                    <input type="checkbox"/>
                </label>
                <div className="submit-button">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}


export default Form;









































