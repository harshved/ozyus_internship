import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const {userName, userLastName} = useParams();
    return(
        <>
            <h1>I'm from {userName} {userLastName} User Page</h1>
        </>
    )
}
export default User;