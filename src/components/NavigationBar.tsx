import { Link } from "react-router-dom"
import "./NavigationBar.css"

export function NavigationBar() {
    return (
        <div className="navigationBar">
            <Link to={`/userList`}>User list</Link>
            <Link to={`/codeSelector`}>Code selector</Link>
        </div>
    )
}