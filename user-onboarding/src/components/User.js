import React from "react";
import "./User.css";

export default function User(props) {
    const {user} = props;
    console.log(user)
    return(
        <div className="user">
            <h1>
                {user.first_name}&nbsp;
                {user.last_name}
            </h1>
            <p>{user.email}</p>
            {user.avatar ? <img src={user.avatar} alt="user profile pic"/> :
                <img src="https://images.theconversation.com/files/144359/original/image-20161103-25349-1jdv0b3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"/>}
        </div>
    )
}













































