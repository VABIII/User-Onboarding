import React from "react";


export default function User(props) {
    const {user} = props;
    console.log(user)
    return(
        <div>
            <h1>
                {user.first_name}&nbsp;
                {user.last_name}
            </h1>
            <p>{user.email}</p>
            {user.avatar && <img src={user.avatar} alt="user profile pic"/>}
        </div>
    )

}













































