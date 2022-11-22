import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser, logout } from "../Redux/Slice";
import { User } from "./User";

export const UserForm = (): JSX.Element => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(changeUser(name));
    }

    const handleLogout = () => {
        dispatch(logout());
        setName('');
    }

    return (
        <>
            <User />
            <input type="text" placeholder="User" onChange={(e) => setName(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}