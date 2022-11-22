import { useSelector } from "react-redux";
import { selectUser } from "../Redux/Slice";

export const User = () => {
    const { name } = useSelector(selectUser);

    return (
        <div>
            <h3>Usuário: {name}</h3>
        </div>
    )
}