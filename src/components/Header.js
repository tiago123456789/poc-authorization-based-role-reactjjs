import React from "react";
import { useAuth } from "../provider/AuthContext";

const Header = (props) => {
    const { signOut } = useAuth();

    const logout = () => {
        signOut()
        if (props.history)
            props.history.push("/")
    }

    return (
        <button onClick={() => logout()}>logout</button>
    )
}

export default Header;