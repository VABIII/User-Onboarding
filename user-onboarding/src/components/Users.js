import React from "react";
import User from "./User";

export default function Users(props) {
    const {users} = props;

    return(
        <div>
            {
                users.map(user => {
                   return <User key={user.id} user={user}/>
                })
            }
        </div>
    )


}














































