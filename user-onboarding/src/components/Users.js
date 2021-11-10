import React from "react";
import User from "./User";
import "./Users.css";

export default function Users(props) {
    const {users} = props;

    return(
        <div className="users">
            {
                users.map(user => {
                   return <User key={user.id} user={user}/>
                })
            }
        </div>
    )


}














































