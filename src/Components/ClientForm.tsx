import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginClient, logoutClient } from "../modules/Redux/ClientSlice";
import { Client } from "./Client";

export const ClientForm = (): JSX.Element => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginClient(name));
    }

    const handleLogout = () => {
        dispatch(logoutClient());
        setName('');
    }

    return (
        <>
            <Client />
            <input type="text" placeholder="Client Name" onChange={(e) => setName(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}