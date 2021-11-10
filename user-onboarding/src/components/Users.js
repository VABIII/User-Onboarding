import React from "react";
import User from "./User";

export default function Users(props) {
    const {users} = props;

    return(
        <div>
            {
                users.map((user, i) => {
                   return <User user={user}/>
                })
            }
        </div>
    )


}














































