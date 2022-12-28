import { useNavigate } from "react-router"
import "./Login.css"

export function Login() {
    const navigate = useNavigate()

    function handleLogin() {
        navigate("/userList")
    }
    return (
        <div className="Login">
            <input type="text" />
            <input type="text" />
            <button onClick={handleLogin}>Login</button>
            <div>
                <input type="checkbox" value={"Remember me"} />
                Remember me
            </div>
        </div>
    )
}