import React from "react";


export default function User(props) {
    const {user} = props;
    console.log(user)
    return(
        <div>
            <h1>
                {user.first_name}
                {user.last_name}
            </h1>
            <p>{user.email}</p>
            <img src={user.avatar} alt="user profile picture"/>
        </div>
    )

}













































