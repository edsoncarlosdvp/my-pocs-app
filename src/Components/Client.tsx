import { useSelector } from "react-redux";
import { selectClient } from "../modules/Redux/ClientSlice";

export const Client = () => {
    const name = useSelector(selectClient);

    return (
        <div>
            <h3>Usuário: {name}</h3>
        </div>
    )
}