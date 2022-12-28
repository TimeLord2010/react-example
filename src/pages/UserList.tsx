import axios from "axios"
import { useEffect, useState } from "react"
import "./UserList.css"

export function UserList() {
    const [users, setUsers] = useState([] as any[])
    let [page, setPage] = useState(1)
    const [count, setCount] = useState(0)
    const totalPages = 10
    useEffect(() => {
        const func = async () => {
            console.log("Fetching users")
            const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=10`)
            const {
                info: {
                    results: itemsCount,
                },
                results,
            } = response.data
            setPage(page)
            setCount(itemsCount)
            const arr = []
            for (let i = 0; i < results.length; i++) {
                const {
                    email,
                    name: { first, last },
                    picture: { thumbnail }, dob: { age },
                    login: { username }
                } = results[i]
                arr.push(<tr key={i}>
                    <td>
                        <img src={thumbnail} alt="thumb" />
                    </td>
                    <td>
                        {username}
                    </td>
                    <td>
                        {first + " " + last}
                    </td>
                    <td>
                        {email}
                    </td>
                    <td>
                        {age}
                    </td>
                </tr>)
            }
            setUsers(arr)
        }
        func()
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 && users}
                </tbody>
            </table>
            <div className="bottomPanel">
                <div>
                    Items:
                    {count}
                </div>
                <div style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
                <div>
                    {page} / {totalPages}
                </div>
            </div>
        </div>
    )
}