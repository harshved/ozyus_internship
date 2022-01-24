import React from "react";
import { useLocation, useParams, useNavigate} from "react-router-dom";

const User = () => {
    const {userName, userLastName} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    return(
        <>
            <h1>I'm from {userName} {userLastName} User Page</h1>
            <p> My Current location is {location.pathname}</p>
            {location.pathname === `/user/harsh/ved` ? <button onClick={() => navigate('/')}>Click Me</button> : null}
        </>
    )
}
export default User;